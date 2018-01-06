import Veiculo from './Veiculo'
export default class Carro extends Veiculo{
    private numeroDePortas: number
 
    constructor(modelo:string, numerodePortas:number){
        super()
        this.modelo = modelo
        this.numeroDePortas = numerodePortas
    }