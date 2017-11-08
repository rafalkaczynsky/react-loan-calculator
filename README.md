
# react-loan-calculator
Loan calculator component  build with React

![alt text](https://raw.githubusercontent.com/rafalkaczynsky/react-loan-calculator/master/simple-loan-image.png)

(It's just an example what you can achieve with react-native)

This reusable react-native component could be used in any App where such an calculation is needed.

How to run it locally from command line

- Clone this repo git clone https://github.com/rafalkaczynsky/react-loan-caluclator.git
- cd ReactLoanCalculator
- run npm install
- npm start  

Link to live example: http://www.rafalkaczynsky.com/projects/loan-calculator-react-component/index.html
Use as follows:

 <LoanCalculator /> 
 
Example of props:  {...}
 
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


