
class ClasseHeroi {
    constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }

    ataque() {

        switch(true) {
            case (this.tipo === "Mago") :
            this.tipoAtaque = "Usando Magia"
            break

            case (this.tipo === "Guerreiro") :
            this.tipoAtaque = "Usando Espada"
            break

            case (this.tipo === "Monge") :
            this.tipoAtaque = "Usando Artes Marciais"
            break

            case (this.tipo === "Ninja") :
            this.tipoAtaque = "Usando Shuriken"
            break

            default: this.tipoAtaque = "Usnado Ataque Desconhecido"
        }
    
        console.log(`O ${this.tipo} atacou ${this.tipoAtaque}`)
    }
} 

// Declarando as variáveis que serão utilizadas e atribuindo seus valores.
let Mago = new ClasseHeroi ("Lukas", 104, "Mago")
let Guerreiro = new ClasseHeroi ("Scott", 32, "Guerreiro")
let Monge = new ClasseHeroi ("Junior", 5000, "Monge")
let Ninja = new ClasseHeroi ("Jeff", 26, "Ninja")
let Goblin = new ClasseHeroi ("Stevan", 78, "Goblin")

// Ativando os Métodos
Mago.ataque()
Guerreiro.ataque()
Monge.ataque()
Ninja.ataque()
Goblin.ataque()