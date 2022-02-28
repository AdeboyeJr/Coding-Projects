# Three JS Project
## Author: Adeboye Adegbenro Jr.

#### Description

A demonstration of the Three JS JavaScript Library. Three JS is a library that uses WebGL to produce dynamic computer graphics on the web. This project showcases a template portfolio webpage with some simple geometry.

#### Implementation

This project is made using the Vanilla JavaScript framework. The main script constructs a scene to render the 3D graphics. The script instantiates the camera and places it into the scene to create perspective. A WebGL renderer selects the canvas from the HTML document to display the graphics on the page. The renderer sets the its size using the device window's pixel ratio and size. The script places the virtual camera at 30 units in the Z axis.

The main script instantiates several meshes and lights and places them into the scene. The function AddStar instantiates stars and random locations using the Three JS library's randomFloatSpread method from MathUtils object.

```javascript
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25);

  const material = new THREE.MeshStandardMaterial(0xffffff);

  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z);
  scene.add(star);
}
```

To update the screen for animation and handling user inputs, the animate function accesses the renderer to redraw the scene. The OrbitControls library allows for rotating the scene and zooming.

```javascript
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;

  controls.update();

  renderer.render(scene, camera);
}
```

Last, the moveCamera function uses the page DOM to select the body. The function then determines how far away from the top of the page the user is to determine the position of the camera. The more the user scrolls on the page, the farther the camera moves away from its starting point.

```javascript
function moveCamera() {

  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  kirby.rotation.y += 0.01;
  kirby.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;


}
```

#### Dependencies

For this project, you will need to have the package manager npm installed. You will also need to import the Three JS library using npm.
