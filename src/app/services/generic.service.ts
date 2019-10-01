import { Injectable } from '@angular/core';

@Injectable()
export class GenericService {

  private keywordsUrl = 'http://127.0.0.1:8080/sandbox/api/keywords/';
  private incidentsUrl = 'http://127.0.0.1:8080/sandbox/api/incidents/';

  constructor() {}

  getKeywordsUrl(): string {
    return this.keywordsUrl;
  }

  getIncidentsUrl(): string {
    return this.incidentsUrl;
  }

}
