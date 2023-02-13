---
title: AusSpeedruns
publishDate: 2023-01-30 00:00:00
img: /assets/work/broadcast/ausspeedruns/hero.png
img_alt: The AusSpeedruns logo over an orange background with a website, event and stream graphics behind it
description: |
  I am the Software Coordinator the charity speedrun marathon organisation AusSpeedruns
tags:
  - Programming
  - Design
  - Broadcast
  - Website
  - Tooling
  - NodeCG
---

Over the year I am in charge of programming, designing and making decisions in relation to anything software related for [AusSpeedruns](https://ausspeedruns.com/). AusSpeedruns is a non-profit charity organisation that organises various speedrun marathons with conventions and also hosts it's own week long, non-stop, speedrun marathon creatively called the Australian Speedrun Marathon.

### Production

![Ewan doing the final few checks before starting ASM 2022](/assets/work/broadcast/ausspeedruns/asm2022-irl.jpg)

I've worked with AusSpeedruns on both online and in-person events. Doing planning and setup for video, audio and all other equipment required.

![Ewan during the setup of ASM 2022](/assets/work/broadcast/ausspeedruns/me-plugging-in.jpg)

In 2021, 2 weeks before ASM 2021 was set to begin AusSpeedruns had to make the tough call to cancel the event and migrate to an online one. This meant that I was required to move our whole infrastructure online within 2 weeks which facilitated managing several AWS and Azure instances and developing remote control capabilities for OBS to allow for volunteers to manage the stream.

### Broadcast graphics

![Midg2000, Paladinight and LaceyStripes speedrunning Kingdom Hearts at ASM2022](/assets/work/broadcast/ausspeedruns/asm2022.png)

These graphics have been constantly evolving since ASM2020 and have much more room to grow. They run off NodeCG, a graphics backend that allows developers to create broadcast graphics and controllers using web tools and frameworks. The graphics use React and Styled-Components with the designs being mocked up in figma before being developed.

![jyymyboi speedrunning Harry Potter at ASAP2022](/assets/work/broadcast/ausspeedruns/asap2022.png)

The graphics are able to connect to the donation site (depends on who we are raising money for), show who is talking, connect to our Behringer X32 mixer, infinitely repeating ticket and more.

The graphics can also connect to our backend for donation challenge information, run information and user information.

![nase speedrunning Tony Hawk's Pro Skater at AusSpeedruns x PAX 2021](/assets/work/broadcast/ausspeedruns/pax2021.png)

The layouts must also be made bespoke for each event as there have been many aspect ratios used over the years in gaming. Currently this includes: 16:9, 16:9 2 player race, 16:9 3 player race, 4:3, 4:3 race, 16:10, Nintendo 3DS, Nintendo DS, Nintendo DS 2 player race, Gameboy Advance, Gameboy Colour, 11:8.

![JTMagicMan and werster racing each other in Pokemon at ASM2021](/assets/work/broadcast/ausspeedruns/asm2021.png)

### Website

![The about page of the AusSpeedruns website](/assets/work/broadcast/ausspeedruns/website.png)

The website is the place where our community can learn about and submit runs for our marathons and where they can find information about previous marathons.

The frontend is developed with NextJS, Sass and Material-UI. It connects to our backend to access marathon information, run information and user data. The backend uses KeystoneJS 6 which is a relatively unknown backend but suits our small needs perfectly.

### Design

I am the designer for all of AusSpeedruns. I did not come up with the initial brand design but have expanded it for use in the website, social media posts and press kits.

![Three images of some designs I've done: ASM2023 Gradient Pixels hero image, AusSpeedruns orange with a background of the crowd cheering, three tickets from ASM2022](/assets/work/broadcast/ausspeedruns/design.png)
