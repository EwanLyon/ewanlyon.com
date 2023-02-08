---
title: Speedrun Marathon Layout Design
publishDate: 2023-02-06 08:56:00
updatedDate: 2023-02-08 13:26:00
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
  - [Crucial](#crucial)
  - [Recommended](#recommended)
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
  - [Amount raised so far \& charity name](#amount-raised-so-far--charity-name)
  - [Camera](#camera)
  - [Pronouns](#pronouns)
  - [Current time at the location](#current-time-at-the-location)
  - [Commentator/Host names](#commentatorhost-names)
  - [Ticker/Omnibar information](#tickeromnibar-information)
    - [Upcoming games](#upcoming-games)
    - [Call to Action (CTA)](#call-to-action-cta)
    - [Prizes](#prizes)
    - [Incentives](#incentives)
  - [Game metadata](#game-metadata)
    - [Console/Platform](#consoleplatform)
    - [Year of release](#year-of-release)
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

### Crucial

The pure basic essentials that are needed for a speedrun marathon are thus:

- Gameplay
- Timer
- Game name
- Speedrun category
- Runner name
- Intermission screen
- Amount raised so far & charity name

All other data seen in speedrun marathons help provide more context but at the end of the day, those are the essence of a speedrun marathon.

### Recommended

These should be on the layouts in some manner but are not the core elements.

- Run estimate
- Camera
- Pronouns
- Current time at the location
- Upcoming runs
- Commentator and Host names
- Ticker/Omnibar

### Nice to haves

These are elements that require extra design and/or programming to implement.

- Game year
- Game console

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

Requirement: **Crucial**

This is a *speedrun* marathon so of course we need a timer! The timer should be large and easily viewable at a glance. It needs seconds, minutes and hours.

![ASM 2022 Timer reading 1:41:23.7](/assets/blog/speedrun-marathon-design/timer.png)
<div align="center">ASM 2022 Timer. Font is <a target="_blank" href="https://youtu.be/RTB5XhjbgZA?t=276">Seamless</a></div>

It is a good idea to omit the hours values when below an hour to remove useless information as it takes a whole hour for those digits to be useful. You shouldn't omit the minutes as it takes a much shorter amount of time to reach 10 minutes.

![ASM 2022 Timer reading 00:00.0](/assets/blog/speedrun-marathon-design/timer-cleared.png)

Milliseconds are not a required part of the timer but can be used as a bit of constant visual change in case of sections of games that might be quite still. As they are not important to the actual time I make the milliseconds smaller but some events keep them the same size as the rest.

### Game name

Requirement: **Crucial**

This one should be pretty obvious why it's required.

An issue you will run into is that game names can be very VERY long (I used to speedrun "
Mario & Sonic at the Olympic Games Tokyo 2020"). This can be a challenge as we only have limited space. You need to use text fitting algorithms and elements to do this which will either make the font size small enough so it all fits in or squishes the text so it fits in (my preferred option).

### Speedrun category

Requirement: **Crucial**

This tells the viewers what specifically is being run. This is crucial because you need to know what type of run is being played and some categories can explain the rules (e.g. Glitchless).

Acronyms should not be used unless the name is incredibly long. This is because people watching the event may not know what something like NMG (No Major Glitches) or GSR (Ganondorf Source Requirement). But when the category name is incredibly long and the space is limited you may choose the acronym.

![An image of the speedrun category Ganondorf Source Requirement being changed to GSR](/assets/blog/speedrun-marathon-design/category-acronym.png)
<div align="center">An example of changing the category name due to no space at ASM 2020. The "(RACE)" could've also been omitted but oh well. <a target="_blank" href="https://www.youtube.com/watch?v=S86V8-omPdw">Link to run</a></div>

### Runner name

Requirement: **Crucial**

Who is currently running the game. It's crucial because you need to give credit.

As usernames can be so varied and different, it should be obvious what is the runner's name as to not get confused with other information on the screen.

If there is space it would be nice to include the runner's social information as well, especially if it is different to their normal username (e.g. My username is Clubwho but it's <a target="_blank" href="https://www.twitter.com/Clubwhom">@Clubwhom</a> on twitter). This helps viewers know where to find more of a certain runner if they enjoyed the run. Space may be limited but at AusSpeedruns our nameplate has 3 states it can be in: username, switching between username and twitch and static on twitch if username and twitch name is the same.

### Intermission screen

![An image showing the ASM 2022 intermission and Clubwho dancing in the crowd cam](/assets/blog/speedrun-marathon-design/intermission-example.png)
<div align="center">ASM 2022 and me having a dance. <a target="_blank" href="https://www.twitch.tv/ausspeedruns/clip/LuckyDirtyPheasantWOOP-KmnZnto7H0NjjaQM">Link to clip</a></div>

Requirement: **Crucial**

Between runs there needs to be some sort of intermission or break screen. This is a great opportunity to show information about the speedrun.

Information that can be shown:

- Marathon logo
- Upcoming runs
- Charity name and amount raised
- Incentives
- Prizes
- Intermission music playing (We use <a target="_blank" href="https://rainwave.cc">rainwave.cc</a> OC Remix)
- Camera feed of the event
- Ads

### Run estimate

![Graphic showing different versions of an estimate](/assets/blog/speedrun-marathon-design/estimate-showcase.png)

Requirement: **Crucial**

The upper end of long the run should take to complete. This is crucial as it allows the user to plan their actions around the run.

The 10's of hours should be omitted as it is unneeded information, having a the 1's of the hours will be fine. The information should be represented with a label of either "Estimate" or "Est" as having a random time value might be confusing for new viewers.

### Amount raised so far & charity name

Requirement: **Crucial** (if doing a charity event)

Pretty obvious but if you're raising money for charity you should have on screen who you are raising money for and how much you have currently raised.

### Camera

Requirement: **Recommended**

Shows the runner currently doing the run. It is recommended as it allows people to have a more human connection but it is not required as the camera is not what people are mainly looking at.

The camera needs to be a size that is big enough to see but not big enough to start taking the gameplay space.

### Pronouns

![Graphic showing different versions of pronouns](/assets/blog/speedrun-marathon-design/pronouns-example.png)

Requirement: **Recommended**

In the current day and age it is customary for pronouns to be included next to a person's name. It is not crucial because a person's name is enough.

The pronouns should be optional as well as some may not be comfortable putting their pronouns on stream.

### Current time at the location

Requirement: **Recommended**

If an in-person event it allows a lot more context as to the reasons why an event might be quiet or have long runs (e.g. Night time).

### Commentator/Host names

Requirement: **Recommended**

It is customary to have commentators on while the runner plays as to provide more insightful commentary about the game while the runner focusses on speedrunning.

To have phantom voices randomly can be confusing to people so including names for the commentator and the host is recommended but it may be difficult to find space for it.

The host should be included but has to be marked as such to allow people to know who is there for the speedrun and who is there for the marathon.

### Ticker/Omnibar information

Requirement: **Recommended**

A <a target="_blank" href="https://en.wikipedia.org/wiki/News_ticker">ticker</a> as it's traditionally called or what Games Done Quick calls an "omnibar" is the ribbon at the bottom or the screen that can be used to put extra information that isn't necessary or more directly related to the marathon itself rather than the current speedrun. It can also be a good place to put a channel bug and information about the charity and amount raised.

#### Upcoming games

#### Call to Action (CTA)

#### Prizes

#### Incentives

### Game metadata

Requirement: **If you can**

This data is mainly for people unfamiliar with the current game and not so speedrunners of the game itself.

#### Console/Platform

This allows viewers to see what console the game is on.

This can get confusing when some speedruns use newer releases of the same game but are on different consoles such as PS1 games being run on PS2. This can be even more confusing when games are slightly different on the new release but almost considered the same game such as Sonic 2 which was re-released on mobile in 2013. This is still something I haven't quite nailed down as I believe it's information for people who don't know the game and need context but speedrunners of the game might get annoyed as the game is actually being run on a different console (e.g. The Legend of Zelda: Ocarina of Time is a Nintendo 64 game but the major categories are pretty much exclusively WiiVC). The compromise we landed on is to have the console being run on as it's own thing and then next to the year of release we have the original console in parentheses.

#### Year of release

This allows viewers to see when the game was released.

It isn't at all necessary but according to this tweet it seems that people like it.

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

- 2023-02-08 Added info on: game, category, runner name, intermission screen, run estimate, amount raised and charity name, camera, pronouns, current time, ticker, game metadata
- 2023-02-06 Initial post
