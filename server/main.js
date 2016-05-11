import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup\
  Devices.mqttConnect("mqtt://jreebqah:RzEhoQNDZBiy@m21.cloudmqtt.com:10697", ['value','light']);

});
