# Sudoko
Sudoko Puzzle for Graphical Application Design Class

This was a Sudoko puzzle made in C# using WinForms. 

A video of this project can be seen [here.](https://www.youtube.com/watch?v=5hUSE0_69rw)

The start menu of the game
![Start Menu](https://github.com/hcombs/Sudoko/blob/master/images/1.png?raw=true "Start Menu")

Upon selecting new game you can specifiy difficulty
![Difficulty](https://github.com/hcombs/Sudoko/blob/master/images/2.png?raw=true "Difficulty")

After selecting a difficulty setting the Sudoko game starts. There is a second timer at the bottom of the puzzle. The menu options "New game" and "Load Game" have changed to "I give up" and "Save Game"
![Start game](https://github.com/hcombs/Sudoko/blob/master/images/3.png?raw=true "Start Game")

Pressing the "I give up" button solves the puzzle for you and the menu options revert back to their original state.
![Give Up](https://github.com/hcombs/Sudoko/blob/master/images/4.png?raw=true "Give Up")

Alternatively pressing the "Save Game" button saves your progress and displays a message to the user informing them that the game was saved. 
![Save Game](https://github.com/hcombs/Sudoko/blob/master/images/5.png?raw=true "Save Game")

Pressing the "Load Game" button brings back your progress on the saved puzzle and you can continue to play
![Load Game](https://github.com/hcombs/Sudoko/blob/master/images/6.png?raw=true "Load Game")

Pressing the quit button exits the program.

#Updates 1/18/16

I noticed that I have some methods that repeat themselves. As an example, The mouse hover and leave events for all buttons have their own event handlers as seen in the image below

![Event Functions](https://github.com/hcombs/Sudoko/blob/master/images/original.png?raw=true "Event Functions")




