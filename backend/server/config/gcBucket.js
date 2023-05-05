import { Storage } from '@google-cloud/storage';

const gc = new Storage({
    projectId: 'farmhub-gcp',
    keyFilename: './farmhub-gcp-7cd596f759ce.json'
});

export default gc.bucket('farmhub-gcp.appspot.com');