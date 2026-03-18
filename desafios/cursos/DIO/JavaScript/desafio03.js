const typeHeroe = {
   MAGO: "mago",
   GUERREIRO: "guerreiro",
   MONGE: "monge",
   NINJA: "ninja",
};

class User {
   constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
   }

   attack() {
      let attack;

      switch (this.type) {
         case typeHeroe.MAGO:
            attack = "magia";
            break;
         case typeHeroe.GUERREIRO:
            attack = "espada";
            break;
         case typeHeroe.MONGE:
            attack = "artes marciais";
            break;
         case typeHeroe.NINJA:
            attack = "shuriken";
            break;
         default:
            attack = "um ataque desconhecido";
      }

      console.log(`o ${this.type} atacou usando ${attack}`);
   }
}

const mago = new User("Gandalf", 100, typeHeroe.MAGO);
const guerreiro = new User("Aragorn", 35, typeHeroe.GUERREIRO);
const monge = new User("Bruce Lee", 32, typeHeroe.MONGE);
const ninja = new User("Hanzo", 28, typeHeroe.NINJA);

mago.attack();
guerreiro.attack();
monge.attack();
ninja.attack();
