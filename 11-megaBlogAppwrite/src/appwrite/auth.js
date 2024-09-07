import config from "../config/config";
import { Client, Account,ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;
    //account = new Account(this.client);
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

        async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email,
             password, name);
             if (userAccount) {
                // call another method
                return this.login({email, password});
             } else {
                return userAccount;
             }
            
        } catch (error) {
            throw error;
            
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email,
                 password);
            
        } catch (error) {
            throw error;
            
        }
    }
    async getCurrentUser() {
        try {
           return await this.account.get();
        } catch (error) {
            console.log("Appwrite service ::getCurrentUser:: error", error);
            //throw error;
        }
        return null
    }
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service ::logout:: error", error);
            //throw error;
        }
    }
}



const authService = new AuthService();


export default AuthService;