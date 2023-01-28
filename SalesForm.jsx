import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import { useState } from 'react';
import "./sale.css"
import axios from 'axios';
import { NavLink } from 'react-router-dom';


 function SalesForm() {

const [Details, setDetails] = useState([{
date: "",
bill: "",
type: "",
customer: "",
table: "",
sstatus: "",
subtotal: "",
discount: ""
}]);
 

function Submit(){
  axios.post("https://63bdbb18e6eb99044087c271.mockapi.io/customer",{
    date: Details.date,
    bill: Details.bill,
    type: Details.type,
    customer: Details.customer,
    table: Details.table,
    sstatus: Details.sstatus,
    subtotal: Details.subtotal,
    discount: Details.discount 
  }).then((res) => {
    console.log(res)
  }).catch((error)=>{
    console.log(error);
  })
  setDetails({
date: "",
bill: "",
type: "",
customer: "",
table: "",
sstatus: "",
subtotal: "",
discount: ""
})
}


function HandleChange(event){
  const {name, value} = event.target;
  event.preventDefault();
  console.log(event.target.value);
  setDetails(prevValue => {
    return {
      ...prevValue,
      [name] : value
    }
  })
}



  return (
    
    <Box className='input'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      autoComplete="off"
    >
    <h1>Add Bill Section</h1>
    <form>
    <div>
    </div>
   
      <div>
      
        <TextField
          label="Date"
          id="outlined-size-small"
          size="small"
          name='date'
          onChange={HandleChange}
        />
      </div>
      <div>
        <TextField
          label="Bill No"
          id="outlined-size-small"
          
          size="small"
          name='bill'
          onChange={HandleChange}

        />
      </div>
      <div>
        <TextField
          label="Type"
          id="outlined-size-small"
          size="small"
          name='type'
          onChange={HandleChange}
        />
      </div>
      <div>
        <TextField
          label="Customer Name"
          id="outlined-size-small"
          size="small"
          name='customer'
          onChange={HandleChange}
        />
      </div>
      <div>
        <TextField
          label="Table No"
          id="outlined-size-small"
          size="small"
          name='table'
          onChange={HandleChange}
        />
      </div>
      <div>
        <TextField
          label="Subtotal"
          id="outlined-size-small"
          size="small"
          name='subtotal'
          onChange={HandleChange}
        />
      </div>
      <div>
        <TextField
          label="Status"
          id="outlined-size-small"
          size="small"
          name='sstatus'
          onChange={HandleChange}
        />
      </div>
      <div>
        <TextField
          label="Discount"
          id="outlined-size-small"
          size="small"
          name='discount'
          onChange={HandleChange}
        />
      </div>

<div>
  <Button variant='contained' color='success' onClick={Submit}>
  <NavLink to="/sales">Add Bill</NavLink>
    
  </Button>
  <Button variant='contained' color='info'>
    Next
  </Button>
</div>

      </form>

      
      
   </Box>


  

  )}
    


export default SalesForm;