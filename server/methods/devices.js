Meteor.methods({
  'devices.reset'(){
    Devices.remove({});
  },
  'devices.list'(){
    return Devices.find({}).fetch();
  }
});
