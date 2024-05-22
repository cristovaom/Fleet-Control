import { api } from "@/lib/axios";


interface RegisterVehicleRequest {
    marca : string;
    modelo: string;
    ano: string;
    placa: string;
    renavam: string;
    chassis: string;
}


export async function RegisterVehicle(data : RegisterVehicleRequest){
    const response = await api.post('/vehicles/create', data);

    return response.data;
}

interface Comparable<T>{
    equals(other: T): boolean;
}

class Teste implements Comparable<Teste>{
    equals(other: Teste){
        return true;
    }
}