import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardProvider } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardProvider: DashboardProvider) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.dashboardProvider.httpGet().subscribe((res: any) => {
      if (res.code === 0) { }
    });
  }
}
