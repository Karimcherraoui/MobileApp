import {Account,Client,Databases} from "react-native-appwrite"



export const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1").setProject("684c9b4f001e25d56142")

export const account = new Account(client)