import TextField from "@mui/material/TextField";

export default function ItemInput({
  inputType,
  width,
}: {
  inputType: string;
  width: number;
}) {
  return (
    <div>
      <h1>{`Item ${inputType}`}</h1>
      <TextField id="outlined-basic" label={inputType} variant="outlined" />
    </div>
  );
}
