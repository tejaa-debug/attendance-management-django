import React, { useState } from 'react';

const ShiftManagement = () => {
    const [shifts, setShifts] = useState([]);
    const [currentShift, setCurrentShift] = useState({ id: null, employeeName: '', startTime: '', endTime: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentShift({ ...currentShift, [name]: value });
    };

    const addShift = () => {
        if (currentShift.employeeName && currentShift.startTime && currentShift.endTime) {
            setShifts([...shifts, { ...currentShift, id: shifts.length + 1 }]);
            setCurrentShift({ id: null, employeeName: '', startTime: '', endTime: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    const editShift = (id) => {
        const shiftToEdit = shifts.find(shift => shift.id === id);
        setCurrentShift(shiftToEdit);
        setShifts(shifts.filter(shift => shift.id !== id));
    };

    const deleteShift = (id) => {
        setShifts(shifts.filter(shift => shift.id !== id));
    };

    return (
        <div>
            <h1>Shift Management</h1>
            <input type="text" name="employeeName" placeholder="Employee Name" value={currentShift.employeeName} onChange={handleChange} />
            <input type="datetime-local" name="startTime" value={currentShift.startTime} onChange={handleChange} />
            <input type="datetime-local" name="endTime" value={currentShift.endTime} onChange={handleChange} />
            <button onClick={addShift}>{currentShift.id ? 'Update Shift' : 'Add Shift'}</button>
            <ul>
                {shifts.map(shift => (
                    <li key={shift.id}>
                        {shift.employeeName} - {shift.startTime} to {shift.endTime} 
                        <button onClick={() => editShift(shift.id)}>Edit</button>
                        <button onClick={() => deleteShift(shift.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShiftManagement;