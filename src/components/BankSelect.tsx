import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, CircularProgress } from '@mui/material';
import { useGetAllBanks } from '../hooks/useUserController';
import { useState } from 'react';
import { IBank } from '../models/IBank';
import { LoadingBlock } from './LoadingBlock';

export function BankSelect(){
    const [selectedBank , setSelectedBank] = useState("Select a Bank");
    const banksRequest = useGetAllBanks();
    const handleChange = (event: SelectChangeEvent)=>{
        console.log(event.target.value);
        setSelectedBank(event.target.value);
    }

    return <FormControl fullWidth>
    <LoadingBlock open={banksRequest.isLoading}/>
    <InputLabel id="bank-select-label">Select a Bank</InputLabel>
    <Select
      labelId="bank-select-label"
      id="bank-select"
      value={selectedBank}
      label="Select a Bank"
      onChange={handleChange}
    //   defaultValue= {"Select a Bank"}
      displayEmpty
    >
      <MenuItem value={"Select a Bank"}>Select a Bank</MenuItem>
      {banksRequest.isFetched && banksRequest.data?.data.map((bank : IBank,idx:number) => <MenuItem key={bank.code} value={bank.fullName}>{bank.fullName}</MenuItem>)}
     
    </Select>
  </FormControl>
}


