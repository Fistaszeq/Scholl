var input = document.getElementById("inputT").value;
var output = document.getElementById("outPut");

function zad1() {
var x = document.getElementById("inputT").value;
var y = x;
var a = 1;
for (a; a<y; a++) {
    for (x = 0; x<a; x++) {
        output.innerHTML += x;
    }
    output.innerHTML +="<br>";
}
}


function zad2() {
    //dla for
    var n = 100;

    for(n;n != 0;n--)
    if(n%2 == 0)
    {
        output.innerHTML += n + " ";
    }
}

function zad3() {
    var x = 0; 
    for(x; x != 90; x+=5)
    {
        var y = Math.sin(x*Math.PI/180);
        output.innerHTML += "Wartość sinusa z " + x + " to " +  y + "<br>";
    }
}


function zad4() {
    var tab = document.getElementById('tabelka'); //pobieramy tablekę
 
for(var y=1; y<=10; y++) {
    var tr = document.createElement('tr'); //tworzymy nowe tr
    for (var x=1; x<=10; x++) {
        var tekst = document.createTextNode(x*y); //tworzymy tekst do wstawienia do komórki
        if (y==1 || x==1) { //jeżeli jest to pierwsza komórka w pionie lub poziomie
            var th = document.createElement('th'); //to stwórz nowe th
            th.appendChild(tekst); //wstaw do niego tekst
            tr.appendChild(th); //i th wstaw do tr
        } else { //podobnie działaj jeżeli x lub != 0
            var td = document.createElement('td');
            td.appendChild(tekst);
            tr.appendChild(td);
        }
    }
    tab.appendChild(tr); //gotowe tr z komórkami wstaw do tabeli
}

}

function zad5() {

var tab = document.getElementById('tabelka'); //pobieramy tablekę

 

 for(var y=1; y<=10; y++) {
     var tr = document.createElement('tr'); //tworzymy nowe tr
     for (var x=1; x<=1; x++) {
         var tekst = document.createTextNode(x*y); //tworzymy tekst do wstawienia do komórki
         if (y==1 || x==1) { //jeżeli jest to pierwsza komórka w pionie lub poziomie
             var th = document.createElement('th'); //to stwórz nowe th
             th.appendChild(tekst); //wstaw do niego tekst
             tr.appendChild(th); //i th wstaw do tr
         } else { //podobnie działaj jeżeli x lub != 0
             var td = document.createElement('td');
             td.appendChild(tekst);
             tr.appendChild(td);
         }
     }
     tab.appendChild(tr); //gotowe tr z komórkami wstaw do tabeli
}
}


function zadeg1() {
    var money = document.getElementById("money").value;
    var price = document.getElementById("price").value;

    var zl_5 = 0;
    var zl_2 = 0;
    var zl_1 = 0;



    var change = money - price;

    if( change%5 != 0)
    {
        change = change / 5;
        zl_5  = change / 5;
    }




    output.innerHTML += "Podana wartość to najmniejsza  <br>" + zl_5 + " <br> " + zl_2 + " <br> " + zl_1;
}

// pieniądze wchodzące - cena = reszta i podzielić przez nominały
// Monety 