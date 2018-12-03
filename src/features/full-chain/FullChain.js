import React from 'react';
import Panel from '../../components/Panel';
import BlockDetails from './BlockDetails';

function FullChain({ chainData }) {
    return (
        <div>
            {
                chainData.chain.map(block => {
                    if (block.index === 1) {
                        return (
                            <Panel title="Genesis Block" color={'white'}>
                                <BlockDetails
                                    block={block}
                                />
                            </Panel>
                        );
                    } else {
                        return (
                            <Panel title={`Block ${block.index}`} color={'white'}>
                                <BlockDetails
                                    block={block}
                                />
                            </Panel>
                        );
                    }
                })
            }
        </div>
    );
}

export default FullChain;