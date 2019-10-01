import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Keyword } from '../components/data/models';
import { environment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map';

@Injectable()
export class KeywordService {

  private data: Observable<Keyword[]>;

  private headers = new Headers({'Content-Type': 'application/json'});
  private backendUrl = environment.backendUrl;
  private url = this.backendUrl + 'keywords/';
  private allKeywords: Keyword[] = new Array();

  constructor(private http: Http) {
    // this.populateKeywordArray();
  }

  getAll(): Observable<Keyword[]> {
    const url = `${this.url}all`;
    return this
      .http
      .get(url)
      .map(response => response.json() as Keyword[]);
  }

  getAllKeywords(): Keyword[] {
    return this
      .allKeywords;
  }

  populateKeywordArray(): void {
    const url = `${this.url}all`;
    this
      .http
      .get(url)
      .map(response => response.json() as Keyword[])
      .subscribe(data => {
        this.allKeywords = data;
      });
  }

  newInstance(keyword: Keyword): Observable<Keyword> {
    const url = `${this.url}`;
    return this
      .http
      .post(this.url, JSON.stringify(keyword), {headers: this.headers})
      .map(response => response.json().data);
  }

  create(name: string): Observable<Keyword> {
    return this
      .http
      .post(this.url, {name: name}, {headers: this.headers})
      .map(this.extractData);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

}
