import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import CategoriasButton from '../components/CategoriasButton'
import icons from '../db/icons'
import { useEffect, useState } from 'react';
import TablaIndicadores from '../components/TablaIndicadores';
import useStore from '../store/store';

const categorias = ["CATEGORIA 1", "CATEGORIA 2", "CATEGORIA 3", "CATEGORIA 4", "CATEGORIA 5"]

const Escritorio = () => {

    const [categoriaFiltrada, setCategoriaFiltrada] = useState([])

    useEffect(() => {

        const iconosFiltrados = icons.filter(icon => icon.category === 'CATEGORIA 1')

        setCategoriaFiltrada(iconosFiltrados)

    }, [])

    const { user } = useStore((state) => ({
        user: state.user,
      }));

    const filtrarCategoria = (categoria) => {

        const iconosFiltrados = icons.filter(icon => icon.category === categoria)

        setCategoriaFiltrada(iconosFiltrados)

        console.log(categoriaFiltrada)

    }



    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Box >
                        <Stack direction="row" justifyContent="center" spacing={3}>
                            {
                                categorias.map(categoria => (
                                    <CategoriasButton onClick={() => filtrarCategoria(categoria)} key={categoria} categoria={categoria} />
                                ))
                            }
                        </Stack>
                    </Box>

                    <Box margin={5}>
                        <Grid container gap={2} justifyContent={'center'}>
                            {categoriaFiltrada.map((icon, index) => (
                                <Grid item xs={2.4} key={index} textAlign={'center'}>
                                    <Button>
                                        <Grid container direction={'column'} alignItems="center">
                                            <img src={`${icon.img}`} alt="" />
                                            <Typography>{icon.icon}</Typography>
                                        </Grid>
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>




                </Grid>
                <Grid item xs={5}>
                    <Typography variant='h5' style={{ textAlign: 'center' }}>Indicadores</Typography>
                    <TablaIndicadores />
                </Grid>

            </Grid>
            <Divider style={{ marginTop: '10px' }} />
            <Grid>
                <Typography variant={''} style={{ textAlign: 'center' }}>Fiscales</Typography>
                <Stack direction="row" justifyContent="center" spacing={3}>
                    <Box>
                        <TablaIndicadores />
                    </Box>
                    <Box>
                        <TablaIndicadores />
                    </Box>
                </Stack>

                <Typography>
                    {
                        user ? user.nombre : ''
                    }
                </Typography>

            </Grid>
        </>
    )
}

export default Escritorio