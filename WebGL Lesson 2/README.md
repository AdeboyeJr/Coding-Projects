# OpenGL Lesson 2

## Author: Adeboye Adegbenro Jr.

#### Description

A project made in WebGl that demonstrates the capabilities of the WebGL API on a web browser. This project showcases the built-in functionality of the API. An extension on the previous lesson where the WebGL pipeline is now extended to accept 3 coordinates for vertices. This is for mapping out points in the third dimension. Color is mapped onto each vertex and the webgl pipeline binds the color with each vertex and interpolates colors inbetween vertices.

#### Implementation

This project makes use of JavaScript and GLSL (Graphics Library Shading Language) to render graphics onto the browser page. The scripts make use of the DOM API to access the canvas HTML element to render graphics. The vertex shader and fragment shader scripts are written in GLSL, and compute the positions of vertices and color respectively. The process of generating graphics through WebGL is by making use of a state machine. 

A constant pipeline is fed data that computes the location of vertices and their color. The first step is to create the WebGL context by accessing the canvas element on the page. Next, define and store the geometry in the scene. This is to model out the different shapes that need to be rendered. Vertex and color data are contained in seperate buffers.

Then, the vertex and fragment shaders are defined and compiled. The vertex shader determines the positioning of the vertices and their color. The program that handles the rendering of the scene is instantiated. Then the arrays for the vertex positions and color are binded with the vertex and fragment shader respectively.

Finally, the program draws the scene by constructing triagnes for each face. Vertices are fed into the WebGL state machine through the buffer and the number of vertices is specified.

#### Dependencies

You will need a browser that is compatible with JavaScript and the WebGL API. You will also need a web server such as Liver Server to deploy the project on your local host.