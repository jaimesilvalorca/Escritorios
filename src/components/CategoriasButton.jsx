import { Button} from '@mui/material'

const CategoriasButton = ({categoria,onClick}) => {

    return (
            <Button color='primary' variant='text' style={{borderBottom:'solid'}} onClick={onClick}>
                {categoria}
            </Button>
    )
}

export default CategoriasButton