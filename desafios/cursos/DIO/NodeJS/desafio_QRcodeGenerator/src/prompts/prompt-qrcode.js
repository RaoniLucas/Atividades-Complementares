import chalk from 'chalk';

const promptSchemaQRcode = [
   {
      name: "link",
      description: chalk.yellow(
         "Informe o link para gerar QRCode: "
      )
   },
   {
      name: "type",
      description: chalk.yellow(
         "Selecione o tipo de saída: 1->Terminal ou 2->Normal"
      ),
      pattern: /^[1-2]+$/,
      message: chalk.red.italic(
         "Escolha apenas entre 1 ou 2"
      )
   }
];

export default promptSchemaQRcode;
