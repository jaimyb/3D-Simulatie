
var door : GameObject;
var triggered = false;
var time: float;
var lastColor = new Color32(236, 63, 203, 1);

gameObject.SetActive(false);
//door = GameObject.Find("Cube (32)");

function OnTriggerEnter(theCollision : Collider)
{
	if(theCollision.gameObject.tag == "Player")
	{		
			if(!triggered)
				//door.GetComponent.<Renderer>().material.color = Color.blue;

			triggered = true;
			GetComponent(MeshRenderer).enabled = false;
	
			GetComponent.<AudioSource>().Play();

			if(triggered)
			{
				yield WaitForSeconds(10);
				//door.GetComponent.<Renderer>().material.color = lastColor;
				gameObject.SetActive(false);
			}


	}
}

function SetActive()
{
	gameObject.SetActive(true);
}

function Update () 
{
	time += Time.deltaTime * 3;
	transform.localPosition.y = 0.5 * Mathf.Cos(time) + 1.5;


}