import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  templateUrl: './habilidades.html'
})
export class Habilidades {
  
  categorias = [
    {
      titulo: 'Dados & Inteligência Artificial',
      icone: 'M13 10V3L4 14h7v7l9-11h-7z', // Ícone de Raio/Energia
      skills: ['Python', 'Machine Learning', 'Data Science', 'Pandas', 'XGBoost', 'LLMs', 'RAG', 'Genkit', 'SQL']
    },
    {
      titulo: 'Desenvolvimento Web & Mobile',
      icone: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', // Ícone de Código
      skills: ['Angular', 'Flutter', 'Dart', 'React', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'Spring Boot', 'Tailwind CSS', 'HTML/CSS']
    },
    {
      titulo: 'Infraestrutura & Ferramentas',
      icone: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', // Ícone de Servidor
      skills: ['Docker', 'Git', 'GitHub Actions', 'Firebase', 'SQLite', 'Ubuntu', 'VS Code']
    }
  ];

}