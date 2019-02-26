import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [
      {
        path: 'child',
        loadChildren: './first-child/first-child.module#FirstChildModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
