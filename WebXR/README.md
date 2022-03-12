# WebXR

## Author: Adeboye Adegbenro Jr.

#### Description

This project builds on the ThreeJS Lesson 4 source code to create an immersive WebXR VR session. The VRButton JavaScript program prepares the VR session of the compatible device. 


#### Implementation

The VRButton JavaScript file creates a button that will trigger the VR session. A call is made to the WebXR API through an asychronous call known as a JavaScript promise The anonymous function called by the promise is passed a boolean data type as an argument. The function starts the process of building a VR session if the browser supports a VR session. If not, a message is sent to the user signaling the browser does not support VR content.

The responsibilities of the main function are divided between the init and animate functions. Several const variables are made global to be accessible to both functions.
 

The project makes use of the singleton design pattern to encapsulate the functionality of the VR Button. This allows the main JavaScript code to run all the functions that is available in the VRButton script. VRButton adds event listeners to the page to detect user input for starting a VR session.

#### Dependencies

You will need NodeJS and the package manager npm. Install the ThreeJS source code using npm into the project folder. You also need to have a web server such as Liver Server to deploy the project on your local host. You will also need a browser that suppots VR content through a compatible VR device or through an desktop emulator.
