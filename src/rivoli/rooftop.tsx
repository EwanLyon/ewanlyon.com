import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Checkbox,
	Chip,
	createTheme,
	Dialog,
	DialogContent,
	DialogTitle,
	Fab,
	FormControlLabel,
	IconButton,
	Paper,
	Switch,
	ThemeProvider,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

import AperolSpritz from './images/cocktails/Aperol Spritz.svg';
import Cosmopolitan from './images/cocktails/Cosmopolitan.svg';
import EspressoMartini from './images/cocktails/Espresso Martini.svg';
import LongIslandIcedTea from './images/cocktails/Long Island Iced Tea.svg';
import TraditionalNegroni from './images/cocktails/Traditional Negroni.svg';
import RaspberryCollins from './images/cocktails/Raspberry Collins.svg';
import TikiMandarine from './images/cocktails/Tiki Mandarine.svg';
import PatronMargarita from './images/cocktails/Patron Margarita.svg';
import WildStrawberryMojito from './images/cocktails/Wild Strawberry Mojito.svg';
import CubanMojito from './images/cocktails/Cuban Mojito.svg';
import PassionfruitMojito from './images/cocktails/Passionfruit Mojito.svg';
import Zombie from './images/cocktails/Zombie.svg';
import OldFashioned from './images/cocktails/Old Fashioned.svg';
// import AperolSpritz from './images/cocktails/Aperol Spritz.svg';
import NinteenFortyLogo from './images/NinteenfortyLogo.svg';

const RooftopContainer = styled(ThemeProvider)``;

const NinteenFortyTheme = createTheme({
	palette: {
		primary: {
			main: '#1e4591',
		},
		secondary: {
			main: '#f8ec32',
		},
	},
});

enum IngredientType {
	VODKA = 'VODKA',
	RUM = 'RUM',
	WHISKY = 'WHISKY',
	LIQUEUR = 'LIQUEUR',
	SYRUPJUICE = 'SYRUPJUICE',
	BITTER = 'BITTER',
	GIN = 'GIN',
	TEQUILA = 'TEQUILA',
	MIXERS = 'MIXERS',
	GRANISHES = 'GRANISHES',
	OTHER = 'OTHER',
}

interface Ingredient {
	name: string;
	type: IngredientType;
}

