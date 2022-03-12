
main();
function main() {
    function EnterVR() {
        button.innerHTML = 'Enter XR';
        var currentSession = null;
    
        function onSessionStarted(session) {
            
        }
    
        let sessionInit = {
            optionalFeatures : ["local-floor", "bounded-floor"]
        };
    
        button.onclick = () => {
            navigator.xr
                .requestSession('immersive-vr', sessionInit)
                .then(onSessionStarted);
        }
    
    
    }
    
    function NotFound(){
        console.log('immersive-vr mode not found');
    }
    
    if (navigator.xr) {
        var button = document.createElement("button");
        navigator.xr.isSessionSupported('immersive-vr')
            .then(function(supported) {
                if (suported) { EnterVR() }
                else { NotFound(); }
            });
    } else {
        if (window.isSecureContext === false){
            console.log('WebXR needs HTTPS');
        } else {
            console.log('WebXR not available');
        }
    
        return;
    }
}



