import * as THREE from "./node_modules/three/build/three.module.js"

// global scene values
var btn, gl, glCanvas, camera, scene, renderer, cube;

// global xr value
var xrSession = null;

function loadScene() {
    // setup the WebGL context and the components of a Three.js scene
    glCanvas = document.createElement('canvas');
    gl = glCanvas.getContext('webgl', {antialias: true});

    // setup the Three.js scene
    camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        1000
    );
    
    scene = new THREE.Scene();

    var geometry = new THREE.BoxBufferGeometry(0.2, 0.2, 0.2);
    var material = new THREE.MeshPhongMaterial({color: 0x89CFF0});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({
        canvas: glCanvas,
        context: gl
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

}

function init() {
    // kickoff the execution of the script
    navigator.xr.isSessionSupported('immersive-ar')
        .then((supported) => {
            if (supported) {
                // create button element ot advertise XR
                btn = document.createElement("button");
                
                // add 'click' event listener to button
                btn.addEventListener('click', onRequestSession);
                btn.innerHTML = "Enter XR";
                var header = document.querySelector("header");
                header.appendChild(btn);
            } else {
                // create fallback session
                navigator.xr.isSessionSupported('inline')
                    .then((supported) => {
                        if (supported) {
                            console.log('inline session supported');
                        } else {
                            console.log('inline not supported');
                        }
                    })
            }
        })
        .catch((reason) => {
            console.log('WebXR not supported: ' + reason);
        })
}

function onRequestSession() {
    // handle the XR session request
}

function onSessionStarted() {
    // handle the XR session once it has been created
    console.log('starting session');

    btn.removeEventListener('click', onRequestSession);
    btn.addEventListener('click', endXRSession);

    btn.innerHTML = "STOP AR";

    xrSession = session;
    setupWebGLLayer()
        .then(() => {
            renderer.xr.setReferenceSpaceType('local');
        })
}

function setupWebGLLayer() {
    // connect the WebGL context to the XR session
    return gl.makeXRCompatible().then(() => {
        xrSession.updateRenderState(
            {baseLayer: new XRWebGLLayer(xrSession, gl)}
        );
    });
}

function animate() {
    // begin the animation loop
}

function render(time) {
    // issue the draw command to the GPU
}

function endXRSession() {
    // terminate the XR session
}

function onSessionEnd() {
    // handle the 'end' event of the XR session
}