const INGREDIENTS = {
	FortyTwoBelow: { name: '42 Below', type: IngredientType.VODKA },
	GreyGoose: { name: 'Grey Goose', type: IngredientType.VODKA },
	Bacardi8: { name: 'Bacardi 8', type: IngredientType.RUM },
	BacardiCartaBlanca: { name: 'Bacardi Carta Blanca', type: IngredientType.RUM },
	BacardiOakheart: { name: 'Bacardi Oakheart', type: IngredientType.RUM },
	PureScot: { name: 'Pure Scot', type: IngredientType.WHISKY },
	MakersMark: { name: "Maker's Mark", type: IngredientType.WHISKY },
	DKTripleSec: { name: 'DK Triple Sec', type: IngredientType.LIQUEUR },
	DKCremeDeCafé: { name: 'DK Crème de Café', type: IngredientType.LIQUEUR },
	DKWildStrawberry: { name: 'DK Wild Strawberry', type: IngredientType.LIQUEUR },
	DKPassionfruit: { name: 'DK Passionfruit', type: IngredientType.LIQUEUR },
	MartiniRosso: { name: 'Martini Rosso', type: IngredientType.LIQUEUR },
	RaspberrySyrup: { name: 'Raspberry Syrup', type: IngredientType.SYRUPJUICE },
	StrawberrySyrup: { name: 'Strawberry Syrup', type: IngredientType.SYRUPJUICE },
	Grenadine: { name: 'Grenadine', type: IngredientType.SYRUPJUICE },
	MoninPassionfruitPuree: { name: 'Monin Passionfruit Puree', type: IngredientType.SYRUPJUICE },
	CranberryJuice: { name: 'Cranberry Juice', type: IngredientType.SYRUPJUICE },
	LemonJuice: { name: 'Lemon Juice', type: IngredientType.SYRUPJUICE },
	PineappleJuice: { name: 'Pineapple Juice', type: IngredientType.SYRUPJUICE },
	SugarSyrup: { name: 'Sugar Syrup', type: IngredientType.SYRUPJUICE },
	LimeJuice: { name: 'Lime Juice', type: IngredientType.SYRUPJUICE },
	Aperol: { name: 'Aperol', type: IngredientType.BITTER },
	MartiniBitter: { name: 'Martini Bitter', type: IngredientType.BITTER },
	AngosturaBitters: { name: 'Angostura Bitters', type: IngredientType.BITTER },
	OrangeBitters: { name: 'Orange Bitters', type: IngredientType.BITTER },
	BombaySapphire: { name: 'Bombay Sapphire', type: IngredientType.GIN },
	PatronSilver: { name: 'Patron Silver', type: IngredientType.TEQUILA },
	PatronReposado: { name: 'Patron Reposado', type: IngredientType.TEQUILA },
	Coke: { name: 'Coke', type: IngredientType.MIXERS },
	SodaWater: { name: 'Soda Water', type: IngredientType.MIXERS },
	FeverTreeGingerBeer: { name: 'Fever Tree Ginger Beer', type: IngredientType.MIXERS },
	Lime: { name: 'Lime', type: IngredientType.OTHER },
	Prosecco: { name: 'Prosecco', type: IngredientType.OTHER },
	Espresso: { name: 'Espresso', type: IngredientType.OTHER },
	MintLeaves: { name: 'Mint Leaves', type: IngredientType.OTHER },
	RaspberryJam: { name: 'Raspberry Jam', type: IngredientType.OTHER },
	BlackberryJam: { name: 'Blackberry Jam', type: IngredientType.OTHER },
	ApricotJam: { name: 'Apricot Jam', type: IngredientType.OTHER },
	Marmalade: { name: 'Marmalade', type: IngredientType.OTHER },
	OrangeRind: { name: 'Orange Rind', type: IngredientType.GRANISHES },
	Mint: { name: 'Mint', type: IngredientType.GRANISHES },
	Raspberries: { name: 'Raspberries', type: IngredientType.GRANISHES },
	LemonRind: { name: 'Lemon Rind', type: IngredientType.GRANISHES },
	LimeWedge: { name: 'Lime Wedge', type: IngredientType.GRANISHES },
	LemonWedge: { name: 'Lemon Wedge', type: IngredientType.GRANISHES },
	OrangeWedge: { name: 'Orange Wedge', type: IngredientType.GRANISHES },
	LimeWheel: { name: 'Lime Wheel', type: IngredientType.GRANISHES },
	CoffeeBeans: { name: 'Coffee Beans', type: IngredientType.GRANISHES },
	Strawberry: { name: 'Strawberry', type: IngredientType.GRANISHES },
	LimeCordial: { name: 'Lime Cordial', type: IngredientType.MIXERS },
	Sprite: { name: 'Sprite', type: IngredientType.MIXERS },
};

interface ICocktail {
	name: string;
	image: string;
	ingredients: {
		ingredient: Ingredient;
		amount: string | number;
	}[];
	top?: string[];
	garnishes?: string[];
	extra?: string[];
}

interface IAllCocktails {
	[key: string]: ICocktail;
}

