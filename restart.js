var pm2 = require('pm2');

pm2.connect(function(err) {
  if (err) throw err;

  setTimeout(function worker() {
      pm2.restart('pwplib', function() {});
      setTimeout(worker, 24 * 60 * 60 * 1000);
    });
}, 24 * 60 * 60 * 1000);