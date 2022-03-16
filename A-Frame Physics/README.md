# A-Frame Physics

## Author: Adeboye Adegbenro Jr.

#### Description

This project showcases the physics system for the A-Frame framework. Open source scripts abstract the lower-level details for simulating collisions and gravity.

#### Implementation

An A-Frame scene is embedded into the body of the page. The a-scene element houses the renderer, a camera, and other essential building blocks for creating a VR session. The scene consists of a camera, a plane, a movable cube, and a sphere. The assets element stores mixins, which are resuable properties that can be attributed to A-Frame entities.

```html
<a-assets>
    <a-mixin id="controller"
        physics-collider            
        static-body="shape: sphere; sphereRadius: 0.02"
        super-hands="colliderEvent: collisions;
                    colliderEventProperty: els;
                    colliderEndEvent: collisions;
                    colliderEndEventProperty: clearedEls"
        collision-filter = "group: hands;
                            collidesWith: blue;
                            collisionForces: false">
    </a-mixin>
    <a-mixin id="cube" dynamic-body grabbable
        geometry="primitive: box; width: 0.5; height: 0.5; depth: 0.5">
    </a-mixin>
</a-assets>    
```

The HTML document imports libraries for physics and oculus user-interaction. Properties are set as attributes in each HTML element to define their behavior. Elements that do not respond to the force of gravity or collisions are set to static-body. Elements that do react to their environment are set to dynamic body. Generic A-Frame entities have an attribute, oculus-touch-controls, that allow for an oculus controller to be rendered onto the scene and interact with other entities.

#### Dependencies

You will need to import the A-Frame framework, Don McCurdy's physics system, and the superhands library into the HTML file. You will also need to deploy the project onto your local host using a webserver such as live server.


