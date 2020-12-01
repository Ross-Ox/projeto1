const express = require('express');
const app = express();
const cors = require('cors');


//Handle CORS
app.use(cors({
    origin: '*',
    credentials: true,
    exposedHeaders: ['Origin, X-Requested-With, Content-Type, Accept'],
}));
//Serve Client Side
app.use(express.static('public'));


//Intitate first route and next to primary
/* app.get('/', (req, res,) => {
    res.redirect('/api/ocf');
}); */

app.get('/api/ocf', (req, res,) => {
    res.setHeader('Content-type', 'text/html');
    res.status = 200;
    res.write(
        '<!DOCTYPE html><html><head><title>OCF API</title></head><body><h1 style="color:#232323;font-weight:300; text-align:center; font-family:Open-sans,Arial,sans-serif">API STORAGE -HEALTHY- %</h1></body></html>',
    );
    res.end();
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server Started on port ' + port + ' at ' + new Date());
});
