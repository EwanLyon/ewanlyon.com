---
title: KeystoneJS in NX
publishDate: 2023-03-01 13:44:00
description: |
  Getting KeystoneJS 6 to work in an NX monorepo
tags:
  - Keystone
  - Monorepo
  - Tutorial
draft: false
---

**For a live implementation of this go to the [AusSpeedruns.com repo](https://github.com/ausspeedruns/ausspeedruns.com).**

Keystone doesn't allow the changing of build folders. If it had this then it would mostly be as simple as changing the build repo and asking NX to then generate the package.json.

However I developed a very simple and easy script that can be added to an NX monorepo as a library/executor.

This already assumes you've moved your keystone files into the `apps` folder. For this tutorial we will be calling the folder `keystone`.

This solution does require `fs-extra` to easily copy files so run `npm i --save-dev fs-extra`.

1. Generate an nx executor plugin `nx generate @nrwl/nx-plugin:executor keystone-executor` (keystone-executor will just be the name)
2. In `libs/keystone-executor/src/executors/build` change the schema.json to

```json
{
	"$schema": "http://json-schema.org/schema",
	"version": 2,
	"cli": "nx",
	"title": "Build executor",
	"description": "",
	"type": "object",
	"properties": {
		"root": {
			"description": "The source root",
			"type": "string",
			"x-priority": "important"
		},
		"outputPath": {
			"type": "string",
			"description": "The output path of the generated files.",
			"x-completion-type": "directory",
			"x-priority": "important"
		}
	},
	"required": []
}
```

3. Update the schema.d.ts to

```typescript
export interface BuildExecutorSchema {
	root: string;
	outputPath: string;
}
```

4. Update the executor.ts to

```typescript
import { BuildExecutorSchema } from './schema';
import { ExecutorContext, createPackageJson, writeJsonFile } from '@nrwl/devkit';
import { execSync } from 'child_process';
import path = require('path');
import { copy } from 'fs-extra';
import { PackageJson } from 'nx/src/utils/package-json';

const KEYSTONE_BUILT_ARTIFACTS = ['./.keystone/', './schema.graphql', './schema.prisma', './node_modules'];

export default async function runExecutor(options: BuildExecutorSchema, context: ExecutorContext) {
	const srcFolder = path.join(context.cwd, options.root);
	const destFolder = path.join(context.cwd, options.outputPath);

	// Run keystone build
	execSync('npx keystone postinstall --fix', { cwd: srcFolder, stdio: 'inherit' });
	execSync('npx keystone build', { cwd: srcFolder, stdio: 'inherit' });

	// Move folder to dist
	await Promise.all(
		KEYSTONE_BUILT_ARTIFACTS.map((artifact) => {
			return copy(path.join(srcFolder, artifact), path.join(destFolder, artifact));
		})
	);

	// Generate package.json
	const builtPackageJson = createPackageJson(context.projectName, context.projectGraph, {
		root: context.root,
		isProduction: true,
	});
	updatePackageJson(builtPackageJson, context);
	writeJsonFile(`${options.outputPath}/package.json`, builtPackageJson);

	console.log('Executor ran for Keystone Build');
	return {
		success: true,
	};
}

// Taken from @nrwl/next, relevant as KeystoneJS uses NextJS
function updatePackageJson(packageJson: PackageJson, context: ExecutorContext) {
	if (!packageJson.scripts) {
		packageJson.scripts = {};
	}
	packageJson.scripts.start = 'keystone start';

	const typescriptNode = context.projectGraph.externalNodes['npm:typescript'];
	if (typescriptNode) {
		packageJson.dependencies = packageJson.dependencies || {};
		packageJson.dependencies['typescript'] = typescriptNode.data.version;
	}
}
```

5. In the keystone apps folder change the targets build to be

```json
"build": {
	"executor": "@NX_REPO_NAME/keystone-executor:build",
	"options": {
		"root": "apps/keystone",
		"outputPath": "dist/apps/keystone"
	}
}
```

I do plan on making the executor its own NPM package soon so you won't even have to deal with this.
