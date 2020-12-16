import Application from 'abb-webapp/app';
import config from 'abb-webapp/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
