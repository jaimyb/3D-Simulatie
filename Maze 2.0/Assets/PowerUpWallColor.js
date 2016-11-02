
var door : GameObject;
var triggered = false;

door = GameObject.Find("Cube (38)");

function OnTriggerEnter(theCollision : Collider)
{
	if(theCollision.gameObject.tag == "Player")
	{
			door.GetComponent<Renderer>().material.color = Color.red;
			Debug.Log("Nice");
			triggered = true;
	}
}



function Update () {
	

}