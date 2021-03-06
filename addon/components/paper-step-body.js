import Ember from 'ember';
import layout from '../templates/components/paper-step-body';
const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'md-step-body',
  classNameBindings: ['vertical::md-padding']
});
