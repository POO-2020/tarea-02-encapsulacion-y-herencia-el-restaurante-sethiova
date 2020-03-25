export default class Cliente{
  /**
   * 
   * @param {string} nombre 
   * @param {string} direccion 
   * @param {number} telefono 
   */
  constructor(nombre, direccion, telefono){
      this._nombre = nombre
      this._direccion = direccion
      this._tel = telefono
  }

  
  getPerfil(){
      return `${this._nombre} ${this._direccion.getFormatoCorto()} ${this._tel}`
  }
}