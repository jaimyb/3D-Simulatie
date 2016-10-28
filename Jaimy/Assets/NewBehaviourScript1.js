#pragma strict
	var up : int;
	var box : GameObject;
	var index : float;
	var upBox: boolean;
	var upInt: int;
	var downInt: int;
	var pressed: boolean;
	upBox = false;
	box = GameObject.Find("moveCube");
	upInt = 0;
	downInt = 0;

function Update () {
		Debug.Log(upBox);
		Debug.Log(pressed);
		Debug.Log(upInt + " " + downInt);
	    if(Input.GetKeyDown ("space") && upBox && !pressed){
	    	upInt = 20;
	    	pressed = true;
	    	}
	    else if(Input.GetKeyDown ("space") && !upBox && !pressed){
	    	downInt = 20;
	    	pressed = true;
	    	}
	    if(upInt > -1 && !upBox && pressed)
	    	Up(upInt);
	    if(downInt > -1 && upBox && pressed)
	    	Down(downInt);
  }
            
function Up(x){
	if(box.transform.position.y < 10){
		transform.Translate(Vector3.up);
		upInt--;	
		}
	else if(box.transform.position.y == 10){
		upBox = true;
		Debug.Log("up");
    	box.GetComponent.<Renderer>().material.color = Color.grey;
	    pressed = false;
	  }
}
function Down(y){
if(box.transform.position.y > -10){
		transform.Translate(Vector3.down);
		downInt--;
	}	
else if(box.transform.position.y == -10){
	upBox = false;
	Debug.Log("down");	
    box.GetComponent.<Renderer>().material.color = Color.red;
    pressed = false;
   }
}