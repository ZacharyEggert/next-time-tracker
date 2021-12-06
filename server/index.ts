import './paths';
import express from 'express';
import mongoose from 'mongoose';
import next from 'next';
import path from 'path';
import compression from 'compression';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import routes from '@routes';
import dotenv from 'dotenv';
dotenv.config();

import { MONGODB_URI } from './constants';
const PORT = parseInt(process.env.PORT!) || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.join(__dirname, '../') });
const handle = app.getRequestHandler();

const main = async () => {

    // console.debug('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    // console.debug('Connected to MongoDB');

    app.prepare().then(() => {

        const server = express();

        server.use(compression());
        server.use(
            session({
                secret: 'keyboard cat',
                resave: false,
                saveUninitialized: false,
                store: new MongoStore({
                    mongoUrl: MONGODB_URI,
                })
            })
        );

        server.use(routes);

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, () => {
            console.log(`> Ready on http://localhost:${PORT}`);
        });


    });
}

main();