# generator-jhispter-coverb
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A jhipster module that generates a pages for your jhipster application

# Introduction

- This is a [JHipster](http://jhipster.github.io/) module.

- You can use it to generate a page for your apps.
- It use cover types as template for pages. 
- It creates a corresponding navigation item in your JHipster application.

To learn more about this module, see [wiki](https://github.com/jhipster-latino/coverb/wiki).

# Prerequisites

- As this is a [JHipster](http://www.jhipster.tech/) module, we expect you to have an existing [JHipster app](https://www.jhipster.tech/creating-an-app/).
- Jhipster version must be greater or equal to 5.2.0

# Installation

## with NPM

To install this module:

```bash
npm install -g generator-jhipster-coverb
```

To update this module:

```bash
npm update -g generator-jhipster-coverb
```

## with Yarn

To install this module:

```bash
yarn global add generator-jhipster-coverb
```

To update this module:

```bash
yarn global upgrade generator-jhipster-coverb
```

# Usage

1. [Create a JHipster app](https://www.jhipster.tech/creating-an-app/) using `yo jhipster`, or `jhipster`
2. Run coverb on your JHipster app path:

```bash
yo jhipster-coverb
```
3. Select your cover type:
```bash
? Which type do you prefer? (Use arrow keys)
❯ default 
  resume 
  company 
```
4. Select your cover name:
```bash
? Which name do you prefer? (myOwnResume) 
```

# Demo

To run coverb demo on a JHipster generated application:

```bash
yo jhipster-coverb:demo
```

# Contributing

You can add your own cover and help us to grow

# License

Apache-2.0 © [jhipster_latino]

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-coverb.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-coverb
[travis-image]: https://travis-ci.org/jhipster-latino/coverb.svg?branch=master
[travis-url]: https://travis-ci.org/jhipster-latino/coverb
[daviddm-image]: https://david-dm.org/jhipster-latino/generator-jhipster-coverb.svg
[daviddm-url]: https://david-dm.org/jhipster-latino/generator-jhipster-coverb
