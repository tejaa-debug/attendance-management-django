import React, { useState } from 'react';

const Attendance = () => {
    const [attendanceStatus, setAttendanceStatus] = useState("Clocked Out");

    const handleClockIn = () => {
        setAttendanceStatus("Clocked In");
        // Add clock in logic here, like sending a POST request to the server
    };

    const handleClockOut = () => {
        setAttendanceStatus("Clocked Out");
        // Add clock out logic here, like sending a POST request to the server
    };

    return (
        <div>
            <h1>Attendance Tracker</h1>
            <p>Status: {attendanceStatus}</p>
            <button onClick={handleClockIn}>Clock In</button>
            <button onClick={handleClockOut}>Clock Out</button>
        </div>
    );
};

export default Attendance;