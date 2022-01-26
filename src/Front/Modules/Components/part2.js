import React, { Component } from 'react';
import Part3 from './ChildPart2/part3';
import Part4 from './ChildPart2/part4';
import Part5 from './ChildPart2/part5';

class part2 extends Component {
    render() {
        return (
            <div id="part2" style={{ backgroundColor: "green", padding: 20 }}>
                <h2>Insider fo the Child 2</h2>
                <div id="part2" style={{ padding: 20 }}>
                    <Part3 />
                    <Part4 />
                    <Part5 />
                </div>
            </div >
        );
    }
};

export default part2;