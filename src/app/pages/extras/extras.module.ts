import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { ExtrasRoutingModule } from './extras-routing.module';


import { ExtrasProjectComponent } from './project/project.component';


const COMPONENTS = [ExtrasProjectComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ExtrasRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ExtrasModule { }
