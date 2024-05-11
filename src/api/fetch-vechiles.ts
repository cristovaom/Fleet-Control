

import { api } from "@/lib/axios";


export async function fetchVehiclesAPI() {
    const response = await api.get(`/vehicles/all`);
  

  
    return response.data;
  }