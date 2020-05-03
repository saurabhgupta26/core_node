// 7. // Write respective headers object below.
// // Request URL:https://altcampus.io/css/app-d82b66cb92c91bce5e55e00aa3573bc9.css?vsn=d
// // Request Method:GET
// // Status Code:
// // 200
// // Version:HTTP/2

// // // Response Headers

// // HTTP/2 200 OK
// // server: nginx/1.10.3 (Ubuntu)
// // date: Sun, 03 May 2020 20:58:21 GMT
// // content-type: text/css
// // content-length: 18609
// // vary: Accept-Encoding
// // cache-control: public, max-age=31536000
// // content-encoding: gzip
// // accept-ranges: bytes
// // x-frame-options: DENY
// // x-content-type-options: nosniff
// // X-Firefox-Spdy: h2

// // // Request Headers

// // Host: altcampus.io
// // User-Agent: Mozilla/5.0 (X11; Linux i686; rv:76.0) Gecko/20100101 Firefox/76.0
// // Accept: text/css,*/*;q=0.1
// Accept-Language: en-US,en;q=0.5
// Accept-Encoding: gzip, deflate, br
// DNT: 1
// Connection: keep-alive
// Cookie: track_uid=9dd6c039-96f9-003f-7924-0439d123fc8d; _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYeHlvZjFmQTlONnZxblNPdEhBRGNVQT09.Ka3f-gy6uDnamUYs_x9_4tdsrLTmsSeLixSflNXRY7E
// 8. // Write parsed object below of the url "http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4"

// var url = require('url');
// var localUrl = "http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4";
// var parsedUrl = url.parse(localUrl, true);
// console.log(parsedUrl);

// 9. // Write parsed query object

var url = require('url');
var localUrl = "http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4";
var parsedUrl = url.parse(localUrl, true);
parsedUrl.query;