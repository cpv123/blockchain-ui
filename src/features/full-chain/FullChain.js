import React from 'react';

function FullChain({ chainData }) {
    return (
        <div>
            {
                chainData.chain.map(block => {
                    if (block.index === 1) {
                        return (
                            <p>genesis block</p>
                        );
                    } else {
                        return (
                            <p>normal block</p>
                        );
                    }
                })
            }
        </div>
    );
}

export default FullChain;