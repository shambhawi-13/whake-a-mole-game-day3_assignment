function start() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("mole").style.visibility = "hidden";
    document.getElementById("mud").style.visibility = "hidden";
    

    var allmuds = document.querySelectorAll(".dirt");
    for (let i = 0; i < allmuds.length; i++)
        allmuds[i].style.visibility = "visible";

    var allmoles = document.querySelectorAll(".mole");
    for (let i = 0; i < allmoles.length; i++)
        allmoles[i].style.visibility = "visible";
    setInterval(() => {
        let mole_ran = Math.floor(Math.random() * 6);
        console.log(mole_ran);
        allmoles[mole_ran].style.visibility = "visible";
        setTimeout(() => {
            for (let i = 0; i < allmoles.length; i++) {
                allmoles[i].style.visibility = "hidden";
            }
        }, 700);
    }, 1000);

    var points = document.querySelectorAll(".points");
    for (let i = 0; i < points.length; i++)
        points[i].style.visibility = "visible";

    var score = 0;
    for (let i = 0; i < allmoles.length; i++) {
        allmoles[i].addEventListener("mouseover", (e) => {
            console.log("mouseover");
            score += 1;
            document.getElementById("currentPoint").innerHTML = score;
            console.log(score);
        });
    }

    
}
