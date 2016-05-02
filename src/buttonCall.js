import _ from 'lodash'
export default function(buttonType) {
  var success = true;
  var self = this;
  if (this.props[buttonType]) {

    // If[buttonType] is not a function, then close modal if true
    if (!_.isFunction(this.props[buttonType])) {
      if (this.props[buttonType] === true) {
        this.props.onHide();
      }
      return;
    }
    // If[buttonType] is a function, then call it and close modal if truthy
    if (this.props[buttonType].length === 1) {
      // If[buttonType] has been defined with an arity of 1, then feed it a callback
      this.props[buttonType](function(closeModal) {
        if (closeModal === true) {
          self.props.onHide();
        }
      });
    } else if (this.props[buttonType].length === 0) {
      // If[buttonType] has been defined with an arity of 0, then call it
      if (this.props[buttonType]() === true) {
        this.props.onHide();
      }
    }
  }
}
