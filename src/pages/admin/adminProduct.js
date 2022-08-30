import React from 'react';

// import EditProductForm from './editProductForm';
import { Dialog, Slide } from '@mui/material';
import MaterialTable from 'material-table'

import { useDispatch } from 'react-redux';
import * as action from "../../component/ListProduct/module/Actions/actions";
import * as ActionType from "../../component/ListProduct/module//Content/contants";
import { useSelector } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import API from '../../axios/API';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [getID,setGetID]=React.useState();
  const [item,setItem]=React.useState()
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleClickOpen = (rowData) => {
    setItem(rowData)
    setOpen(true);
    
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const dispatch=useDispatch();
 
  var token = JSON.parse(localStorage.getItem('user')).token
  const userLocal=JSON.parse(localStorage.getItem("user"));
  const getIdUser=async()=>{
    try{
      const res =await API(`users/get_id`,"POST",{email:userLocal.user.email},token)
      setGetID(res.data);
    }catch(er){
      console.log({...er});
    }
 }
 const [product,setProduct]=React.useState();
React.useEffect(() => {
    const callAPI=async()=>{
        try{
            dispatch(action.createAction({type:ActionType.IS_LOADING_LIST_PRODUCT,payload:true}));
            const res=await API("product","GET");
            setProduct(res.data)
            dispatch(action.createAction({type:ActionType.FETCH_API_LISTPRODUCT,payload:res.data}));
            dispatch(action.createAction({type:ActionType.IS_LOADING_LIST_PRODUCT,payload:false}));
        }catch(er){
            console.log({...er});
        }
    }
    callAPI();
    getIdUser();
}, []);
const isloading=useSelector(state=>state.reducerURL.isloading)
const data=useSelector(state=>state.reducerURL.data);


const rows=data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item)=>{
    return(
        <TableRow>
            <TableCell>
                <img src={item.img} style={{width:"50px"}} />
            </TableCell>
            <TableCell>
                {item.name}
            </TableCell>
            <TableCell>
                {item.typeProduct}
            </TableCell>
            <TableCell>
                {item.gender}
            </TableCell>
            <TableCell>
                {item.price}
            </TableCell>
            <TableCell>
                <EditIcon onClick={handleClickOpen} style={{cursor:"pointer"}}/>
                <DeleteIcon style={{cursor:"pointer"}}/>
            </TableCell>
        </TableRow>
    )
})

  return (
    <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Image', field: 'img',render:rowData=><img src={rowData.img} style={{ width: 50 }}/> },
            { title: 'Name', field: 'name' },
            { title: 'Type', field: 'typeProduct' },
            { title: 'gender', field: 'gender' },
            { title: 'Price', field: 'price' },
          ]}
         
          data={product}
          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit',
              onClick: (event, rowData) => {
                handleClickOpen(rowData)
              }
            }
          ]}
          title="List Product"
        />
          <Dialog
        fullScreen
        open={open}
        // onClose={handleClose}
        TransitionComponent={Transition}
      >
       {/* <EditProduct item={item} handleClose={handleClose} product={product} getID={getID} token={token}/> */}
      </Dialog>
      </div>
  );
}
