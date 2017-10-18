import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class IgService {
  private TOKEN = '1920586937.e7fc238.7b6f87c2fde34caea74c2008ee7fd27c';
  private ig_url = 'https://api.instagram.com/v1/users/self/media/liked/?access_token=' + this.TOKEN;
  //private ig_url = 'https//tannerphan.me';
  constructor ( private http: Http ) {};

  httpLoadPics() {
    console.log('loading pics');
    this.http.get(this.ig_url)
      .toPromise()
      .then(response => console.log(response.json()))
      .catch(this.handleError);
  }
  printData(res: Response)  {
    console.log("printing data");
    console.log(res.json());
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
