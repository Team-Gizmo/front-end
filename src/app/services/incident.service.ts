import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Incident, StrippedIncident, StrippedComposite, IncidentKeyword} from '../components/data/models';
import { environment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class IncidentService {

  private allResults: Observable<Incident[]>;
  private allIncidentKeywords: Observable<IncidentKeyword[]>;

  private headers = new Headers({'Content-Type': 'application/json'});
  private backendUrl = environment.backendUrl;
  private url = this.backendUrl + 'incidents/';

  constructor(private http: Http) {}

  getIncidents(): Observable<Incident[]> {
    const url = `${this.url}all`;
    this.allResults = this
      .http
      .get(url)
      .map(response => response.json() as Incident[]);
    return this.allResults;
  }

  getIncident(id: number): Observable<Incident> {
    const url = `${this.url}${id}`;
    return this
      .http
      .get(url)
      .map(response => response.json().data as Incident);
  }

  create(name: string): Observable<Incident> {
    return this
      .http
      .post(this.url, JSON.stringify({name: name}), {headers: this.headers})
      .map(response => response.json().data);
  }

  newInstance(composite: StrippedComposite): Observable<Incident> {
    const url = `${this.url}`;
    return this
      .http
      .post(this.url, JSON.stringify(composite), {headers: this.headers})
      .map(response => response.json().data);
  }

  update(incident: StrippedIncident): Observable<Incident> {
    const url = `${this.url}solution/${incident.id}`;
    const value = this
      .http
      .put(url, JSON.stringify(incident), {headers: this.headers})
      .map(() => incident);
    return value;
  }

  getIncidentKeywords(): Observable<IncidentKeyword[]> {
    const url = `${this.url}incidentsAndKeywords/all`;
    this.allIncidentKeywords = this
      .http
      .get(url)
      .map(response => response.json() as IncidentKeyword[]);
    return this.allIncidentKeywords;
  }

  search(data: string[]): Observable<Incident[]> {
    const params = new URLSearchParams();
    for (const key in data) {
      params.set(key, data[key]);
    }
    if (params.paramsMap.size === 0) {
      console.log('No selections made');
      return;
    }
    const options = new RequestOptions({
      search: params
    });
    const url = `${this.url}search/keyword`;
    const value = this
      .http
      .get(url, options)
      .map(response => response.json() as Incident[]);
    return value;
  }

}

