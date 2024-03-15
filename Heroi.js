const prompt = require ("prompt-sync")

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    
    atacar() {
        if(this.tipo === mago){
            this.ataque === "usou magia"
        }else if (this.tipo === guerreiro){
            this.ataque === "usou espada"
        }else if (this.tipo === monge){
            this.ataque === "usou artes marciais"
        }else if (this.tipo === ninja){
            this.ataque === "usou shuriken"
        }else {
            `${this.tipo} atacou usando um Ataque Inválido`  
        }
        
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let nome = prompt(`Digite seu nome: `)
let idade = prompt(`Digite sua idade: `)
let tipo = prompt(`Digite o tipo do seu herói[mago, guerreiro, monge ou ninja]: `)

let heroi = new Heroi(nome, idade, tipo);
heroi.atacar()
