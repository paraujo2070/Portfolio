import { Component } from '@angular/core';
import { SobreMim } from './components/sobre-mim/sobre-mim';
import { Projetos } from './components/projetos/projetos';
import { Habilidades } from './components/habilidades/habilidades';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SobreMim, Projetos, Habilidades, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-pedro';
}