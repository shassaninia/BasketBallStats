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
  injuryFieldList:string[];

  constructor(
    private injuryLookupService: InjuryLookupService,
    private teamLookupService: TeamLookupService
  ) { 
    this.registrationViewModel = new RegistrationViewModel();
  }

  ngOnInit(){
    this.teamLookupList = this.teamLookupService.getTeamsLookup();
    this.injuryLookupList = this.injuryLookupService.getInjuriesLookup();
    this.initializeInjuryFieldList();
  }



  addOrRemoveInjury(value: string){

    var indexOfEntry = this.registrationViewModel.injuries.indexOf(value);

    if(indexOfEntry < 0)
    {
        this.registrationViewModel.injuries.push(value);
    }
    else
    {
      this.registrationViewModel.injuries.splice(indexOfEntry, 1);
    }
    
  }

    private initializeInjuryFieldList(){
    this.injuryFieldList = [];

    for(let injury of this.injuryLookupList){
      this.injuryFieldList.push(injury.trim().replace(" ","").toLowerCase());
    }
  }

  private formErrors = {
    'firstName':'',
    'lastName':'',
    'email':'',
    'dob':'',
    'heightInFeet':'',
    'heightInInches':'',
    'weight':'',
    'position':'',
    'password':''
  };

  private validationMessages = {
    'firstName':{
      'required':'First name is required'
    },
    'lastName':{
      'required':'Last name is required'
    },
    'email':{
      'required':'Email is required'
    },
    'dob':{
      'required':'DOB  is required'
    },
    'teamId':{
      'required':'Team is required'
    },
    'heightInFeet':{
      'required':'Height In Feet  is required'
    },
    'heightInInches':{
      'required':'Height In Inches is required'
    },
    'weight':{
      'required':'Weight is required'
    },
    'password':{
      'required':'Password is required'
    }
  };
}
