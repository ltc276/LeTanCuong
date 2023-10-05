import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import { useState , useEffect , useParams } from "react";
const Dashboard = () => {
    return (
        <div className="container">
            <div style={dashboardStyle}>
                <div style={sidebarStyle}>
                    <h1>Dashboard</h1>
                    <ul style={menuStyle}>
                        <li>Home</li>
                        <li>Analytics</li>
                        <li>Reports</li>
                    </ul>
                </div>
                <div style={contentStyle}>
                    <header style={headerStyle}>
                        <h2>Welcome to the Dashboard!</h2>
                        <button style={logoutButtonStyle}>Logout</button>
                    </header>
                    <div style={mainContentStyle}>
                        <div style={cardStyle}>
                            <h3>Total Users</h3>
                            <span style={countStyle}>500</span>
                        </div>
                        <div style={cardStyle}>
                            <h3>Revenue</h3>
                            <span style={countStyle}>$10,000</span>
                        </div>
                        <div style={cardStyle}>
                            <h3>Orders</h3>
                            <span style={countStyle}>100</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
const dashboardStyle = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#FF0000'

};

const sidebarStyle = {
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
};

const menuStyle = {
    listStyleType: 'none',
    padding: '0',
};

const contentStyle = {
    flexGrow: '1',
    padding: '20px',
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
};

const logoutButtonStyle = {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
};

const mainContentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
};

const cardStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '5px',
};

const countStyle = {
    fontSize: '24px',
};