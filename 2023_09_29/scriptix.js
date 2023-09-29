var box = document.getElementById("box");
box.innerHTML = ".. <br>";



function zad1() {

    var x = 0;

    while(x < 10)
    {
        box.innerHTML += "<br>X jest równy" + x + "";
        x++;
    }
    box.innerHTML += "<br>";

}

function zad2() {
    var a = 100;
    box.innerHTML += "<br>";
    while(a <= 110)
    {
        box.innerHTML += " " + a + " <br>";
        a = a + 2;
    }
    box.innerHTML += "<br>";
}

function zad3() {

    for(b = 100; b >= 90; b--)
    {
        box.innerHTML += b + " <br>";
    }
}

function zad4() {
    var haslo = 5306;

    var uerHaslo;
    while(haslo != uerHaslo)
    {
        uerHaslo =  parseInt(prompt("Podaj hasło"));
        if(uerHaslo==0)
        {
            break;
        }
        box.innerHTML += uerHaslo + "<br>";
    }
}


 