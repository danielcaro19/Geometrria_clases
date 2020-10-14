class Rectangulo {
    private _lado1: number
    private _lado2: number

    constructor( _lado1: number, _lado2: number){
        this._lado1 = _lado1
        this._lado2 = _lado2
    }

    get Area(){
        let _area = this._lado1 * this._lado2
        return _area
    }

    get Perimetro(){
        let _perimetro = this._lado1 * 2 * 3.1415
        return _perimetro
    }
}

let Rectangulo1: Rectangulo
let Rectangulo2: Rectangulo
Rectangulo1 = new Rectangulo( 1.6,2.7 )
Rectangulo2 = new Rectangulo( 5,7 )

console.log(`El área del primer Rectangulo es: ${Rectangulo1.Area} y su perímetro es: ${Rectangulo1.Perimetro}`)
console.log(`El área del segundo Rectangulo es: ${Rectangulo2.Area} y su perímetro es: ${Rectangulo2.Perimetro}`)
