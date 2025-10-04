import { Client, Account, ID } from "appwrite";
import { TablesDB } from "./hooks/tablesDB";

export const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const tableDB = new TablesDB(client);

export { ID };
