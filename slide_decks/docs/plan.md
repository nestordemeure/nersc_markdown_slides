# Slide Plan

## What is this?

Markdown based slides
written in markdown
then compiled to html / pdf / pptx / etc

using Marp (but there are alternatives)

## Why would we care?

version control!
an history of previous versions
branches
issues
PR

easily modified by coding assistants (ie claude code):
great when needing to write slides while holding a baby in one hand
grammar / spell check
translation

easily enforced style over all slides!
(not sure i like that given that i use a non-standard style...)

we could do exotic stuff like testing some code blocks at build / push time...

## What can we do with it?

various slide types (as you saw in the previous slides)

pictures

code (with colors!)

formulas (in latex!)

plots (with??? having raw data straight into the repo)

mermaid diagram? (did not try, i think i need a plugin for that)

and more! the engine can be moded fairly easily which i did to get...
* QR codes!
* colored pro/con bullets! (I really like those...)

## Okay, what are we losing?

no real time interaction (google slides style)

less styling and fine grained control on item placement
(adding a last minute block of text somewhere on top of a figure might be a pain...)

less approacheable to non tech people
(its markdown)

html export need either the images available online, or in the local system
-> not for NDA things

## Conclusion and perspective

It works!
I ported my JAX workshop slides to it
I will try and use it for my upcoming slide decks

Its very much a proof f concept
* feel free to play with it, submit issues and PR!
  * i am using a theme mimicking my prefered google slides theme, we could put together an official(-looking) theme
  * porting other people's slides would be a good exercice in feasability