const ALL_COCKTAILS: IAllCocktails = {
	'Aperol Spritz': {
		name: 'Aperol Spritz',
		image: AperolSpritz,
		ingredients: [
			{ ingredient: INGREDIENTS.Aperol, amount: 60 },
			{ ingredient: INGREDIENTS.Prosecco, amount: 60 },
			{ ingredient: INGREDIENTS.SodaWater, amount: 90 },
		],
		top: ['Ice'],
		garnishes: ['Orange Wedge'],
		extra: ['Built'],
	},
	Cosmopolitan: {
		name: 'Cosmopolitan',
		image: Cosmopolitan,
		ingredients: [
			{ ingredient: INGREDIENTS.GreyGoose, amount: 45 },
			{ ingredient: INGREDIENTS.DKTripleSec, amount: 15 },
			{ ingredient: INGREDIENTS.CranberryJuice, amount: 40 },
			{ ingredient: INGREDIENTS.LimeJuice, amount: 15 },
			{ ingredient: INGREDIENTS.SugarSyrup, amount: 10 },
		],
		garnishes: ['Orange Rind'],
	},
	'Espresso Martini': {
		name: 'Espresso Martini',
		image: EspressoMartini,
		ingredients: [
			{ ingredient: INGREDIENTS.FortyTwoBelow, amount: 40 },
			{ ingredient: INGREDIENTS.DKCremeDeCafé, amount: 20 },
			{ ingredient: INGREDIENTS.SugarSyrup, amount: 5 },
			{ ingredient: INGREDIENTS.Espresso, amount: 30 },
		],
		garnishes: ['3 Coffee Beans'],
		extra: ['Shake Well', 'Double Strain'],
	},
	'Long Island Iced Tea': {
		name: 'Long Island Iced Tea',
		image: LongIslandIcedTea,
		ingredients: [
			{ ingredient: INGREDIENTS.FortyTwoBelow, amount: 15 },
			{ ingredient: INGREDIENTS.BacardiCartaBlanca, amount: 15 },
			{ ingredient: INGREDIENTS.PatronSilver, amount: 15 },
			{ ingredient: INGREDIENTS.BombaySapphire, amount: 15 },
			{ ingredient: INGREDIENTS.DKTripleSec, amount: 15 },
			{ ingredient: INGREDIENTS.LemonJuice, amount: 50 },
			{ ingredient: INGREDIENTS.SugarSyrup, amount: 15 },
			{ ingredient: INGREDIENTS.Coke, amount: 'Top' },
		],
		top: ['Ice'],
		garnishes: ['Lemon Wedge'],
	},
	'Traditional Negroni': {
		name: 'Traditional Negroni',
		image: TraditionalNegroni,
		ingredients: [
			{ ingredient: INGREDIENTS.BombaySapphire, amount: 30 },
			{ ingredient: INGREDIENTS.MartiniBitter, amount: 30 },
			{ ingredient: INGREDIENTS.MartiniRosso, amount: 30 },
		],
		top: ['Ice'],
		garnishes: ['Orange Rind'],
		extra: ['Built'],
	},
	'Raspberry Collins': {
		name: 'Raspberry Collins',
		image: RaspberryCollins,
		ingredients: [
			{ ingredient: INGREDIENTS.BombaySapphire, amount: 50 },
			{ ingredient: INGREDIENTS.LemonJuice, amount: 30 },
			{ ingredient: INGREDIENTS.RaspberrySyrup, amount: 20 },
		],
		top: ['Ice', 'Soda Water'],
		garnishes: ['Lemon Wedge', 'Raspberries'],
	},
	'Patron Margarita': {
		name: 'Patron Margarita',
		image: PatronMargarita,
		ingredients: [
			{ ingredient: INGREDIENTS.PatronReposado, amount: 50 },
			{ ingredient: INGREDIENTS.DKTripleSec, amount: 20 },
			{ ingredient: INGREDIENTS.LimeJuice, amount: 60 },
			{ ingredient: INGREDIENTS.SugarSyrup, amount: 20 },
		],
		garnishes: ['Lime Wheel'],
	},
	'Wild Strawberry Mojito': {
		name: 'Wild Strawberry Mojito',
		image: WildStrawberryMojito,
		ingredients: [
			{ ingredient: INGREDIENTS.BacardiCartaBlanca, amount: 30 },
			{ ingredient: INGREDIENTS.DKWildStrawberry, amount: 30 },
			{ ingredient: INGREDIENTS.LimeJuice, amount: 30 },
			{ ingredient: INGREDIENTS.StrawberrySyrup, amount: 10 },
			{ ingredient: INGREDIENTS.SugarSyrup, amount: 5 },
		],
		top: ['Ice', 'Soda Water'],
		garnishes: ['Strawberry', 'Mint Sprig'],
		extra: ['Built'],
	},
	'Cuban Mojito': {
		name: 'Cuban Mojito',
		image: CubanMojito,
		ingredients: [
			{ ingredient: INGREDIENTS.BacardiCartaBlanca, amount: 50 },
			{ ingredient: INGREDIENTS.Lime, amount: '4 Wedges' },
			{ ingredient: INGREDIENTS.MintLeaves, amount: '6' },
			{ ingredient: INGREDIENTS.SugarSyrup, amount: 10 },
		],
		top: ['Ice', 'Soda Water'],
		garnishes: ['Mint Sprig'],
		extra: ['Muddled'],
	},
	'Passionfruit Mojito': {
		name: 'Passionfruit Mojito',
		image: PassionfruitMojito,
		ingredients: [
			{ ingredient: INGREDIENTS.BacardiCartaBlanca, amount: 50 },
			{ ingredient: INGREDIENTS.MoninPassionfruitPuree, amount: 50 },
			{ ingredient: INGREDIENTS.Lime, amount: '4 Wedges' },
			{ ingredient: INGREDIENTS.MintLeaves, amount: '6' },
			{ ingredient: INGREDIENTS.SugarSyrup, amount: 10 },
		],
		top: ['Ice', 'Soda Water'],
		garnishes: ['Mint Sprig'],
		extra: ['Muddled'],
	},
	Zombie: {
		name: 'Zombie',
		image: Zombie,
		ingredients: [
			{ ingredient: INGREDIENTS.PineappleJuice, amount: 40 },
			{ ingredient: INGREDIENTS.Bacardi8, amount: 20 },
			{ ingredient: INGREDIENTS.BacardiCartaBlanca, amount: 20 },
			{ ingredient: INGREDIENTS.BacardiOakheart, amount: 20 },
			{ ingredient: INGREDIENTS.LimeJuice, amount: 20 },
			{ ingredient: INGREDIENTS.DKPassionfruit, amount: 10 },
			{ ingredient: INGREDIENTS.Grenadine, amount: 10 },
		],
		top: ['Ice'],
		garnishes: ['Orange Wedge', 'Lime Wheel'],
	},
	'Old Fashioned': {
		name: 'Old Fashioned',
		image: OldFashioned,
		ingredients: [
			{ ingredient: INGREDIENTS.PureScot, amount: 50 },
			{ ingredient: INGREDIENTS.SugarSyrup, amount: 10 },
			{ ingredient: INGREDIENTS.AngosturaBitters, amount: '3 Dashes' },
		],
		top: ['Ice'],
		garnishes: ['Orange Wedge'],
		extra: ['Built'],
	},
	'Raspberry Jam': {
		name: 'Raspberry Jam',
		image: RaspberryCollins,
		ingredients: [
			{ ingredient: INGREDIENTS.BacardiCartaBlanca, amount: 45 },
			{ ingredient: INGREDIENTS.LemonJuice, amount: 30 },
			{ ingredient: INGREDIENTS.RaspberryJam, amount: '2 Tbs' },
		],
		top: ['Ice', 'Lemonade'],
		garnishes: ['Mint Sprig', '3 Raspberries'],
		extra: ["Don't strain"],
	},
	'Blackberry Jam': {
		name: 'Blackberry Jam',
		image: RaspberryCollins,
		ingredients: [
			{ ingredient: INGREDIENTS.BombaySapphire, amount: 45 },
			{ ingredient: INGREDIENTS.LemonJuice, amount: 30 },
			{ ingredient: INGREDIENTS.BlackberryJam, amount: '2 Tbs' },
		],
		top: ['Ice', 'Lemonade'],
		garnishes: ['Mint Sprig', '2 Blackberries'],
		extra: ["Don't strain"],
	},
	'Apricot Jam': {
		name: 'Apricot Jam',
		image: RaspberryCollins,
		ingredients: [
			{ ingredient: INGREDIENTS.FortyTwoBelow, amount: 45 },
			{ ingredient: INGREDIENTS.LemonJuice, amount: 30 },
			{ ingredient: INGREDIENTS.ApricotJam, amount: '2 Tbs' },
		],
		top: ['Ice', 'Lemonade'],
		garnishes: ['Mint Sprig'],
		extra: ["Don't strain"],
	},
	'Orange Marmalade Jam': {
		name: 'Orange Marmalade Jam',
		image: RaspberryCollins,
		ingredients: [
			{ ingredient: INGREDIENTS.BombaySapphire, amount: 45 },
			{ ingredient: INGREDIENTS.LemonJuice, amount: 30 },
			{ ingredient: INGREDIENTS.MartiniBitter, amount: 15 },
			{ ingredient: INGREDIENTS.Marmalade, amount: '2 Tbs' },
		],
		top: ['Ice', 'Lemonade'],
		garnishes: ['Mint Sprig', 'Dehydrated Orange'],
		extra: ["Don't strain"],
	},
	'Moscow Mule': {
		name: 'Moscow Mule',
		image: OldFashioned,
		ingredients: [
			{ ingredient: INGREDIENTS.FortyTwoBelow, amount: 45 },
			{ ingredient: INGREDIENTS.Lime, amount: '4 Wedges' },
			{ ingredient: INGREDIENTS.FeverTreeGingerBeer, amount: '1 Bottle' },
		],
		top: ['Ice'],
		garnishes: ['Lime Wheel'],
		extra: ['Muddled'],
	},
	Manhattan: {
		name: 'Manhattan',
		image: OldFashioned,
		ingredients: [
			{ ingredient: INGREDIENTS.MakersMark, amount: 45 },
			{ ingredient: INGREDIENTS.MartiniRosso, amount: 30 },
			{ ingredient: INGREDIENTS.OrangeBitters, amount: '1 Dash' },
		],
		top: ['Ice'],
		garnishes: ['Cherry', 'Dehydrated Orange Wheel'],
		extra: ['Muddled'],
	},
	'Lemon Lime Bitters': {
		name: 'Lemon Lime Bitters',
		image: CubanMojito,
		ingredients: [
			{ ingredient: INGREDIENTS.LimeCordial, amount: 'Around 1cm' },
			{ ingredient: INGREDIENTS.AngosturaBitters, amount: '3–4 Dashes' },
			{ ingredient: INGREDIENTS.Sprite, amount: 'Top' },
		],
		top: ['Ice'],
		extra: ['Built'],
	},
};

