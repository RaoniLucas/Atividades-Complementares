import prompt from 'prompt';
import promptSchemaQRcode from '../../prompts/prompt-qrcode.js';
import { handler_QRcode } from '../handlers.js';

export default async function createQRcode() {
   prompt.get(promptSchemaQRcode, handler_QRcode);

   prompt.start();
}
