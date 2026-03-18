const characters = [
   {
      characterName: "Mario",
      speed: 4,
      maneuverability: 3,
      power: 3,
      points: 0
   },
   {
      characterName: "Luigi",
      speed: 3,
      maneuverability: 4,
      power: 4,
      points: 0
   },
   {
      characterName: "Peach",
      speed: 3,
      maneuverability: 4,
      power: 2,
      points: 0
   },
   {
      characterName: "Yoshi",
      speed: 2,
      maneuverability: 4,
      power: 3,
      points: 0
   },
   {
      characterName: "Donkey Kong",
      speed: 2,
      maneuverability: 2,
      power: 5,
      points: 0
   },
   {
      characterName: "Bowser",
      speed: 5,
      maneuverability: 2,
      power: 5,
      points: 0
   }
];

async function drawCharacters(characterList = characters) {
   const index_1 = Math.floor(Math.random() * characterList.length);
   let index_2 = Math.floor(Math.random() * characterList.length);

   while (index_1 === index_2) {
      index_2 = Math.floor(Math.random() * characterList.length);
   }

   console.log(`Sorteio: jogador 1 será: ${characterList[index_1].characterName}`);
   console.log(`Sorteio: jogador 2 será: ${characterList[index_2].characterName}`);

   return [characterList[index_1], characterList[index_2]];
}

function resetPoints(char) {
   return { ...char, points: 0 };
}

async function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
   let random = Math.random();
   let result;

   switch (true) {
      case random < 0.33:
         result = "RETA"
         break;
      case random < 0.66:
         result = "CURVA";
         break;
      default:
         result = "CONFRONTO";
         break;
   }

   return result;
}

async function logRollResult(charName, block, diceResult, attribute) {
   console.log(`${charName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playerRaceEngine(character_1, character_2) {
   for (let round = 1; round <= 5; round++) {
      console.log(`Rodada ${round}!`);

      let block = await getRandomBlock();
      console.log(`Bloco: ${block}`);

      let diceResult_1 = await rollDice();
      let diceResult_2 = await rollDice();

      let totalTestSkill_1 = 0;
      let totalTestSkill_2 = 0;

      if (block === "RETA") {
         totalTestSkill_1 = diceResult_1 + character_1.speed;
         totalTestSkill_2 = diceResult_2 + character_2.speed;

         await logRollResult(
            character_1.characterName,
            "velocidade",
            diceResult_1,
            character_1.speed
         );

         await logRollResult(
            character_2.characterName,
            "velocidade",
            diceResult_2,
            character_2.speed
         );
      }

      if (block === "CURVA") {
         totalTestSkill_1 = diceResult_1 + character_1.maneuverability;
         totalTestSkill_2 = diceResult_2 + character_2.maneuverability;

         await logRollResult(
            character_1.characterName,
            "manobrabilidade",
            diceResult_1,
            character_1.maneuverability
         );

         await logRollResult(
            character_2.characterName,
            "manobrabilidade",
            diceResult_2,
            character_2.maneuverability
         );
      }

      if (block === "CONFRONTO") {
         let powerResult_1 = diceResult_1 + character_1.power;
         let powerResult_2 = diceResult_2 + character_2.power;

         console.log(`${character_1.characterName} confrontou com ${character_2.characterName}`);

         await logRollResult(
            character_1.characterName,
            "poder",
            diceResult_1,
            character_1.power
         );

         await logRollResult(
            character_2.characterName,
            "poder",
            diceResult_2,
            character_2.power
         );

         if (powerResult_1 > powerResult_2 && character_2.points > 0) {
            console.log(`${character_1.characterName} venceu o confronto! ${character_2.characterName} perdeu 1 ponto.`);
            character_2.points--;
         }

         if (powerResult_2 > powerResult_1 && character_1.points > 0) {
            console.log(`${character_2.characterName} venceu o confronto! ${character_1.characterName} perdeu 1 ponto.`);
            character_1.points--;
         }

         console.log(powerResult_2 === powerResult_1
            ? "Confronto empatado! Nenhum ponto foi perdido"
            : "");
      }


      if (totalTestSkill_1 > totalTestSkill_2) {
         console.log(`${character_1.characterName} marcou ponto!`);
         character_1.points++;
      } else if (totalTestSkill_2 > totalTestSkill_1) {
         console.log(`${character_2.characterName} marcou ponto!`);
         character_2.points++;
      }

      console.log("--------------------------------------");
   }
}

async function declaraWinner(character_1, character_2) {
   console.log("Resultado Final:");
   console.log(`${character_1.characterName}: ${character_1.points} ponto(s)`);
   console.log(`${character_2.characterName}: ${character_2.points} ponto(s)`);

   if (character_1.points > character_2.points)
      console.log(`\n${character_1.characterName} venceu a corrida!`);
   else if (character_2.points > character_1.points)
      console.log(`\n${character_2.characterName} venceu a corrida!`);
   else
      console.log("EMPATE");
}

(async function main() {
   const [p1, p2] = await drawCharacters();

   const player_1 = resetPoints(p1);
   const player_2 = resetPoints(p2);

   console.log(
      `Corrida iniciada! ${player_1.characterName} & ${player_2.characterName} \n`
   );

   await playerRaceEngine(player_1, player_2);
   await declaraWinner(player_1, player_2);
})();
