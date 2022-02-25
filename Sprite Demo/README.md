# Sprite Demo
## Author: Adeboye Adegbenro Jr.


#### Description

This project is a product of the tutorial by Clear Code. It is a shooter game in which you shoot targets to rack up points. Target positions are randomly generated. The mouse becomes a crosshair that you use to aim and shoot a target.


#### Implementation

The game consists of two classes that inherit from Pygame's Sprite class, Crosshair and Target. Crosshair uses the Sprite class' built in update method to update the position of the crosshair icon with the mouse coordinates. It also includes two constant variables that respresent the two states the crosshair can take. One for an idle state and one for shooting. Crosshair transitions between these two states on the event of a mouse click. Crosshair also implements a shoot method that detects collision with other sprite objects on the screen. Sprites that collide with Crosshair will vanish when the player shoots. During this process, the count of targets shot will increment.

The Target Class is initialized with an image path and x,y coordinates. Before the game loop begins, Target sprite locations are randomly generated using the randrange function from Python's random module. Instances of the Crosshair and Target classes are added to sprite groups for the screen to render the sprites.

This project implements Python's pygame library and makes use of different assets to reprent game elements and sound effects.

#### Dependencies

To run this program, you will need to have pygame installed.

#### Reference

You can watch the Clear Code video on using Pygame Sprites [Here](https://www.youtube.com/watch?v=hDu8mcAlY4E)
