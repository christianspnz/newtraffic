let stop1 = document.getElementById("redOne");
let stop2 = document.getElementById("redTwo");
let stop3 = document.getElementById("redThree");
let stop4 = document.getElementById("redFour");
let stop5 = document.getElementById("redFive");
let stop6 = document.getElementById("redSix");
let stop7 = document.getElementById("redSeven");
let stop8 = document.getElementById("redEight");
let stop9 = document.getElementById("redNine");
let stop10 = document.getElementById("redTen");
let stop11 = document.getElementById("redEleven");
let stop12 = document.getElementById("redTwelve");
let ready1 = document.getElementById("yellowOne");
let ready2 = document.getElementById("yellowTwo");
let ready3 = document.getElementById("yellowThree");
let ready4 = document.getElementById("yellowFour");
let ready5 = document.getElementById("yellowFive");
let ready6 = document.getElementById("yellowSix");
let ready7 = document.getElementById("yellowSeven");
let ready8 = document.getElementById("yellowEight");
let ready9 = document.getElementById("yellowNine");
let ready10 = document.getElementById("yellowTen");
let ready11 = document.getElementById("yellowEleven");
let ready12 = document.getElementById("yellowTwelve");
let go1 = document.getElementById("greenOne");
let go2 = document.getElementById("greenTwo");
let go3 = document.getElementById("greenThree");
let go4 = document.getElementById("greenFour");
let go5 = document.getElementById("greenFive");
let go6 = document.getElementById("greenSix");
let go7 = document.getElementById("greenSeven");
let go8 = document.getElementById("greenEight");
let go9 = document.getElementById("greenNine");
let go10 = document.getElementById("greenTen");
let go11 = document.getElementById("greenEleven");
let go12 = document.getElementById("greenTwelve");
let change = 0;

document.getElementById("press").onclick = function (){
    if(change === 0){
        change += 1;
        stop1.style.backgroundColor = "RED";
        go2.style.backgroundColor = "GREEN";
        stop3.style.backgroundColor = "RED";
        go4.style.backgroundColor = "GREEN";
        stop5.style.backgroundColor = "RED";
        go6.style.backgroundColor = "GREEN";
        go7.style.backgroundColor = "GREEN";
        stop8.style.backgroundColor = "RED";
        go9.style.backgroundColor = "GREEN";
        stop10.style.backgroundColor = "RED";
        go11.style.backgroundColor = "GREEN";
        stop12.style.backgroundColor = "RED";
    }
    else if (change === 1){
        change += 1;
        ready2.style.backgroundColor = "YELLOW";
        go2.style.backgroundColor = "BLACK";
        ready4.style.backgroundColor = "YELLOW";
        go4.style.backgroundColor = "BLACK";
        ready6.style.backgroundColor = "YELLOW";
        go6.style.backgroundColor = "BLACK";
        go7.style.backgroundColor = "BLACK";
        ready7.style.backgroundColor = "YELLOW";
        go9.style.backgroundColor = "BLACK";
        ready9.style.backgroundColor = "YELLOW";
        go11.style.backgroundColor = "BLACK";
        ready11.style.backgroundColor = "YELLOW";
        
    }
    else if (change === 2){
        change += 1;
        go1.style.backgroundColor = "GREEN";
        stop2.style.backgroundColor = "RED";
        go3.style.backgroundColor = "GREEN";
        stop4.style.backgroundColor = "RED";
        go5.style.backgroundColor = "GREEN";
        stop6.style.backgroundColor = "RED";
        stop7.style.backgroundColor = "RED";
        go8.style.backgroundColor = "GREEN";
        stop9.style.backgroundColor = "RED";
        go10.style.backgroundColor = "GREEN";
        stop11.style.backgroundColor = "RED";
        go12.style.backgroundColor = "GREEN";
        ready2.style.backgroundColor = "BLACK";
        ready4.style.backgroundColor = "BLACK";
        ready6.style.backgroundColor = "BLACK";
        ready7.style.backgroundColor = "BLACK";
        ready9.style.backgroundColor = "BLACK";
        ready11.style.backgroundColor = "BLACK";
	stop1.style.backgroundColor = "BLACK";
        stop3.style.backgroundColor = "BLACK";
        stop5.style.backgroundColor = "BLACK";
        stop8.style.backgroundColor = "BLACK";
        stop10.style.backgroundColor = "BLACK";
        stop12.style.backgroundColor = "BLACK";
        
    }
    else if (change === 3){
        change += 1;
        ready1.style.backgroundColor = "YELLOW";
        stop2.style.backgroundColor = "RED";
        ready3.style.backgroundColor = "YELLOW";
        stop4.style.backgroundColor = "RED";
        ready5.style.backgroundColor = "YELLOW";
        stop6.style.backgroundColor = "RED";
        ready8.style.backgroundColor = "YELLOW";
        stop7.style.backgroundColor = "RED";
        ready10.style.backgroundColor = "YELLOW";
        stop9.style.backgroundColor = "RED";
        ready12.style.backgroundColor = "YELLOW";
        stop11.style.backgroundColor = "RED";
		go1.style.backgroundColor = "BLACK";
        go3.style.backgroundColor = "BLACK";
        go5.style.backgroundColor = "BLACK";
        go8.style.backgroundColor = "BLACK";
        go10.style.backgroundColor = "BLACK";
        go12.style.backgroundColor = "BLACK";
		
		
    }
    else{
        change = 1;
        stop1.style.backgroundColor = "RED";
        go2.style.backgroundColor = "GREEN";
        stop3.style.backgroundColor = "RED";
        go4.style.backgroundColor = "GREEN";
        stop5.style.backgroundColor = "RED";
        go6.style.backgroundColor = "GREEN";
        go7.style.backgroundColor = "GREEN";
        stop8.style.backgroundColor = "RED";
        go9.style.backgroundColor = "GREEN";
        stop10.style.backgroundColor = "RED";
        go11.style.backgroundColor = "GREEN";
        stop12.style.backgroundColor = "RED";
        stop2.style.backgroundColor = "BLACK";
        stop4.style.backgroundColor = "BLACK";
        stop6.style.backgroundColor = "BLACK";
        stop7.style.backgroundColor = "BLACK";
        stop9.style.backgroundColor = "BLACK";
        stop11.style.backgroundColor = "BLACK";
        ready1.style.backgroundColor = "BLACK";
        ready3.style.backgroundColor = "BLACK";
        ready5.style.backgroundColor = "BLACK";
        ready8.style.backgroundColor = "BLACK";
        ready10.style.backgroundColor = "BLACK";
        ready12.style.backgroundColor = "BLACK";
    }
}
