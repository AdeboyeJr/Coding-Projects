# WebXR

## Author: Adeboye Adegbenro Jr.

#### Description

This project builds on the ThreeJS Lesson 4 source code to create an immersive WebXR VR session. The VRButton JavaScript program prepares the VR session of the compatible device. Demo the web application using an oculus device or an oculus emulator through the desktop browser.


#### Implementation

The VRButton JavaScript file creates a button that will trigger the VR session. A call is made to the WebXR API through an asychronous call known as a JavaScript promise The anonymous function called by the promise is passed a boolean data type as an argument. The function starts the process of building a VR session if the browser supports a VR session. If not, a message is sent to the user signaling the browser does not support VR content.

The responsibilities of the main function are divided between the init and animate functions. Several const variables are made global to be accessible to both functions.
 

The project makes use of the singleton design pattern to encapsulate the functionality of the VR Button. This allows the main JavaScript code to run all the functions that is available in the VRButton script. VRButton adds event listeners to the page to detect user input for starting a VR session.

The setAnimationLoop function is the WebXR equivalent to the standard requestAnimationFrame function. The setAnimationLoop function is passed the render call back function to continually redraw the VR scene.

```javascript
function animate() {
    gl.setAnimationLoop(render);
}
```

#### Dependencies

You will need NodeJS and the package manager npm. Install the ThreeJS source code using npm into the project folder. You also need to have a web server such as Liver Server to deploy the project on your local host. You will also need a browser that suppots VR content through a compatible VR device or through an desktop emulator. To connect an oculus device to your computer, you need to have the oculus adb driver installed on your system. Once installed, become a developer through your oculus account and activate developer mode on your oculus device. Next, authorize your oculus device to connect to your computer through adb. 

For opening the project site through the oculus browser, you need to perform port forwarding. On your desktop browser, navigate to the url: 

```
[browser-name]://inspect/#devices
```

In the Devices section, click on the Discover USB devices button. Then click on the port forwarding button to open the settings popup. Set up a listening port for the host address and post number you used to launch the project on your local server. As an example:

```
localhost:5500
```

Make sure the port forwarding tab is left open to maintain the connection for the oculus browser.
