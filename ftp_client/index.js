var FTPS = require('ftps');
var ftps = new FTPS({
  host: '127.0.0.1', // required
  username: 'test', // Optional. Use empty username for anonymous access.
  password: 'test', // Required if username is not empty, except when requiresPassword: false
  protocol: 'ftp', // Optional, values : 'ftp', 'sftp', 'ftps', ... default: 'ftp'
  // protocol is added on beginning of host, ex : sftp://domain.com in this case
  port: 21, // Optional
  // port is added to the end of the host, ex: sftp://domain.com:22 in this case
  escape: true, // optional, used for escaping shell characters (space, $, etc.), default: true
  retries: 2, // Optional, defaults to 1 (1 = no retries, 0 = unlimited retries)
  timeout: 10, // Optional, Time before failing a connection attempt. Defaults to 10
  retryInterval: 5, // Optional, Time in seconds between attempts. Defaults to 5
  cwd: '', // Optional, defaults to the directory from where the script is executed
});
// Do some amazing things
ftps.cd('/home/vasa/Desktop/Pet_projects/ftp_client').addFile(__dirname + '/test.txt').exec(console.log);
