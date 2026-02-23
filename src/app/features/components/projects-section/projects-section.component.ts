import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: 'RPA' | 'Fullstack' | 'Low-Code' | 'IA';
  description: string;
  tools: string[];
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      title: 'Chatbot Departamental',
      category: 'IA',
      description: 'Solução inteligente utilizando IA generativa para atendimento interno.',
      tools: ['Dify', 'Angular', 'Python']
    },
    {
      title: 'Vexpenses Reembolsos',
      category: 'RPA',
      description: 'Automação completa do fluxo de reembolsos corporativos.',
      tools: ['Python', 'BotCity']
    },
    {
      title: 'Crédito Fácil',
      category: 'Fullstack',
      description: 'Extração automática de fichas cadastrais integrando processos de crédito.',
      tools: ['Python', 'Laravel']
    },
    {
      title: 'Cooperativa Solidária',
      category: 'Fullstack',
      description: 'Ecossistema completo integrando gestão e automação de fluxos.',
      tools: ['Python', 'Laravel', 'Power Automate']
    },
    {
      title: 'Automação de Faturas',
      category: 'RPA',
      description: 'Processamento em lote de faturas utilizando containers para escalabilidade.',
      tools: ['Python', 'Docker']
    },
    {
      title: 'Seguro Prestamista',
      category: 'RPA',
      description: 'Automação de cálculos e emissão de seguros.',
      tools: ['Python']
    },
    {
      title: 'Fluxo Instagram',
      category: 'IA',
      description: 'Orquestração de atendimento e automação de mensagens via redes sociais.',
      tools: ['n8n', 'Python']
    },
    {
      title: 'Lançamento de Reembolsos',
      category: 'Low-Code',
      description: 'Interface ágil para usuários finais registrarem despesas.',
      tools: ['PowerApps']
    },
    {
      title: 'Evidências Ouvidoria',
      category: 'Low-Code',
      description: 'Dashboard e coleta de dados para conformidade regulatória.',
      tools: ['PowerApps', 'Power BI']
    }
  ];

  scrollLeft(el: HTMLElement) {
    el.scrollBy({ left: -350, behavior: 'smooth' });
  }

  scrollRight(el: HTMLElement) {
    el.scrollBy({ left: 350, behavior: 'smooth' });
  }
}
