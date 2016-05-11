Template.deviceItem.helpers({
  info: function() {
    return topic;
  }
});

Template.deviceItem.events({
  'click #value_on' (){
    Devices.insert({ topic: "value", message: "1", broadcast: true });
  }
});

Template.deviceItem.events({
  'click #value_off' (){
    Devices.insert({ topic: "value", message: "0", broadcast: true });
  }
});
