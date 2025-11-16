import cryptojs from 'crypto-js';

export default class CommonUtil {

    private secretKey: string;

    constructor() {
        // this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error('Please provide secret key before starting exection');
        }

    }

    /**
     * Provide encrypted data form the string. 
     * @param data 
     * @param secretKey 
     * @returns encrypted data as string 
     */
    public encryptData(data: string): string {
         const encryptedData = cryptojs.AES.encrypt(data, this.secretKey).toString();
         console.log(encryptedData);
         return encryptedData;
    }

    /**
     * Provide dcrepted data form the encDAta
     * @param encdata 
     * @returns  string of decrepted data.
     */
    public decryptData(encdata: string): string {
        const decryptData = cryptojs.AES.decrypt(encdata, this.secretKey).toString(cryptojs.enc.Utf8);
        return decryptData;
    }
}