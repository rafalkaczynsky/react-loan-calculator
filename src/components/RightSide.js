/**
 * Created by rafal on 28/02/2017.
 */
import React, { Component } from 'react';
import {Button, ButtonGroup, Col} from 'react-bootstrap';


class RightSide extends Component {
    render() {
        return (
            <Col className="rightSide" xs={12} md={6}>
                <h4>Total amount to repay</h4>
                <span  className="totalAmountDisplay">{this.props.currancy}{this.props.amount}</span>

                <h4>Monthly instaltment</h4>
                <span className="monthlyInstDisplay">{this.props.currancy}{this.props.monthly}</span>

                <h4>APR</h4>
                <span className="aprDisplay">{this.props.APR}%</span>

                <h4>Your Credit History</h4>

                <ButtonGroup justified>
                    <Button   bsStyle="primary" id="Excellent" onClick={this.props.btnOnClick} >Excellent</Button>
                    <Button   bsStyle="primary" id="Good" onClick={this.props.btnOnClick} >Good</Button>
                    <Button   bsStyle="primary" id="Fair" onClick={this.props.btnOnClick}>Fair</Button>
                </ButtonGroup>

            </Col>

        )
    }
}

export default RightSide;