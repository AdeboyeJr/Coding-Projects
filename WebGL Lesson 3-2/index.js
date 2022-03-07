main(); 
function main() {
    /*========== Create a WebGL Context ==========*/

    const canvas = document.querySelector("#c");

    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.log('WebGL unavailable');
    } else {
        console.log('WebGL is good to go');
    }

 
    /*========== Define and Store the Geometry ==========*/


    const squares = [
        // front face
        -0.3, -0.3, -0.3,
        0.3, -0.3, -0.3,
        0.3, 0.3, -0.3,

        -0.3, -0.3, -0.3,
        -0.3, 0.3, -0.3,
        0.3, 0.3, -0.3,

        // back face
        -0.2, -0.2, 0.3,
        0.4, -0.2, 0.3,
        0.4, 0.4, 0.3,

        -0.2, -0.2, 0.3,
        -0.2, 0.4, 0.3,
        0.4, 0.4, 0.3,

        // top face
        -0.3, 0.3, -0.3,
        0.3, 0.3, -0.3,
        -0.2, 0.4, 0.3,

        0.4, 0.4, 0.3,
        0.3, 0.3, -0.3,
        -0.2, 0.4, 0.3,
    ];


    // buffer
    const origBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, origBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(squares), gl.STATIC_DRAW);

    const squareColors = [
        0.0, 1.0, 1.0, 1.0,
        1.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,

        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,

        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
    ]

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(squareColors), gl.STATIC_DRAW);


    /*========== Shaders ==========*/

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

    const fsSource = `
        varying lowp vec4 vColor;
    
        void main() {
            gl_FragColor = vColor;
        }
        `;

    // create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertexShader, vsSource);
    gl.shaderSource(fragmentShader, fsSource);

    // compile shaders
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        alert('An error occured compiling the shaders: ' + gl.getShaderInfoLog(vertexShader));
        gl.deleteShader(vertexShader);
        return null;
    }
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        alert('An error occured compiling the shaders: ' + gl.getShaderInfoLog(fragmentShader));
        gl.deleteShader(fragmentShader);
        return null;
    }

    // create program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // link program
    gl.linkProgram(program);
    gl.useProgram(program);

    let cubeRotation = 0.0
    let then = 0;

    function render(now) {
        now *= 0.001; // convert milliseconds to seconds
        let deltaTime = now - then;
        then = now;

        //note: glmatrix.js always has the first argument as the destination to receive the result.
        const fieldOfView = 45 * Math.PI / 180; // in radians
        const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();

        mat4.perspective(projectionMatrix,
            fieldOfView,
            aspect,
            zNear,
            zFar);

        /*========== Connect the attribute with the vertex shader ===================*/       
        const posAttribLocation = gl.getAttribLocation(program, "aPosition");
        gl.bindBuffer(gl.ARRAY_BUFFER, origBuffer);
        gl.vertexAttribPointer(posAttribLocation, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(posAttribLocation);

        const colorAttribLocation = gl.getAttribLocation(program, "aVertexColor");
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.vertexAttribPointer(colorAttribLocation, 4, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(colorAttribLocation);

        const projMatrixLocation = gl.getUniformLocation(program, 'uProjectionMatrix');
        gl.uniformMatrix4fv(projMatrixLocation, false, projectionMatrix);

        const modelMatrixLocation = gl.getUniformLocation(program, 'uModelViewMatrix');
        const modelViewMatrix = mat4.create();
        mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -2.0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation, [0, 0, 1]);
        mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation, [0, 1, 0]);
        gl.uniformMatrix4fv(modelMatrixLocation, false, modelViewMatrix);
     

            
        /*========== Drawing ========================*/
        gl.clearColor(1, 1, 1, 1);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // Draw the points on the screen
        const mode = gl.TRIANGLES;
        const first = 0;
        const count = 18;
        gl.drawArrays(mode, first, count);
        cubeRotation += deltaTime;
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
    
    


}