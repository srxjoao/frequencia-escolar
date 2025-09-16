export default class Estudante{
    id: number
    nome: string
    presenca: number = 0

    constructor(id:number, nome:string){
        this.id = id
        this.nome = nome
    }

    //Void quando não há retorno
    registrarPresenca():void{
        this.presenca++ // O ++ imcremneta valores 
        console.log(`${this.nome} teve presença resgistrada!`)
        //console.log(this.nome + 'Teve presença registrada!')
    }

}