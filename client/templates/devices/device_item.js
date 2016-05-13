Template.deviceItem.helpers({
  info: function() {
    return topic;
  }
});

Template.deviceItem.rendered = function () {
  // create bootstrap-switch - for all switch classes
  $("[name='my-checkbox']").bootstrapSwitch();
  $('input[name="my-checkbox"]').bootstrapSwitch('state', false);
  $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
    console.log(state); // true | false
  });
}

Template.deviceItem.extraColor = function () {
    if (!this.message) {
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


