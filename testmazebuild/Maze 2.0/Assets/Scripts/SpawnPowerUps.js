//Variables
var lightbulb: GameObject;
var caseValue: int;
var caseValue2: int;

//Objects
lightbulb = GameObject.Find("lightbulb"); 
Debug.Log(lightbulb);

//Randomnumber generator
for (var i = 2; i > 0; i--)
{
	caseValue = Random.Range(0, 4);
	yield WaitForSeconds(0.2);
}

for (var x = 2; x > 0; x--)
{
	caseValue2 = Random.Range(0, 4);
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
switch(caseValue2)
{
	case 0:
		Debug.Log(caseValue2);
		break;
	
	case 1:
		Debug.Log(caseValue2);
		break;
	
	case 2:
		Debug.Log(caseValue2);
		break;

	case 3:
		Debug.Log(caseValue2);
		break;

	case 4:
		Debug.Log(caseValue2);
		break;

}

function Update () {

}