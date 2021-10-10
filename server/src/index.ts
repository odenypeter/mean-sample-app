import express from 'express'
import morgan from 'morgan'

import db from './db'
import appRoutes from './routes';

// initializations
const app = express();

// configirations
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/v1', appRoutes);

// initialize the server
app.listen(app.get('port'), () => {
  console.log('Server listening on port: ', app.get('port'))
  console.log('Using MongoDB : ', db.version)
});

