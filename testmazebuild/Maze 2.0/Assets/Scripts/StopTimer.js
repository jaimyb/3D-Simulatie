#pragma strict
var stoptimer : GameObject;
stoptimer = GameObject.Find("TimerText");

var gameover : GameObject;
gameover = GameObject.Find("HUDCanvas");

function OnCollisionStay(collision : Collision){
gameover = GameObject.Find("HUDcanvas");
stoptimer = GameObject.Find("TimerText");
if (collision.gameObject.tag == "Player")
{
Debug.Log("collision");
stoptimer.GetComponent(TimerScript).stop();
gameover.GetComponent(GameOverManager).go();
}
}