// ---- Dependências ---------------------
import prompt from 'prompt';
// import chalk from 'chalk';

// ---- Módulos --------------------------
import mainPrompt from './prompts/prompt-main.js';
import createQRCode from './core/qr-code/create-qrcode.js';
import createPassword from './core/password/create-password.js'

// ---- Main -----------------------------
async function main() {
   prompt.get(mainPrompt, async (err, choose) => {
      if (choose.select == 1) await createQRCode();
      if (choose.select == 2) await createPassword();
   });

   prompt.start();
}

main();
