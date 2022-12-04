export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;
    peso: string;
    dimensiones: string;
    material: string;

    constructor(nombre: string, categoria: string, ubicacion: string, precio: number, peso: string, dimensiones: string, material: string ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.peso = peso;
        this.dimensiones = dimensiones;
        this.material = material;
    }
}