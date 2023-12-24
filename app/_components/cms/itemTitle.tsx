import TextField from "@mui/material/TextField";
import { useItemContext } from "@/app/_context/itemContext";

export default function ItemTitle() {
  const { item, setTitle } = useItemContext();

  return (
    <div>
      <h1>Item Title</h1>
      <TextField
        id="outlined-basic"
        label={"Title"}
        variant="outlined"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
  );
}
