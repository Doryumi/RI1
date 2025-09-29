// Criar objetos para todos os super-heróis e Thanos
// Todos os personagens devem ser colocados dentro de um array
// O programa deve fazer uma comparação entre cada personagem
// Por fim, deve imprimir a descrição de cada personagem "lutando" e apontar quem é o vencedor

//criando personagens com a função 'descrição' como atributo 
const capitaoAmerica = { 
    nome: "Steve Rogers", 
    codinome: "Capitão América", 
    armaPrincipal: "Escudo", 
    armaSecundaria: "", 
    velocidade: 75, //considere de 0 a 100 
    forca: 85, //considere de 0 a 100 
    resistencia: 90, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
} 

const homemDeFerro = { 
    nome: "Tony Stark", 
    codinome: "Homem de Ferro", 
    armaPrincipal: "Armadura", 
    armaSecundaria: "Repulsores", 
    velocidade: 70, //considere de 0 a 100 
    forca: 95, //considere de 0 a 100 
    resistencia: 80, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const thor = { 
    nome: "Thor Odinson", 
    codinome: "Thor", 
    armaPrincipal: "Mjolnir", 
    armaSecundaria: "", 
    velocidade: 85, //considere de 0 a 100 
    forca: 100, //considere de 0 a 100 
    resistencia: 100, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const panteraNegra = { 
    nome: "T'Challa", 
    codinome: "Pantera Negra", 
    armaPrincipal: "Garras de Vibranium", 
    armaSecundaria: "Bastão de Vibranium", 
    velocidade: 85, //considere de 0 a 100 
    forca: 85, //considere de 0 a 100 
    resistencia: 90, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const drEstranho = { 
    nome: "Stephen Strange", 
    codinome: "Dr. Estranho", 
    armaPrincipal: "Olho de Agamotto", 
    armaSecundaria: "Capa de Levitação", 
    velocidade: 50, //considere de 0 a 100 
    forca: 50, //considere de 0 a 100 
    resistencia: 70, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const gaviaoArqueiro = { 
    nome: "Clint Barton", 
    codinome: "Gavião Arqueiro", 
    armaPrincipal: "Arco e flechas", 
    armaSecundaria: "", 
    velocidade: 65, //considere de 0 a 100 
    forca: 50, //considere de 0 a 100 
    resistencia: 75, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const homemFormiga = { 
    nome: "Scott Lang", 
    codinome: "Homem-Formiga", 
    armaPrincipal: "Traje de Pym", 
    armaSecundaria: "", 
    velocidade: 80, //considere de 0 a 100 
    forca: 70, //considere de 0 a 100 
    resistencia: 80, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const viuvaNegra = { 
    nome: "Natasha Romanoff", 
    codinome: "Viúva Negra", 
    armaPrincipal: "Bastões de Combate", 
    armaSecundaria: "Pistolas", 
    velocidade: 80, //considere de 0 a 100 
    forca: 60, //considere de 0 a 100 
    resistencia: 75, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const visao = { 
    nome: "", 
    codinome: "Visão", 
    armaPrincipal: "Raio de Densidade", 
    armaSecundaria: "", 
    velocidade: 95, //considere de 0 a 100 
    forca: 85, //considere de 0 a 100 
    resistencia: 90, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const feiticeiraEscarlate = { 
    nome: "Wanda Maximoff", 
    codinome: "Feiticeira Escarlate", 
    armaPrincipal: "Magia", 
    armaSecundaria: "", 
    velocidade: 80, //considere de 0 a 100 
    forca: 70, //considere de 0 a 100 
    resistencia: 85, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

const thanos = { 
    nome: "Thanos", 
    codinome: "Thanos", 
    armaPrincipal: "Luva do Infinito", 
    armaSecundaria: "", 
    velocidade: 60, //considere de 0 a 100 
    forca: 100, //considere de 0 a 100 
    resistencia: 100, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
}

//criando array com os personagens

const personagens = [capitaoAmerica, homemDeFerro, thor, panteraNegra, drEstranho, gaviaoArqueiro, homemFormiga, viuvaNegra, visao, feiticeiraEscarlate, thanos]

function compararPersonagens(personagens){
    for (let i = 0; i < personagens.length; i++) {
        for (let j = i + 1; j < personagens.length; j++) {
            const personagem1 = personagens[i]
            const personagem2 = personagens[j]

            let pontosPersonagem1 = 0
            let pontosPersonagem2 = 0

            console.log("\nPersonagens batalhando: " + personagem1.descricao() + " VS \n" + personagem2.descricao())


            //realizando comparação dos atributos
            if(personagem1.velocidade > personagem2.velocidade){
                pontosPersonagem1++
            } else {
                pontosPersonagem2++
            }

            if(personagem1.forca > personagem2.forca){
                pontosPersonagem1++
            } else {
                pontosPersonagem2++
            }

            if(personagem1.resistencia > personagem2.resistencia){
                pontosPersonagem1++
            } else {
                pontosPersonagem2++
            }

            if(pontosPersonagem1 > pontosPersonagem2) {
                console.log(`${personagem1.codinome} vence ${personagem2.codinome}`)
            } else if(pontosPersonagem1 < pontosPersonagem2) {
                console.log(`${personagem2.codinome} vence ${personagem1.codinome}`)
            } else {
                console.log(`${personagem1.codinome} e ${personagem2.codinome} empatam`)
            }
        }
    }
}

compararPersonagens(personagens)