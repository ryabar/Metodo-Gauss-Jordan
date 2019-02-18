// DECLARANDO VARIABLES
var matriz_n = 2;
// var extras = matriz_n + 2;

// SELECCIONANDO ELEMENTOS
var tabla = document.querySelector("#tabla");
var contenedor = document.querySelector("#sub-contenedor");
// var decremento = document.getElementById(btn_decremento);

function crearTablaInicial(matriz_n,tabla){
    var input_n = 0;
tabla.innerHTML = "";
for (let i=0; i<matriz_n; i++ ) {
    tabla.innerHTML += '<div class="fila" id="fila' + i + '"></div>';
    var fila = document.querySelector("#fila" + i);    
    for (let y=0; y<matriz_n; y++) {
        switch (y) {
            case 0:
                fila.innerHTML += '<input type="text" placeholder="A" required id="n' + input_n + '"/>';
                input_n++;
            break;
            case 1:
                fila.innerHTML += '<input type="text" placeholder="B" required id="n' + input_n + '"/>';
                input_n++;
            break;
            case 2:
                fila.innerHTML += '<input type="text" placeholder="C" required id="n' + input_n + '"/>';
                input_n++;
            break;
            case 3:
                fila.innerHTML += '<input type="text" placeholder="D" required id="n' + input_n + '"/>';
                input_n++;
            break;
            case 4:
                fila.innerHTML += '<input type="text" placeholder="E" required id="n' + input_n + '"/>';
                input_n++;
            break;       
            default:
                break;
        }         
    }
    for (let z=0; z<2; z++) {
        if (z==0) {
            fila.innerHTML += '<span>=</span>';            
        } else {
            fila.innerHTML += '<input type="text" placeholder="R" required id="n' + input_n + '"/>';
            input_n++;
        }
    }
      
}
}

crearTablaInicial(matriz_n,tabla);

// console.log(input_n);

function incremento(){
    console.log("Incrementando");
    matriz_n++;
    if (matriz_n>5) {
        alert("No es posible seguir aumentando.");
        matriz_n--;
        console.log(matriz_n);        
    } else {
        crearTablaInicial(matriz_n,tabla);
    }  
};

function decremento(){
    console.log("Decrementando");
    matriz_n--;
    if (matriz_n<2) {
        alert("No es posible seguir disminuyendo.");
        matriz_n++;
        console.log(matriz_n); 
    } else {
        crearTablaInicial(matriz_n,tabla);
    }
};

function resolver(){
    // e.preventDefault();
    console.log("Resolviendo");
    // console.log(contenedor);
    // var matriz = new Array(matriz_n);
    var valores = [];
    var n = (matriz_n * matriz_n) + matriz_n;
    // console.log(n);
    // var valor = document.querySelector("#n0").value;
    // console.log(valor);

    // OBTENIENDO LOS VALORES EN UN ARREGLO
    for (let i=0; i<n; i++) {
        var valor = document.querySelector("#n"+i).value;
        valores[i] = valor;
    }
    console.log(valores);   

    // CREANDO LA MATRIZ CON LOS DATOS
    // var indice = 0;
    // var nDatosFila = matriz_n+1;
    // for (let y=0; y<matriz_n; y++) {
    //     matriz[y]= new Array(matriz_n); 
    //     for (let z=0; z<nDatosFila; z++) {
    //         matriz[y][z] = valores[indice];
    //         indice++;            
    //     }
    // }
    // console.log(matriz);

    // SEPARANDO LA MATRIZ ENTRE RESULTADOS Y ECUACIONES
    var punto = 0;
    var punto_dos = 0;
    var indice_uno = 0;
    var indice_dos = 0;
    var cMatriz = new Array(matriz_n-1);
    var rMatriz = new Array(matriz_n-1);
    var longitud = valores.length;
    var w = 0;
    // console.log(longitud);

    for (let i=0; i<longitud; i++) {
        if (punto == matriz_n) {
            rMatriz[w] = Number(valores[i]);
            w++;
            punto = -1;
        } else {
            
            for (let y=indice_uno; y<indice_uno+1; y++) {
                for (let z=indice_dos; z<indice_dos+1; z++) {
                    if (indice_dos == 0) {
                        cMatriz[y] = new Array(matriz_n-1);
                    }
                    cMatriz[y][z] = Number(valores[i]);
                    // console.log(valores[i]);                    
                    console.log(cMatriz[y][z] + " - " + y + " - " + z); 
                    // console.log(valores[i]);
                    
                }
                // console.log(indice_dos);
                indice_dos++;
                // console.log(indice_dos);  
                // console.log(indice_uno);              
            } 

            if (indice_dos == matriz_n) {
                indice_uno++;
                // console.log(indice_uno); 
                indice_dos = 0;
                // punto_dos = -1;
            } 
            
            // punto_dos++;            
        }        
        punto++;
    }
    
    // cMatriz[0][0] = 0;
    // cMatriz[0][1] = 1;
    // cMatriz[1][0] = 2;
    // cMatriz[1][1] = 3;
    // cMatriz[1][2] = 3;
    // cMatriz[1][5] = 3;
    // console.log(rMatriz);
    // console.log(cMatriz);
    
    

    contenedor.innerHTML += '<div class="hr-vertical"></div>';
    contenedor.innerHTML += '<div class="bloque-dos" id="bloque-dos"></div>';
    var bloque_dos = document.querySelector("#bloque-dos");
    // console.log(bloque_dos);

    
    // EFECTUANDO EL METODO GAUSS JORDAN
    // GaussJordar(matriz,matriz_n);
    resultado = gauss(cMatriz, rMatriz);
    $contador = resultado.length;
    for (let s=0; s<$contador; s++) {
        resultado[s] = resultado[s].toFixed(2);
    }

    console.log(resultado);
    bloque_dos.innerHTML = '<div class="box-resultados" id="box-resultados"><h4>Resultados</h4><div class="resultados" id="resultados"> </div></div>';
    var resultados = document.querySelector("#resultados");
    resultados.innerHTML = "";

    for (let d=0; d<$contador; d++) {
        switch (d) {
            case 0:
                resultados.innerHTML += '<span>A = ' + resultado[d] + '</span>';
                break;
            case 1:
                resultados.innerHTML += '<span>B = ' + resultado[d] + '</span>';
                break;
            case 2:
                resultados.innerHTML += '<span>C = ' + resultado[d] + '</span>';
                break;
            case 3:
                resultados.innerHTML += '<span>D = ' + resultado[d] + '</span>';
                break;
            case 4:
                resultados.innerHTML += '<span>E = ' + resultado[d] + '</span>';
                break;
            default:
                break;
        }
    } 
        
};

