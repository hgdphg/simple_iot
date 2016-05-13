Devices = new Meteor.Collection("devices");

Devices.allow({
  insert: function() {
    return true;
  }
});

Devices.getTopic = function() {
  return this.topic;
};
