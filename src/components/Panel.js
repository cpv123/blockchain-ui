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
    root: {
        width: '40%',
        margin: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function Panel({ classes, title, children }) {
    return (
        <ExpansionPanel className={classes.root}>
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
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};

export default withStyles(styles)(Panel);