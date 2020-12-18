import Route from '@ember/routing/route';

export default class DecreesRoute extends Route {

   async model() {

    const query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX eli: <http://data.europa.eu/eli/ontology#> SELECT ?pub_date, ?title WHERE { ?doc eli:type_document <https://data.vlaanderen.be/id/concept/AardWetgeving/Decreet> . ?doc eli:is_realized_by ?verschijningsvorm . ?verschijningsvorm eli:date_publication ?pub_date . ?verschijningsvorm eli:title ?title . }  ORDER BY DESC(?pub_date) LIMIT 5";

    const encodedQuery = encodeURIComponent(query);

    const endpoint = `https://codex.vlaanderen.be/sparql?query=${encodedQuery}`;

    const response = await fetch(endpoint, { mode:'no-cors', headers: { 'Accept': 'application/sparql-results+json' } } );

    const decrees = await response.json();

    return decrees;
   };

}
