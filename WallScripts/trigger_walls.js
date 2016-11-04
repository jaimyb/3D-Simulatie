#pragma strict
var move: GameObject;
move = GameObject.Find("moveCube");
var index : int;
index = 0;

function OnTriggerExit(theCollision : Collider){
	if(theCollision.gameObject.tag == "Player"){
		index++;
		Debug.Log("trigger " + index);
		move.GetComponent(MoveWall).Run();
		move.GetComponent(MoveWall).Run();
	}
}