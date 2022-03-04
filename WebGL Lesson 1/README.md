# OpenGL

## Author: Adeboye Adegbenro Jr.

#### Description

A project made in WebGl that demonstrates the capabilities of the WebGL API on a web browser. This project showcases the built-in functionality of the API.

#### Implementation

This project makes use of JavaScript and GLSL (Graphics Library Shading Language) to render graphics onto the browser page. The scripts make use of the DOM API to access the canvas HTML element to render graphics. The vertex shader and fragment shader scripts are written in GLSL, and compute the positions of vertices and color respectively. Coordinates for the vertices of the polygon are saved to a buffer and the vertex and fragment shaders are compiled and linked. The WebGL API connects to the device's GPU to run the shader scripts. The array containing the vertex coordinates are ordered in counter-clockwise order for the renderer to draw a filled polygon. Computed shape is a red square. 


#### Dependencies

You will need an internet browser that supports WebGL (OpenGL ES) to run the project. To deploy the project to the local host server, use a webserver like Liver Server.