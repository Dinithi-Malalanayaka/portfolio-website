import { Component, OnInit } from '@angular/core';
import { Experience } from './models/experience.entity';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  companyName: string = "nagarro";
  workExperience: Experience[];

  constructor() { }

  ngOnInit(): void {
  }

  showWorkExperience(company: string){
    this.companyName = company;
  }

}
