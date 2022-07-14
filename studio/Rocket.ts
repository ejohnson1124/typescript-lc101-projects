import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";


class Rocket  {
    name:string
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor (name: string, totalCapacityKg: number){
        this.name = name
        this.totalCapacityKg = totalCapacityKg
    }

    
}

export class Rocket {
    // properties and methods
 }