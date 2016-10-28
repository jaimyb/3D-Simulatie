#pragma strict

//var sensetivity = 0.1;

var minimumY = -60;
var maximumY = 60;

var rotationY = 0;
var rotationX = 0;

function Update () {
	var sensetivity = 0.1;
	rotationX = transform.localEulerAngles.y + Input.GetAxis("MouseX") * sensetivity;

	rotationY += Input.GetAxis("MouseY") * sensetivity;
	rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);

	transform.localEulerAngles = new Vector3(-rotationY, rotationX, 0);

	while(Input.GetKeyDown("w")){
		
		transform.position.z += 1;
	}
		
}