# Tic-Tac-Toe

This app was created as a practice tech test during week 9 of Makers' Academy

## Instructions
The rules of tic-tac-toe are as follows:

There are two players in the game (X and O)
Players take turns until the game is over
A player can claim a field if it is not already taken
A turn ends when a player claims a field
A player wins if they claim all the fields in a row, column or diagonal
A game is over if a player wins
A game is over when all fields are taken
Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## Solution
![screenshot](https://imgur.com/a/VupbH "Screenshot of the finished game")

#### Logic:
My approach to the logic was to build Game and Player. Game would instantiate with two instances of Player, X and O. Each time a player selected a square, it would be added to the game's used squares array and the player's selected squares array. To check whether a player had won, I decided to loop through an array of the eight winning combinations of squares and see if the player's selected squares array contained all three squares of any combination.

Given more time, I would like to replace the Game's used squares and Players' selected squares array with a single hash of all squares and their 'claimer', in order to avoid storing the same information twice.

#### Front end:
For the front-end I used JQuery to replace elements of the page as players clicked on squares. Each time a square was selected, their X/O appears on the board and a turn highlighter at the bottom of the page switches to show whose turn it is.

## How to run
Clone this repo and copy the index.html file into your browser to play.
