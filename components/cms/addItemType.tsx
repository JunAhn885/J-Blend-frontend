import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function AddItemType() {
  return (
    <div>
      <h1>To begin, please add item types below:</h1>
      <h2>
        ex: "burgers, fries, drinks, and sweets" for a hamburger restaurant
      </h2>
      <h2>Please add one item type at a time</h2>
      <TextField id="outlined-basic" label="type" variant="outlined" />
      <Button variant="contained">Contained</Button>
    </div>
  );
}
