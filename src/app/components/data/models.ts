
export class Incident {
  id = 0;
  name = '';
  description = '';
  solution = '';
  keywords: Keyword[];
}

export class StrippedIncident {
  id = 0;
  name = '';
  description = '';
  solution = '';
}

export class Composite {
  incident: Incident;
  keywordIds: number[];
  constructor(incident: Incident, keywordIds: number[]) {
    this.incident = incident;
    this.keywordIds = keywordIds;
  }
}

export class StrippedComposite {
  incident: StrippedIncident;
  keywordIds: number[];
  constructor(incident: StrippedIncident, keywordIds: number[]) {
    this.incident = incident;
    this.keywordIds = keywordIds;
  }
}

export class Keyword {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class IncidentKeyword {
  kName: string;
  iName: string;
  description: string;
  solution: string;
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  constructor(id: number, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

