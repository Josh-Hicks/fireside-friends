import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addMessage() {
      // create a new model based on the properties on the action's context
      let newMessage = this.store.createRecord('message', {
        name: this.get('name'),
        body: this.get('body')
      });
      // save message to FIREBASE
      newMessage.save();
      // clear form
      this.setProperties ({
        name: '',
        body: ''
      });
    }
  }
});
