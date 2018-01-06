import{DAOInterface} from'./DAOInterface'
import Concessionaria from './Concessionaria'

class ConcesseionariaDAO implements DAOInterface{
    nomeTabela: string = 'tb_concessionaria'
    
        inserir(object:any): boolean{
           console.log('logica de insert')
            return true
        }
        atualizar(object:any):boolean{
            console.log('logica de update')
            return true
        }
        remove(id: number): any{
            console.log('logica de delete')
            return new Concessionaria('', [])
        }
        selecionar(id: number):any{
            console.log('logica de select')
            return new Concessionaria('',[])
        }
        selecionarTodo():[any]{
            console.log();('logica select all')
            return [new Concessionaria('',[])]
        }
}