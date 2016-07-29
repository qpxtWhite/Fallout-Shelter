var gulp = require('gulp');
var webserver = require('gulp-webserver');
var os=require('os');
var ifaces=os.networkInterfaces();

gulp.task('server', function() {
	gulp.src('./app')
		.pipe(webserver({
			host: getIP(),
			directoryListing: false,
			livereload: false,
			open: true,
			port: 8003
		}));
});

function getIP(){
	var ip = 'localhost';
	for (var dev in ifaces) {
		ifaces[dev].every(function(details){
			if (details.family=='IPv4' && details.address!='127.0.0.1' && !details.internal) {
				ip = details.address;
				return false;
			}
			return true;
		});
	}
	return ip;
}