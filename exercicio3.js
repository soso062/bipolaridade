//const frutas=["Abacaxi", "Mamão", 10, 15, true, false, 1.5]

//frutas.push("Abacate", "Laranja");

//console.log(frutas.length);

//const frutas=["mamao", "laranja", "melancia", "abacate", "uva", "pera"];


//console.log(frutas[3]);
//frutas.push("maça");
//console.log(frutas.length);

//const pessoa={
    //nome:"Maria",
   // sobrenome: "Oliveira",
    //idade: 25
//}
//console.log(pessoa.idade);

//const carro={
    //marca: "Chevrolet", 
    //modelo: "Montana",
    //ano: 2020
//}
//console.log(carro.ano, carro.marca, carro.modelo);

//const carro={
    //marca: "Chevrolet", 
    //modelo: "Montana",
    //ano: 2020
//}
//const carro1={
    //marca: "jeep", 
    //modelo: "renegade",
    //ano: 2021
//}
//const carro2={
  //  marca: "chevrolet", 
    //modelo: "tracker",
    //ano: 2022
//}
//const carro3={
  //  marca: "volkswagem", 
    //modelo: "gol",
    //ano: 2024
//}
//console.log(carro3.ano);
//console.log(carro.modelo);
//console.log(carro2.modelo);
//console.log(carro1.modelo);

//function carro(marca, modelo, ano){
    //return {marca, modelo, ano};
//}

//const carro1 = carro("jeep", "renegade", 2020);
//console.log(carro1.marca, carro1.modelo, carro1.ano);

//function pessoa(idade, altura, nome, sobrenome ){
    //return {idade, altura, nome, sobrenome};
//}

//const pessoa1 = pessoa(15, 1.74, "ana julia", "zago");
//console.log(pessoa1.idade, pessoa1.altura, pessoa1.nome, pessoa1.sobrenome);

//function divisao(n){
     //if(n % 2=== 0){
      // return `O numero ${n} PAR`;
    // }  else{
       // return `O numero ${n} é IMPAR`;
       //}
   // }  
//console.log(divisao(11));

function idades(n){
    if (n <= 5){
      return "A pessoa é bebe";
     }else if (n >= 6 && n <=13 ){
     return "A pessoa é criança";
    }else if (n >= 14 && n <= 59){
          return "A pessoa é adulto";
     }else if (n >= 60 && n <= 80){
            return "A pessoa é idoso";
    }else { 
          return "A pessoa é ançião";
}
}
console.log(idades(30));