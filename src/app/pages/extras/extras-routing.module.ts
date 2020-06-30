import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtrasProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'project', component: ExtrasProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtrasRoutingModule {}
