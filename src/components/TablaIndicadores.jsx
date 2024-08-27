import {
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import data from '../db/rows';

export default function TablaIndicadores() {


    return (
        <Stack alignItems="center" spacing={3}>
            <TableContainer style={{ maxWidth: 600 }}>
                <Table aria-label="indicadores-diarios" style={{ borderCollapse: 'separate', borderSpacing: '0 5px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold', borderBottom: 'none' }}>Indicadores diarios</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold', borderBottom: 'none' }}>Total</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold', borderBottom: 'none' }}>Act.</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                key={index}
                                style={{
                                    backgroundColor: '#f4f6f8',
                                    height: '18px',
                                    borderRadius: '5px',
                                    marginBottom: '5px'
                                }}
                            >
                                <TableCell
                                    style={{
                                        paddingLeft: '6px',
                                        paddingTop: '1px',
                                        paddingBottom: '1px',
                                        borderLeft: '4px solid #32a1ce',
                                        borderTopLeftRadius: '5px',
                                        borderBottomLeftRadius: '5px',
                                        borderRight: '2px solid white'
                                    }}
                                >
                                    <Typography variant="body2">{row.task}</Typography>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        fontWeight: 'bold', 
                                        padding: '1px 6px',
                                        borderRight: '2px solid white'
                                    }}
                                >
                                    {row.total}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        padding: '1px 6px', 
                                    }}
                                >
                                    {row.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
}