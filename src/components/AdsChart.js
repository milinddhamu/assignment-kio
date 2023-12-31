import DoughnutChart from "./DoughnutChart";
import DropdownButton from "@/utils/DropdownButton";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BiSolidDoughnutChart } from 'react-icons/bi';
import { RiTableLine } from 'react-icons/ri';
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import SortButtons from "@/utils/SortButtons"

function createData(campaigns, clicks, cost, conversions, revenue) {
  return { campaigns, clicks, cost, conversions, revenue };
}

const AdsChart = () => {
  const [parent] = useAutoAnimate()
  const [dataRows, setDataRows] = useState(() => {
    const arr = [
      createData('Male', 712, 23, 2344, 16568),
      createData('Female', 237, 3961, 234234, 263293),
      createData('Unknown', 262, 9462, 123, 234234),
      createData('Total', 305, 2342, 23423, 2344),
    ];
    return arr;
  });
  const [tableChartState, setTableChartState] = useState(true);
  const [sortOrder, setSortOrder] = useState('original');
  const [sortBy, setSortBy] = useState('');
  const originalRows = [...dataRows];

  const toggleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'original' ? 'desc' : sortOrder === 'desc' ? 'asc' : 'original');
    } else {
      setSortBy(column)
      setSortOrder("original")
    }
  };

  const sortedRows = () => {
    if (sortOrder == 'original') {
      return originalRows;
    } else {
      const sortedArr = [...dataRows].slice().sort((a, b) => {
        const sortOrderFactor = sortOrder === 'asc' ? 1 : -1;
        return sortOrderFactor * (a[sortBy] - b[sortBy]);
      });
      return sortedArr
    } 
  };

  return (
    <div className="flex relative w-full min-h-[485px] bg-white" >
    <TableContainer className="border  rounded-[4px]">
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={4} sx={{fontWeight:"600", fontSize:"1em"}}>
              Ad Insights
            </TableCell>
            <TableCell colSpan={1} align="right" sx={{padding:'0 1em 0 0' , margin: "0"}}>
              <DropdownButton style={{ position: 'absolute', right: '0'}} />
            </TableCell>
          </TableRow>
          {tableChartState && <TableRow>
                <TableCell>Groups</TableCell>
                <TableCell align="right">
                  <div className="flex flex-row justify-end items-center w-full">Clicks
                  <button 
                  onClick={() => toggleSort('clicks')}
                  className="flex flex-col -my-1 ml-2"><SortButtons state={sortOrder} columnState={sortBy} columnId="clicks"/></button></div>
                  </TableCell>
                <TableCell align="right"><div className="flex flex-row items-center justify-end">Cost<button 
                onClick={() => toggleSort('cost')}
                className="flex flex-col -my-1 ml-2"><SortButtons state={sortOrder} columnState={sortBy} columnId="cost" /></button></div></TableCell>
                <TableCell align="right"><div className="flex flex-row items-center justify-end ">Conversions<button 
                onClick={() => toggleSort('conversions')}
                className="flex flex-col -my-1 ml-2"><SortButtons state={sortOrder} columnState={sortBy} columnId="conversions" /></button></div></TableCell>
                <TableCell align="right"><div className="flex flex-row items-center justify-end ">Revenue<button 
                className="flex flex-col -my-1 ml-2"
                onClick={() => toggleSort('revenue')}
                ><SortButtons state={sortOrder} columnState={sortBy} columnId="revenue" /></button></div></TableCell>
              </TableRow>}
        </TableHead>
          {tableChartState ? <>
            <TableBody style={{minWidth:"100%"}} ref={parent}>
            {sortedRows().map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child': {backgroundColor:"#00000005 !important"} }}
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
          </> :

      
        <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 items-center sm:pl-6 lg:pl-10">

          <div className="flex scale-90 md:scale-100 lg:scale-110 w-full sm:pl-10 pt-8 lg:pl-16">
          <DoughnutChart/>
          </div>

          <div className="flex flex-col justify-center items-start gap-4 md:gap-6">

            <div className="flex flex-row gap-4 items-center text-sm md:text-md"><div className="w-8 h-2 md:w-12 md:h-3 lg:w-16 lg:h-4 bg-slate-800 rounded-[5px]"></div><span style={{whiteSpace:"nowrap"}}>40% Male</span></div>

            <div className="flex flex-row gap-4 items-center text-sm md:text-md"><div className="w-8 h-2 md:w-12 md:h-3 lg:w-16 lg:h-4 bg-blue-500 rounded-[5px]"></div><span style={{whiteSpace:"nowrap"}}>40% Female</span></div>

            <div className="flex flex-row gap-4 items-center text-sm md:text-md"><div className="w-8 h-2 md:w-12 md:h-3 lg:w-16 lg:h-4 bg-orange-500 rounded-[5px]"></div><span style={{whiteSpace:"nowrap"}}>20% Unknown</span></div>

          </div>

        </div>
          }

        
        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}><button onClick={()=> setTableChartState(!tableChartState)}
        className="flex flex-row bg-gray-200 items-center rounded-full "
        >
          <span className={`${!tableChartState && "bg-blue-500 text-gray-100"} text-slate-700 p-[4px] rounded-full text-xl`}><BiSolidDoughnutChart/></span><span className={`${tableChartState && "bg-blue-500 text-gray-100"} text-slate-700 p-[4px] rounded-full text-xl`}><RiTableLine/></span>
          </button></div>
      </Table>
    </TableContainer>
    </div>
  
    );
}

export default AdsChart;