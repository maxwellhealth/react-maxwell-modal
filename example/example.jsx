/** @jsx React.DOM */
var React = require('react/addons');
var AlertModal = require('../src/AlertModal.jsx');
$ = jQuery = global.$  = require('jquery');
global.bootstrap = require('../bower_components/bootstrap/dist/js/bootstrap');


function showModal() {
  $('#modal-container').remove();
  $('body').append('<div id="modal-container"></div>');
  React.render(<AlertModal
      body="foo"
      yesLabel="foo"
      show={true}
      onYes={function(){console.log('onYes'); return true;}}
      onShow={function(){console.log('onLoad');}}
      onHide={function(){console.log('onHide');}} />, document.getElementById("modal-container"));
}

showModal();

$('.showModal').click(showModal);