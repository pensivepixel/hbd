let imgs = ["happy.png","birthday.png","mom.png"];
let audios = ["hbd.m4a", "sundayfunday.m4a", "wwwooo.m4a", "twinklespace.m4a", "que.m4a", "bubbles.m4a"];
let mcjigger = document.getElementById("mcjigger");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let wurk4it = 0;
mcjigger.addEventListener("click", mcjiggerer, false);
img1.src = imgs[1];
img2.src = imgs[0];
img3.src = imgs[2];

function mcjiggerer() {
    wurk4it++;
    mcjigger.innerText = "Hmm. Something doesn't look right. Click here to re-mcjigger your card."
    let selection = [Math.floor(3*Math.random()), Math.floor(3*Math.random()), Math.floor(3*Math.random())];
    console.log("hello " + wurk4it);
    let winnered = selection[0] == 0 && selection[1] == 1 && selection[2] == 2;
    
    if(wurk4it < 10 && winnered) { 
        console.log("NOT SO FAST");
        mcjiggerer();
    } else {


        img1.src = imgs[selection[0]];
        img2.src = imgs[selection[1]];
        img3.src = imgs[selection[2]];

        let audiophile = ":(";
        if (winnered) {
            //u winned at de lottos
            //is it ur bday r sumthin
            console.log("hbd <3")
            document.body.style.background = "linear-gradient(#FFFDCB,#FFCBF4)";
            audiophile = audios[0];
            mcjigger.style.visibility = "hidden";
            document.getElementById("heartfeltmessage4winners").innerText = "You fixed the card! Sorry for the technical difficulties in getting the images to render correctly. Maybe that's why people use emails and the paper version of emails.\n\nAll that aside, HAPPY BIRTHDAY! I love you very much and I'm grateful to have you in my life. I hope you have a day full of love and fresh air.\n\n<3 Pixel\n4/11/2022"
        } else {
            //such lose
            //but did you win a consolation prizze?
            if (Math.random()>0.75) {
                //congratumalations u winned anywayss
                //now what did u winned?
                let num = Math.ceil(Math.random()*5)
                audiophile = audios[num];
                console.log(num, audiophile);
                //oh thas a nice one
                mcjigger.innerText = "WHAT'S THAT NOISE? I think I'll call it -- " + audiophile + " -- That's catchy. Click to mcjigger.";
            } else {
                //what a sore looser
                //u get nuthing
                //r u sad
                //bc idc
                //y r ustill here
                //leave
            }
        }
        if (audiophile != ":(") {
            var playasgunna = new Audio(audiophile); //wait for it
            playasgunna.play(); //this made me laugh way too hard. it's 1:33am rn
        }
    }
}