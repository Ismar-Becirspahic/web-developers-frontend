# Web developers
This project was created for the Software Engineering course. The main goal of the project was to create a platform to connect developers and people that wanted to create a website for their business. With this website, clients are able to post a project (work opportunity) and developers can choose to deliver that project.

## Technologies
1. Npm 8.5.0
2. NodeJs 16.14.2
3. Angular CLI 13.2.5

## Necessary installation
1. A development environment (Intellij)
2. GitBash
3. Angular
4. NodeJs

For Intellij, go to the JetBrains website and create an account. Then, download the program based on your operating system. 
For GitBash, simply go to the website Git-scm and download the program based on your operating system.
Once you have installed GitBash, you can open it and enter a command `npm install -g @angular/cli`. 
For NodeJs, again, you should go to the Internet and type NodeJs download and choose between different versions depending on your operating system.
To check that you have installed NodeJs, you can type in GitBash `node -v`. If it tells you its version, then you have installed it correctly.
Also, you should check the command `npm -v`.

## Dependencies
1. Angular Material
2. Angular Flex-Layout
To add dependencies, run `ng add @angular/material` and `npm install @angular/flex-layout`.

## Launch
To run the project, go to the GitBash and go to the folder where you want to place the project. Once you are in the folder, type `git clone https://github.com/lejladapo/web-developers-frontend.git`
Then, you need to run a command `nmp install`. You only have to run this command the first time you clone the project.
With the command `ng serve`, the project will be started.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
The project is also hosted by Netlify. Since it is connected to the GitHub, any new changes to the project on GitHub will be automatically added to the Netlify site. To navigate to Netlify, go to `https://web-developers-se.netlify.app/`.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
