export default class Restaurante{
    constructor(nombre, telefono, direccion){
        this._nombre = nombre
        this._telefono = telefono
        this._direccione = direccion
        this._producto = Array()
        this._pedido = Array()
    }
    registrarProducto(producto){
        this._producto.push(producto)
    }
    registrarPedido(pedido){
        this._pedido.push(pedido)
    }

    listarProductos(){
        this._producto.forEach( (producto) => {
            console.log(producto.getDescripcion())
        })
    }
    listarPedidos(){
        this._pedido.forEach( (pedido, i) => {
            console.log(`Numero.- ${i+1} - ${pedido.getResumen()}`)
        })
    }

    buscarPedido(pedido){
        let buscar = this._pedido.find(encontarPedido => encontarPedido._esIgualA(pedido))
        if(buscar == undefined){return null}
        else {return buscar}
    }

    eliminarPedido(pedido){
        let encontrar =  this.buscarPedido(pedido)
        if(encontrar == null) return false
        else {
        let i = this._pedido.indexOf(encontrar)
        this._pedido.splice(i,1)
        return true
        }
    }

    modificarPedido(pedido, nuevoPedido){
        let encontrar =  this.buscarPedido(pedido)
        if(encontrar == null) return false
        else {
        let i = this._pedido.indexOf(encontrar)
        this._pedido[i] = nuevoPedido
        return true
        }
    }
}