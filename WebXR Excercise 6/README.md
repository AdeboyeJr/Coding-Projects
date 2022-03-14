# WebXR AR (Augmented Reality)

## Author: Adeboye Adegbenro Jr.

#### Description

Create an augmented reality web application through ThreeJS. The program uses JavaScript promises, which make asynchronous calls for controlling sessions. The program displays a 3D model onto the display in real-time. The hit-test script includes surface detection and ray-casting. 

#### Implementation

The program starts with the load scene function. Here, a canvas element is created and loaded onto the page with a WebGL context. The scene, camera, hemisphere light, cube and webgl renderer are instantiated. 

The init function is called after the scene has been created. The program checks whether the device is compatible with AR. If so, the program will initiate a promise to create a button which starts the AR session. Then the program appends the button to the header of the page. An event listener, onRequestSession, is added to the button. When a user triggers onRequestSession, the function requests an AR session in either viewer and local space and uses a JavaScript promise to call onSessionStarted.

The onSessonStarted function removes the event listener for requesting a session and adds an event listener for ending the session.

The setupWebGLLayer function is called with a JavaScript promise that animates and renders the scene.

When the End Session button is pressed, the endXRSession callback function triggers onSessionEnd. The onSessionEnd  function removes the event handler for ending a session and adds a new event handler for requesting a new session.

#### Dependencies

If not present already, you will need node.js and npm to install the ThreeJS module. You will need a web server like Live Server to deploy the project on your local host. The project can be run on a mobile device that supports Augmented Reality.

For opening the project site through a mobile device, you need to perform port forwarding. On your desktop browser, navigate to the url:

```
[browser-name]://inspect/#devices
```

In the Devices section, click on the Discover USB devices button. Then click on the port forwarding button to open the settings popup. Set up a listening port for the host address and post number you used to launch the project on your local server. As an example:

```
http://localhost:5500
```

Make sure the port forwarding tab is left open to maintain the connection for the mobile browser.