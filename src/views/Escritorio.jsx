import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CategoriasButton from '../components/CategoriasButton'

const categorias = ["CATEGORIA 1", "CATEGORIA 2", "CATEGORIA 3", "CATEGORIA 4"]

const Escritorio = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box>
                        <Stack direction="row" justifyContent="center" spacing={3}>
                            {
                                categorias.map(categoria => (
                                    <CategoriasButton key={categoria} categoria={categoria} />
                                ))
                            }
                        </Stack>
                    </Box>

                    <Box>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus sapiente, id, tempora quo repudiandae incidunt sunt dolorum quisquam nemo excepturi ipsam totam, quidem sed quos aperiam. Soluta, harum corrupti.
                            At ipsa iste eius odit incidunt molestiae assumenda fugiat modi. Fuga dolores beatae earum reiciendis quae, architecto molestias, totam porro optio possimus maxime nobis laborum. Adipisci provident dolorum quam magnam!
                            Eveniet, deleniti accusantium dicta mollitia, fuga nemo beatae minima, dolor est rem explicabo architecto non similique id itaque eligendi alias vero in assumenda ipsum repellat! Sapiente culpa modi delectus voluptatem?
                            Reprehenderit eos assumenda fuga qui recusandae dolorum eaque asperiores at, dolores, enim reiciendis id saepe placeat quia. Fuga mollitia qui ut tempore illo a laudantium porro cumque delectus, aliquam cupiditate.
                            Eius inventore quaerat quis, amet nam placeat at provident molestiae explicabo pariatur reiciendis nisi deleniti, laudantium repellat velit, cum alias ex? Nisi quod minus fugit reprehenderit accusantium temporibus libero deleniti.
                            Laboriosam, rem consequuntur? Ipsa veniam dolorum, facilis ea explicabo numquam aspernatur molestias adipisci corrupti mollitia. In, commodi optio! Debitis dolorem temporibus consequatur deleniti, porro obcaecati at aut maxime eius laboriosam!
                            Quo at aliquam reprehenderit sunt, cumque quas iusto facere in laboriosam necessitatibus labore debitis eos excepturi molestias! Natus nesciunt soluta aliquam vero optio laudantium quaerat, doloribus enim placeat. Odio, inventore!
                            Culpa a velit blanditiis dolore corporis quisquam perferendis. Quibusdam, tempora iure natus necessitatibus nulla quae explicabo voluptate illo placeat? Quod ea suscipit totam quos aperiam quisquam dignissimos numquam accusantium non!
                            Obcaecati perspiciatis odio excepturi deleniti dolore possimus maiores hic eum molestiae aperiam eos delectus eius cum consequuntur repellendus natus, quos distinctio at. Illo ipsum maiores earum fugiat veniam! Quis, vitae.
                            Doloiusto temporibus accusamus, voluptatibus reiciendis distinctio ad! Numquam accusamus laborum cum natus reprehenderit voluptas ducimus rem, dicta sequi.
                            Aut velit quaerat atque, a officia rerum molestiae, adipisci accusamus veritatis magni nemo dolor non sunt quae at cupiditate laudantium officiis voluptates quisquam temporibus tempora soluta exercitationem deserunt. Eos, error?
                            Quis fuga ipsum neque quae architecto nisi reprehenderit corporis praesentium reiciendis blanditiis. Ea non, modi, eligendi accusantium adipisci veritatis fuga consequuntur quis, dolorum culpa ad autem doloribus accusamus distinctio exercitationem?
                            Deserunt consequatur vero, tempore cupiditate quaerat magnam ab laudantium voluptatibus in est ut ea veritatis libero non recusandae, alias odit? Ipsum, similique eum. Autem architecto mollitia, tempore at inventore omnis.
                            Iusto enim ipsa distinctio commodi excepturi. Similique reiciendis magni eaque consectetur porro aliquid quas velit. Praesentium delectus veniam rem dolor expedita voluptatibus quo tenetur iusto a, cumque minus, esse dolores!
                            Earum soluta odio est saepe, aliquam, iusto tempore dignissimos obcaecati vero natus et minus fugit totam culpa quo dolorum? Corporis porro eveniet quia commodi earum, tenetur sunt fugit fuga dolore!</p>
                    </Box>



                </Grid>
                <Grid item xs={4}>

                    {/* TODO: FALTA HACER LA LOGICA DE ESTE COMPONENTE */}
                    <h1 style={{ textAlign: 'center' }}>Indicadores</h1>
                    <Stack alignItems="center" spacing={3}>


                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Fiscal 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Stack>


                </Grid>

            </Grid>
            <Divider />
            <Grid>
                <h1 style={{ textAlign: 'center' }}>Fiscales</h1>
                <Stack direction="row" justifyContent="center" spacing={3}>


                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Fiscal 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Fiscal 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Stack>

            </Grid>
        </>
    )
}

export default Escritorio