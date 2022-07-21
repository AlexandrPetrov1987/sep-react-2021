import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const carServices={
    getAll:()=>axiosInstance.get(urls.cars),
    createCar:(car)=>axiosInstance.post(urls.cars,car),
    deleteCar:(id)=>axiosInstance.delete(`${urls.cars}/${id}`)
}

export {carServices}