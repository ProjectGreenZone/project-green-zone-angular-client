# Project Green Zone Client(Angular)

Please find the server serving endpoints for this client application at [ProjectGreenZone/project-green-zone-nodejs-server](https://github.com/ProjectGreenZone/project-green-zone-nodejs-server)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Documentation
### tech used :
- rxjs
- socket.io client
- leaflet : mapping solution
### services :
All services produce observables  
- auth service : call backend '/login' endpoint and stores jwt
- user service : regiser users : add trackers
- web-socket service : connects to 'webapp_io' and get tracker details 
