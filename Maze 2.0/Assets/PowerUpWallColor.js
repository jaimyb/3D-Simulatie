
var door : GameObject;
var triggered = false;

door = GameObject.Find("Cube (32)");

function OnTriggerEnter(theCollision : Collider)
{
	if(theCollision.gameObject.tag == "Player")
	{
			door.GetComponent.<Renderer>().material.color = Color.red;
			triggered = true;
	}
}



function Update () {
	

}