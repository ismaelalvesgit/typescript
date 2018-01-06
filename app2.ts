import Carro, {}from './Carro'
import Pessoa, {}from './Pessoa'
import Concessionaria, {}from './Concessionaria'
 
/**--criar carros */

let carroA = new Carro('honda civix', 4)
let carroB = new Carro('cerato', 4 )
let carroC = new Carro('veloster', 3)

/** lista de carros */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('rua padre galvao', listaDeCarros)

/** exibir lista de carros */

/**console.log (concessionaria.mostrarListaDeCarros()) */

/** comprar carro */

let cliente = new Pessoa('ismael', 'veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
   if(carro['modelo'] == cliente.dizerCarroPrefirido()){
       //compra o carro
       cliente.comprarCarro(carro)
   }
})

console.log(cliente.dizerCarroQueTem())