#pragma strict

//Variables
var headBobSpeed: float;
var headBobStepCounter: float;
var lastPos: Vector3;
var headBobAmountX: float;
var headBobAmountY: float;


//Initialize
lastPos = transform.position;

//functions
function HeadBob() {
    headBobStepCounter += Vector3.Distance(lastPos, transform.position) * headBobSpeed;

    transform.localPosition.x = (Mathf.Sin(headBobStepCounter))* headBobAmountX;
    transform.localPosition.y = ((Mathf.Cos(headBobStepCounter * 2)) * headBobAmountY *-1);

    lastPos = transform.position;
}

//Frame update
function update() {
    HeadBob();
}
