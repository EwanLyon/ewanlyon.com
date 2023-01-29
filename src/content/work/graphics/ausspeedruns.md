---
title: AusSpeedruns
publishDate: 2023-01-30 00:00:00
img: /assets/stock-4.jpg
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

### Website

The website is the place where our community can learn about and submit runs for our marathons and where they can find information about previous marathons.

The frontend is developed with NextJS, Sass and Material-UI. It connects to our backend to access marathon information, run information and user data. The backend uses KeystoneJS 6 which is a relatively unknown backend but suits our small needs perfectly.

### Broadcast graphics

These graphics have been constantly evolving since ASM2020 and have much more room to grow. They run off NodeCG, a graphics backend that allows developers to create broadcast graphics and controllers using web tools and frameworks. The graphics use React and Styled-Components with the designs being mocked up in figma before being developed.

The graphics are able to connect to the donation site (depends on who we are raising money for), show who is talking, connect to our Behringer X32 mixer, infinitely repeating ticket and more.

The graphics can also connect to our backend for donation challenge information, run information and user information.

The layouts must also be made bespoke for each event as there have been many aspect ratios used over the years in gaming. Currently this includes: 16:9, 16:9 2 player race, 16:9 3 player race, 4:3, 4:3 race, 16:10, Nintendo 3DS, Nintendo DS, Nintendo DS 2 player race, Gameboy Advance, Gameboy Colour, 11:8.

### Design

I am the designer for all of AusSpeedruns. I did not come up with the initial brand design but have expanded it for use in the website, social media posts and press kits.
