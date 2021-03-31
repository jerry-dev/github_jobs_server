import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import githubJobListings from '../routes/githubJobListings.js';

export default class ExpressLoader {
    constructor() {
        const port = process.env.PORT || 8080;
        const environment = process.env.NODE_ENV;

        const app = express();
        app.use(helmet());
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
        app.use("/", githubJobListings);

        if (environment === 'development') {
            app.use(morgan('tiny'));
        }

        this.server = app.listen(port, () => console.log(`Listening on port ${port}...`));
    }

    get Server() {
        return this.server;
    }
}

