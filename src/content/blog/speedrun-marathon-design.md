---
title: Speedrun Marathon Layout Design
publishDate: 2023-02-06 08:56:00
# updatedDate: 2023-02-08 08:56:00
description: |
  A big ol post about different speedrun marathon elements
tags:
  - Broadcast
  - Design
  - Speedrun
draft: false
---

This is a continually updating post about speedrun marathon layout design. This focusses on anything and everything about speedrun marathon layout design so it might not flow perfectly. More in-depth analyses or implementations for elements might be separate blog posts but will be linked here.

## Table of contents

- [Table of contents](#table-of-contents)
- [What are speedrun marathons?](#what-are-speedrun-marathons)
- [Balance](#balance)
- [Layout elements](#layout-elements)
  - [The essentials](#the-essentials)
  - [Elements there should be](#elements-there-should-be)
  - [Nice to haves](#nice-to-haves)
- [Who am I?](#who-am-i)
- [Basic rules](#basic-rules)
- [Elements](#elements)
  - [Gameplay screen](#gameplay-screen)
  - [Timer](#timer)
  - [Game name](#game-name)
  - [Speedrun category](#speedrun-category)
  - [Runner name](#runner-name)
  - [Intermission screen](#intermission-screen)
  - [Run estimate](#run-estimate)
  - [Camera](#camera)
  - [Pronouns](#pronouns)
  - [Current time at the location](#current-time-at-the-location)
  - [Amount raised so far \& charity name](#amount-raised-so-far--charity-name)
  - [Game metadata](#game-metadata)
  - [Commentator/Host names](#commentatorhost-names)
  - [Ticker/Omnibar information](#tickeromnibar-information)
- [Aspect Ratios](#aspect-ratios)
  - [16:9 / Widescreen](#169--widescreen)
  - [4:3 / Standard](#43--standard)
  - [DS / 3DS](#ds--3ds)
  - [GB / GBC](#gb--gbc)
  - [GBA](#gba)
  - [Race/Co-op](#raceco-op)
    - [2 player](#2-player)
    - [3 player](#3-player)
    - [4 player](#4-player)
- [Changelog](#changelog)

## What are speedrun marathons?

This may sound basic but it is important to remember what the goals are for a speedrun marathon when designing layouts. A speedrun marathon is an event where multiple people will speedrun multiple different games sequentially one after another. These events can be to raise money for charity or to have a community event where everyone gets together.

## Balance

The most difficult thing when it comes to speedrun marathon design is the balance between giving as much information as you can while also trying to not clutter and overload the layouts.

Giving a lot of information is really good to people with experience in speedrunning but can be difficult to manage space wise but can be very overwhelming to new people. If the marathon is for the given speedrun community then you can get away with including more information. However if the marathon is more general it may require less information to not overwhelm new people.

Finding the correct balance takes time and feedback and everyone does it a little bit differently.

## Layout elements

### The essentials

The pure basic essentials that are needed for a speedrun marathon are thus:

- Gameplay
- Timer
- Game name
- Speedrun category
- Runner name
- Intermission screen

All other data seen in speedrun marathons help provide more context but at the end of the day, those are the essence of a speedrun marathon.

### Elements there should be

These should be on the layouts in some manner but are not the core elements.

- Run estimate
- Camera
- Pronouns
- Current time at the location
- Amount raised so far & charity name
- Upcoming runs

### Nice to haves

These are elements that require extra design and/or programming to implement.

- Game year
- Game console
- Commentator names
- Host name
- Donation incentive information
- Prize information

## Who am I?

Why should you be taking advice from me though? Because I've thought about this stuff for years and years. I've been interested in layouts since finding out about <a target="_blank" href="https://gamesdonequick.com/">Awesome Games Done Quick</a> in 2016.

![An image of Barhunga playing Super Monkey Ball at AGDQ 2016 (https://www.youtube.com/watch?v=zywO7w49Fys)](/assets/blog/speedrun-marathon-design/agdq16.jpg)
<div align="center"><p>My first love</p>Super Monkey Ball – Barhunga – <a target="_blank" href="https://www.youtube.com/watch?v=zywO7w49Fys">Link</a></div>

My very first design I showed someone was in 2018. Looking back on it now I don't think it's the worst. A lot of negative space but 16:9 layouts are generally difficult because of how much space you have to fill.

![A speedrun design developed in 2018 for AusSpeedruns](/assets/blog/speedrun-marathon-design/first-design.jpg)
<div align="center">My very first design</div>

They rejected me but I talked to them in person at PAX 2019 and became the designer and developer for ASM2020. Since them I've designed 8 events over 3 years, continually improving and refining the layouts.

![A collage of speedrun layouts from ASM2019, ASM2020 and ASM2022](/assets/blog/speedrun-marathon-design/asm-lineage.png)
<div align="center">ASM2019, ASM2020 (my first design), ASM2022 (latest ASM design)</div>

In designing these layouts I have looked at many events analysing what they do and where they place things.

![An image taken from PureRef showing a matrix of multiple marathons and their designs for different aspect ratios](/assets/blog/speedrun-marathon-design/all-marathons.jpg)
<div align="center">Photo from one of my PureRef boards</div>

I still currently work for AusSpeedruns working on both the layouts and now website and anything else to do with the more software side of tech.

![Me at the stream PC putting the final touches before we start ASM 2022](/assets/blog/speedrun-marathon-design/asm2022-irl.jpg)
<div align="center">I was very nervous in this photo</div>

## Basic rules

There are some basic/general rules to follow when designing layouts.

- No graphics or information overlapping the gameplay.

The gameplay screen should always be clear, you should never cover any of the game as many games have different position for elements like UI which may get covered. Also keeping readability of elements will be difficult as the background will always be changing.

- Numbers that change **need** to use a monospace font

This should be a general rule but absolutely any number that will increment, decrement, whateverment itself needs to use a monospaced font so as to not cause changing element widths. Once you look out for elements that hold numbers you will see the changing widths. Numbers that will change the again, **need** a monospace font are: Timer, Donation total, Clock time.

## Elements

The following descriptions and recommendations are of course based on my opinions of these things.

### Gameplay screen

This is the most crucial element of the whole layouts. Every other element is related to giving the gameplay more context. At AusSpeedruns the first thing when designing a new layout is how big can we make the gameplay screen while also having space to put the other elements in. I will minimise the space around the gameplay so as to maximise the screen.

### Timer

This is a *speedrun* marathon so of course we need a timer! The timer should be large and easily viewable at a glance. It needs seconds, minutes and hours.

![ASM 2022 Timer reading 1:41:23.7](/assets/blog/speedrun-marathon-design/timer.png)
<div align="center">ASM 2022 Timer. Font is <a target="_blank" href="https://youtu.be/RTB5XhjbgZA?t=276">Seamless</a></div>

It is a good idea to omit the hours values when below an hour to remove useless information as it takes a whole hour for those digits to be useful. You shouldn't omit the minutes as it takes a much shorter amount of time to reach 10 minutes.

![ASM 2022 Timer reading 00:00.0](/assets/blog/speedrun-marathon-design/timer-cleared.png)

Milliseconds are not a required part of the timer but can be used as a bit of constant visual change in case of sections of games that might be quite still. As they are not important to the actual time I make the milliseconds smaller but some events keep them the same size as the rest.

### Game name

*Coming soon*

### Speedrun category

*Coming soon*

### Runner name

*Coming soon*

### Intermission screen

*Coming soon*

### Run estimate

*Coming soon*

### Camera

*Coming soon*

### Pronouns

*Coming soon*

### Current time at the location

*Coming soon*

### Amount raised so far & charity name

*Coming soon*

### Game metadata

*Coming soon*

### Commentator/Host names

*Coming soon*

### Ticker/Omnibar information

*Coming soon*

## Aspect Ratios

People like to speedrun games from all years on all different consoles. This leads to very interesting aspect ratios that games run at. It can get even more interesting when you add races or co-op games which require multiple screens into the mix.

### 16:9 / Widescreen

This I find is the hardest aspect ratio to nail down. You need to shrink the gameplay screen down to allow for the marathon elements but you also need to maximise the gameplay screen. This immediately leaves you with a lot of room to fill in. The good news is that there is a lot of inspiration on Twitch as most people will stream 16:9 games (though a lot of people just have elements on top of the screen which I despise but oh well).

For my layouts the gamescreen is determined by how wide the camera box is. I've gone for our camera to be essentially a 1:1 aspect ratio. It does mean for large groups it's difficult or impossible to fit everyone in but as those groups are rare it can fit 2 people.

### 4:3 / Standard

This is my favourite aspect ratio as the whole gameplay screen can fit inside a widescreen layout and have a lot of room for our elements.

### DS / 3DS

*Coming soon*

### GB / GBC

*Coming soon*

### GBA

*Coming soon*

### Race/Co-op

*Coming soon*

#### 2 player

#### 3 player

#### 4 player

## Changelog

- 2023-02-06 Initial post
