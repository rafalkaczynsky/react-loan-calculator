import React, { Component } from 'react';
import '../css/App.css';
import { Grid, Row, Col, Form} from 'react-bootstrap';
import SliderAmount from './SliderAmount';
import SliderDuration from './SliderDuration';
import RightSide from './RightSide';

class LoanCalculator extends Component {

    /**
     * ================================
     * ==========CONSTRUCTOR ==========
     * ===============================
     * @param props
     */

    constructor(props) {
        super(props);

        // SET STARTER CALCULATUION

        let MPR = this.props.APR1 / 100 / 12;
        let amount = this.props.valueA;
        let duration = this.props.valueD;
        let totalAmountToRepay = amount+((amount*MPR)*duration) ;
        let monthly = totalAmountToRepay / duration;


        /**
         *
         console.log('Before Fixing');
         console.log('total amount to repay: ' + totalAmountToRepay + '=' + amount + '+((' + amount + '*' + MPR +')' + '*' + duration + ')');
         console.log('monthly inst: '+ monthly + '=' + totalAmountToRepay+'/'+duration);
         console.log('after fixing');
         console.log('total amount: ' +  Math.round(totalAmountToRepay).toFixed(2));
         console.log('monthly inst: '+ Math.round(monthly).toFixed(2));
         */



        // save props values in to the state
        this.state = {

            valueAmount: this.props.valueA,
            stepAmount: this.props.stepA,
            maxAmount: this.props.maxA,
            minAmount: this.props.minA,

            valueDuration: this.props.valueD,
            stepDuration: this.props.stepD,
            maxDuration: this.props.maxD,
            minDuration: this.props.minD,

            APR: this.props.APR1,
            amountToRepay:  Math.round(totalAmountToRepay).toFixed(),
            monthlyInst: Math.round(monthly).toFixed(),

        };
    }
    /**
     * ===============================================
     * ======== UPDATE FUNCTION ==================
     * =============================================
     * @param e
     */


    update( e ){
        // Assign to let changedID ID of slider which has been changed
        let changedID = e.target.id;
        let value = e.target.value;
        if (changedID === 'sliderAmount') {
            this.setState({valueAmount: e.target.value});
            console.log('EVENT TIME: ' + this.getNewDate());
            console.log('NEW ACTION DETECTED: ID - '+e.target.id + ': has been changed. New value: '+this.props.currancy + e.target.value);
        }
        if (changedID === 'sliderDuration'){
            this.setState({valueDuration: e.target.value});
            console.log('EVENT TIME: ' + this.getNewDate());
            console.log('NEW ACTION DETECTED: ID - '+e.target.id + ': has been changed. New value: '+ e.target.value+' months');
        }


         // if button credit history clicked set APR to choosen value
        switch (changedID) {

            case "Excellent":
                this.setState({APR: this.props.APR1});
                console.log('EVENT TIME: ' + this.getNewDate());
                console.log('NEW ACTION DETECTED: ID - '+e.target.id + ': has been clicked. New APR value is: '+ this.props.APR1+'%');
                break;

            case "Good":
                this.setState({APR: this.props.APR2});
                console.log('EVENT TIME: ' + this.getNewDate());
                console.log('NEW ACTION DETECTED: ID - '+e.target.id + ': has been clicked. New APR value is: '+ this.props.APR2+'%');
                break;

            case "Fair":
                this.setState({APR: this.props.APR3});
                console.log('EVENT TIME: ' + this.getNewDate());
                console.log('NEW ACTION DETECTED: ID - '+e.target.id + ': has been clicked. New APR value is: '+ this.props.APR3+'%');
                break;

            default:
                break;
        }

        this.calculate(changedID, value);
    }

    getNewDate() {

        let newDate = new Date();
        let h,m,s;
        h = newDate.getHours();
        m = "0"+newDate.getMinutes();
        s = "0"+newDate.getSeconds();
        m = m.slice(-2);
        s = s.slice(-2);

        let event_date = h +":"+m+":"+s;
        return event_date;
    };

