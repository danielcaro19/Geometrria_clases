class Pentagono {
    private _lado: number
    private _apotema: number

    constructor( _lado: number, _apotema: number){
        this._lado = _lado
        this._apotema = _apotema
    }

    get Area(){
        let _area = this._lado * this._apotema /2
        return _area
    }

    get Perimetro(){
        let _perimetro = this._lado * 5
        return _perimetro
    }
}

let Pentagono1: Pentagono
let Pentagono2: Pentagono
Pentagono1 = new Pentagono( 4,5.6 )
Pentagono2 = new Pentagono( 3,4.3 )

console.log(`El área del primer Pentagono es: ${Pentagono1.Area} y su perímetro es: ${Pentagono1.Perimetro}`)
console.log(`El área del segundo Pentagono es: ${Pentagono2.Area} y su perímetro es: ${Pentagono2.Perimetro}`)
