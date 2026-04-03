// ---- Dependências --------------------------------------------
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();
import qr from 'qrcode-terminal';

// ---- Componente Utilitário -----------------------------------
import permittedChar from './password/utils/permitted-char.js';

// ---- Gerador de QRCode ---------------------------------------
async function handler_QRcode(err, result) {
   if (err) {
      console.log("Error on application");
      return;
   }

   const isSmall = result.type === 2;
   qr.generate(result.link, { small: isSmall }, (qrcode) => {
      console.log(chalk.green("QRCode gerado com sucesso:\n"));
      console.log(qrcode);
   });
}

// ---- Gerador de Senha ----------------------------------------
async function handler_Password() {
   let characters = [];
   let password = "";

   const passwordLength = process.env.PASSWORD_LENGTH;
   characters = await permittedChar();

   for (let i = 0; i < passwordLength; i++) {
      const index = Math.floor(Math.random() * characters.length);
      password += characters[index];
   }

   return password;
}

// ---- Exportação Modular ---------------------------------------
export {
   handler_QRcode,
   handler_Password
}
