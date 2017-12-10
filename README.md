# MukeAppsWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


…or create a new repository on the command line

echo "# MukeAppsWebsite" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/fmukendi/MukeAppsWebsite.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/fmukendi/MukeAppsWebsite.git
git push -u origin master

git add -A stages All
git add . stages new and modified, without deleted
git add -u stages modified and deleted, without new

Detail:

git add -A is equivalent to  git add .; git add -u.

The important point about git add . is that it looks at the working tree and adds all those paths to the staged changes if they are either changed or are new and not ignored, it does not stage any 'rm' actions.

git add -u looks at all the already tracked files and stages the changes to those files if they are different or if they have been removed. It does not add any new files, it only stages changes to already tracked files.

git add -A is a handy shortcut for doing both of those.

You can test the differences out with something like this (note that for Git version 2.x your output for  git add . git status will be different):