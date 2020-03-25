import Precio from "./precio.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"
import Cliente from "./cliente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Direccion from "./direccion.js"
import clienteFrecuente from "./clientefrecuente.js"

class Main{
    constructor(){
        this.valores = new Precio(130.50)
        this.valores2 = new Precio(40.50)

        this.tiempos = new Tiempo(6,30,"PM")
        this.fechas = new Fecha( new Date( 2020, 2, 30) )

        this.domicilios = new Direccion("Girasol", 362, 0, "Lomnas de las Flores", 28984, "Colima", "Villa de Alvarez")
        this.clientes = new Cliente("Juan Pérez Gutiérrez", this.domicilios, 3123194899)

        this.productos = new Producto("Pizza Americana", this.valores)
        this.productos2 = new Producto("Torta Hawaiana", this.valores2)

        this.elementosPedidos = new ElementoPedido(this.productos, 3)
        this.elementosPedidos2 = new ElementoPedido(this.productos2, 2)


        let datoRestaurante = {
            nombre: "Pizzas Don Bastian",
            telefono: 3123194858,
            direccion: this.domicilios
        }


        let datosPedido = {
            fecha: new Fecha(new Date(2019,3,30)),
            hora: new Tiempo(10 , 50, "AM"),
            cliente: this.cliente,
            npedido: 10
        }

        let datosPedido2 = {
            fecha: new Fecha(new Date(2017,2,13)),
            hora: new Tiempo(6, 50, "PM"),
            cliente: this.cliente2,
            npedido: 15
        }

        let datosClienteFrecuente = {
            nombre: "Bastian Natael Hernández Corona",
            direccion: new Direccion("Orquidea", 120, 7, "VillaSenior", 244876, "Colima", "Colima"),
            telefono: 3123212321,
            ncliente: 123212,
            fechRegis: new Fecha(new Date(2017,8,24))
        }


        this.pedidos = new Pedido(datosPedido)
        this.pedidos2 = new Pedido(datosPedido2)

        this.clienteFrecuente = new clienteFrecuente(datosClienteFrecuente)

        this.restaurantes = new Restaurante(datoRestaurante)
        
        this.pedidos.agregarElemento(this.elementosPedidos)
        this.pedidos.agregarElemento(this.elementosPedidos2)
        this.pedidos.agregarElemento(this.elementosPedidos2)

    }
    getPrecio(){
        console.log(`${this.valores.getPrecio()}`)
    }
    getTiempo(){
        console.log(`${this.tiempos.getFormato12()}`)
        console.log(`${this.tiempos.getFormato24()}`)
    }
    getFecha(){
        console.log(`Año ${this.fechas.getAños()}`)
        console.log(`Meses ${this.fechas.getMeses()}`)
        console.log(`Semanas ${this.fechas.getSemanas()}`)
        console.log(`Días ${this.fechas.getDias()}`)
        console.log(`Fecha ${this.fechas.getFecha()}`)
        console.log(`Día ${this.fechas.getDiaFecha()}`)
    }
    getDomicilio(){
        console.log(`${this.domicilios.getFormatoCorto()}`)
        console.log(`${this.domicilios.getFormatoExtendido()}`)
    }
    getCliente(){
        console.log(`${this.clientes.getPerfil()}`)
    }
    getProducto(){
        console.log(`${this.productos.getDescripcion()}`)
    }
    getElementoPedido(){
        console.log(`${this.elementosPedidos.getDescripccion()}`)
    }
    getPedido(){

        console.log(this.pedidos.getResumen())
        console.log(this.pedidos.getNumeroElementos())
        console.log(this.pedidos.getNumeroProductos())
        console.log(this.pedidos.getCostoTotal())
        this.pedidos.listarElemeto()
 
    }
    getRestaurante()
    {

        this.restaurantes.registrarProducto(this.productos)
        this.restaurantes.registrarProducto(this.productos2)
        this.restaurantes.registrarPedido(this.pedidos)

        console.log(this.restaurantes.registrarPedido(this.pedidos))
        console.log(this.restaurantes.registrarPedido(this.pedidos))

 
        console.log(this.restaurantes.eliminarPedido(this.pedidos))


        console.log(this.restaurantes.eliminarPedido(this.pedidos))

  
        console.log(this.restaurantes.registrarPedido(this.pedidos))

        console.log(this.restaurantes.modificarPedido(this.pedidos, this.pedidos2))

        this.restaurantes.listarProductos()
        this.restaurantes.listarPedidos()
    }
}
let app = new Main()
app.getRestaurante()