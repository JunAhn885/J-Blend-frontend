import TextField from "@mui/material/TextField";

export default function ItemDescription() {
  return (
    <div>
      <h1>Item Description</h1>
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={8}
      />
    </div>
  );
}
