import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },

    
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Acessibilidade', url: '/acessibilidade', icon: 'accessibility' },
    { title: 'Alertas', url: '/alertas', icon: 'alarm' },
    { title: 'Contatos', url: '/contatos', icon: 'at' },
    { title: 'Graficos', url: '/graficos', icon: 'bar-chart' },
    { title: 'Calendario', url: '/calendario', icon: 'calendar' },
    { title: 'Anotação de Ideias', url: '/anotacaoIdeia', icon: 'bulb' },
    { title: 'Configurações', url: '/configuracoes', icon: 'build' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