// function GaussJordar(matriz,nVariables){

//     var newMatriz = matriz;

//     switch (nVariables) {
//         case 2:            
//             console.log(newMatriz);
            
//             console.log("Matriz de 2x2");
//             var recorrido = ((nVariables-1)*(nVariables-1))+(nVariables-1);
//             var fila = 0;
//             var calculoMatriz = new Array(nVariables-1);
//             var newCalculoMatriz = new Array(nVariables-1);
//             var indice_uno = 0;
//             var indice_dos = 0;
//             var multiplicador = new Array(1);

//             for (let i=0; i<recorrido; i++) {
//                 while(fila == 0){
//                     for (let y=0; y<2; y++ ) {
//                         calculoMatriz[y] = new Array(nVariables+1);
//                         for (let z=0; z<nVariables+1; z++) {
//                             for (let k=indice_uno; k<indice_uno+1; k++) {
//                                 for (let l=indice_dos; l<indice_dos+1; l++) {
//                                     calculoMatriz[y][z] = newMatriz[k][l];
//                                     if (newMatriz[0][0]) {
//                                         multiplicador[0] = newMatriz[0][0];
//                                     };

//                                     if (newMatriz[1][0]) {
//                                         multiplicador[1] = (-1)*newMatriz[1][0];
//                                     };                                       
//                                 }
//                                 indice_dos++;
//                             }
//                         }
//                         indice_uno++;
//                         indice_dos = 0;
//                     }
//                     // indice_uno = 0;
//                     // indice_dos = 0;
//                     // for (let y=0; y<2; y++ ) {
//                     //     newCalculoMatriz[y] = new Array(nVariables+1);
//                     //     for (let z=0; z<nVariables+1; z++) {
//                     //         for (let h=0;h<2;h++) {
//                     //             for (let k=0; k<2; k++) {
//                     //                 for (let l=0; l<3; l++) {
//                     //                     // console.log(newCalculoMatriz);
//                     //                 //    console.log(calculoMatriz[k][l]); 
                                                                            
//                     //                    newCalculoMatriz[y][z] = multiplicador[h] * calculoMatriz[k][l];
//                     //                     // if (newMatriz[0][0]) {
//                     //                     //     multiplicador[0] = newMatriz[0][0];
//                     //                     // };
    
//                     //                     // if (newMatriz[1][0]) {
//                     //                     //     multiplicador[1] = (-1)*newMatriz[1][0];
//                     //                     // };                                       
//                     //                 }
//                     //                 // indice_dos++;                                      
//                     //             }   
//                     //             // indice_uno++;    
                                                               
//                     //         }   
                                                     
                                     
//                     //     }                        
//                     // }

//                     fila++;
//                 }
//             }
//             console.log(multiplicador); 
//             console.log(newCalculoMatriz);                       
//             console.log(calculoMatriz);
            
//             break;

//         case 3:
//             console.log("Matriz de 3x3");
//             break;

//         case 4:
//             console.log("Matriz de 4x4");
//             break;

//         case 5:
//             console.log("Matriz de 5x5");
//             break;

//         default:
//             break;
//     }    

// };


/**********************************/
var abs = Math.abs;

function array_fill(i, n, v) {
    var a = [];
    for (; i < n; i++) {
        a.push(v);
    }
    return a;
}

/**
 * Gaussian elimination
 * @param  array A matrix
 * @param  array x vector
 * @return array x solution vector
 */
function gauss(A, x) {

    var i, k, j;

    // Just make a single matrix
    for (i=0; i < A.length; i++) { 
        A[i].push(x[i]);
    }
    var n = A.length;

    for (i=0; i < n; i++) { 
        // Search for maximum in this column
        var maxEl = abs(A[i][i]),
            maxRow = i;
        for (k=i+1; k < n; k++) { 
            if (abs(A[k][i]) > maxEl) {
                maxEl = abs(A[k][i]);
                maxRow = k;
            }
        }


        // Swap maximum row with current row (column by column)
        for (k=i; k < n+1; k++) { 
            var tmp = A[maxRow][k];
            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
        }

        // Make all rows below this one 0 in current column
        for (k=i+1; k < n; k++) { 
            var c = -A[k][i]/A[i][i];
            for (j=i; j < n+1; j++) { 
                if (i===j) {
                    A[k][j] = 0;
                } else {
                    A[k][j] += c * A[i][j];
                }
            }
        }
    }

    // Solve equation Ax=b for an upper triangular matrix A
    x = array_fill(0, n, 0);
    for (i=n-1; i > -1; i--) { 
        x[i] = A[i][n]/A[i][i];
        for (k=i-1; k > -1; k--) { 
            A[k][n] -= A[k][i] * x[i];
        }
    }

    return x;
}