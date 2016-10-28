#pragma strict

//Variables


var lockPos = 0;

//Options
Screen.lockCursor = true;



//Functions
function cameraAxisRotate () {
	var rotateSpeed = 200f;
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

function cameraAxisMovement () {
	var sensetivity = 0.01f;
	var movementVector = new Vector3(0f,0f,0f);
	var movementSpeed = 0.1f;
	var hMove = Input.GetAxis("Horizontal");
	var vMove = Input.GetAxis("Vertical");

	movementVector.y = 0f;

	if(hMove < -sensetivity)
		movementVector.x += -movementSpeed;
	if(hMove > sensetivity)
		movementVector.x += movementSpeed;
	if(vMove < -sensetivity)
		movementVector.z += -movementSpeed;
	if(vMove > sensetivity)
		movementVector.z += movementSpeed;

	

	transform.Translate(movementVector);
}

function Update () {
    cameraAxisRotate();
    cameraAxisMovement();
    transform.rotation = Quaternion.Euler(transform.rotation.eulerAngles.x, transform.rotation.eulerAngles.y, lockPos);
    transform.position.y = 3;
}