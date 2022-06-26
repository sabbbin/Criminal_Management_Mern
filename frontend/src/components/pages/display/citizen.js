import * as React from 'react';
import {Paper,Table,TableBody,TableCell,TableHead,TableContainer,TablePagination,TableRow, Button, makeStyles, Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../action/post';
import FileBase from 'react-file-base64';
import Mcontrols from '../../controls/Mcontrols'

import Dialogd from './dialog'
import PageHeader from '../../pageHeader';


const columns = [
  { id: 'selectedFile', label: 'Image', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 120 },
  
  {
    id: 'provinaced',
    label: 'Province',
    minWidth: 100,
    align: 'right',
   
  },
  {
    id: 'phoneNo',
    label: 'ContactNo',
    minWidth: 100,
    align: 'right',
   
  },

  {
    id: 'Qualification',
    label: 'Qualification',
    minWidth: 100,
    align: 'right',
   
  },
 
  
  {
    id: 'Taddress',
    label: 'Temp-address',
    minWidth: 100,
    align: 'right',
   
  },

 
 

];
const useStyles= makeStyles((theme)=>({
  pageContent:{
      margin:theme.spacing(4),
      padding:theme.spacing(3),
      justifyContent:'center'
  
  }
}))


export default function Citizen() {
  const classes=useStyles();
    const [MPopup, setMPopup]=React.useState(false)
    const [record, setrecord]=React.useState({})
    const dispatch=useDispatch();
    React.useEffect(()=>{
            dispatch(getPosts())
    },[dispatch])
    
    const citizens=useSelector((state)=>state.post)
    console.log(citizens)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handlechange=(e)=>{
      setrecord(e)
      console.log(e)
      console.log('hi')
      setMPopup(!MPopup)
      
     
  }

  return (<>

<div style={{marginTop:'60px'}}>
          <PageHeader
          title='View Citizens Registration '
          subTitle='citizens info are views'
          /> 
          <Paper className={classes.pageContent}>
            <div style={{marginBottom:'18px' ,display:'flex',justifyContent:'space-between',alignContent:'center'}}>
            <div  style={{display:'flex', justifyContent:'space-between', width:'50%'}} >
              <Typography variant='subtitle1' >Search by image</Typography>
                  <FileBase
                   
                  type='file'
                  multiple={false}
                  
                   />
                  
              </div>
              {/* <Mcontrols.Mbutton onClick={()=>{window.location.pathname='/create'}} text='Register'/> */}
              <Mcontrols.Mbutton onClick={()=>{window.location.pathname='/create'}} text='add'/>
          </div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
                
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {citizens
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((citizen) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={citizen._id} onClick={()=>handlechange(citizen)}>
                    {columns.map((column) => {
                      const value = citizen[column.id];
                      return (<>
                        <TableCell key={column.id} align={column.align}>
                          {column.id=='selectedFile'
                            ?  <img src={value} alt='No image' width='50' height='50'  />
                            : value}
                            
                        </TableCell>
                      
                         
                         </>
                        );
                     
                    })}
                      
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={citizens.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        <Dialogd
    openPopup={MPopup}
    setopenPopup={handlechange}
    values={record}>
    </Dialogd>
    </Paper>
  
          </Paper>
          
        </div>




    </>
  );
}
