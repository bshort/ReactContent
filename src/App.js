import React, {useState, useEffect} from 'react';
//import userApi from './userApi.js';
import { getUsers, deleteUser } from "./api/userApi";
import './index.css';


function App(){

    const [users, setUsers] = useState([
        { id:1, name: "brian", email: "b@s.com"},
        { id:2, name: "joanna", email: "c@s.com"},
        { id:3, name: "lee", email: "d@s.com"},
    ]);

    useEffect(() => {
        getUsers().then(users => setUsers(users));
    }, []); 


    const h1Style = { 
        color: "red",
        marginBottom: 20,
    }
    h1Style.color =  "#099909";

    function handleDelete(id){
        /*
        //remove deleted item...
        const newUsers = users.filter(user => user.id !== id)

        setUsers(newUsers);
        debugger;
        */
      
       deleteUser(id).then(() => {
            const newUsers = users.filter(user => user.id !== id);

            setUsers(newUsers);
        });

    }

    return (
        <>
            <h1 className="header" style={h1Style}>tester</h1> 
             <br />
             
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                {users.map(user=> (
                    <tr>
                        <td>                        
                            {user.id}
                        </td>
                        <td>                        
                            <label htmlFor="firstname">{user.name}</label> 
                        </td>
                        <td>                        
                            {user.email}
                        </td>
                        <td>
                             {/* this is a comment... */}
                            <button onClick={() => handleDelete(user.id)}>delete</button>
                            <input type="text" id="firstname" value={user.name}/>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    );
}

export default App;