import React from 'react';
import { useState } from 'react';

const AttendanceReports = () => {
    const [totalDays, setTotalDays] = useState(30);
    const [presentDays, setPresentDays] = useState(20);
    const absentDays = totalDays - presentDays;
    const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

    const attendanceData = [
        { employee: 'John Doe', status: 'Present' },
        { employee: 'Jane Smith', status: 'Absent' },
        { employee: 'Emily Johnson', status: 'Present' },
    ];

    return (
        <div>
            <h1>Attendance Reports</h1>
            <div>
                <h2>Statistics Dashboard</h2>
                <p>Total Days: {totalDays}</p>
                <p>Present Days: {presentDays}</p>
                <p>Absent Days: {absentDays}</p>
                <p>Attendance Percentage: {attendancePercentage}%</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceData.map((record, index) => (
                        <tr key={index}>
                            <td>{record.employee}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceReports;