//Variables
var lightbulb: GameObject;
var caseValue: int;

//Objects
lightbulb = GameObject.Find("lightbulb"); 
Debug.Log(lightbulb);

//Randomnumber generator
for (var i = 2; i > 0; i--)
{
	caseValue = Random.Range(0, 4);
	yield WaitForSeconds(0.2);
}

//Lightbulbs
switch(caseValue)
{
	case 0:
		Debug.Log(caseValue);
		lightbulb.SetActive(false);
		break;

	case 1:
		Debug.Log(caseValue);
		break;
	
	case 2:
		Debug.Log(caseValue);
		break;

	case 3:
		Debug.Log(caseValue);
		break;

	case 4:
		Debug.Log(caseValue);
		break;

}

//Redbulls
switch(caseValue)
{
	case 0:
		Debug.Log(caseValue);
		break;
	
	case 1:
		Debug.Log(caseValue);
		break;
	
	case 2:
		Debug.Log(caseValue);
		break;

	case 3:
		Debug.Log(caseValue);
		break;

	case 4:
		Debug.Log(caseValue);
		break;

}

function Update () {

}