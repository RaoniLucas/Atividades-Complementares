import chalk from 'chalk';

export default async function permittedChar() {
   let permitted = [];

   if (process.env.UPPERCASE_LETTERS === "true")
      permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

   if (process.env.LOWERCASE_LETTERS === "true")
      permitted.push(..."abcdefghijklmnopqrstuvwxyz");

   if (process.env.NUMBERS === "true") permitted.push(..."0123456789");

   if (process.env.SPECIAL_CHARACTERS === "true")
      permitted.push(..."!@#$%^&*()-_");

   if (permitted.length === 0) {
      console.log(
         chalk.yellow(
            "Nenhum tipo de caractere definido. Usando padrão: letras minúsculas e números",
         ),
      );
      permitted.push(..."abcdefghijklmnopqrstuvwxyz0123456789");
   }

   return permitted;
}
