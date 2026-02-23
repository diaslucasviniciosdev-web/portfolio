import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Stack {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-stack-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stack-section.component.html',
  styleUrl: './stack-section.component.css'
})
export class StackSectionComponent {
  public stacks: Stack[] = [
    {name: "laravel", icon: "laravel_wbg"},
    {name: "Python", icon: "python_wbg"},
    {name: "powerapps", icon: "powerapps_wbg"},
    {name: "Powerautomate", icon: "powerautomate_wbg"},
    {name: "Uipath", icon: "uipath_wbg"},
    {name: "Botcity", icon: "botcity_wbg"},
    {name: "Powerbi", icon: "powerbi_wbg"},
    {name: "N8N", icon: "n8n_wbg"},
  ];
}
