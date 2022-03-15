# A-Frame

## Author: Adeboye Adegbenro Jr.

#### Description

A project that uses the A-Frame framework to abstract the rendering details of ThreeJS and WebGL. Create a scene with objects using A-Frame elements. Reuse attributes using A-Frame custom components.

#### Implementation

In the HTML file, the a-scene element creates a scene with a renderer, camera and a reference to the canvas. A-frame supports unique elements for instantiating geometries like planes, cubes and the sky. The generic element a-entity can instantiate other objects in the scene or define new geometrys. Attributes for elements can be created using A-Frame's custom components. 

To create a component, a script in the HTML head tag accesses the A-Frame framework's registerComponent function. This function takes the name of the attribute as well as an anonymous object for defining the component's properties and behavior. The schema defines the components properties. Properties in a schema have a name, a property type and a default value.

```javascript
AFRAME.registerComponent('texture-loader', {
    schema: {
        src: {},
        material_tex: {},
        mesh: {},
        texture: {},
        normal: {type: "boolean"},
        normal_src: {},
        wrap: {type: "boolean", default: false},
        repeat: {type: "boolean", default: false}
    },
```

Init and Update are lifecycle handler functions. Init is called when the component is first applied to the entity. A majority of the actions that will persist after the component is initialized is housed in the update function.


 ```javascript
AFRAME.registerComponent('texture-loader', {

    init: function () {
                console.log('initialized');
            },
    update: function () {
        this.data.texture = new THREE.TextureLoader().load(this.data.src);
        this.data.texture.anisotropy = 16;
        this.data.texture.minFilter = THREE.NearestFilter;
        this.data.texture.maxFilter = THREE.NearestFilter;
    }
}
 ```

#### Dependencies

You will need to import the A-Frame framework from this source:

```
https://aframe.io/releases/1.0.4/aframe.min.js
```

Embed the script within the head element of the HTML document.

For deploying the project on your local host, you will need a web server such as Live Server. To debug the appplication on a VR device, have adb (Android Debug Bridge) installed on the system and authorize the VR device. Next, open devTools through:

```
[browser-name]://inspect/#devices
```

In devTools, define the port that is running on the local host for port forwarding. Then on the VR device, navigate to the local host address and port using the device's web browser to launch the project.
 
