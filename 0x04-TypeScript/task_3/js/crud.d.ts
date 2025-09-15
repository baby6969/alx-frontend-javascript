/// <reference path="./interface.ts" />

// Use the imported types
type RowElement = import("./interface").RowElement;
type RowID = import("./interface").RowID;

// Ambient function declarations
declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;
