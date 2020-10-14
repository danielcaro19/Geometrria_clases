class Circulo {
    private _radio: number

    constructor( _radio: number){
        this._radio = _radio
    }

    get Area(){
        let _area = Math.pow(this._radio, 2) * 3.1415
        return _area
    }

    get Perimetro(){
        let _perimetro = this._radio * 2 * 3.1415
        return _perimetro
    }
}

let Circulo1: Circulo
let Circulo2: Circulo
Circulo1 = new Circulo( 1.8 )
Circulo2 = new Circulo( 2.7 )

console.log(`El área del primer circulo es: ${Circulo1.Area} y su perímetro es: ${Circulo1.Perimetro}`)
console.log(`El área del segundo circulo es: ${Circulo2.Area} y su perímetro es: ${Circulo2.Perimetro}`)
