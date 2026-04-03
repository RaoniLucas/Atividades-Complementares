import chalk from 'chalk';
import { handler_Password } from '../handlers.js';

export default async function createPassword() {
   console.log(chalk.green.italic("Password: "));
   const password = await handler_Password();
   console.log(password);
}
