import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/providers/http.service';

@Injectable()
export class DashboardProvider {
    constructor(private httpService: HttpService) { }

    // get request
    httpGet() {
        return this.httpService.get('/api/Account/GetArticleEnumProject');
    }
}
