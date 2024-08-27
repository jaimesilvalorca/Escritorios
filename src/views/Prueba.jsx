import React from 'react'
import useStore from '../store/store';
import { Typography } from '@mui/material';

export default function Prueba() {
    const { user } = useStore((state) => ({
        user: state.user,
      }));
  return (
    <>
    
    <Typography>
        {user.nombre}
    </Typography>
    </>
  )
}
