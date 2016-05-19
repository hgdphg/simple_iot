import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup\
  //Devices.mqttConnect("mqtt://jreebqah:RzEhoQNDZBiy@m21.cloudmqtt.com:10697", ['value','light']);
  Devices.mqttConnect("mqtt://qrgrhtfl:EgXj4j87F8-M@m10.cloudmqtt.com:17877", ['LED1','LED2','LED3','LED4']);
});
