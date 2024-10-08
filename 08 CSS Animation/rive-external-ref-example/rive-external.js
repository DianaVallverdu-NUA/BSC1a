
      
// create a new JS object called 'r' which holds a new instance of Rive
const r = new rive.Rive({

  // specify the source of the .riv file
  src: "https://twiyks.github.io/rivetest/start_button.riv",
  
  // find the DOM element called 'canvas' that we created earlier and attach the Rive canvas to it
  canvas: document.getElementById("canvas"),
  
  // set autoplay to true
  autoplay: true,
  
  // specify which state machine inside the Rive file should be loaded by default
  stateMachines: "startSM",
  
  // when loaded, apply the rive file to the canvas
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
