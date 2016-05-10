var devicesData = [
  {
    title: 'Light 01',
    info: 'Den so 1, phong khach'
  },
  {
    title: 'Light 02',
    info: 'Den so 2, phong bep'
  },
  {
    title: 'Light 03',
    info: 'Den so 3, phong ngu'
  }
];
Template.devicesList.helpers({
  devices: devicesData
});
