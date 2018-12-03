import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Panel from '../../components/Panel';
import ChainSummary from './ChainSummary';

function ChainSummaryPanel({ isLoading }) {
    return (
        <Panel title="VIEW CHAIN SUMMARY">
            { isLoading ? <CircularProgress /> : (
                <ChainSummary /> 
            )}
        </Panel>
    );
}

export default ChainSummaryPanel;