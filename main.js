
/* 1. Desarrollar un programa que permita calcular el área o 
perímetro de algunas figuras planas según la siguiente tabla: */

// Algortimo para calcular el perimetro del triagunlo. Formula perimetro: a + b + c

let a = 10;
let b = 15;
let c = 8;

var suma = a+ b+ c;
console.log("El perimetro del triangulo es: "+ suma );


// Algortimo para calcular area del rectangulo: b * a

let numero1 = 10;
let numero2 = 20;

var area = numero2 * numero1;
console.log("El area del rectangulo es: " + area);


// Algortimo para calcular el perimetro del cuadrado: 4 * a

let perimetro = prompt("ingrese la medida de uno de los lados del cuadrado");
perimetro = (perimetro*4);
console.log("El perimetro del cuadrado es:" + perimetro);


/*2. Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas 
en un vector de enteros y luego determine la cantidad de personas que son menores de edad, 
mayores de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el promedio 
de edades ingresadas. Para el ejercicio anterior suponga que un adulto mayor debe tener una 
edad igual o superior a 60.Debe validar para cada ingreso que los valores estén en un rango 
entre 1 y 120 años. En caso de error deberá notificar y solicitar un nuevo valor.*/

let edades = ["20", "25", "30", "35", "40","45","50", "55", "60", "65"];
console.log(edades)
console.log(edades.length)


/*3. Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y 
luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos 
tienen los números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla 
debe ser 1 2 3 4 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe validar en cada 
ingreso que realmente se estén ingresando los datos de forma ascendente.*/



/*4. Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y 
cantantes más escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a 
estudiantes del SENA del programa de tecnólogo en análisis y desarrollo de software desarrollar 
una solución que permita conocer la respuesta de 6 personas con relación a sus gustos musicales. 
Con fines administrativos y realizar una rifa entre las personas encuestadas, la emisora desea 
poder registrar de las personas entrevistadas su nombre, número de identificación (cédula), 
fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen. Además, se 
deberá poder almacenar el artista y título de hasta 3 canciones favoritas ecada una de las 
personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá 
mostrar un menú que permite las siguientes opciones:
a. Agregar una persona con los datos que se listan anteriormente.
b. Mostrar la información personal de una persona particular por medio de su posición en el vector.*/
