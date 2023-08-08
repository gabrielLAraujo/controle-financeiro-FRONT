import { Box, Button, Divider, FormControl, Input, InputLabel, Stack } from '@mui/material';
import { BankSelect } from './BankSelect';

export function RegisterAccount(){
    return (
        <Stack style={{marginTop:"14%"}} spacing={1} alignItems="center" justifyContent="space-evenly" divider={<Divider orientation="vertical" flexItem />}>

                <InputLabel htmlFor="account-name" >Account Name</InputLabel>
                <Input  id="account-name" style={{width :"10%"}}  aria-describedby="my-helper-text" />
            {/* <Box>
                <FormControl>
                <InputLabel htmlFor="bank">Bank</InputLabel>
                <Input id="bank" aria-describedby="my-helper-text" />
                </FormControl>
            </Box> */}
                <div style={{width :"10%"}}>
                    <BankSelect ></BankSelect>

                </div>
                <Button size='large' style={{width :"10%"}} variant="contained" >Save</Button>
        </Stack>
      )
}