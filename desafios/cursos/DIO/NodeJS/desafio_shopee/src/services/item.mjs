// ---- Adição de Produto ao Estoque --------------------------
export default async function createItem(name, price, quantity) {
   return {
      name,
      price,
      quantity,
      subtotal: () => price * quantity
   };
}
