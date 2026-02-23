import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { HeroSectionComponent } from "./shared/components/hero-section/hero-section.component";
import { StackSectionComponent } from "./features/components/stack-section/stack-section.component";
import { CategoriesSectionComponent } from './features/components/categories-section/categories-section.component';
import { ProjectsSectionComponent } from './features/components/projects-section/projects-section.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HeroSectionComponent, StackSectionComponent, CategoriesSectionComponent, ProjectsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'portfolio';
}
