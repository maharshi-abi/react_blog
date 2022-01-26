import React, { Component } from 'react';
import Part1 from './part1';
import Part2 from './part2';

class Index extends Component {
    render() {
        return (
            <div id="Index" style={{backgroundColor: "#ff9eaf", padding:20}}>
                <div className="container text-center pt-32">
                    <h1 className='error-title'>Main Child section/Module</h1>                    
                    <hr/>
                    <Part1/>                    
                    <hr/>
                    <Part2/>
                </div>
            </div>
        );
    }
};

export default Index;