import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });
    const [editing, setEditing] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get('/api/employees/');
        setEmployees(response.data);
    };

    const handleAddEmployee = async () => {
        await axios.post('/api/employees/', newEmployee);
        fetchEmployees();
        setNewEmployee({ name: '', position: '' });
    };

    const handleEditEmployee = async () => {
        await axios.put(`/api/employees/${currentEmployee.id}/`, currentEmployee);
        fetchEmployees();
        setEditing(false);
        setCurrentEmployee(null);
    };

    const handleDeleteEmployee = async (id) => {
        await axios.delete(`/api/employees/${id}/`);
        fetchEmployees();
    };

    return (
        <div>
            <h1>Employee Management</h1>
            <h2>Add Employee</h2>
            <input 
                type="text" 
                placeholder="Name" 
                value={newEmployee.name} 
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Position" 
                value={newEmployee.position} 
                onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })} 
            />
            <button onClick={handleAddEmployee}>Add Employee</button>

            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>
                                <button onClick={() => { setCurrentEmployee(employee); setEditing(true); }}>Edit</button>
                                <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editing && (
                <div>
                    <h2>Edit Employee</h2>
                    <input 
                        type="text" 
                        value={currentEmployee.name} 
                        onChange={(e) => setCurrentEmployee({ ...currentEmployee, name: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        value={currentEmployee.position} 
                        onChange={(e) => setCurrentEmployee({ ...currentEmployee, position: e.target.value })} 
                    />
                    <button onClick={handleEditEmployee}>Update Employee</button>
                </div>
            )}
        </div>
    );
}

export default EmployeeManagement;