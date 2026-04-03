import chalk from 'chalk';

const mainPrompt = [
   {
      name: "select",
      description: chalk.yellow("Escolha a ferramenta:\n 1->QRCode \n 2->Password\n"),
      pattern: /^[1-2]+$/,
      massage: chalk.red.italic("Digite 1 ou 2"),
      required: true
   }
];

export default mainPrompt;
