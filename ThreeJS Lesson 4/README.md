# ThreeJS Lesson 4

## Author: Adeboye Adegbenro Jr.

#### Description

Project uses the Three JS module to simplify computer graphics done in WebGL. A 3D scene is rendered onto the canvas and a simple cube geometry is constructed onto the scene. The cube is given a material and mesh for rasterization. A directional light is added to the scene due to the lighting model. All meshes must have a light source in order to be visible in the renderer. The draw function is called recursively and animates the scene. Sphere and plane geometries are included in the scene to accompany the cube. Texture is drawn onto the plane through uv maps.

#### Implementation

The main function selects the canvas element to render the 3D scene. A WebGL renderer is instantiated that simplifies the rendering and geometry construction process using ThreeJS. Next, a camera that comes with a perspective matrix is instantiated and positioned. The next step is to create the scene data structure that will hold all the objects to be rendered. Geometry for the cube, sphere and plane are instantiated. Then, the program loads texture data and creates phong and lambert meshes. A directional light that forms parallel light rays from a starting point infinitely far away is added to the scene. 

Binding textures, materials and geometry together forms mesh objects. Meshes operate under the lighting model, where the amount of light an object reflects determines how it is rendered in the scene.

The last step is to draw the scene. The draw function serves as a callback function to requestAnimationFrame(). In every frame in the canvas, the objects in the scene are updated to simulate movement.

To ensure that the display remains sharp, the resizeGLToDisplaySize function takes the gl object as an argument and resizes the display if the canvas size is not equal to the canvas client size.

```javascript
function resizeGLToDisplaySize(gl) {
    const canvas = gl.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width != width || canvas.height != height;
    if (needResize) {
        gl.setSize(width, height, false);

    }

    return needResize;
}
```

This function returns a boolean that will indicate that the camera's aspect ratio needs to be updated.

```javascript
if (resizeGLToDisplaySize(gl)) {
    const canvas = gl.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
}
```



#### Dependencies

You will need NodeJS and the package manager npm. Install the ThreeJS source code using npm into the project folder. You also need to have a web server such as Liver Server to deploy the project on your local host.
