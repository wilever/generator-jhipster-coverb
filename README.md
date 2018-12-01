# generator-jhispter-coverb
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A jhipster module that generates a pages for your jhipster application, see our [demo](#live-demo)

![feature-image](/generators/app/templates/default/content/images/coverb-feature.png)

## Introduction

- This is a [JHipster](http://jhipster.github.io/) module.

- You can use it to generate a page for your apps.
- It use cover types as template for pages. 
- It creates a corresponding navigation item in your JHipster application.

To learn more about this module, see [wiki](https://github.com/jhipster-latino/coverb/wiki).

## Prerequisites

- As this is a [JHipster](http://www.jhipster.tech/) module, we expect you to have an existing [JHipster app](https://www.jhipster.tech/creating-an-app/).
- Jhipster version must be greater or equal than 5.2.0

## Installation

### with NPM

To install this module:

```
npm install -g generator-jhipster-coverb
```

To update this module:

```
npm update -g generator-jhipster-coverb
```

### with Yarn

To install this module:

```
yarn global add generator-jhipster-coverb
```

To update this module:

```
yarn global upgrade generator-jhipster-coverb
```

## Usage

1. [Create a JHipster app](https://www.jhipster.tech/creating-an-app/) using `yo jhipster`, or `jhipster`
2. Run coverb on your JHipster app path:

```
yo jhipster-coverb
```
3. Select your [cover type](#cover-type):
```
? Which type do you prefer? (Use arrow keys)
❯ default 
  resume 
  company 
```
4. Select your cover name:
```
? Which name do you prefer? (myOwnResume) 
```

## Demo

To run coverb demo on a JHipster generated application:

```
yo jhipster-coverb:demo
```

## Live demo

See our [demo](https://generator-jhispter-coverb-demo.herokuapp.com/) on heroku

## Contributing

You can add your own cover and help us to grow

## License

Apache-2.0 ©

## Cover type
### Resume
![resume](/generators/app/templates/default/content/images/resume.png)
### Company
![company1](/generators/app/templates/default/content/images/company1.png)
![company2](/generators/app/templates/default/content/images/company2.png)

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-coverb.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-coverb
[travis-image]: https://travis-ci.org/jhipster-latino/generator-jhipster-coverb.svg?branch=master
[travis-url]: https://travis-ci.org/jhipster-latino/generator-jhipster-coverb.svg
[daviddm-image]: https://david-dm.org/jhipster-latino/generator-jhipster-coverb.svg
[daviddm-url]: https://david-dm.org/jhipster-latino/generator-jhipster-coverb
