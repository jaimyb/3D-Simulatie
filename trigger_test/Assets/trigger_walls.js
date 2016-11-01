#pragma strict
var move: GameObject;
move = GameObject.Find("moveCube");

function OnTriggerStay(theCollision : Collider){
	if(theCollision.gameObject.name == "triggerCube"){
		move.GetComponent(NewBehaviourScript1).Test();
	}
}