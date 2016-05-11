Devices = new Meteor.Collection("devices");

Devices.allow({
  insert: function() {
    return true;
  }
});
