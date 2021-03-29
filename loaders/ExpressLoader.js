import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

export default class ExpressLoader {
    constructor() {
        const port = process.env.PORT || 3000;
        const environment = process.env.NODE_ENV;

        const app = express();
        app.use(helmet());
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
        // app.use(<path>, <router>);

        if (environment === 'development') {
            app.use(morgan('tiny'));
        }

        this.server = app.listen.apply(port, () => console.log(`Listening on port ${port}...`));
    }

    get Server() {
        return this.server;
    }
}

