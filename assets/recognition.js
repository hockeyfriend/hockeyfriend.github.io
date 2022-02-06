const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const drawingCanvas = document.getElementById('drawing');
const drawing = drawingCanvas.getContext('2d');
let oldTip = false;
let oldTipPos = null;

function clearing(){
  drawing.clear();
}

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks) { 
    for (const landmarks of results.multiHandLandmarks) {
      console.log(landmarks[8].y);
      if (landmarks[6].y>landmarks[8].y){
	      console.log("Opend");
	      console.log(oldTip);
	      if (oldTip){
		  console.log("I'm drawing");
		    // set line stroke and line width
		    drawing.strokeStyle = 'black';
		    drawing.lineWidth = 5;

		    // draw a red line
		    drawing.beginPath();
		    drawing.moveTo(640-oldTipPos.x*640, oldTipPos.y*480);
		    drawing.lineTo(640-landmarks[8].x*640, landmarks[8].y*480);
		    drawing.stroke();
	      } else {
	          oldTip = true;
	      }
	      oldTipPos = landmarks[8];
      }else { 
	      console.log("closed"); 
              oldTip = false;
      }
	    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
    }
  }
  canvasCtx.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width: 640,
  height: 480 
});
camera.start();
