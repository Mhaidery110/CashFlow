import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button, TextField} from '@mui/material';
import * as XLSX from "xlsx";


function Sales(){

  const [data, setdata] = useState([])
  const [colDefs, setColDefs] = useState([])

  //excel import codes

  const ImportExcel = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.onload = (event) => {
      
      // parse data here

      const bstr = event.target.result
      const workBook = XLSX.read(bstr, {type: "binary"})
      
      // getting first Sheet 

      const workSheetName = workBook.SheetNames[0]
      const workSheet = workBook.Sheets[workSheetName]
      
      // converting to array

      const fileData = XLSX.utils.sheet_to_json(workSheet, {header: 1})
      console.log(fileData)
    }

    reader.readAsArrayBuffer(file)
  }
  

//fetching data from API

  useEffect(()=>{
    fetch("https://63bdbb18e6eb99044087c271.mockapi.io/customer")
    .then(res=>res.json())
    .then(res=>{setdata(res)})},[])


    const columns = useMemo(
      () => [
        {
          accessorKey: "id",
          header: "ID",
        },
        {
          accessorKey: 'date', 
          header: 'Date',
          enableColumnOrdering: true,
        },
        {
          accessorKey: 'bill',
          header: 'Bill No',
        },
        {
          accessorKey: 'customer', 
          header: 'Customer Name',
        },
        {
          accessorKey: 'type',
          header: 'Type',
        },
        {
          accessorKey: 'subtotal',
          header: 'Subtotal',
        },
        {
          accessorKey: 'discount',
          header: 'Discount',
        },
        {
          accessorKey: 'sstatus',
          header: 'Status',
          enableGrouping: true
        }
      ],
      [],
    );
  

    return <div>
    <div>
    <br/>
    
    <h1>Bill Details</h1>
    <br/>
   
    </div>

    
    
     <MaterialReactTable
     title="Customer Bill Section"
      columns={columns}
      data={data} 
      enableGrouping
      
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 350, //set custom width
          muiTableHeadCellProps: {
            align: 'center', //change head cell props
          },
        },
        'mrt-row-numbers': {
          enableColumnOrdering: true, //turn on some features that are usually off
          enableResizing: true,
          muiTableHeadCellProps: {
            sx: {
              fontSize: '1.2rem',
            },
          },
        },
        'mrt-row-select': {
          enableColumnActions: true,
          enableHiding: true,
          size: 100,
        },
      }}
      enableColumnOrdering
      positionGlobalFilter="left"
      renderTopToolbarCustomActions={({ table }) => (
        <Box sx={{ display: 'flex', gap: '1rem', p: '8px' }}>
          <Button
            color="primary"
            variant="contained"
          >
            <NavLink to="/salesForm" activeClassName="selected">
         Add Bill
     </NavLink>
          </Button>
          <TextField
    type="file" 
    onChange={ImportExcel} />
          
          </Box>
      )}

        />



      

      </div>   
}



   export default Sales;

   
   
   
   
   
   
   
   
   
   
   





   

