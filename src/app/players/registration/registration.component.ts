import { Component, OnInit } from '@angular/core';

import { RegistrationViewModel } from "./registrationViewModel";
import {TeamLookup} from '../../shared/lookup/team-lookup';
import { InjuryLookupService } from '../../shared/lookup/injury-lookup.service';
import { TeamLookupService } from '../../shared/lookup/team-lookup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationViewModel : RegistrationViewModel;
  teamLookupList:TeamLookup[];
  injuryLookupList:string[];

  constructor(
    private injuryLookupService: InjuryLookupService,
    private teamLookupService: TeamLookupService
  ) { 
    this.registrationViewModel = new RegistrationViewModel();
  }

  ngOnInit(){
    this.teamLookupList = this.teamLookupService.getTeamsLookup();
    this.injuryLookupList = this.injuryLookupService.getInjuriesLookup();
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
