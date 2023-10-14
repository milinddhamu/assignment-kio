import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(campaigns, clicks, cost, conversions, revenue) {
  return { campaigns, clicks, cost, conversions, revenue };
}

const rows = [
  createData('Cosmetics', 712, 23, 2344, 16568),
  createData('Serums', 237, 3961, 234234, 263293),
  createData('Facewash', 262, 9462, 123, 234234),
  createData('Shampoos', 305, 2342, 23423, 2344),
  createData('Conditioners', 9324, 2343, 49, 11332),
  createData('Facewash 2', 356, 29239, 189, 23234),
  createData('Total', 356, 123234, 589, 65443),
];


const AdsData = () => {
  return (
    <TableContainer className="border  rounded-[4px] bg-white">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className=''>
            <TableCell colSpan={6} sx={{fontWeight:"600", fontSize:"1em"}}>
              Ad Insights
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Campaigns</TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Conversions</TableCell>
            <TableCell align="right">Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },'&:last-child': {backgroundColor:"#00000005 !important"} }}
            >
              <TableCell component="th" scope="row">
                {row.campaigns}
              </TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.conversions}</TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdsData;