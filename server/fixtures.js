// Fixture data
if (Devices.find().count() === 0) {
  Devices.insert({
    title: 'Light 1',
    type: 1,
    infomation: 'Den phong khach',
    topic: "value",
    message: 1
  });
  Devices.insert({
    title: 'Light 2',
    type: 1,
    infomation: 'Den phong ngu',
    topic: "light",
    message: 1
  });
}
