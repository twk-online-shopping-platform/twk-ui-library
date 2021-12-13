import * as React from 'react';
import { Button } from '@mui/material';
import { UserInfoDropDown } from './UserDropdown';

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
            <Button data-testid='login-btn' variant='contained'>Login</Button>
        );
    }
}