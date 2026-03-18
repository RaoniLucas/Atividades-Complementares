// ---- Importação de Componentes Essenciais ------------------------

import createItem from './services/item.mjs';
import * as cartService from './services/cart.mjs';

const myCart = []; // ------> Carrinho de Compra
const myWhishList = []; // -> Lista de desejo

const item_1 = await createItem("RTX 4060", 1390.33, 1);
const item_2 = await createItem("Ryzen 7 9700x", 1299.90, 3);


// ---- Escopo Padrão do Código --------------------------------------

async function main() {
   console.log("----------------- Welcome to Shopee Cart -----------------");

   await cartService.addItem(myCart, item_1);
   await cartService.addItem(myCart, item_2);

   await cartService.deleteItem(myCart, item_1);

   await cartService.removeItem(myCart, item_2);
   await cartService.removeItem(myCart, item_2);

   console.log(`\n Total: ${await cartService.calculateTotal(myCart)}`);

   await cartService.displayCart(myCart);
}

main();
