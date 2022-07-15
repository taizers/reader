import React, { FC, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type UsersTypes = {
    getAllUsers : () => Promise<any>;
    isLoading: boolean;
    users: Array<{id: string; name: string; email: string; password: string;}>;
}

export const Users: FC<UsersTypes> = ({
    getAllUsers,
    users,
    isLoading,
}) => {

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell> 
                <TableCell align="center">Имя</TableCell> 
                <TableCell align="center">Почта</TableCell>
                <TableCell align="center">Пароль</TableCell>    
                <TableCell align="center"></TableCell>    
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{user.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.password}</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}