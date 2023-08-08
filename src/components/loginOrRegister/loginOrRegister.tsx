import { Box, Button, Divider, FormControl, Input, InputLabel, Stack, TextField } from "@mui/material";
import React, { useState } from 'react';
import  './style.css';
export function LoginOrRegister(){
    const [form , setForm] = useState({email:'',password:'',confirmedPassword:''})
    const [isRegister,setIsRegister] = useState(false);
    const submit = ()=>{
        setForm(form);
        console.log(form);
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        form.email =  evt.target.value;
        setForm(form);
      }
      const toggleRegistration = () =>{
        setIsRegister(!isRegister);
      }
      
    return(
            
                    <Stack spacing={1} alignItems="center" justifyContent="space-evenly" divider={<Divider orientation="vertical" flexItem />}>

                            <FormControl>
                                <InputLabel htmlFor="login-input">Bank</InputLabel>
                                <Input  type='email' color="primary" name='login' onChange={handleChange} defaultValue={form.email}  id="login-input"/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="password-input">Password</InputLabel>
                                <Input  color="primary" type="password" id="password-input"/>
                            </FormControl>

                            {isRegister && <Box>
                                <FormControl>
                                    <InputLabel htmlFor="confirm-password-input">Confirm Password</InputLabel>
                                    <Input color="primary" type="password" id="confirm-password-input"/>
                                    </FormControl>

                                </Box>
                            } 
                            
                        
                    <Button variant="contained" type='submit' size='large' onClick={submit} style={{width:'14rem',marginBottom:'1rem'}}>{ isRegister ? 'Register':'Login'}</Button>
                    <Button variant="contained"  size='large' onClick={toggleRegistration} style={{width:'14rem'}}>{ isRegister ? 'Login':'Register'}</Button>
                </Stack>           
    );
}

