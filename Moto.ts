 import Veiculo from './Veiculo'

class Moto extends Veiculo{
    public acelerar():void{
        this.velociadade = this.velociadade +20
    }
 }
 export default Moto