// Hook
function useLocalStorage<Type>(key: string, initialValue: Type) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: Type) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);
			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	};
	return [storedValue, setValue];
}

const IngredientSection = styled.div`
	margin-bottom: 0.5em;
`;

const IngredientTitle = styled(Typography)`
	margin-bottom: 0.5em;
`;

const IngredientChips = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

function filterIngredientsByType(ingredientType: IngredientType) {
	return Object.values(INGREDIENTS).filter((ingredient) => ingredient.type === ingredientType);
}

function sortIngredients(ingredientsArray: Ingredient[]) {
	return ingredientsArray.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
}

export const Rooftop: React.FC = () => {
	useEffect(() => {
		document.title = 'Rooftop';
		document.getElementsByTagName('body')[0].style = 'background: #FFF; color: #000;';
	}, []);

	const [inStock, setInStock] = useLocalStorage<string[]>('stock', []);
	const [availableCocktails, setAvaialableCocktails] = useState<string[]>([]);
	const [makingCocktails, setMakingCocktails] = useState<string[]>([]);
	const [showAll, setShowAll] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	function handleStockChange(ingredient: string) {
		const m_inStock = [...inStock];
		const index = inStock.indexOf(ingredient);

		if (index !== -1) {
			m_inStock.splice(index, 1);
		} else {
			m_inStock.push(ingredient);
		}

		setInStock(m_inStock);
	}

	function handleMakingChange(cocktail: string) {
		const m_makingCocktail = [...makingCocktails];
		const index = makingCocktails.indexOf(cocktail);

		if (index !== -1) {
			m_makingCocktail.splice(index, 1);
		} else {
			m_makingCocktail.push(cocktail);
		}

		setMakingCocktails(m_makingCocktail);
	}

	useEffect(() => {
		const m_availableCocktails = Object.keys(ALL_COCKTAILS).filter((key) => {
			const cocktail = ALL_COCKTAILS[key];
			if (cocktail.ingredients.every((ingredient) => inStock.includes(ingredient.ingredient.name))) {
				return key;
			}
		});

		setAvaialableCocktails(m_availableCocktails);
	}, [inStock]);

	function IngredientChip(ingredient: Ingredient) {
		const stocked = inStock.includes(ingredient.name);
		const usedInNum = Object.keys(ALL_COCKTAILS).filter((key) =>
			ALL_COCKTAILS[key].ingredients.some((cocktailIngredient) => cocktailIngredient.ingredient === ingredient)
		).length;
		return (
			<Chip
				key={ingredient.name}
				label={`${ingredient.name} ${usedInNum}`}
				onClick={() => {
					handleStockChange(ingredient.name);
				}}
				color="primary"
				variant={stocked ? 'filled' : 'outlined'}
				style={{ marginRight: stocked ? 1 : 0, marginLeft: stocked ? 1 : 0 }}
			/>
		);
	}

	function allInStock() {
		setInStock(Object.values(INGREDIENTS).map((ingredient) => ingredient.name));
	}

	function allOutOfStock() {
		setInStock([]);
	}

	function ingredientChips(IngredientType: IngredientType) {
		return sortIngredients(filterIngredientsByType(IngredientType)).map(IngredientChip);
	}

	return (
		<RooftopContainer theme={NinteenFortyTheme}>
			<Accordion style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Cocktail Ingredients</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ display: 'flex', flexDirection: 'column', maxHeight: 770, overflowY: 'scroll' }}>
						<IngredientSection>
							<IngredientTitle>Gin</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.GIN)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Tequila</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.TEQUILA)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Vodka</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.VODKA)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Rum</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.RUM)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Whisky</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.WHISKY)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Liqueur</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.LIQUEUR)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Syrup / Juice</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.SYRUPJUICE)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Bitters</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.BITTER)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Mixers</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.MIXERS)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Other</IngredientTitle>
							<IngredientChips>{ingredientChips(IngredientType.OTHER)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Credit</IngredientTitle>
							<span>Developed by Ewan Lyon for ninteenforty</span>
						</IngredientSection>
						<Button onClick={allInStock}>All in Stock</Button>
						<Button onClick={allOutOfStock}>All Out of Stock</Button>
					</div>
				</AccordionDetails>
			</Accordion>
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: '100vh',
					padding: '10% 0',
					boxSizing: 'border-box',
					justifyContent: 'space-around',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				{Object.keys(ALL_COCKTAILS).map((cocktail) => {
					return (
						<Cocktail
							key={cocktail}
							cocktail={cocktail}
							instock={inStock}
							hidden={!makingCocktails.includes(cocktail)}
						/>
					);
				})}
			</div>
			<div style={{ position: 'fixed', bottom: 8 }}>
				<Fab color="secondary" style={{ marginBottom: 8 }} onClick={() => setDialogOpen(true)}>
					<img src={NinteenFortyLogo} style={{ height: '60%', width: 'auto' }} />
				</Fab>
				<Paper elevation={3} style={{ padding: 4 }}>
					<FormControlLabel
						control={<Switch checked={showAll} onChange={(e) => setShowAll(e.target.checked)} color="primary" />}
						label="Show All"
						labelPlacement="start"
					/>
					{(showAll ? Object.keys(ALL_COCKTAILS) : availableCocktails).sort().map((cocktail) => {
						const missingIngredients = ALL_COCKTAILS[cocktail].ingredients.filter(
							(ingredient) => !inStock.includes(ingredient.ingredient.name)
						).length;
						return (
							<Chip
								color={availableCocktails.includes(cocktail) ? 'primary' : 'error'}
								key={cocktail}
								label={missingIngredients > 0 ? `${cocktail} ${missingIngredients}` : cocktail}
								onClick={() => {
									handleMakingChange(cocktail);
								}}
								variant={makingCocktails.includes(cocktail) ? 'filled' : 'outlined'}
							/>
						);
					})}
				</Paper>
			</div>
			<NinteenfortyDialog open={dialogOpen} handleClose={() => setDialogOpen(false)} />
		</RooftopContainer>
	);
};

