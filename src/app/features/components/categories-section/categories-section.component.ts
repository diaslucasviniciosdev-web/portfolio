import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css'
})
export class CategoriesSectionComponent {

  public categories = [
    {name: "Todos"},
    {name: "Web"},
    {name: "Python"},
    {name: "RPA"},
    {name: "IA"},
  ]

}