    /**
     * ===============================================
     * ======== CALCULATE FUNCTION ==================
     * =============================================
     * @param id
     * @param value
     */

    calculate(id, value){

        let amount, duration;
        let MPR = this.state.APR / 100 / 12;  // MPR monthly APR for calculation
        let aprNew;
        // if calculate is after Duration is changed take value of duration from slider, but value of amount from state
        if (id === 'sliderDuration') {
            duration = parseFloat(value);
            amount = parseFloat(this.state.valueAmount);
        }
        // if calculate is after Amount is changed take value of Amount from slider, but value of duration from state
        else if (id === 'sliderAmount'){
            amount = parseFloat(value);
            duration = parseFloat(this.state.valueDuration);
        }
        // if calculate is after button credit history clicked  take values from state
        else {
            amount = parseFloat(this.state.valueAmount);
            duration = parseFloat(this.state.valueDuration);
            switch (id) {

                case "Excellent":
                    aprNew =  this.props.APR1;
                    MPR = aprNew / 100 / 12;  // MPR monthly APR for calculation
                    break;

                case "Good":
                    aprNew =  this.props.APR2;
                    MPR = aprNew / 100 / 12;  // MPR monthly APR for calculation
                    break;

                case "Fair":
                    aprNew =  this.props.APR3;
                    MPR = aprNew / 100 / 12;  // MPR monthly APR for calculation
                    break;

                default:
                    break;
            }

        }
        // calculate total and monthly inst
        let totalAmountToRepay = amount+((amount*MPR)*duration) ;
        let monthly = totalAmountToRepay / duration;

        // fixing numbers
        totalAmountToRepay =  Math.round(totalAmountToRepay).toFixed();
        monthly = Math.round(monthly).toFixed();

        //save results into state
        this.setState({amountToRepay: totalAmountToRepay});
        this.setState({monthlyInst: monthly});


    }


    /**
     * =================================================
     * =========== RENDER ============================
     * =============================================
     * @returns {XML}
     */
    render()
    {
        return(
            <Grid className="show-grid mainContainer">
                <Row>
                    <Col className="leftSide" xs={12} md={6}>
                        <Form horizontal>
                            <SliderAmount
                                value={this.state.valueAmount}
                                min={this.state.minAmount}
                                max={this.state.maxAmount}
                                onChange={this.update.bind(this)}
                                step={this.state.stepAmount}
                                currancy={this.props.currancy}
                            />
                            <SliderDuration
                                value={this.state.valueDuration}
                                min={this.state.minDuration}
                                max={this.state.maxDuration}
                                onChange={this.update.bind(this)}
                                step={this.state.stepDuration}
                            />
                        </Form>
                        <Col className="logo" sm={12}>
                            YourLogo
                        </Col>
                    </Col>

                    <RightSide
                        currancy={this.props.currancy}
                        amount={this.state.amountToRepay}
                        monthly={this.state.monthlyInst}
                        APR={this.state.APR}
                        btnOnClick={this.update.bind(this)}
                    />
               </Row>
            </Grid>
        );
    }
}
//  Assign Types for props
LoanCalculator.propTypes = {

    valueD: React.PropTypes.number,
    stepD: React.PropTypes.number,
    maxD: React.PropTypes.number,
    minD: React.PropTypes.number,

    valueA: React.PropTypes.number,
    stepA: React.PropTypes.number,
    maxA: React.PropTypes.number,
    minA: React.PropTypes.number,
    APR1: React.PropTypes.number,
    APR2: React.PropTypes.number,
    APR3: React.PropTypes.number,
    currancy: React.PropTypes.string,
};

// Assign deafault values to props

LoanCalculator.defaultProps = {
    valueD: 24,
    stepD: 12,
    maxD: 72,
    minD: 12,

    valueA : 2000,
    stepA : 500,
    maxA : 10000,
    minA : 1000,

    APR1: 3.3,
    APR2: 9.6,
    APR3: 17.4,

    currancy: '£',
};

export default LoanCalculator;

