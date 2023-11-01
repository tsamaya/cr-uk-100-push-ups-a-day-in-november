var QRCode = require('qrcode');
var url = 'https://fundraise.cancerresearchuk.org/page/arnaudfs-giving-page';
// QRCode.toString(url, { type: 'terminal' }, function (err, url) {
//   console.log(url);
// });

QRCode.toFile(
  './qrcode.svg',
  url,
  {
    type: 'svg',
    width: 512,
  },
  function (err) {
    if (err) throw err;
    console.log('done');
  }
);
