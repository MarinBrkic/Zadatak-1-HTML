function Pozdravi() {
    var ime = document.getElementById("ime").value;
    if (ime != ""){
        if(ime.charAt(0) >= "A" && ime.charAt(0) <= "K") {
            document.getElementById("poruka").style = "color: #07fc03;"
            document.getElementById("poruka").innerHTML = "Dobrodošli, " + ime;
        }
        else if (ime.charAt(0) >= "L" && ime.charAt(0) <= "U") {
            document.getElementById("poruka").style = "color: #fff;"
            document.getElementById("poruka").innerHTML = "Dobrodošli, " + ime;
        }
        else {
            document.getElementById("poruka").style = "color: #fc0303"
            document.getElementById("poruka").innerHTML = "Dobrodošli, " + ime;
        }
    }
    else {
        document.getElementById("poruka").innerHTML = "Molimo unesite ime!";
    }
}