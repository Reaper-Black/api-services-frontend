export class Usuario {
    _id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    rol: string
    date: string
    age: number
    address: string

    constructor(email: string, firstname: string, lastname: string, password: string, rol: string, date: string, age: number, address: string ){
        this.email = email
        this.firstname = firstname
        this.lastname = lastname
        this.password = password
        this.rol = rol
        this.date = date
        this.age = age
        this.address = address
    }
}