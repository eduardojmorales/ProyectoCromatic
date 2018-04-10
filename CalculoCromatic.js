<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
var opcion = " ";
var pared = [];
var basePared =[];
var alturaPared =[];
var baseVentana = [];
var alturaVentana = [];
var basePuerta = [];
var alturaPuerta = [];
var totPared = 0;
var sumPared = 0;
var totVentana = 0;
var sumVentana = 0;
var cantVentana = 0;
var cantPuerta = 0;
var totPuerta = 0;
var sumPuerta = 0;
var baseP = 0;
var alturaP = 0;
var baseV = 0;
var alturaV = 0;
var baseP = 0;
var alturaP = 0;
var totPintar =0;
var renAceite = 0;
var galon = 0;
var medioGalon = 0;
var preAceite = 0;
var cubeta = 0;
var totGalon = 0;
var totCubeta = 0;
var renAgua = 0;
var renOleo = 0;
while (opcion !== 'NO')
  {
    opcion = prompt ("DESEA INGRESAR UNA NUEVA PARED?  SI / NO")
    if (opcion == 'SI' || opcion == 'si')
      {
        basePared[basePared.length] = parseInt( prompt ("Ingrese la base de la pared: "));
        alturaPared[alturaPared.length] = parseInt( prompt ("Ingrese la altura de la pared: "));
        baseP = basePared[basePared.length -1];
        alturaP = alturaPared[alturaPared.length -1];
        //totPared = (parseInt((basePared[basePared.length]) * parseInt(alturaPared[alturaPared.length])));
        totPared = baseP * alturaP;
        sumPared = sumPared + totPared;
        //alert (base);
        //alert (altura);
        //alert (totPared);
        //Calculo de las ventanas
        opcionVentana = prompt("Tiene ventanas en la pared? SI/NO");
         if (opcionVentana == 'SI' || opcionVentana == 'si')
           {
             cantVentana = parseInt( prompt("Cuantas ventanas tienen la pared?"))
             
             for (var i = 1; i<=cantVentana;i++ )
               {
             baseVentana[baseVentana.length] = parseInt( prompt("Ingrese la base de la ventana: "));
             alturaVentana[alturaVentana.length] = parseInt( prompt("Ingrese la altura de la ventana: "));
             baseV = baseVentana[baseVentana.length -1]
             alturaV = alturaVentana[alturaVentana.length -1]
             totVentana = baseV * alturaV;
             sumVentana = sumVentana + totVentana;
             //alert (totVentana)
               }
           }
        opcionPuerta = prompt("Tiene puertas la pared? SI/NO");
        if (opcionPuerta == 'SI' || opcionPuerta == 'si')
        {
          cantPuerta = parseInt( prompt("Cuantas puertas tienen la pared?"));
          
          for (var j =1; j<=cantPuerta; j++)
            {
              basePuerta[basePuerta.length] = parseInt( prompt("Ingrese la base de la puerta: "));
              alturaPuerta[alturaPuerta.length] = parseInt( prompt("Ingrese la altura de la puerta: "));
              baseP = basePuerta[basePuerta.length -1]
              alturaP = alturaPuerta[alturaPuerta.length -1]
              totPuerta = baseP * alturaP;
              sumPuerta = sumPuerta + totPuerta;
              //alert (totPuerta);
            }
        }
        
      }
  }