const CocktailTitle = styled(Typography)`
	font-weight: bold;
	font-size: 1.1rem;
`;

const CocktailContainer = styled.div`
	display: ${(hidden: { hidden?: boolean }) => (hidden.hidden ? 'none' : 'flex')};
	flex-direction: column;
	align-items: center;
	font-size: 1.5em;
`;

const CocktailText = styled(Typography)``;

interface CocktailProps {
	cocktail: string;
	instock: string[];
	hidden?: boolean;
}

const Cocktail: React.FC<CocktailProps> = (props: CocktailProps) => {
	const cocktail = ALL_COCKTAILS[props.cocktail];
	return (
		<CocktailContainer hidden={props.hidden}>
			<CocktailTitle style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{cocktail.name}</CocktailTitle>
			<img style={{ height: '200px', width: '150px', objectFit: 'contain', margin: '0.5em 0' }} src={cocktail.image} />
			{cocktail.ingredients.map((ingredient) => {
				return (
					<div
						key={ingredient.ingredient.name}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							background: !props.instock.includes(ingredient.ingredient.name) ? '#ff000050' : '',
						}}
					>
						<CocktailText>{ingredient.ingredient.name}</CocktailText>
						<CocktailText style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
							{typeof ingredient.amount === 'number' ? `${ingredient.amount}ml` : ingredient.amount}
						</CocktailText>
					</div>
				);
			})}
			<div style={{ height: '0.5em' }} />
			{cocktail.top?.map((top) => {
				return <CocktailText key={top}>{top}</CocktailText>;
			})}
			{cocktail.garnishes?.map((garnish) => {
				return <CocktailText key={garnish}>{garnish}</CocktailText>;
			})}
			{cocktail.extra?.map((extra) => {
				return (
					<CocktailText key={extra} style={{ fontStyle: 'italic' }}>
						{extra}
					</CocktailText>
				);
			})}
		</CocktailContainer>
	);
};

