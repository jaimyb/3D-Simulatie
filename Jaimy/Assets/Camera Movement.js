#pragma strict

//Variables
var rotateSpeed = 50f;





function cameraAxisMovement () {

	var rotateVector = new Vector3(0f,0f,0f);

	if(Input.GetAxis("Mouse X") < 0)
		rotateVector.y += -1;

	if(Input.GetAxis("Mouse X") > 0)
		rotateVector.y += 1;

	if(Input.GetAxis("Mouse Y") < 0)
		rotateVector.x += -1;

	if(Input.GetAxis("Mouse Y") > 0)
		rotateVector.x += 1;

	transform.Rotate(rotateVector, rotateSpeed * Time.deltaTime);
		
}


function Update () {
	cameraAxisMovement();
}