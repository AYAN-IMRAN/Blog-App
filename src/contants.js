import { Client, Account, ID } from "appwrite";

export const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // env se endpoint le raha hai
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // env se project id le raha hai

export const account = new Account(client);
export { ID };
