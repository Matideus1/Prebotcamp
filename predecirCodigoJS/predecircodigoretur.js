
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

/* Esto es una funcion */
function hello() {
    /* imprimimos hello */
    console.log('hello');
    /* retornamos el valor de 15 */
    return 15;
}
/* declaramos la variable result que va a ser igual al return de la funcion Hello() */
var result = hello();
// var result = 15
console.log('result is', result);

// result is 15 

/*esto es una funcion*/

function numPlus(num) {
    /*imprimir num is num*/
    console.log('num is', num);
    /*retornamos num+15*/
    return num+15
;
}
/*declaramamos variable result va a ser igual que numplus(3)*/

var result = numPlus(3);

/*imprime el result*/

console.log('result is', result);

/*result es numplus(3)*/




/*declaramos variable=num15*/

var num = 15;

/*imprime num*/

console.log(num);

/*declara funcion longAndReturn(num2)*/

function logAndReturn(num2){
    
    /*imprime num2*/
    console.log(num2);   
   
   /*retorna a num2*/
return num2;

}/*var result=longAndReturn(10)*/
var result = logAndReturn(10)
/*imprime result*/
console.log(result);

/*imprime num*/
console.log(num);

/*num = 15
*/


//crea variable num=15//
var num = 15;
//imprime num //
console.log(num);
//declara funcion logandreturn//
function logAndReturn(num2){// se pide un paramentro llamado num2
    //imprime num2
   console.log(num2);  
   //retorna num2 
   return num2;
}
var result = logAndReturn(10);//se llama a la funcion y se le pasa 10 como argumento
console.log(result);//se imprime result 
console.log(num);//se imprime num



var num = 15;//crea variable num
console.log(num);//imprime num
function timesTwo(num2){//declara funcion timesrwo y pide parametro llamado num2
   console.log(num2);//imprime num2   
   return num2*2;//retorna a num2*2
}
var result = timesTwo(10);//se llama a la funcion y se le pasa el 10 como argumento
console.log(result);//imprime el resultado
console.log(num);//imprime num





function timesTwoAgain(num) {//declara funcion timetwoagain y da parametro llamado num
    console.log('num is', num);//imprime num is num
    var y = num*2;//declara variable llamada y 
    return y;//retorna a y
}
var result = timesTwoAgain(3) + timesTwoAgain(5);//se llama a la funcion 2 veces  y se pone 3 y 5 como argumentos 
console.log('result is', result);//imprime result is result 




function sumNums(num1, num2) {  //declara funcion sumnums num1   num2
    return num1+num2;//retorna a num1 y a num2 
 }
 console.log(sumNums(2,3))//imprime sumnums 2,3
 console.log(sumNums(3,5))//imprime sumnums 3,5




 function printSumNums(num1, num2) {//declara funcion printsumnums num 1 y num2 
    console.log(num1);//imprime num1
    return num1+num2;//retorna  num 1 mas num2
 }
 console.log(printSumNums(2,3))//imprime printsumnums 2,3 
 console.log(printSumNums(3,5))//imprime printsumnums 3,5



 function sumNums(num1, num2) {//declara funcion sumnums y da como parametro num1 y num2 
    var sum = num1 + num2;//declara variable sum que es igual a num1+num2
    console.log('sum is', sum);//imprime sum is sum
    return sum;//retorna a sum
}
var result = sumNums(2,3) + sumNums(3,5);//se llama a la funcion 2 veces con parametros 2,3 y 3,5
console.log('result is', result);//imprime result is result



function sumNums(num1, num2) {//declara funcion sumnus num1 y num2 
    var sum = num1 + num2;//declara variable sum = a num1 y num2 
    console.log('sum is', sum);//imprime sum is sum
    return sum;//retorna a sum 
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));//se llama a la funcion 6 veces y se les da parametros 
console.log('result is', result);//imprime result is result




