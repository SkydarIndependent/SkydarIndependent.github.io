document.getElementById("button1").onclick = () => LoadVid (1)
document.getElementById("button2").onclick = () => LoadVid (2)
document.getElementById("button3").onclick = () => LoadVid (3)
document.getElementById("button4").onclick = () => LoadVid (4)

function LoadVid(numVid) { numVid: 1
    document.getElementById("image1").style.display = "block";
    setTimeout(getVid, 3000, numVid)
   
}

function getVid(numVid) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById("video").innerHTML = this.responseText;
        }
    }

    xhttp.open("GET", "media" + numVid + ".dat", true)
    xhttp.send();
}