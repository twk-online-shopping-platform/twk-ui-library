import * as React from 'react';
import { Button } from '@mui/material';
import { UserInfoDropDown } from './user-dropdown';

export interface AuthProps{
    'userData'?: UserProps
}
export interface UserProps{
    'id':string, 'name':string
}
export const AuthController = (props: AuthProps ) => {
    if(props.userData){
        return(
            <UserInfoDropDown/>
        );
    }else{
        return(
            <Button data-testid='login-btn' variant='outlined'>Login</Button>
        );
    }
}