export interface DialogTitleProps {
	children?: React.ReactNode;
	onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose && (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			)}
		</DialogTitle>
	);
}

interface NinteenfortDialogProps {
	handleClose: () => void;
	open: boolean;
}

const CHECKLISTS: Record<string, string[]> = {
	open: [
		'Put cushions out',
		'Get spirits from heritage store room',
		'Get equipment',
		'Open umbrellas',
		'Get ice',
		'Check stock',
	],
	close: [
		'Collect and clean all glasses',
		'Return all glasses',
		'Put away all cushions',
		'Bring umbrellas down',
		'Put away all spirits',
		'Wine save wines',
		'Return Reds to heritage store room',
	],
};

const REDS = [
	'Red Claw Pinot Noir',
	'Rymil Cabernet Sauvignon',
	'Red Claw Shiraz',
	'Heathcote Estate Shiraz',
	'Terrazas Malbec',
];

const WHITES = ['Cloudy Bay Sauvignon Blanc', 'Red Clar Pinot Gris', 'Red Claw Chardonnay', 'Leo Buring Riesling'];

const SPARKLING = ['Chandon', 'Chandon Rosé', 'Prosecco', 'Georg Jensen Pinot Noir Chardonnay'];

const BEERS = [
	'Heineken Zero',
	'Heineken',
	'Little Creatures Rogers',
	'Pipsqueak Cider',
	'James Squire Ginger Beer',
	'Moon Dog Fizzer',
];

