var amigo = {nome: 'Felipe', 
            sexo: 'M', 
            peso: 70, 
            engordar(p){
                console.log('Engordou')
                this.peso = this.peso + p
            }}

console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)

console.log('-----------')

amigo.engordar(5)
console.log(`Novo peso: ${amigo.peso}`)