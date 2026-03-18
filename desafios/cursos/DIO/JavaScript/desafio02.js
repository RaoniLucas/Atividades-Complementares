function rankBalance(numberOfWins) {
   let users = [
       ["Aragorn"],
       ["Gandalf"],
       ["Legolas"],
       ["Gimli"],
       ["Frodo"],
       ["Samwise"],
       ["Galadriel"]
   ];
   
   users.forEach((user, index) => {
      let wins = numberOfWins[index] !== undefined ? numberOfWins[index] : 0;
      user.push(wins);
   });
   
   for (let [name, wins] of users) {
      let patent;
      
      if (wins < 10) {
         patent = 'Ferro';
      } else if (wins >= 10 && wins <= 20) {
         patent = 'Bronze';
      } else if (wins > 20 && wins <= 50) {
         patent = 'Prata';
      } else if (wins > 50 && wins <= 80) {
         patent = 'Ouro';
      } else if (wins > 80 && wins <= 90) {
         patent = 'Diamante';
      } else if (wins > 90 && wins <= 100) {
         patent = 'Lendário';
      } else if (wins >= 101) {
         patent = 'Imortal';
      }
      
      console.log(`O herói ${name} tem um saldo de vitória de ${wins} e está no nível ${patent}`);
   }
}

rankBalance([5, 25, 35, 55, 85, 95, 105]);