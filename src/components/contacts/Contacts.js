import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import  {deleteUser, useFetch}  from "../../utils/functions";

const Contacts = ({editUser}) => {
  const {isLoading,contactList} = useFetch()
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

           {isLoading?(<TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="center">
                    Loading
                  </TableCell>
                </TableRow>): contactList?.lenght===0 ? (
                  <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="center">
                    No Result Found
                  </TableCell>
                </TableRow>
                ):(
                  contactList?.map((item,index)=>(
                      <TableRow key={index}>
                      <TableCell align="center" >{item.username}</TableCell>
                      <TableCell align="center" >{item.phoneNumber}</TableCell>
                      <TableCell align="center" >{item.gender}</TableCell>
                      <TableCell align="center" onClick={()=>deleteUser(item.id)} ><DeleteIcon/></TableCell>
                      <TableCell align="center" onClick={()=>editUser(
                        item.id,item.username,item.phoneNumber,item.gender)} ><EditIcon/></TableCell>
                    </TableRow>
                        
                  ))
                )}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
