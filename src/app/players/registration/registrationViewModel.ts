import {Position} from './position';

export class RegistrationViewModel {
    firstName : string;
    lastName : string;
    email : string;
    biograpy : string;
    dob : Date;
    teamIdJoined : number;
    heighInFeet : number;
    heightInInches: number;
    weight: number;
    injuries : string[];
    position : Position;
    password : string;

    constructor(){
        this.injuries = [];
    }
}