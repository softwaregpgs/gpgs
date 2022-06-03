/**
 *  
 * Interfaz Empresa
 * 
 */
export interface Empresa{
    email:string;
    cif:string;
    nombre:string;
    descripcion:string;
    telefono:string;
    direccion:string;
    enlaceWeb:string;
    //categorias:Array<String>;
    fotos:[];
}