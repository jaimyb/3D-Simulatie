#pragma strict

var lookSensetivity: float = 5;
var yRotation: float;
var xRotation: float;
var currentYRotation: float;
var currentXRotation: float;
var yRotationV: float;
var xRotationV: float;
var lookSmoothDamp: float = 0.1;

var headBobSpeed: float = 1;
var headBobStepCounter: float;
var lastPos: Vector3;
var headBobAmountX: float = 0.2;
var headBobAmountY: float = 0.1;

lastPos = transform.position;

function Update () 
{
	yRotation += Input.GetAxis("Mouse X") * lookSensetivity;
	xRotation -= Input.GetAxis("Mouse Y") * lookSensetivity;

	xRotation = Mathf.Clamp(xRotation, -60, 60);

	currentXRotation = Mathf.SmoothDamp(currentXRotation, xRotation, xRotationV, lookSmoothDamp);
	currentYRotation = Mathf.SmoothDamp(currentYRotation, yRotation, yRotationV, lookSmoothDamp);

	transform.rotation = Quaternion.Euler(currentXRotation, currentYRotation, 0);

	headBobStepCounter += Vector3.Distance(lastPos, transform.position) * headBobSpeed;

    transform.localPosition.x = (Mathf.Sin(headBobStepCounter))* headBobAmountX;
    transform.localPosition.y = ((Mathf.Cos(headBobStepCounter * 2)) * headBobAmountY * -1 + 1);

    lastPos = transform.position;
}