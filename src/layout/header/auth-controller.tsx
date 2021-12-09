import * as React from 'react';
import { Button } from '@mui/material';
import { HeaderProps } from './header';

export interface AuthProps{
    'userData'?: UserProps
}
export interface UserProps{
    'id':string, 'name':string
}
export const AuthController = (props: AuthProps ) => {
    if(props.userData){
        return(
            <Button data-testid='logout-btn' variant='outlined'>Logout</Button>
        );
    }else{
        return(
            <Button data-testid='login-btn' variant='outlined'>Login</Button>
        );
    }
}