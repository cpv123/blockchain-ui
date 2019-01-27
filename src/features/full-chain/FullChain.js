import React from 'react';
import Panel from '../../components/Panel';
import BlockDetails from './BlockDetails';

function FullChain({ chainData }) {
    return (
        <div>
            {
                chainData.chain.map(block => (
                    <Panel 
                        title={block.index !== 1 ? `Block ${block.index}` : "Genesis Block"} 
                        color={'white'}
                    >
                        <BlockDetails block={block} />
                    </Panel>
                ))
            }
        </div>
    );
}

export default FullChain;
