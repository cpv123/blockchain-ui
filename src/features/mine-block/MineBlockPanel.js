import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Snackbar } from '@material-ui/core';
import Panel from '../../components/Panel';
import mineBlock from '../../actions/mine-block-actions';
import getChain from '../../actions/chain-data-actions';

class MineBlockPanel extends Component {

    handleClick = () => {
        this.props.mineBlock()
            .then(() => this.props.getChain());
    };

    render() {
        return (
            <React.Fragment>
                <Panel title="Mine a block">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleClick}
                        style={{ fontWeight: 'bold' }}
                    >
                        MINE BLOCK
                    </Button>
                </Panel>
                <Snackbar
                    open={this.props.isSnackOpen}
                    message={this.props.snackMessage}
                />
            </React.Fragment>
        );
    } 
}

const mapStateToProps = state => ({
    isSnackOpen: state.main.mineBlock.isSnackOpen,
    snackMessage: state.main.mineBlock.snackMessage,
});

const mapDispatchToProps = dispatch => ({
    mineBlock: () => dispatch(mineBlock()),
    getChain: () => dispatch(getChain()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MineBlockPanel);
