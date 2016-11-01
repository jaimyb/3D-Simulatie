#pragma strict
	var box : GameObject;


function Change(){
	box = GameObject.Find("moveCube");
	box.GetComponent.<Renderer>().material.color = Color.red;
}