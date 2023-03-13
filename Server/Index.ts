import dotenv from 'dotenv'
import { bootServer } from './Server';

dotenv.config();

const PORT: number = parseInt(process.env.PORT ?? '3005');

(async () => {
    try {
        bootServer(PORT)
    } catch (e) {
        console.log('error in server', e)
    }
})()