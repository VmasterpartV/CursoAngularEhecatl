export interface Usuario {
    id: number;
    nombre: string;
    direccion: string;
    fotoUrl: string;
}

export interface User {
    name: string;
    age: number;
    number: string;
    email: string;
    hasNumber: boolean;
}

export interface NewUser {
    name: string;
    firstLastName: string;
    secondLastName: string;
    email: string;
    password: string;
    role: string;
    image: string;
}