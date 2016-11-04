var triggered = false;
var time: float;
var speler: GameObject;

speler = GameObject.Find("Capsule");

function OnTriggerEnter(theCollision : Collider)
{
	if(theCollision.gameObject.tag == "Player")
	{		
			if(!triggered)
				speler.GetComponent(PlayerMovementScript).SpeedBoost();
				//door.GetComponent.<Renderer>().material.color = Color.blue;

			triggered = true;
			GetComponent(MeshRenderer).enabled = false;

			if(triggered)
			{
				yield WaitForSeconds(10);
				//door.GetComponent.<Renderer>().material.color = lastColor;
				gameObject.SetActive(false);
			}


	}
}


function Update () 
{
	time += Time.deltaTime * 3;
	transform.localPosition.y = 0.5 * Mathf.Cos(time) + 1.5;
}