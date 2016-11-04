var walkAcceleration: float = 3000;
var walkDeacceleration: float = 0.1;
var walkDeaccelerationVX: float;
var walkDeaccelerationVZ: float;
var cameraObject: GameObject;
var maxWalkSpeed: float = 20;
var horizontalMovement: Vector2;

function SpeedBoost()
{
	walkAcceleration = 6000;

	if(walkAcceleration == 6000)
	{	
		yield WaitForSeconds(10);
		walkAcceleration = 3000;
	}
}

function Update () 
{
	horizontalMovement = Vector2(GetComponent.<Rigidbody>().velocity.x, GetComponent.<Rigidbody>().velocity.z);
	if(horizontalMovement.magnitude > maxWalkSpeed)
	{
		horizontalMovement = horizontalMovement.normalized;
		horizontalMovement *= maxWalkSpeed;
	}



	GetComponent.<Rigidbody>().velocity.x = horizontalMovement.x;
	GetComponent.<Rigidbody>().velocity.z = horizontalMovement.y;


	GetComponent.<Rigidbody>().velocity.x = Mathf.SmoothDamp(GetComponent.<Rigidbody>().velocity.x,0, walkDeaccelerationVX, walkDeacceleration);
	GetComponent.<Rigidbody>().velocity.z = Mathf.SmoothDamp(GetComponent.<Rigidbody>().velocity.z,0, walkDeaccelerationVZ, walkDeacceleration);

	transform.rotation = Quaternion.Euler(0, cameraObject.GetComponent(MouseLookScript).currentYRotation, 0);
	GetComponent.<Rigidbody>().AddRelativeForce(Input.GetAxis("Horizontal") * walkAcceleration * Time.deltaTime, 0, Input.GetAxis("Vertical") * walkAcceleration * Time.deltaTime);

}

