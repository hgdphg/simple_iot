// Fixture data
if (Devices.find().count() === 0) {
  Devices.insert({
    title: 'Light 1',
    type: 1,
    infomation: 'LED1',
    topic: "LED1",
    message: 1
  });
  Devices.insert({
    title: 'Light 2',
    type: 1,
    infomation: 'LED2',
    topic: "LED2",
    message: 1
  });
  Devices.insert({
    title: 'Light 3',
    type: 1,
    infomation: 'LED3',
    topic: "LED3",
    message: 1
  });
  Devices.insert({
    title: 'Light 4',
    type: 1,
    infomation: 'LED4',
    topic: "LED4",
    message: 1
  });
}
