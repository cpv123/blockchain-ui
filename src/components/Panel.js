import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { 
    Typography,
    ExpansionPanel, 
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme) => ({
    rootGrey: {
        margin: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightGrey'
    },
    rootWhite: {
        ...styles.rootGrey,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 'bold',
    },
});

function Panel({ classes, title, children, color }) {
    return (
        <ExpansionPanel className={color === 'grey' ? classes.rootGrey : classes.rootWhite}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    children: PropTypes.any,
    color: PropTypes.string,
};

Panel.defaultProps = {
    color: 'grey',
}

export default withStyles(styles)(Panel);