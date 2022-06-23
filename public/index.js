var n= document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        // this.style.color="white";

        var a=this.innerHTML;
       makesound(a);
       animation(a);

    });


    document.addEventListener("keydown",function(event){
        makesound(event.key);
        animation(event.key)
    })

   function makesound(key)
    {
        switch (key) {
            case 'w':
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case 'a':
                var t2=new Audio("sounds/tom-2.mp3");
                t2.play();
                break;
                case 's':
                    var t3=new Audio("sounds/tom-3.mp3");
                t3.play();
                break;
                case 'd':
                    var t4=new Audio("sounds/tom-4.mp3");
                t4.play();
                break;
                case 'j':
                    var c=new Audio("sounds/crash.mp3");
                c.play();
                break;
                case 'k':
                    var k=new Audio("sounds/kick-bass.mp3");
                k.play();
                break;
                case 'l':
                    var s=new Audio("sounds/snare.mp3");
                    s.play();
                    break;

            default:
                break;
        }
       
    }

    function animation(key)
    {
        var a=document.querySelector("."+key);
        a.classList.add("pressed");

        setTimeout(function(){
            a.classList.remove("pressed");
        },100);
    }

}