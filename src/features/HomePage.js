import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import getChain from '../actions/chain-data-actions';
import ChainSummaryPanel from './chain-summary/ChainSummaryPanel';
import TransactionPanel from './transaction-form/TransactionPanel';
import MineBlockPanel from './mine-block/MineBlockPanel';
import FullChainPanel from './full-chain/FullChainPanel';
import { isEmpty } from 'lodash';
import { Snackbar } from '@material-ui/core';

const styles = {
    root: {
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '33%',
        marginTop: 50,
    },
};

class HomePage extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        chainData: PropTypes.object,
        isChainLoading: PropTypes.bool.isRequired,
        getChain: PropTypes.func.isRequired,
        isSnackOpen: PropTypes.bool,
        snackMessage: PropTypes.bool,
    };

    componentDidMount() {
        this.props.getChain();
    }

    render() {

        const { classes, chainData, isSnackOpen, snackMessage } = this.props;

        return (
            <div className={classes.root}>

                <div className={classes.container}>
                    <TransactionPanel />
                </div>

                <div className={classes.container}>
                    <ChainSummaryPanel isLoading={isEmpty(chainData)} />
                    <MineBlockPanel />
                </div>

                <div className={classes.container}>
                    <FullChainPanel 
                        isLoading={isEmpty(chainData)}
                        chainData={chainData} 
                    />
                </div>

                <Snackbar 
                    open={isSnackOpen}
                    message={snackMessage} 
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    chainData: state.main.chain.chainData,
    isChainLoading: state.main.chain.isLoading,
    isSnackOpen: state.main.chain.isSnackOpen,
    snackMessage: state.main.chain.snackMessage,
});

const mapDispatchToProps = dispatch => ({
    getChain: () => dispatch(getChain()),
});

export default 
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePage));