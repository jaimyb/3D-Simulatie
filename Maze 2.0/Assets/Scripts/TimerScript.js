#pragma strict
import UnityEngine.UI;
static var time : int;
static var finishtime : int;
static var trigger : boolean;
private var text : Text;

function Awake ()
{
	text = GetComponent (Text);
}

function Update (){
time = Time.realtimeSinceStartup;
if (trigger == false){
text.text = "time: "+ time;
}
if (trigger == true){
text.text = "time: " + finishtime;
	}
}

function stop(){
finishtime = time;
trigger = true;
}