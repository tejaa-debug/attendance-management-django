import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Employee Information</h1>
            <div className="employee-info">
                {/* Placeholder for employee details */}
                <p>Name: John Doe</p>
                <p>Position: Software Engineer</p>
                <p>Department: IT</p>
                <p>Email: johndoe@example.com</p>
            </div>
            <h2>Attendance Overview</h2>
            <div className="attendance-overview">
                {/* Placeholder for attendance data */}
                <p>Total Days: 30</p>
                <p>Present Days: 28</p>
                <p>Absent Days: 2</p>
            </div>
        </div>
    );
};

export default Dashboard;
