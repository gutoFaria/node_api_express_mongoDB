import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import videosRouter from './routes/video.routes';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(videosRouter);

export default app;