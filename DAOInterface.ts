export interface DAOInterface{
    nomeTabela: string

    inserir(object:any): boolean
    atualizar(object:any):boolean
    remove(id: number): any
    selecionar(id: number):any
    selecionarTodos():[any]
}