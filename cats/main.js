$(document).ready(function (){
  //Milestone 1
  //Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso

  const cats = [
    {
      name: 'Romeo',
      age: 12,
      color: 'black',
      sex: 'Male'
    },
    {
      name: 'Virgola',
      age: 5,
      color: 'orange',
      sex: 'Female'
    },
    {
      name: 'Figaro',
      age: 8,
      color: 'grey',
      sex: 'Male'
    },
    {
      name: 'Minou',
      age: 6,
      color: 'white',
      sex: 'Female'
    },
    {
      name: 'Bizet',
      age: 1,
      color: 'brown',
      sex: 'Male'
    },
  ];
console.log(cats);

//Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
cats.forEach((item) => {
  $('#cats').append(`<li> ${item.name} is a ${item.color} cat </li>`);
});


//Milestone 2
//Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio
  const males = cats.filter((item) => item.sex == 'Male');

  const females = cats.filter((item) => item.sex == 'Female');

  console.log(males);
  console.log(females);

  // Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio
  const malesOpacity = [];

  males.forEach((item) => {
    let newItem;
    if (item.age <= 5) {
      $('#cats').append(`<li class="blue min-op"> ${item.name} is a ${item.color} cat <i class="fas fa-ribbon"></i></li>`);
       newItem = {...item, opacity: 0.2};
    } else if (item.age > 5 && item.age <= 10) {
      $('#cats').append(`<li class="blue med-op"> ${item.name} is a ${item.color} cat <i class="fas fa-ribbon"></i></li>`);
       newItem = {...item, opacity: 0.5};
    } else {
      $('#cats').append(`<li class="blue max-op"> ${item.name} is a ${item.color} cat <i class="fas fa-ribbon"></i></li>`);
      newItem = {...item, opacity: 1};

    }
      malesOpacity.push(newItem);
  });
  console.log(malesOpacity);

  const femalesOpacity = [];

  females.forEach((item) => {
    let newItem;
    if (item.age <= 5) {
      $('#cats').append(`<li class="pink min-op"> ${item.name} is a ${item.color} cat <i class="fas fa-ribbon"></i></li>`);
      newItem = {...item, opacity: 0.2};
    } else if (item.age > 5 && item.age <= 10) {
      $('#cats').append(`<li class="pink med-op"> ${item.name} is a ${item.color} cat <i class="fas fa-ribbon"></i></li>`);
      newItem = {...item, opacity: 0.5};
    } else {
      $('#cats').append(`<li class="pink max-op"> ${item.name} is a ${item.color} cat <i class="fas fa-ribbon"></i></li>`);
      newItem = {...item, opacity: 1};
    }
    femalesOpacity.push(newItem);
  });

  console.log(femalesOpacity);

//Milestone 3
//Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto
const newCats = [...femalesOpacity,...malesOpacity];

const lastCats = newCats.map((element) => {
  const {name, color, opacity} = element;

  return {name, color, opacity} ;

});

console.log(lastCats);
});
