import React, { Component } from 'react';
import Part6 from './ChildPart5/part6';
import Part7 from './ChildPart5/part7';

class Part5 extends Component {
    render() {
        return (
            <div id="Part5" style={{ backgroundColor: "#4cff4c" }}>
                <h1 className='error-title'># Part5</h1>
                <div id="part2" style={{ padding: 20 }}>
                    <hr />
                    <Part6 />
                    <hr />
                    <Part7 />
                    <hr />
                </div>
            </div>
        );
    }
};

export default Part5;