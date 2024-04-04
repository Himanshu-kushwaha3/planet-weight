var interval = setInterval(play,100);
function play(){
    var Earth = document.getElementById('earth').value; //Weight value of Earth
    var Mercury = document.getElementById('mercury');
    var Venus = document.getElementById('venus');
    var Mars = document.getElementById('mars');
    var Jupiter = document.getElementById('jupiter');
    var Saturn = document.getElementById('saturn');
    var Uranus = document.getElementById('uranus');
    var Neptune = document.getElementById('neptune');


/* 
 Gravitational force of all planet
 -----------------------------------
 Planet/Sattelite	Radius(m)	Mass(Kg)	Value of g (m/s2)
Earth	         6.4 × 106	    6 × 1024	    9.81
Mercury	         2.43 × 106	    3.2 × 1023	    3.61
Venus	         6.073 × 106	4.88 × 1024	    8.83
Mars	         3.38 × 106	    6.42 × 1023	    3.75
Jupiter	         6.98 × 107	    1.901 × 1027    26.0
Saturn	         5.82 × 107	    5.68 × 1026	    11.2
Uranus	         2.35 × 107	    8.68 × 1025	    10.5
Neptune	         2.27 × 107	    1.03 × 1026	    13.3
Pluto	         1.15 × 106	    1.2 × 1022	    0.61

formul
------
Weigh = w
gravity =g

W(Mars) = W(Earth) × g(Mars)/(g(Earth) = 75 × 3.73/9.81 = 28.5 kg

*/



    var gEarth  =  9.81 ;
    var gMercury=  3.61 ;
    var gVenus	=  8.83 ;
    var gMars	=  3.75 ; 
    var gJupiter=  26.0 ;
    var gSaturn	=  11.2 ;
    var gUranus	=  10.5 ; 
    var gNeptune=  13.3 ;
    var gPluto	=  0.61 ;
    
    // Mercury
    var murcury = Earth * gMercury / gEarth
    Mercury.value = murcury.toFixed(2);
    
    // venus
    var ven = Earth * gVenus / gEarth
    Venus.value = ven.toFixed(2);
    
    // mars
    var mars = Earth * gMars / gEarth
    Mars.value = mars.toFixed(2);

    //Jupiter
    var jupi = Earth * gJupiter / gEarth
    Jupiter.value =  jupi.toFixed(2)

    // Saturn
    var sat = Earth * gSaturn / gEarth
    Saturn.value = sat.toFixed(2);
    // Uranus
    var uran = Earth * gUranus / gEarth
    Uranus.value = uran.toFixed(2);
    //Neptune
    var nep = Earth * gNeptune / gEarth
    Neptune.value = nep.toFixed(2);
    
    // $___.value = Earth * $___ / gEarth


}


