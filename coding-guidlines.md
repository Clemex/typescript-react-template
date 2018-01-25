# Coding Guidelines

## Lots of Small Components 

Treat you application components like a library for your application:

"Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component." 

https://reactjs.org/docs/components-and-props.html

## Usage of Const

Prefer `const` over `let` over `var`

## Functions over Methods

Prefer functions over methods. 

## Avoid Boilerplate

In accordance to the DRY principles. 

## Document your Code

Make your code completely obvious to a newcomer, or document it.

## Centralize Coupling to Libraries

Don't scatter the dependency on a library throughout your application. 

## Replicate the Problem Domain

## Avoid State

However state in a React component, is not actually state.
