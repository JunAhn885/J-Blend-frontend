import TextField from "@mui/material/TextField";
import { useItemContext } from "@/context/itemContext";

export default function ItemId() {
  const { item, setId } = useItemContext();

  return (
    <div>
      <h1>Item SKU or Id</h1>
      <TextField
        id="outlined-basic"
        label={"SKU or ID"}
        variant="outlined"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
    </div>
  );
}
