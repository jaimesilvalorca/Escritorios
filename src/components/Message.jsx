import { Alert } from '@mui/material'

export default function Message({message,color}) {
  return (
    <>
    <Alert severity={color}>{message}</Alert>
    </>
  )
}
