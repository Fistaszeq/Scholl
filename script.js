var box = document.getElementById("box");

function zad1()
{
//     Zadanie 1.
// Zadeklaruj dwie zmienne i przypisz im dowolne wartości całkowite. Użyj instrukcji if…else do sprawdzenia, czy dzielenie modulo a przez b daje w wyniku 0 lub 1. Wyświetl stosowne komunikaty. 



    var x = parseInt(prompt("Podaj pierwszą wartość"));
    var y = parseInt(prompt("Podaj drugą wartość"));

    if (x%y == 0)
    {
        alert("Jest podzielna");
    }
    else 
    {
        alert("Nie są podzielne");
    }

    

}


function zad2()
{
    // Zadanie 2.
    // Napisz skrypt sprawdzający czy wprowadzona przez użytkownika liczba jest większa od 10. Wypisz odpowiedni komunikat. Użyj instrukcji przetwarzania warunkowego.

    var liczba = prompt("Podaj Wartość do sprawdzenia ");
    liczba =  (liczba > 10)?"Wieksze od 10":"Mniejsze od 10";

    alert(liczba);

    // if(liczba>10)
    // {
    //     alert("Liczba podana jest większa od 10");
    // }
    // else if(liczba == 10)
    // {
    //     alert("Podana wartość jest równa 10");
    // }
    // else if (liczba<10)
    // {
    //     alert("Podana wartość jest mniejsza od 10");
    // }
}

function zad3() 
{
//     Zadanie 3.
// Napisz skrypt wyznaczający miejsce zerowe funkcji liniowej (kwadratowej). 

    var a = parseInt(prompt("Podaj a funckji"));
    var b = parseInt(prompt("Podaj b w funkcji"));

    if (a==0)
    {
        alert("Kolego tak to chyba nie może wyglądać podaj inną wartość dla różną od 0");
    }
    else if(a!=0)
    {
        alert( (a / b ) * (-1));
    }


}

function zad4()
{
    // Zadanie 4.
    // Napisz skrypt, który wypisze 3 liczby wprowadzone przez użytkownika w kolejności malejącej. 

    var x = parseInt(prompt("Podaj liczbe"));
    var y = parseInt(prompt("Podaj liczbe"));
    var z = parseInt(prompt("Podaj liczbe"));
    
    if ( x > y && y > z) {
        box.innerHTML += x + " ," + y + " ," + z;
    } 
    else if ( x > z && z > y){
        box.innerHTML += x + " ," + z + " ," + y;
    }  
    else if ( z > x && x > y){
        box.innerHTML += z + " ," + x + " ," + y;
    }
    else if ( z > y && y> x){
        box.innerHTML += z + " ," + y + " ," + x;
    }
    else if ( y > x && x > z){
        box.innerHTML += y + " ," + x + " ," + z;
    } 
    else if ( y > z && z> x){
        box.innerHTML += y + " ," + z + " ," + x;
    }
}


function zad5()
{
    // Zadanie 5.
    // Napisz skrypt, którego zadaniem jest pobranie od użytkownika informacji na temat jego wzrostu. Na podstawie wprowadzonych danych wypisz odpowiedni komunikat: NISKI < 150 CM < ŚREDNI < 180 CM < WYSOKI

    var wzrost = prompt("Podaj wzrost");

    if(wzrost < 150)
    {
        box.innerHTML = "Niski";
    }
    else if(wzrost < 180)
    {
        box.innerHTML = "Średni";
    }
    else 
    {
        box.innerHTML = "Wysoki"
    }

}


function zad6() 
{

    // Zadanie 6.
    // Stwórz prosty kalkulator z użyciem switch ... case (wybór działania).

    var a = parseInt(prompt("Podaj pierwszą wartość"));
    var b = parseInt(prompt("Podaj drugą wartosć"));
    var wynik;
    var znak = prompt("Podaj działanie");

    switch(znak)
    {
        case '+':
            wynik = a + b;
            break;
        case '-':
            wynik = a - b;
            break;
        case '*':
            wynik = a * b;
            break;
        case '/':
            wynik = a / b;
            break;
    }

    box.innerHTML = a + " " + znak + " " + b + " = " + wynik;

}



function zad7() 
{
/*
Zadanie 7.
https://coderslab.pl/pl/javascript-challenge/instrukcje-warunkowe
*/



}





