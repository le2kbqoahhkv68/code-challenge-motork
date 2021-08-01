# motork

Motork code test
Author: David Manso - d.mansofernandez@gmail.com

- Instructions: https://bitbucket.org/drivek/interview-vuejs/src/master/README.md
- UI: https://www.figma.com/file/CNGGLuh2C3TdMtAOaymUh2/Frontend-Interview

## Process description

In this part, I explain the product development path.

I've split all the requirements into user stories, and then into subtasks.

Even though these code has to be sent as a zip file, each user story is developed in their specific branch following `conventional-commits`, merged into the main branch but keeping it alive.

- As a developer, I want to have an initial setup with Vue.js.
  - Add Vue.js / TypeScript initial setup.
  - Add pug preprocessor.
  - Add vue-i18n plugin and its configuration.
  - Add styles initial scaffolding.
  - `Car` module scaffolding: This application is splitted into modules. `Cars` is the unique module so far but the architecture is defined in order to be scalable.

- As a user, I want to have a list of vehicle cards.
- As a user, I want to save my preferred vehicles and keep them saved if a refresh the page.
- As a user, I want to be able to show the current KM of the vehicle.
- As a user, I want to be able to show the current MILES of the vehicle.
- As a user, I want to find vehicles introducing the make, model and version.
- As a user, I want to have not free vehicles disabled.
- As a user, I want to have an error handler of the whole application.
  - Error page.
  - Notifications.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
