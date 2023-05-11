import { Storage } from '@google-cloud/storage';

const gc = new Storage({
    projectId: 'farmhub-agro',
    keyFilename: './farmhub-agro-fbab49277097.json'
});

export default gc.bucket('farmhub-bucket');