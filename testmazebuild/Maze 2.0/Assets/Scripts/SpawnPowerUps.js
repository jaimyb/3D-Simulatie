var lightbulb: GameObject;

var caseValue = 0;

lightbulb = GameObject.Find("lightbulb"); 

for (var i = 4; i > 0; i--)
{
	caseValue = Random.Range(0, 5);
	Debug.Log(caseValue);
}

Object.Instantiate(lightbulb);

switch(caseValue)
{
	case 0:
		lightbulb.GetComponent(PowerUpWallColor).SetActive();

}

function Update () {

}