totPintar = sumPared - (sumVentana + sumPuerta);
document.write ("AREA TOTAL DE LAS PAREDES: " +sumPared);
document.write ("<br>");
document.write ("AREA TOTAL DE VENTANAS: " +sumVentana);
document.write ("<br>");
document.write ("AREA TOTAL DE PUERTAS: " +sumPuerta);
document.write ("<br>");
//document.write ("TOTAL DEL AREA A PINTAR: " +totPintar);
document.write ("<br>");
document.write ("<br>");
opcion2 = parseInt(prompt("Que pintura desea comprar? 1- Aceite 2- Agua 3- Oleo 4- Salir no comprar"));
//Calculo de pintura de Aceite
if (opcion2 == 1)
  {
    renAceite = (totPintar / 13);
    
    if (renAceite >= 0 && renAceite <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 necesita medio galon de pintura que cuesta: Q 240.50");
      }
    if (renAceite >= 1.89 && renAceite < 18.925)
        {
          galon = Math.ceil(renAceite / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Necesita 1 Cubeta de pintura que cuesta: Q 1,821.65");
          else
            {
              totGalon= Math.round(galon*432.35);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renAceite >=18.925)
      {
        cubeta = Math.ceil(renAceite /18.925)
        totCubeta = Math.round(cubeta *1821.65);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }
//Calculo de pintura de Agua
if (opcion2 == 2)
  {
    renAgua = (totPintar / 10);
    
    if (renAgua >= 0 && renAgua <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 Necesita Medio Galon de pinturaque cuesta: Q 150.00");
      }
    if (renAgua >= 1.89 && renAgua < 18.925)
        {
          galon = Math.ceil(renAgua / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Mt2 Necesita 1 Cubeta de pintura que cuesta: Q 999.00");
          else
            {
              totGalon= Math.round(galon*250.00);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renAgua >=18.925)
      {
        cubeta = Math.ceil(renAgua /18.925)
        totCubeta = Math.round(cubeta *999.00);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }
//Calculo de pintura de oleo
if (opcion2 == 3)
  {
    renOleo = (totPintar / 12);
    
    if (renOleo >= 0 && renOleo <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 Necesita Medio Galon de pinturaque cuesta: Q 386.65");
      }
    if (renOleo >= 1.89 && renOleo < 18.925)
        {
          galon = Math.ceil(renOleo / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Mt2 Necesita 1 Cubeta de pintura que cuesta: Q 3103.55");
          else
            {
              totGalon= Math.round(galon*386.65);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renOleo >=18.925)
      {
        cubeta = Math.ceil(renOleo /18.925)
        totCubeta = Math.round(cubeta *3103.55);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }
//noprotect
</script>



<script id="jsbin-source-javascript" type="text/javascript">var opcion = " ";
var pared = [];
var basePared =[];
var alturaPared =[];
var baseVentana = [];
var alturaVentana = [];
var basePuerta = [];
var alturaPuerta = [];
var totPared = 0;
var sumPared = 0;
var totVentana = 0;
var sumVentana = 0;
var cantVentana = 0;
var cantPuerta = 0;
var totPuerta = 0;
var sumPuerta = 0;
var baseP = 0;
var alturaP = 0;
var baseV = 0;
var alturaV = 0;
var baseP = 0;
var alturaP = 0;
var totPintar =0;
var renAceite = 0;
var galon = 0;
var medioGalon = 0;
var preAceite = 0;
var cubeta = 0;
var totGalon = 0;
var totCubeta = 0;
var renAgua = 0;
var renOleo = 0;
while (opcion !== 'NO')
  {
    opcion = prompt ("DESEA INGRESAR UNA NUEVA PARED?  SI / NO")
    if (opcion == 'SI' || opcion == 'si')
      {
        basePared[basePared.length] = parseInt( prompt ("Ingrese la base de la pared: "));
        alturaPared[alturaPared.length] = parseInt( prompt ("Ingrese la altura de la pared: "));
        baseP = basePared[basePared.length -1];
        alturaP = alturaPared[alturaPared.length -1];
        //totPared = (parseInt((basePared[basePared.length]) * parseInt(alturaPared[alturaPared.length])));
        totPared = baseP * alturaP;
        sumPared = sumPared + totPared;
        //alert (base);
        //alert (altura);
        //alert (totPared);
        //Calculo de las ventanas
        opcionVentana = prompt("Tiene ventanas en la pared? SI/NO");
         if (opcionVentana == 'SI' || opcionVentana == 'si')
           {
             cantVentana = parseInt( prompt("Cuantas ventanas tienen la pared?"))
             
             for (var i = 1; i<=cantVentana;i++ )
               {
             baseVentana[baseVentana.length] = parseInt( prompt("Ingrese la base de la ventana: "));
             alturaVentana[alturaVentana.length] = parseInt( prompt("Ingrese la altura de la ventana: "));
             baseV = baseVentana[baseVentana.length -1]
             alturaV = alturaVentana[alturaVentana.length -1]
             totVentana = baseV * alturaV;
             sumVentana = sumVentana + totVentana;
             //alert (totVentana)
               }
           }
        opcionPuerta = prompt("Tiene puertas la pared? SI/NO");
        if (opcionPuerta == 'SI' || opcionPuerta == 'si')
        {
          cantPuerta = parseInt( prompt("Cuantas puertas tienen la pared?"));
          
          for (var j =1; j<=cantPuerta; j++)
            {
              basePuerta[basePuerta.length] = parseInt( prompt("Ingrese la base de la puerta: "));
              alturaPuerta[alturaPuerta.length] = parseInt( prompt("Ingrese la altura de la puerta: "));
              baseP = basePuerta[basePuerta.length -1]
              alturaP = alturaPuerta[alturaPuerta.length -1]
              totPuerta = baseP * alturaP;
              sumPuerta = sumPuerta + totPuerta;
              //alert (totPuerta);
            }
        }
        
      }
  }
totPintar = sumPared - (sumVentana + sumPuerta);
document.write ("AREA TOTAL DE LAS PAREDES: " +sumPared);
document.write ("<br>");
document.write ("AREA TOTAL DE VENTANAS: " +sumVentana);
document.write ("<br>");
document.write ("AREA TOTAL DE PUERTAS: " +sumPuerta);
document.write ("<br>");
//document.write ("TOTAL DEL AREA A PINTAR: " +totPintar);
document.write ("<br>");
document.write ("<br>");
opcion2 = parseInt(prompt("Que pintura desea comprar? 1- Aceite 2- Agua 3- Oleo 4- Salir no comprar"));
//Calculo de pintura de Aceite
if (opcion2 == 1)
  {
    renAceite = (totPintar / 13);
    
    if (renAceite >= 0 && renAceite <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 necesita medio galon de pintura que cuesta: Q 240.50");
      }
    if (renAceite >= 1.89 && renAceite < 18.925)
        {
          galon = Math.ceil(renAceite / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Necesita 1 Cubeta de pintura que cuesta: Q 1,821.65");
          else
            {
              totGalon= Math.round(galon*432.35);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renAceite >=18.925)
      {
        cubeta = Math.ceil(renAceite /18.925)
        totCubeta = Math.round(cubeta *1821.65);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }
//Calculo de pintura de Agua
if (opcion2 == 2)
  {
    renAgua = (totPintar / 10);
    
    if (renAgua >= 0 && renAgua <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 Necesita Medio Galon de pinturaque cuesta: Q 150.00");
      }
    if (renAgua >= 1.89 && renAgua < 18.925)
        {
          galon = Math.ceil(renAgua / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Mt2 Necesita 1 Cubeta de pintura que cuesta: Q 999.00");
          else
            {
              totGalon= Math.round(galon*250.00);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renAgua >=18.925)
      {
        cubeta = Math.ceil(renAgua /18.925)
        totCubeta = Math.round(cubeta *999.00);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }
//Calculo de pintura de oleo
if (opcion2 == 3)
  {
    renOleo = (totPintar / 12);
    
    if (renOleo >= 0 && renOleo <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 Necesita Medio Galon de pinturaque cuesta: Q 386.65");
      }
    if (renOleo >= 1.89 && renOleo < 18.925)
        {
          galon = Math.ceil(renOleo / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Mt2 Necesita 1 Cubeta de pintura que cuesta: Q 3103.55");
          else
            {
              totGalon= Math.round(galon*386.65);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renOleo >=18.925)
      {
        cubeta = Math.ceil(renOleo /18.925)
        totCubeta = Math.round(cubeta *3103.55);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }
//noprotect</script></body>
</html>
jsbin.gehumed.js
var opcion = " ";
var pared = [];
var basePared =[];
var alturaPared =[];
var baseVentana = [];
var alturaVentana = [];
var basePuerta = [];
var alturaPuerta = [];
var totPared = 0;
var sumPared = 0;
var totVentana = 0;
var sumVentana = 0;
var cantVentana = 0;
var cantPuerta = 0;
var totPuerta = 0;
var sumPuerta = 0;
var baseP = 0;
var alturaP = 0;
var baseV = 0;
var alturaV = 0;
var baseP = 0;
var alturaP = 0;
var totPintar =0;

var renAceite = 0;
var galon = 0;
var medioGalon = 0;
var preAceite = 0;
var cubeta = 0;
var totGalon = 0;
var totCubeta = 0;
var renAgua = 0;
var renOleo = 0;



while (opcion !== 'NO')
  {
    opcion = prompt ("DESEA INGRESAR UNA NUEVA PARED?  SI / NO")
    if (opcion == 'SI' || opcion == 'si')
      {
        basePared[basePared.length] = parseInt( prompt ("Ingrese la base de la pared: "));
        alturaPared[alturaPared.length] = parseInt( prompt ("Ingrese la altura de la pared: "));
        baseP = basePared[basePared.length -1];
        alturaP = alturaPared[alturaPared.length -1];
        //totPared = (parseInt((basePared[basePared.length]) * parseInt(alturaPared[alturaPared.length])));
        totPared = baseP * alturaP;
        sumPared = sumPared + totPared;
        //alert (base);
        //alert (altura);
        //alert (totPared);
        //Calculo de las ventanas
        opcionVentana = prompt("Tiene ventanas en la pared? SI/NO");
         if (opcionVentana == 'SI' || opcionVentana == 'si')
           {
             cantVentana = parseInt( prompt("Cuantas ventanas tienen la pared?"))
             
             for (var i = 1; i<=cantVentana;i++ )
               {
             baseVentana[baseVentana.length] = parseInt( prompt("Ingrese la base de la ventana: "));
             alturaVentana[alturaVentana.length] = parseInt( prompt("Ingrese la altura de la ventana: "));
             baseV = baseVentana[baseVentana.length -1]
             alturaV = alturaVentana[alturaVentana.length -1]
             totVentana = baseV * alturaV;
             sumVentana = sumVentana + totVentana;
             //alert (totVentana)
               }
           }
        opcionPuerta = prompt("Tiene puertas la pared? SI/NO");
        if (opcionPuerta == 'SI' || opcionPuerta == 'si')
        {
          cantPuerta = parseInt( prompt("Cuantas puertas tienen la pared?"));
          
          for (var j =1; j<=cantPuerta; j++)
            {
              basePuerta[basePuerta.length] = parseInt( prompt("Ingrese la base de la puerta: "));
              alturaPuerta[alturaPuerta.length] = parseInt( prompt("Ingrese la altura de la puerta: "));
              baseP = basePuerta[basePuerta.length -1]
              alturaP = alturaPuerta[alturaPuerta.length -1]
              totPuerta = baseP * alturaP;
              sumPuerta = sumPuerta + totPuerta;
              //alert (totPuerta);
            }
        }
        
      }
  }
totPintar = sumPared - (sumVentana + sumPuerta);

document.write ("AREA TOTAL DE LAS PAREDES: " +sumPared);
document.write ("<br>");
document.write ("AREA TOTAL DE VENTANAS: " +sumVentana);
document.write ("<br>");
document.write ("AREA TOTAL DE PUERTAS: " +sumPuerta);
document.write ("<br>");
//document.write ("TOTAL DEL AREA A PINTAR: " +totPintar);
document.write ("<br>");
document.write ("<br>");



opcion2 = parseInt(prompt("Que pintura desea comprar? 1- Aceite 2- Agua 3- Oleo 4- Salir no comprar"));
//Calculo de pintura de Aceite
if (opcion2 == 1)
  {
    renAceite = (totPintar / 13);
    
    if (renAceite >= 0 && renAceite <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 necesita medio galon de pintura que cuesta: Q 240.50");
      }
    if (renAceite >= 1.89 && renAceite < 18.925)
        {
          galon = Math.ceil(renAceite / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Necesita 1 Cubeta de pintura que cuesta: Q 1,821.65");
          else
            {
              totGalon= Math.round(galon*432.35);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renAceite >=18.925)
      {
        cubeta = Math.ceil(renAceite /18.925)
        totCubeta = Math.round(cubeta *1821.65);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }
//Calculo de pintura de Agua
if (opcion2 == 2)
  {
    renAgua = (totPintar / 10);
    
    if (renAgua >= 0 && renAgua <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 Necesita Medio Galon de pinturaque cuesta: Q 150.00");
      }
    if (renAgua >= 1.89 && renAgua < 18.925)
        {
          galon = Math.ceil(renAgua / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Mt2 Necesita 1 Cubeta de pintura que cuesta: Q 999.00");
          else
            {
              totGalon= Math.round(galon*250.00);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renAgua >=18.925)
      {
        cubeta = Math.ceil(renAgua /18.925)
        totCubeta = Math.round(cubeta *999.00);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }

//Calculo de pintura de oleo
if (opcion2 == 3)
  {
    renOleo = (totPintar / 12);
    
    if (renOleo >= 0 && renOleo <1.89)
      {
        document.write ("Area a pintar: " +totPintar+ " Mt2 Necesita Medio Galon de pinturaque cuesta: Q 386.65");
      }
    if (renOleo >= 1.89 && renOleo < 18.925)
        {
          galon = Math.ceil(renOleo / 3.785)
          if (galon == 5)
            document.write ("Area a pintar "+totPintar+" Mt2 Necesita 1 Cubeta de pintura que cuesta: Q 3103.55");
          else
            {
              totGalon= Math.round(galon*386.65);
              document.write ("Area a pintar " +totPintar+ " Mt2 Necesita: "+galon+" galones de pintura que cuestan: Q " +totGalon);
            }
          
         }
    if (renOleo >=18.925)
      {
        cubeta = Math.ceil(renOleo /18.925)
        totCubeta = Math.round(cubeta *3103.55);
        document.write("Area a pintar "+ totPintar+" Mt2 Necesita: "+cubeta+" Cubetas de pintura que cuestan: Q "+totCubeta)
      }
      
          
  }



//noprotect
