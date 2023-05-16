import { Storage } from '@google-cloud/storage';

const gc = new Storage({
    projectId: 'farmhub-agro',
    keyFilename: './farmhub-agro-548edd47dc96.json'
});

export default gc.bucket('farmhub-bucket');