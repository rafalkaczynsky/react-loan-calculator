import React from 'react';
import ReactDOM from 'react-dom';
import LoanCalculator from './components/App';
import './css/index.css';


ReactDOM.render(
  <LoanCalculator />,
  document.getElementById('root')
);

/*
YOU CAN USE FOLLOWING PROPERTIES (props)

 valueD={24}  - duration of loan in months , default - 24
 stepD={12}  - step of duration of loan slider in months, default - 12
 maxD: 72    - max value of duration of loan slider in moths , default - 72
 minD: 12    - min value of duration of loan slider in moths , default - 12

 valueA={2000}  - amount of loan in currancy choosen , default - £2000
 stepA={500} - step of amount of loan slider in currancy choosen , default - £500
 maxA={10000}   - max value  of amount of loan slider in currancy choosen , default - £10000
 minA={1000}   - min value of duration of loan slider in moths , default - 12

APR DEPENDS on CREDIT HIOSTORY, YOU CAN SET TO YOUR OWN RATE

 APR1={3.3}  in %  , EXCELLENT
 APR2={9.6}  in %  , GOOD
 APR3={17.4} in %  , FAIR

 currancy={£},   - currancy , default £

 */
