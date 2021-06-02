import React, {useState, useEffect} from 'react';

const API = process.env.REACT_APP_API

export const Users = () => {

    useEffect(() => { //constructor hooks
        getUsers()
    },[])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState('')

    const [users, setUsers] = useState([])

    const [editing, setEditing] = useState(false)

    const getUsers = async () => {
        const response = await fetch(`${API}/users`)
        const data = await response.json()
        setUsers(data)
    }

    const handleSubmit = async (e) => {
        const link = !editing ? `${API}/users` : `${API}/user/${id}`

        e.preventDefault() //crea un ajax y no recarga la pagina

        const response = await fetch(link,{
            method: !editing ? 'POST' : 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'password': password
            })
        })

        if(editing){
            setEditing(false)
            setId('')
        }

        const data = await response.json()
        console.log(data)

        await getUsers()

        setPassword('')
        setName('')
        setEmail('')

    }

    const deleteUser = async (userId) => {
        const userResponse = window.confirm('Are tou sure you want to delet it?')

        if(userResponse){
            const response = await fetch(
                `${API}/user/${userId}`,
                {method: 'DELETE'}
            )
            const data = await response.json();
            console.log(data);

            await getUsers()
        }

    }
    
    const editUser = async (userId) => {
        const response = await fetch(`${API}/user/${userId}`)
        const data = await response.json()

        setEditing(true)

        setName(data.name)
        setEmail(data.email)
        setPassword(data.password)
        setId(userId)
    }

    return(
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={handleSubmit} className="card card-body">
                    <div className="form-group">
                        <input type="text" 
                            onChange={e => setName(e.target.value)} 
                            value={name} 
                            className="form-control" 
                            placeholder="Name" 
                            autoFocus/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            onChange={e => setEmail(e.target.value)} 
                            value={email} 
                            className="form-control" 
                            placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            onChange={e => setPassword(e.target.value)} 
                            value={password} 
                            className="form-control" 
                            placeholder="Password"/>
                    </div>
                    <button className="btn btn-primary btn-block">
                        {editing ? 'Edit' : 'Create'}
                    </button>
                </form>
            </div>
            <div className="col-md-8">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Password
                            </th>
                            <th>
                                Operations
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>
                                   {user.name} 
                                </td>
                                <td>
                                   {user.email}
                                </td>
                                <td>
                                   {user.password}
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-secondary btn-sm btn-block"
                                        onClick={e => editUser(user._id)}>
                                        Edit
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm btn-block"
                                        onClick={e => deleteUser(user._id)} >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}