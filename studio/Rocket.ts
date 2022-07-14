import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";
import { Payload } from "./Payload";


class Rocket  {
    name:string
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor (name: string, totalCapacityKg: number){
        this.name = name
        this.totalCapacityKg = totalCapacityKg
    }

    //methods
    function sumMass( items: Payload[] ): number {
        this.items = Payload.push ()
    }
    return sumMass
    
    function currentMassKg(): number
    
    function canAdd(item: Payload): boolean
    function addCargo(cargo: Cargo): boolean
    function addAstronaut(astronaut: Astronaut): boolean


}

export class Rocket {
    // properties and methods
 }