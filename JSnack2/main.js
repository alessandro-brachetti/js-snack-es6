$(document).ready(function(){
  //Creare un array di oggetti di squadre di calcio con proprietà: nome, punti fatti, falli subiti
  const teams = [
    {
      nome: 'squadra1',
      points: 0,
      fouls: 0
    },
    {
      nome: 'squadra2',
      points: 0,
      fouls: 0
    },
    {
      nome: 'squadra3',
      points: 0,
      fouls:0
    },
    {
      nome: 'squadra4',
      points: 0,
      fouls: 0
    },
    {
      nome: 'squadra5',
      points: 0,
      fouls: 0
    },
  ];

//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
  for (let i = 0; i < teams.length; i++) {
    const thisTeam = teams[i];

    thisTeam.points = getRandomNumber(0, 50);
    thisTeam.fouls = getRandomNumber(0, 50);
  }
  console.log(teams);
  //Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console
  const newTeam = [];
  
  for (let i = 0; i < teams.length; i++) {
    const thisTeam = teams[i];

    const {nome, fouls} = thisTeam;

    newTeam.push({
      nome,
      fouls
    });
  }
  console.log(newTeam);
});

//FUNCTIONS
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
