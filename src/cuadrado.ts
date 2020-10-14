class Cuadrado {
    private _lado: number

    constructor( _lado: number){
        this._lado = _lado
    }

    get Area(){
        let _area = Math.pow(this._lado, 2)
        return _area
    }

    get Perimetro(){
        let _perimetro = this._lado * 4
        return _perimetro
    }
}

let Cuadrado1: Cuadrado
let Cuadrado2: Cuadrado
Cuadrado1 = new Cuadrado( 2.5 )
Cuadrado2 = new Cuadrado( 6 )

console.log(`El área del primer Cuadrado es: ${Cuadrado1.Area} y su perímetro es: ${Cuadrado1.Perimetro}`)
console.log(`El área del segundo Cuadrado es: ${Cuadrado2.Area} y su perímetro es: ${Cuadrado2.Perimetro}`)
