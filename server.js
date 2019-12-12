const 	fs 			= require('fs'),
		path 		= require('path'),
		express 	= require('express'),
		bodyParser 	= require('body-parser'),
		app 		= express();

app.set('port', (process.env.app_port || 8888));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) { // Additional middleware which will set headers that we need on each request. 
		console.log(req.url)
    res.setHeader('Access-Control-Allow-Origin', '*'); // Set permissive CORS header - this allows this server to be used only as an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Cache-Control', 'no-cache'); // Disable caching so we'll always get the latest comments.
    next();
});
app.use(express.static(path.join(__dirname, 'public')));


app.listen(
	app.get('port'),
	function() {
  		console.log('Server started: http://localhost:' + app.get('port') + '/');
	}
);