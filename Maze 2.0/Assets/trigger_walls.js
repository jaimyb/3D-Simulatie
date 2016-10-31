#pragma strict


function OnTriggerEnter(theCollision : Collider){
	Debug.Log(theCollision.name);
	if(theCollision.gameObject.name == "triggerCube"){
		Debug.Log("triggered");
	}
}