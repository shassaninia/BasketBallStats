import { Component } from '@angular/core';

import { RegistrationViewModel } from "./registrationViewModel";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationViewModel : RegistrationViewModel;
  constructor() { 
    this.registrationViewModel = new RegistrationViewModel();
  }

  addOrRemoveInjury(value: string){

    if(this.confirmInjuryNotAlreadyChosen(value))
    {
        this.registrationViewModel.injuries.push(value);
    }
    else
    {
      let index =  this.registrationViewModel.injuries.indexOf(value);
      this.registrationViewModel.injuries.splice(index);
    }
    
  }

  private confirmInjuryNotAlreadyChosen(value:string):boolean{
    return this.registrationViewModel.injuries.find(injury => injury.toLowerCase() === value.toLowerCase()) == null;
  }
}
