import TextField from "@mui/material/TextField";
import { useItemContext } from "@/app/_context/itemContext";

export default function ItemDescription() {
  const { item, setDescription } = useItemContext();
  console.log(item);
  return (
    <div>
      <h1>Item Description</h1>
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={8}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </div>
  );
}
