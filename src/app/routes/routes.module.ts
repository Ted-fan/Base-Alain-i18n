import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
import { UserLoginComponent } from '../pages/passport/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard/dashboard.component';
import { DashboardProvider } from '../pages/dashboard/dashboard/dashboard.service';
// passport pages
// dashboard page

const COMPONENTS = [
  DashboardComponent,
  UserLoginComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  providers: [DashboardProvider]
})
export class RoutesModule { }
