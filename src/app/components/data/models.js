export var Incident = (function () {
    function Incident() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.solution = '';
    }
    return Incident;
}());
export var StrippedIncident = (function () {
    function StrippedIncident() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.solution = '';
    }
    return StrippedIncident;
}());
export var Composite = (function () {
    function Composite(incident, keywordIds) {
        this.incident = incident;
        this.keywordIds = keywordIds;
    }
    return Composite;
}());
export var StrippedComposite = (function () {
    function StrippedComposite(incident, keywordIds) {
        this.incident = incident;
        this.keywordIds = keywordIds;
    }
    return StrippedComposite;
}());
export var Keyword = (function () {
    function Keyword(id, name) {
        this.id = id;
        this.name = name;
    }
    return Keyword;
}());
//# sourceMappingURL=models.js.map