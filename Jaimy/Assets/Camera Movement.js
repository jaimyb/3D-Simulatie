#pragma strict

//Variables
var rotateSpeed = 200f;

var lockPos = 0;

//Options
Screen.lockCursor = true;



//Functions
function cameraAxisMovement () {

	var rotateVector = new Vector3(0f,0f,0f);

	if(Input.GetAxis("Mouse X") < 0)
		rotateVector.y += -1;

	if(Input.GetAxis("Mouse X") > 0)
		rotateVector.y += 1;

	if(Input.GetAxis("Mouse Y") < 0)
		rotateVector.x += 1;

	if(Input.GetAxis("Mouse Y") > 0)
		rotateVector.x += -1;

	transform.Rotate(rotateVector, rotateSpeed * Time.deltaTime);
		
}


function Update () {
    cameraAxisMovement();
    transform.rotation = Quaternion.Euler(transform.rotation.eulerAngles.x, transform.rotation.eulerAngles.y, lockPos);
}