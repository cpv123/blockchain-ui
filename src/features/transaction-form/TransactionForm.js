import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Button, Snackbar } from '@material-ui/core';
import postTransaction from '../../actions/post-transaction-actions';

const styles = {
    floatingLabelStyle: { color: 'rgb(70,69,69)' },
    underlineFocusStyle: { borderColor: 'rgb(70,69,69)' },
};

class TransactionForm extends Component {

    render() {

        const { handleSubmit, submitting, reset } = this.props;

        return (
            <div style={{ display: 'flex' }}>
                <form
                    onSubmit={handleSubmit}  
                    style={{ paddingLeft: 100, paddingRight: 100 }} 
                >
                    <Field 
                        name="sender" 
                        floatingLabelText="Sender"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        component={TextField}
                        validate={required} 
                    />

                    <Field 
                        name="recipient"
                        floatingLabelText="Recipient"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineFocusStyle={styles.underlineFocusStyle} 
                        component={TextField}
                        validate={required} 
                    />

                    <Field 
                        name="amount"
                        floatingLabelText="Amount"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        component={TextField}
                        validate={[required, validateAmount]} 
                    />

                    <Button 
                        type="submit"
                        disabled={submitting}
                        color="primary"
                        variant="contained"
                        style={{ margin: 30 }} 
                        onClick={handleSubmit}
                    >
                        SUBMIT
                    </Button>

                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'light-grey' }}
                        onClick={reset} 
                    >
                        CLEAR
                    </Button>
                </form>

                <Snackbar
                    open={this.props.isSnackOpen}
                    message={this.props.snackMessage} 
                />
            </div>
        );
    }
}

const required = (value) => {
    return value === undefined ? "Required" : undefined;
};

const validateAmount = (value) => {
    if (!/^[0-9]+$/.test(value)) {
        return "Number required";
    }
};

const clearForm = (result, dispatch) => {
    dispatch(reset('transactionForm'));  
};

const onSubmit = (values, dispatch) => {
    dispatch(postTransaction(values));
};

const mapStateToProps = state => ({
    isLoading: state.main.transactions.isLoading,
    isSnackOpen: state.main.transactions.isSnackOpen,
    snackMessage: state.main.transactions.snackMessage,
});
  
export default reduxForm({
    form: 'transactionForm',
    onSubmitSuccess: clearForm,
    onSubmit,
})(
    connect(mapStateToProps)(TransactionForm)
);

                    