import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Snackbar } from '@material-ui/core';
import Panel from '../../components/Panel';
import mineBlock from '../../actions/mine-block-actions';

class MineBlockPanel extends Component {

    handleClick = () => {
        this.props.mineBlock();
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

function mapStateToProps(state) {
    return {
        isSnackOpen: state.main.mineBlock.isSnackOpen,
        snackMessage: state.main.mineBlock.snackMessage,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        mineBlock: () => dispatch(mineBlock()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MineBlockPanel);
