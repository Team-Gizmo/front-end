import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'inc-app',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" routerLink="/home" routerLinkActive="active">INC Tracker</a>
    </div>
    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav">
        <li><a routerLink="/incidents" routerLinkActive="active">Incidents</a></li>
        <li><a routerLink="/incident" routerLinkActive="active">New Incident</a></li>
        <li><a routerLink="/keywords" routerLinkActive="active">Keywords</a></li>
        <li><a routerLink="/keyword" routerLinkActive="active">New Keyword</a></li>
        <li><a routerLink="/search" routerLinkActive="active">Search</a></li>
        <li><a routerLink="/incidentKeyword" routerLinkActive="active">Incidents by Keyword</a></li>
        <!--<li><a routerLink="/register" routerLinkActive="active">Register</a></li>
        <li><a routerLink="/login" routerLinkActive="active">Login</a></li>-->
      </ul>
    </div>
  </div>
</nav>
    <br><br><br>
<router-outlet></router-outlet>
  `,
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class AppComponent {}
