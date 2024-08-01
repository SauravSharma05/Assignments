import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser, deleteUser } from './redux/userSlice';

const UserManagement = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateUser({ id: editId, name, age }));
      setEditId(null);
    } else {
      dispatch(addUser({ id: Date.now(), name, age }));
    }
    setName('');
    setAge('');
  };

  const handleEdit = (user) => {
    setName(user.name);
    setAge(user.age);
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;