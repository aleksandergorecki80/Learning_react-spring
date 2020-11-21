import React from 'react';
import {Spring} from 'react-spring/renderprops';

export default function Component2() {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1, }}
            config={{ delay: 1000, duration: 1000 }}
        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Component 2</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
                    </div>
                </div>
            )}
        </Spring>

    )
}

const c1Style = {
    background: '#E5989B',
    color: 'white',
    padding: '1.5rem'
}