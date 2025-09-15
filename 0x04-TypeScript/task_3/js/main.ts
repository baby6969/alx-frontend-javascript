/// <reference path="./crud.d.ts" />

import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud.js";

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age using spread syntax
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);
