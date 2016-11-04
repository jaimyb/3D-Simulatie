#pragma strict


function OnTriggerEnter(theCollision : Collider){
	if(theCollision.gameObject.name == "triggerCube"){
		Debug.Log("triggered");
	}
}