import React, { useState } from 'react';
import axios from 'axios';

const LeaveRequest = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!leaveType || !startDate || !endDate) {
      setError('All fields are required.');
      return false;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setError('Start date must be before end date.');
      return false;
    }
    setError('');
    return true;
  };

  const submitRequest = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('/api/leaverequest/', { leaveType, startDate, endDate });
      alert('Leave request submitted successfully!');
    } catch (err) {
      setError('There was an error submitting your request.');
    }
  };

  return (
    <div>
      <h2>Leave Request</h2>
      <form onSubmit={submitRequest}>
        <div>
          <label>Leave Type:</label>
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="vacation">Vacation Leave</option>
            <option value="personal">Personal Leave</option>
          </select>
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveRequest;