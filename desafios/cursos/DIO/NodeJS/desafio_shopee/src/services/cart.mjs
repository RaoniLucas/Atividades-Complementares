// ---- Adicionar e Remover Item no Carrinho ------------------------------

// Adicionar item
async function addItem(userCart, item) {
   userCart.push(item);
}

// Excluir item
async function deleteItem(userCart, itemToDelete) {
   const index = userCart.findIndex(item => item.name === itemToDelete.name);

   if (index != -1) {
      userCart.splice(index, 1);
      console.log(`Item "${itemToDelete.name}" removido com sucesso!`);
   }
}

// Remover item - Subtrai quantidade de itens
async function removeItem(userCart, item) {
   const indexFound = userCart.findIndex(p => p.name === item.name);

   if (indexFound === -1) {
      console.log("Item não encontrado");
      return;
   }

   if (userCart[indexFound].quantity > 1) {
      userCart[indexFound].quantity -= 1;
      return;
   }

   if (userCart[indexFound].quantity === 1) {
      userCart.splice(indexFound, 1);
      return;
   }
}


// ---- Processasmento de Pedido -------------------------------------

// Calculo Total
async function calculateTotal(userCart) {
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
   return result;
}

// Exibição de Status do Carrinho
async function displayCart(userCart) {
   console.log("\n Shopee Cart List:");

   userCart.forEach((item, index) => {
      console.log(`
         ${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}
      `);
   });
}


// ---- Exportação dos Componentes ----------------------------------

export {
   addItem,
   deleteItem,
   removeItem,
   calculateTotal,
   displayCart
}
