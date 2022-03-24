import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./page /navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'acessibilidade',
    loadChildren: () => import('./page /acessibilidade/acessibilidade.module').then( m => m.AcessibilidadePageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./page /alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./page /contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./page /grafico/grafico.module').then( m => m.GraficoPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./page /calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'anotacao-ideia',
    loadChildren: () => import('./page /anotacao-ideia/anotacao-ideia.module').then( m => m.AnotacaoIdeiaPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./page /configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
