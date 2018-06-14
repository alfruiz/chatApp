'user strict';

/**
 * External Modules
 */
import express from 'express';
import exphbs from 'express-handlebars';


/**
 * Internal Modules
 * chatApp
 */
import chatApp from './app';


/**
 * Starting the express, creating new instance
 */
const app = express();


/**
 * global configuration for express
 */
app.set('port', process.env.PORT || 3000);
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(`${__dirname}/public`));


// Routes
app.use('/', chatApp.Router);


/**
 * Start server
 * Port will be send by param or by default 3000
 */
app.listen(app.get('port'), () => {
  console.log(`server is started in PORT: ${app.get('port')}...`);
});
