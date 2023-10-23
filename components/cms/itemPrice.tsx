import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function ItemPrice() {
  return (
    <div>
      <h1>Item Price</h1>
      <FormControl fullWidth sx={{ m: 1.0, width: "10vw" }}>
        <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Price"
        />
      </FormControl>
    </div>
  );
}
