export default class Veiculo {
    protected modelo: string

    private velociadade: number = 0

    public acelerar():void{
        this.velociadade = this.velociadade +10
    }
    public parar():void{
        this.velociadade = 0
    }
    public velociadeAtual():number{
        return this.velociadade
    }
}