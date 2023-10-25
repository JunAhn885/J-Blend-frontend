import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function ItemType() {
  // teporary data. this will be received as a res from a http get request
  const menu_categories: string[] = [
    "Donburi",
    "Salad",
    "Soup",
    "Side",
    "Drinks",
  ];
  return (
    <div>
      <h1>Item Type</h1>
      <TextField
        id="select-menu-type"
        select
        label="Select Menu Type"
        defaultValue={menu_categories[0]}
        helperText="Please select the item type"
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
