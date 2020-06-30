import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class HttpService {
    retry = 1;
    constructor(private http: _HttpClient) {
        // console.log(environment);
    }

    private buildURLSearchParams(paramMap): URLSearchParams {
        const params = new URLSearchParams();
        if (!paramMap) {
            return params;
        }
        // tslint:disable-next-line: forin
        for (const key in paramMap) {
            const val = paramMap[key];
            params.set(key, val);
        }
        return params;
    }

    get(url: string, paramObj: any = {}) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            })
        };
        return this.http.get(environment.SERVER_URL + url, this.buildURLSearchParams(paramObj), httpOptions).pipe(
            retry(this.retry) // 请求失败重试次数
        );
    }

    post(url: string, paramObj: any = {}) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            })
        };
        return this.http.post(environment.SERVER_URL + url, paramObj, httpOptions).pipe(
            retry(this.retry) // 请求失败重试次数
        );
    }
}