const EQUIPMENT = [
	'2x Cocktail Shakers',
	'2x Jiggers',
	'Bar Spoon',
	'Muddler',
	'Boston Strainer',
	'Chopping Board + Knife',
	'Juicer',
];
function NinteenfortyDialog(props: NinteenfortDialogProps) {
	const [checklist, setChecklist] = useState('open');
	const reds = useState<string[]>([]);
	const whites = useState<string[]>([]);
	const sparkling = useState<string[]>([]);
	const equipment = useState<string[]>([]);
	const beers = useState<string[]>([]);

	function handleStockChange(ingredient: string, state: [string[], React.Dispatch<React.SetStateAction<string[]>>]) {
		const m_inStock = [...state[0]];
		const index = state[0].indexOf(ingredient);

		if (index !== -1) {
			m_inStock.splice(index, 1);
		} else {
			m_inStock.push(ingredient);
		}

		state[1](m_inStock);
	}

	function CreateIngredientChips(
		ingredients: string[],
		state: [string[], React.Dispatch<React.SetStateAction<string[]>>]
	) {
		return ingredients.map((ingredient) => {
			const stocked = state[0].includes(ingredient);
			return (
				<Chip
					key={ingredient}
					label={ingredient}
					onClick={() => {
						handleStockChange(ingredient, state);
					}}
					color="primary"
					variant={stocked ? 'filled' : 'outlined'}
					style={{ marginRight: stocked ? 1 : 0, marginLeft: stocked ? 1 : 0 }}
				/>
			);
		});
	}

	return (
		<Dialog open={props.open} onClose={props.handleClose}>
			<BootstrapDialogTitle onClose={props.handleClose}>nineteenforty</BootstrapDialogTitle>
			<DialogContent>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						maxHeight: 300,
						overflowY: 'scroll',
						marginBottom: 16,
						border: `2px solid ${NinteenFortyTheme.palette.primary.main}`,
						borderRadius: 5,
						padding: 8,
						boxShadow:
							'inset 0px 3px 5px -1px rgb(0 0 0 / 20%), inset  0px 6px 10px 0px rgb(0 0 0 / 14%), inset  0px 1px 18px 0px rgb(0 0 0 / 12%)',
					}}
				>
					<IngredientSection>
						<IngredientTitle>Reds</IngredientTitle>
						<IngredientChips>{CreateIngredientChips(REDS, reds)}</IngredientChips>
					</IngredientSection>
					<IngredientSection>
						<IngredientTitle>Whites</IngredientTitle>
						<IngredientChips>{CreateIngredientChips(WHITES, whites)}</IngredientChips>
					</IngredientSection>
					<IngredientSection>
						<IngredientTitle>Sparkling</IngredientTitle>
						<IngredientChips>{CreateIngredientChips(SPARKLING, sparkling)}</IngredientChips>
					</IngredientSection>
					<IngredientSection>
						<IngredientTitle>Beers</IngredientTitle>
						<IngredientChips>{CreateIngredientChips(BEERS, beers)}</IngredientChips>
					</IngredientSection>
					<IngredientSection>
						<IngredientTitle>Equipment</IngredientTitle>
						<IngredientChips>{CreateIngredientChips(EQUIPMENT, equipment)}</IngredientChips>
					</IngredientSection>
				</div>
				<ToggleButtonGroup
					color="primary"
					value={checklist}
					exclusive
					onChange={(_, newChecklist) => setChecklist(newChecklist)}
				>
					<ToggleButton value="open">Open</ToggleButton>
					<ToggleButton value="close">Close</ToggleButton>
				</ToggleButtonGroup>
				<div>
					{CHECKLISTS[checklist].map((instruction) => {
						return <FormControlLabel control={<Checkbox />} label={instruction} />;
					})}
				</div>
			</DialogContent>
		</Dialog>
	);
}
