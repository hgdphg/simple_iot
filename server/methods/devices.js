Meteor.methods({
  'events.reset'(){
    Devices.remove({});
  },
  'devices.list'(){
    return Devices.find({}).fetch();
  }
});
