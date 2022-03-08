# OpenGL Lesson 3-2

## Author: Adeboye Adegbenro Jr.

<a href="https://www.javascript.com/"> ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)</a> <a href="https://html.spec.whatwg.org/multipage/">![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)</a>

#### Description

A project made in WebGL that demonstrates the capabilities of the WebGL API on a web browser. This project showcases the built-in functionality of the API. An extension on the previous lesson where the WebGL pipeline is now extended to accept 3 coordinates for vertices. This is for mapping out points in the third dimension. Color is mapped onto each vertex and the WebGL pipeline binds the color with each vertex and interpolates colors inbetween vertices. The next step is for transformations. This is the act of translating, rotating or scaling the model on the screen. The program uses a 4D matrix to calculate the vertex locations after a transformation. The program uses the browser's refresh rate to animate the scene. The last addition is the perspecive matrix for adding depth to the scene.

#### Implementation

This project makes use of JavaScript and GLSL (Graphics Library Shading Language) to render graphics onto the web page. The scripts make use of the DOM API to access the canvas HTML element to render graphics. The vertex shader and fragment shader scripts are written in GLSL, and compute the positions of vertices and color respectively. The process of generating graphics through WebGL is by making use of a state machine. 

A constant pipeline is fed data that computes the location of vertices and their color. The first step is to create the WebGL context by accessing the canvas element on the page. Next, define and store the geometry in the scene. This is to model out the different shapes that need to be rendered. Vertex and color data are contained in seperate buffers.

Then, the vertex and fragment shaders are defined and compiled. The vertex shader determines the positioning of the vertices and their color. The program that handles the rendering of the scene is instantiated. Then the arrays for the vertex positions and color are binded with the vertex and fragment shader respectively.

The program then draws the scene by constructing triangles for each face. Vertices are fed into the WebGL state machine through the buffer and the number of vertices is specified.

The program invokes requestAnimationFrame, a higher-order function that calls the render function. Render is a callback function that keeps track of the current time as well as the time of the last draw.

```javascript
 function render(now) {
        now *= 0.001; // convert milliseconds to seconds
        let deltaTime = now - then;
        then = now;
```

The program rotates the cube by the degrees specified by cubeRotation

```javascript
const modelMatrixLocation = gl.getUniformLocation(program, 'uModelViewMatrix');
const modelViewMatrix = mat4.create();
mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation, [0, 0, 1]);
gl.uniformMatrix4fv(modelMatrixLocation, false, modelViewMatrix);
```

The render function updates the amount of rotation by the change in time since the last draw. The higher order function, requestAnimationFrame makes a recursive call on the render function.

```javascript
// Draw the points on the screen
const mode = gl.TRIANGLES;
const first = 0;
const count = 18;
gl.drawArrays(mode, first, count);
cubeRotation += deltaTime;
requestAnimationFrame(render);
```

A projection matrix is multiplied with the model view matrix and the vertex position to ensure that parallel lines converge to a vanishing point. This creates a sense of depth on the flat display.
`
```javascript
const vsSource = `
attribute vec4 aPosition;
attribute vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying lowp vec4 vColor;

void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aPosition;
        vColor = aVertexColor;
}
`;
```

The projection matrix is included in the scene and the cube is translated back into the view frustrum to avoid culling. A rotation matrix around the x axis is included to showcase the depth of the partial cube.



#### Dependencies

You will need a browser that is compatible with JavaScript and the WebGL API. You will also need a web server such as Liver Server to deploy the project on your local host.