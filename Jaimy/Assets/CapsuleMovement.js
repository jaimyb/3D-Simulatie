#pragma strict

//Variables
var minimumY = -60;
var maximumY = 60;

var rotationY = 0;
var rotationX = 0;

var vertical = 0;
var horizontal = 0;

var sensetivity = 0.1;

var moveSpeedForward = 0;
var moveSpeedBack = 0;
var moveSpeedRight = 0;
var moveSpeedLeft = 0;

var function_lockForward = false;
var function_lockBack = false;
var function_lockRight = false;
var function_lockLeft = false;

var headBobSpeed: float;
var headBobStepCounter: float;
var lastPos: Vector3;
var headBobAmountX: float;
var headBobAmountY: float;

//Functions
function MouseMovement (){
	rotationX = transform.localEulerAngles.y + Input.GetAxis("MouseX") * sensetivity;

	rotationY += Input.GetAxis("MouseY") * sensetivity;
	rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);

	transform.localEulerAngles = new Vector3(-rotationY, rotationX, 0);
}

function KeyboardInput (){


	if(Input.GetKey("w")){
		moveSpeedForward = 10;
	}

	if(Input.GetKey("s")){
		moveSpeedBack = 10;
	}

	if(Input.GetKey("d")){
		moveSpeedRight = 10;
	}

	if(Input.GetKey("a")){
		moveSpeedLeft = 10;
	}

	transform.Translate(Vector3.forward * moveSpeedForward * Time.deltaTime);
	transform.Translate(Vector3.right * moveSpeedRight * Time.deltaTime);
	transform.Translate(-Vector3.right * moveSpeedLeft * Time.deltaTime);
	transform.Translate(-Vector3.forward * moveSpeedBack * Time.deltaTime);

	if(moveSpeedForward > 0 && function_lockForward == false){
		function_lockForward = true;
		decreaseMsForward();
	}

	if(moveSpeedBack > 0 && function_lockBack == false){
		function_lockBack = true;
		decreaseMsBack();
	}

	if(moveSpeedRight > 0 && function_lockRight == false){
		function_lockRight = true;
		decreaseMsRight();
	}

	if(moveSpeedLeft > 0 && function_lockLeft == false){
		function_lockLeft = true;
		decreaseMsLeft();
	}

}

function decreaseMsForward (){
		yield WaitForSeconds(0.0125);
		moveSpeedForward -= 1;
		function_lockForward = false;
}

function decreaseMsBack (){
		yield WaitForSeconds(0.0125);
		moveSpeedBack -= 1;
		function_lockBack = false;
}

function decreaseMsRight (){
		yield WaitForSeconds(0.0125);
		moveSpeedRight -= 1;
		function_lockRight = false;
}

function decreaseMsLeft (){
		yield WaitForSeconds(0.0125);
		moveSpeedLeft -= 1;
		function_lockLeft = false;
}

lastPos = Camera.main.transform.position;

//Update loop
function Update () {
	MouseMovement();
	KeyboardInput();
    
	headBobStepCounter += Vector3.Distance(lastPos, transform.position) * headBobSpeed;

	//Camera.main.transform.localPosition.x = (Mathf.Sin(headBobStepCounter))* headBobAmountX;
	//Camera.main.transform.localPosition.y = ((Mathf.Cos(headBobStepCounter * 2)) * headBobAmountY *-1) + 2;
	transform.Translate((Mathf.Sin(headBobStepCounter))* headBobAmountX,0,0);
	transform.Translate(0,((Mathf.Cos(headBobStepCounter * 2)) * headBobAmountY *-1) + 2,0);

	lastPos = Camera.main.transform.position;
}