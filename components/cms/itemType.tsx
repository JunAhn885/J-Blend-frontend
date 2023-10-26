"use client";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function ItemType() {
  // teporary data. this will be received as a res from a http get request
  const menu_categories: string[] = ["a", "b", "c"];
  const [itemType, setItemType] = useState<string>(
    menu_categories.length === 0 ? "Donburi" : menu_categories[0]
  );

  return (
    <div>
      <h1>Item Type</h1>
      <TextField
        id="select-menu-type"
        select
        label="Select Menu Type"
        defaultValue={itemType}
        helperText="Please select the item type"
        onChange={(e) => {
          setItemType(e.target.value);
        }}
      >
        {menu_categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
