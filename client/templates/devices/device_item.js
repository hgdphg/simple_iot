Template.deviceItem.helpers({
  info: function() {
    return topic;
  }
});

Template.deviceItem.extraColor = function () {
    if (this.message) {
        return "background: #555555 "; // you will also need to add a 'theColorGreen' class to your .css file that matches this
    }

    return "";
};

Template.deviceItem.events({
  'click #value_on' (){
    Devices.insert({ topic: this.topic, message: "1", broadcast: true });
  }
});

Template.deviceItem.events({
  'click #value_off' (){
    Devices.insert({ topic: this.topic, message: "0", broadcast: true });
  }
});
