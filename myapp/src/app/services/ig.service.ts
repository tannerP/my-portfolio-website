import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class IgService {

  private TOKEN = 'e7fc2385c98c4904bf6131ddf7961314';
//  private igUrl = 'https://api.instagram.com/v1/users/{1920586937}/?access_token=' + this.TOKEN;
 private igUrl = 'https://api.instagram.com/oauth/authorize/?client_id=' + this.TOKEN + '&redirect_uri=localhost:4200&response_type=code';

  constructor ( private http: Http ) {};

  httpLoadPics() {
    console.log('loading pics');
    this.http.get(this.igUrl)
      .toPromise()
      .then(response => console.log(response) );
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
