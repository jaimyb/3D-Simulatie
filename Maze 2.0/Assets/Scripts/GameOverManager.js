var time : int;
static var trigger : boolean;
trigger = false;
private var anim : Animator;            // Reference to the animator component.


function Awake ()
{
    // Set up the reference.
    anim = GetComponent (Animator);
}


function Update ()
{
	time = Time.realtimeSinceStartup;
    // If the player has run out of health...
    if(trigger == true)
    {	    
        // ... tell the animator the game is over.
        anim.SetTrigger ("GameOver");
    }

}
    function go ()
{
	trigger = true;
}
