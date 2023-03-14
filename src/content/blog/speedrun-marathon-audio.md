---
title: Speedrun Marathon Audio
publishDate: 2023-03-13 23:41:00
description: |
  It's way more complex than you think
tags:
  - Broadcast
  - Audio
  - Speedrun
draft: false
---

## Disclaimer

I am not an audio engineer. I researched, learned and problem solved this stuff before ASM 2022. I have the most basic knowledge of audio equipment from just being interested in production environments. If you have better (or more cost effective) ways of solving these problems please reach out!

## What is needed

Speedrun marathons need to be quite flexible in how audio is managed. The most basic setup is an online marathon with 1 runner, 1 game and the host. This is pure bliss. If this is the setup we could easily just take all the inputs in, mix it together and feed it back to them and the stream. But for in-person marathons, things are not so easy... In the worst case scenario we would have 4 runners each on a different game with a host, and audio needing to be outputted to both stream and speakers. This makes things much more annoying and expensive.

### The mixes

So first of all the livestream and the speakers need their own separate mixes. I discovered this at ASM 2022 when the game audio on the speakers *(well they were really just a [big webcam](https://www.logitech.com/en-au/products/video-conferencing/conference-cameras/meetup-conferencecam.960-001101.html))* could barely be heard but the stream could hear the game just fine. All 4 of the runners would need different mixes because they need to hear their games but not each others (they also would have preferences on how loud or quiet they want things to be). Host might also need their own mix, though this could be the stream mix.

The best part, all of this should be in stereo which means we have to double the amount of mixes/buses there needs to be. *(Though GDQ does do their online events as mono, but I think that's a compromise to be able to mix the voice and gameplay)*

### The inputs

#### Game audio

Then comes the fun with the game audio. Since the mixer needs the game audio we have to figure out a way to take the audio from the capture card and put it into the mixer. For ASM 2022 we were using a [Focusrite Scarlett 18i20](https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-18i20) which we then used [obs-audio-monitor](https://github.com/exeldro/obs-audio-monitor) to then take audio from the capture cards going into OBS and into the audio interface. This was not ideal as it potentially introduces issues with audio delays, buffers, sample rates, disconnects, and probably more.

For ASAP 2022 we then decided to isolate audio from every other system as much as possible which involves getting the audio from the HDMI source instead of the capture card. We tried a dedicated box that does it but those overheated somehow so then our hardware coordinator, [neɪ](https://aus.social/@nei), found HDMI to VGA adaptors that have a 3.5mm output for much cheaper. They work brilliantly. The 3.5mm needs to then be converted into an input that mixers take so either 2 ¼ inch connectors or 2 XLR connectors (we went with XLR).

#### Microphones

This is much more simple but just expensive. We went with the [Audio-Technica BPHS1 Broadcast Headsets](https://www.audio-technica.com/en-au/bphs1) as they were the cheapest broadcast headsets at my local audio store. They have an XLR output for the microphone and a ¼ TRS connector for the input audio. We currently only have 4 so the max we can do is 3 runners/commentators and 1 host.

### The outputs

Outputs are a lot more simple. We have 2 outputs for our speakers, 8 for our runners and 2 for our host. (Remember stereo requires double the outputs). For our headsets these get routed to a [Behringer HA8000](https://www.behringer.com/product.html?modelCode=P0BRU) as a headphone amp (I'm not sure if this is actually necessary since we have the amps so low but just in case) and then to the headsets.

The stream doesn't get outputted as digital mixers can carry some channels over USB to the PC which we can input into OBS.

### Summary

So in total:

- Mixes (2 because 1 mix for left channel, 2 mix for right channel)
  - 2 Livestream
  - 2 Speakers / Front of House
  - 8 (2 × 4) Runners / Commentators
  - 2 Host
- Inputs
  - 8 (2 × 4) Games
  - 4 Runner microphones
  - 1 Host microphone
- Outputs
  - 8 (2 × 4) Runner headsets
  - 2 Host headset
  - 2 Speakers

That's 14 mixes, 13 inputs and 12 outputs.

## Our solution

![Our X32 Rack on my desk](/assets/blog/speedrun-marathon-audio/X32.jpg)

The [Behringer X32 Rack Digital Mixer](https://www.behringer.com/product.html?modelCode=P0AWN).

This bad boy has 16 XLR inputs, 6 AUX Ins, 6 AUX outs, 8 XLR outs and a whole lot of buses.

We chose this over a full X32 or X32 Compact because we don't *need* physical faders and those are very **VERY** big and expensive. We need to operate in the smallest footprint available which is essentially the size of a trestle table (or the width of 2 monitors if we have to).

The X32 is setup in a way so that the Main LR bus is the stream bus, Bus 1 and 2 are speakers and then buses 3 – 10 are runners and Bus 11 and 12 are Host. This leaves us with 4 left over buses for future expansion.

![X32 Edit settings](/assets/blog/speedrun-marathon-audio/x32-edit.png)

<div align="center">X32 Edit Settings</div>

## Runner tablet

The runner tablet (name still pending, I'm leaning towards the AusSpeedruns Screen) let's runners check their game information, name information such as spelling, twitch and pronouns, and for this post lets then adjust their audio levels.

This allows each runner to configure how loud or quiet they want their commentators, other runners and host. They do this through a tablet or laptop setup next to the runners, with a web interface that allows them to slide faders up and down. The names are filled in at the top to discern who is who

![The Runner Tablet (or AusSpeedruns Screen)](/assets/blog/speedrun-marathon-audio/runner-tablet.png)

![The Runner Tablet in use](/assets/blog/speedrun-marathon-audio/tablet-in-use.jpg)

<div align="center">Where we had the tablet/flip laptop at ASGX 2023. <a target="_blank" href="https://www.youtube.com/watch?v=hNS1t_EBnOM">Link to run</a></div>

## Things to remember

Our setup is complex af. The second you enter full mixer boards is also when you also get dedicated staff on to use just manage audio while this is still in the realm of our primary tech. The amount of back and forth that needs to be done by the audio is unique. Though I don't have any experience in other production audio environments, looking at how other productions need to run they tend to have more inputs and mixing rather than personalised buses that need to be run.

Delays and issues that happen are normally audio related, but each problem that arises is more knowledge on how we can solve that problem quicker.

## Improvements

There is always and will always be something to improve.

We've just wrapped up ASGX 2023 at The Game Expo. The main things we need to improve is training and placement. We literally had the rack on the ground next to the runners with cables running everywhere. This is very much not ideal.

I do not know how GDQ do their audio (I believe they also outsource it) but looking at ESA and a [BTS photo](https://pbs.twimg.com/media/FpqvkJYXgAA47Mc?format=jpg&name=large) they use a [Behringer SD8](https://www.storedj.com.au/behringer-sd8-digital-snake-i-o-box-w-8-midas-preamps) with what looks like a [Cordial CYB 12-4](https://www.cordial-cables.com/en/products/cyb-12-4). That allows them to have a few inputs and outputs near the runner while routing all the other cables far away near the tech team.

That's currently out of our budget right now so just longer cables it is :)

In terms of training that's actually part of a larger issue. I will often be developing these new workflows days before the event so I barely have any time to test let alone train. As things have been settling down though I am planning on writing up more guides and figuring out ways to train our amazing techies.

## Conclusion

It's a tough and expensive solution, but it helps us put on a really good event with a minimum amount of crew and training.

If you have any questions please reach out to me or ask in the AusSpeedruns discord
