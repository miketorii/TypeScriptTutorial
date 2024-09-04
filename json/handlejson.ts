const jsonData = '{"model": "iR-ADV C5800", "type": "MFP", "status": 10000}';
const device: {model: string; type: string; status: number; } = JSON.parse(jsonData);

console.log(device.model);
console.log(device.type);
console.log(device.status);

device.status = 30001;
console.log(device.status);

const jsonNewData = JSON.stringify(device);
console.log(jsonNewData);

