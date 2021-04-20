const canciones = [];

module.exports = class cancion{
    constructor(titulo) {
        this.titulo = titulo;
    }
    save() {
        canciones.push(this);
    }
    static fetchAll(){
        return canciones;
    }
}