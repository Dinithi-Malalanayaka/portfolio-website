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
    this.workExperience = [
      {jobTitle: "Intern - Artificial Inteligence", company:"OrelIT", duration: "December 2020 - August 2021", workItems: [
        "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
        "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
        "Built and delivered technical solutions according to stakeholder business requirements"
      ]},
      {jobTitle: "Software Engineer", company:"Nagarro", duration: "Octomber 2021 - Present", workItems: [
        "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
        "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
        "Built and delivered technical solutions according to stakeholder business requirements"
      ]},
    ]
  }

  showWorkExperience(company: string){
    this.companyName = company;
  }

}
