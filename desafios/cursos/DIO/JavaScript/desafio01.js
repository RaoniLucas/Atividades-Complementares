let users = [
    ["Aragorn", 800],
    ["Gandalf", 1500],
    ["Legolas", 3000],
    ["Gimli", 6000],
    ["Frodo", 8500],
    ["Samwise", 9500],
    ["Galadriel", 12000]
];

for (let [name, userExp] of users) {
   let patent;
   
   if (userExp < 1000) {
      patent = "Ferro";
   } else if (userExp > 1000 && userExp <= 2000) {
      patent = "Bronze";
   } else if (userExp > 2000 && userExp <= 5000) {
      patent = "Prata Ouro";
   } else if (userExp > 5000 && userExp <= 8000) {
      patent = "Platina Diamante";
   } else if (userExp > 8000 && userExp <= 9000) {
      patent = "Ascendente";
   } else if (userExp > 9000 && userExp <= 10000) {
      patent = "Imortal";
   } else if (userExp >= 10000) {
      patent = "Radiante";
   }
   
   console.log(`O herói de nome ${name} está no nível ${userExp}`);
}