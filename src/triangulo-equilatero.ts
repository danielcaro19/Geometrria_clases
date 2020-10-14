class Triangulo {
    private _base: number
    private _altura: number

    constructor( _base: number, _altura: number){
        this._base = _base
        this._altura = _altura
    }

    get Area(){
        let _area = this._base * this._altura /2
        return _area
    }

    get Perimetro(){
        let _perimetro = this._base * 3
        return _perimetro
    }
}

let Triangulo1: Triangulo
let Triangulo2: Triangulo
Triangulo1 = new Triangulo( 2,4.3 )
Triangulo2 = new Triangulo( 5,8.2 )

console.log(`El área del primer Triangulo es: ${Triangulo1.Area} y su perímetro es: ${Triangulo1.Perimetro}`)
console.log(`El área del segundo Triangulo es: ${Triangulo2.Area} y su perímetro es: ${Triangulo2.Perimetro}`)
