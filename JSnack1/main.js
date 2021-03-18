$(document).ready(function(){
  //Creare un array di bici con proprietà: nome e peso

  const bikes = [];

  bikes.push({
    nome: 'Mountain Bike',
    peso: 10
  });
  bikes.push({
    nome: 'E-Bike',
    peso: 15
  });
  bikes.push({
    nome: 'Hardtail',
    peso: 12
  });
  bikes.push({
    nome: 'Fat Bike',
    peso: 18
  });
  bikes.push({
    nome: 'BMX',
    peso: 6
  });
  bikes.push({
    nome: 'Classic',
    peso: 9
  });
  bikes.push({
    nome: 'Folding',
    peso: 8
  });

  console.log(bikes);

  //Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
  let min = bikes[0];

  for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < min.peso) {
      min = bikes[i];
    }
  }
  const {nome, peso} = min;
  // console.log(nome, peso);
  document.getElementById('min').innerHTML = (`La bici con il peso minore è la: ${nome} ed il suo peso è ${peso} kg`);

});
