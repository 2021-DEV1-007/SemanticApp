import EmberRouter from '@ember/routing/router';
import config from 'abb-webapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('decrees');
});
