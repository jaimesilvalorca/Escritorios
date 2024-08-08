import { Button} from '@mui/material'

const CategoriasButton = ({categoria }) => {

    return (
            <Button color='primary' variant='outlined'>
                {categoria}
            </Button>
    )
}

export default CategoriasButton