"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import DisplayAddedItemTypes from "./displayAddedItemTypes";

export default function AddItemType() {
  const [itemTypeList, setItemTypeList] = useState<string[]>([]);
  const [itemType, setItemType] = useState<string>("");

  // http post request to update the itemtype list in the backend
  function addItemType(): void {
    let itemTypeListCopy = [...itemTypeList];
    itemTypeListCopy.push(itemType);
    setItemTypeList(itemTypeListCopy);
    setItemType("");
  }

  return (
    <div>
      <h1>To begin, please add item types below:</h1>
      <h2>
        ex: "burgers, fries, drinks, and sweets" for a hamburger restaurant
      </h2>
      <h2>Please add one item type at a time</h2>
      <TextField
        id="outlined-basic"
        label="type"
        variant="outlined"
        value={itemType}
        onChange={(e) => setItemType(e.target.value)}
      />
      <Button variant="contained" onClick={addItemType}>
        Add
      </Button>
      <DisplayAddedItemTypes />
    </div>
  );
}
