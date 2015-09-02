//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
Dividir(input);
Cuadrados(arreglo, Cantidad);
function Dividir(input)
{
	arreglo=input.split("\n");
	Cantidad=arreglo[0];
	return arreglo;
	return Cantidad;
}
function Cuadrados(arreglo,Cantidad)
{
	for (i = 0; i < Cantidad; i++) {
		temporal=arreglo[i+1].split(" ");
		a=temporal[0];
		b=temporal[1];
		bandera=0;
		for (a; a <= b; a++) {
			num=a
			sqrt = Math.sqrt(num);
			if (sqrt%1==0){
				bandera+=1;
			}
		};
		console.log (bandera);
	}
}
