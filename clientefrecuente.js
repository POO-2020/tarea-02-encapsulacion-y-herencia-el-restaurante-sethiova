import Cliente from "./cliente.js"
export default class clienteFrecuente extends Cliente{

    constructor({nombre, direccion, telefono, ncliente, fechRegis})
    {
        super({nombre, direccion, telefono})
        this._nocliente = ncliente
        this.fechaReg = fechRegis
    }



    getPerfil()
    {
        return (`${this._nocliente}, ${this.fechaReg.getFecha()}, ${this._nombre}, ${this._direccion.getFormatoCorto()}, ${this._telefono}`)
    }
}