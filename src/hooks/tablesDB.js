import { Databases } from "appwrite";

export class TablesDB extends Databases {
  // ✅ Create a new Row (Document)
  createRow({ databaseId, tableId, rowId, data }) {
    return this.createDocument(databaseId, tableId, rowId, data);
  }

  // ✅ Get all Rows (Documents)
  listRows({ databaseId, tableId, queries = [] }) {
    return this.listDocuments(databaseId, tableId, queries);
  }

  // ✅ Get a single Row by ID
  getRow({ databaseId, tableId, rowId }) {
    return this.getDocument(databaseId, tableId, rowId);
  }

  // ✅ Update a Row
  updateRow({ databaseId, tableId, rowId, data }) {
    return this.updateDocument(databaseId, tableId, rowId, data);
  }

  // ✅ Delete a Row
  deleteRow({ databaseId, tableId, rowId }) {
    return this.deleteDocument(databaseId, tableId, rowId);
  }
}
