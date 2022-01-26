import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard" style={{backgroundColor: "red",padding:'20px'}}>
                <div className="container text-center pt-32">
                    <h1 className='error-title'>Dashboard</h1>
                </div>
            </div>
        );
    }
};

export default Dashboard;

