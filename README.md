#React-Maxwell-Modal

[![Build Status](https://travis-ci.org/maxwellhealth/react-maxwell-modal.svg?branch=master)](https://travis-ci.org/maxwellhealth/react-maxwell-modal)

[![Coverage Status](https://coveralls.io/repos/maxwellhealth/react-maxwell-modal/badge.svg)](https://coveralls.io/r/maxwellhealth/react-maxwell-modal)

[React-Maxwell-Modal Github Page](http://maxwellhealth.github.io/react-maxwell-modal)

##Install

Requires jquery and bootstrap

`npm install react-maxwell-modal --save`


##Usage

There are three types of modals available

### Modal

This is the basic modal. It has two types of configurations

* Content
* Header, Body, Footer
```javascript

$('body').append('<div id="modal-container"></div>');
  React.render(<Modal
      body="foo"
      title="foo"
      show={true}
      onYes={function(){console.log('onYes'); return true;}}
      onShow={function(){console.log('onLoad');}}
      onHide={function(){console.log('onHide');}} />, document.getElementById("modal-container"));
```

####Props



|Prop|Type| Required|
|-----|----|--------|
|footer|any| false|
|header|any| false|
|content|any| true|
|body|any| false|
|onShow|function| false|
|onHide|function| false|
|title|string| false|
|dismissable|bool| false|
|show|bool| false|

####Content

If the content property is present it will operate in content mode.

```javascript
$('body').append('<div id="modal-container"></div>');
React.render(<Modal
    content="foo"

    show={true}
    onShow={function(){console.log('onLoad');}}
    onHide={function(){console.log('onHide');}} />, document.getElementById("modal-container"));
```
This will create a modal that contains the word foo and nothing else.

Content can take a DOM element, rendered html, rendered backbone view, handlebars template output or a function.


####Header,Body,Footer
Header,Body,Footer works similarly except it uses 3 different views for each section of the bootstrap modal.

```javascript
$('body').append('<div id="modal-container"></div>');
React.render(<Modal
    content={"foo"}
    title={'foo'}
    show={true}
    onShow={function(){console.log('onLoad');}}
    onHide={function(){console.log('onHide');}} />, document.getElementById("modal-container"));
```
Note the handlebars template for the header, rendered html for the body.
These could take a rendered backbone view.


###Confirm Modal

A replacement for the confirm box


####Props

|Prop|Type| Required|
|-----|----|--------|
|yesLabel|string| false|
|noLabel|string| false|
|onNo|function| false|
|onYes|function| false|
|header|any| false|
|content|any| true|
|body|any| false|
|onShow|function| false|
|onHide|function| false|
|title|string| false|
|dismissable|bool| false|
|show|bool| false|


```javascript
$('body').append('<div id="modal-container"></div>');
React.render(<ConfirmModal
    body="foo"
    yesLabel="foo"
    show={true}
    onYes={function(){console.log('onYes'); return true;}}
    onNo={function(){console.log('onNo'); return true;}}
    onShow={function(){console.log('onLoad');}}
    onHide={function(){console.log('onHide');}} />, document.getElementById("modal-container"));
  ```
This produces a modal with two buttons, yes and no. their labels are configurable as well as what occurs on yes and on no.

###Alert Modal

A replacement for the alert box


####Props

|Prop|Type| Required|
|-----|----|--------|
|yesLabel|string| false|
|onYes|function| false|
|header|any| false|
|content|any| true|
|body|any| false|
|onShow|function| false|
|onHide|function| false|
|title|string| false|
|dismissable|bool| false|
|show|bool| false|


```
$('body').append('<div id="modal-container"></div>');
  React.render(<AlertModal
      body="foo"
      yesLabel="foo"
      show={true}
      onYes={function(){console.log('onYes'); return true;}}
      onShow={function(){console.log('onLoad');}}
      onHide={function(){console.log('onHide');}} />, document.getElementById("modal-container"));
```