let imgs = ["happy.png","birthday.png","mom.png"];

document.getElementById("img1").src = imgs[Math.ceil(3*Math.random())];
document.getElementById("img2").src = imgs[Math.ceil(3*Math.random())];
document.getElementById("img3").src = imgs[Math.ceil(3*Math.random())];
