import express from "express";
import cors from 'cors'; 

import bookRoutes from './routes/bookRoute.js';
import studentRoutes from './routes/studentRoute.js';
import userRoutes from './routes/userRoute.js';

const corsOptions = {
    origin: 'http://localhost:5173'
};
 
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

try {
    const port = 3000;
    const server = app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}
