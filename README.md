![logo](https://user-images.githubusercontent.com/60095327/86928629-194b1580-c135-11ea-93e2-006e52f71a09.png)

## Soaring Flocks | a game for capitalist fowl

![Screenshot from 2020-07-08 16-13-23](https://user-images.githubusercontent.com/60095327/86929310-fcfba880-c135-11ea-9f83-3b04c6dffa08.png)
![Screenshot from 2020-07-08 16-14-26](https://user-images.githubusercontent.com/60095327/86929639-58c63180-c136-11ea-89b0-a21b23b71cd8.png)
![Screenshot from 2020-07-08 16-16-01](https://user-images.githubusercontent.com/60095327/86929648-5b288b80-c136-11ea-900f-262c68a4bb4c.png)
![Screenshot from 2020-07-08 16-39-41](https://user-images.githubusercontent.com/60095327/86932560-d3dd1700-c139-11ea-9adf-77404dc1de7e.png)
![Screenshot from 2020-07-08 16-15-11](https://user-images.githubusercontent.com/60095327/86929652-5c59b880-c136-11ea-83c1-3522ab4e3590.png)
![Screenshot from 2020-07-08 16-39-58](https://user-images.githubusercontent.com/60095327/86932566-d50e4400-c139-11ea-90c4-07adefc68f15.png)
![Screenshot from 2020-07-08 16-40-31](https://user-images.githubusercontent.com/60095327/86932573-d63f7100-c139-11ea-87ce-7e63edd01c59.png)
![Screenshot from 2020-07-08 16-40-51](https://user-images.githubusercontent.com/60095327/86932577-d7709e00-c139-11ea-84b3-c17053a02c54.png)

## About

[Check out working version](https://soaring-flocks.netlify.app/gameInfo)

Soaring flocks is a game where players take on the role of capitalist birds to generate, spend and trade resources. A game lasts for 15 days, with one-day turns. Each day at midnight, players' resources are updated, after which they can invest or trade those resources at liberty. Players can also chat with eachother. Be sure to collect the most victory points before the game is over!

## Table of contents

- [App demo](#app-demo)
- [Used technologies](#used-technologies)
- [Project goals](#project-goals)
- [Game rules](#game-rules)
- [Datamodel, wireframe, projectboard](#datamodel-wireframe-projectboard)
- [Upcoming features](#upcoming-features)
- [Backend repository](#backend-repository)

## App demo

![login_chat](https://user-images.githubusercontent.com/60095327/87020794-a72a0d80-c1d4-11ea-94dc-172db99f750e.gif)
![market_attack](https://user-images.githubusercontent.com/60095327/87020816-b01adf00-c1d4-11ea-8eae-57e0653ecdb2.gif)
![trade](https://user-images.githubusercontent.com/60095327/87020840-b90bb080-c1d4-11ea-9db7-02e72d2aae25.gif)

## Used technologies

- React
- React bootstrap
- Redux
- GraphQL queries, mutations, subscriptions
- ApolloGraphQL client
- ApolloGraphQL server
- Cron
- Sequelize

## Project goals

The goal of this project was to build a full-stack app, using both new and already known technologies. I learned new tools by following guides, reading documentation, watching videos and trial and error.

I wanted to make something original, allowing me to be creative and conceptualize. While the gameplay of Soaring Flocks is an important aspect of this project, I wanted to learn and apply more than just gameplay. Features like login/signup and a chatbox are cornerstones to Soaring Flocks, along with the gameplay itself. Having users interact with a flavorful and enjoyable environment was also of great importance.

Working with GraphQL was completely new for me, and I've grown to quite like it. I built signup/login and subscriptions from the ground up and I am planning to build more subscriptions for upcoming versions.

Software is never finished, and Soaring Flocks is no different.

## Game Rules

Find rules here: [rules](https://github.com/Djimovanberlo/soaring-flocks-client/blob/master/RULES.md)

## Datamodel, wireframe, projectboard

The [datamodel](https://github.com/Djimovanberlo/soaring-flocks-client/blob/master/Soaring%20Flocks%20dataModel.png), [wireframe](https://github.com/Djimovanberlo/soaring-flocks-client/blob/master/Soaring%20Flocks%20wireframes.png) and [projectboard](https://github.com/Djimovanberlo/soaring-flocks-client/projects/1) I used to to work on this project. Note that not all features have been added yet.

## Upcoming features

- After a game, the final score of players is displayed.
- Players can create a game, add other players and start their game. Whichever player has the most Victory Points by the end of the game, wins.
- The page no longer refreshes on handling trades and attacks, but is directly
  subscribed to changes make to trades and attacks.
- Players can chat one on one.
- Styling improvements.

## Backend repository

The backend of this project was built using Apollo server and Sequelize with postgres database. [click here to view backend repo](https://github.com/Djimovanberlo/soaring-flocks-server/tree/master).

Thanks to Jan Gunster for drawing avatars.
