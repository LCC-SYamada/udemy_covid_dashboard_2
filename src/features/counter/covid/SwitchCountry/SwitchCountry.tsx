import React from "react";
import { NativeSelect, FormControl } from "@mui/material";

import { useDispatch } from "react-redux";
import { fetchAsyncGetDaily } from "../covidSlice";

const SwitchCountry: React.VFC = () => {
  const dispatch = useDispatch();

  const countries = [
    "japan",
    "china",
    "us",
    "france",
    "italy",
    "spain",
    "united kingdom",
    "germany",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
    "india",
  ];
  return (
    <FormControl sx={{ marginBottom: 3, minWidth: 320}}>
      <NativeSelect
        onChange={( e: React.ChangeEvent<HTMLSelectElement> ) => {
          dispatch(fetchAsyncGetDaily(e.target.value))
        }}
      >
        <option value="">Worldwide</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
