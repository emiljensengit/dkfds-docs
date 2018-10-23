# Repository for the documentation site for the Frontend Styleguide


This repo includes code and documentation for the Frontend Styleguide.

The documentation site can be found [here](https://detfaellesdesignsystem.github.io/dkfds-docs/).

The components project can be found [here](https://github.com/detfaellesdesignsystem/dkfds-components).

## Running locally

The Style Guide documentation is built using Jekyll as the file framework and gulp is used for task management

### Before you start

You will need to have the following installed on your machine before following the commands below:

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
1. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)
1. Bundler v1.12.3+, [Installation guides](http://bundler.io/v1.13/guides/using_bundler_in_application.html#getting-started---installing-bundler-and-bundle-init)


### Building the documentation with gulp

Some parts of the documentation are built using [gulp](http://gulpjs.com/).

To work on the site, clone a local copy of this repository. Then open a terminal and run the following commands to install project dependencies:

```sh
npm install
```

Now that all of your dependencies are installed, you can run your local server by running the following command:

```sh
npm start
```

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance.

If you are coding and want to watch for changes run the following command:

- `npm run watch`: Runs a series of commands that watches for any changes in both the Standards node module and the root level asset folders in this repo.
