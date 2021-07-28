import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should add two numbers', () => {
    // creating const's for required buttons needed for test.
    const button4 = container.find('#number4')
    const button1 = container.find('#number1')
    const add = container.find('#operator_add')
    const equals = container.find('#operator-equals')
    // container find me the running total
    const runningTotal = container.find('#running-total');
    // adding in click function
    button4.simulate('click');
    add.simulate('click');
    button1.simulate('click');   
    equals.simulate('click');
    // i now "expect" after simulating clicking these buttons to return 5
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtract two numbers', () => {
    // creating const's for required buttons needed for test.
    const button7 = container.find('#number7')
    const button4 = container.find('#number4')
    const subtract = container.find('#operator-subtract');
    const equals = container.find('#operator-equals')
    // container find me the running total
    const runningTotal = container.find('#running-total');
    // simulate these button clicks
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');   
    equals.simulate('click');
    // i now "expect" after simulating clicking these buttons to return 3
    expect(runningTotal.text()).toEqual('3');
  })
  
  it('should multiply two numbers', () => {
  // creating const's for required buttons needed for test.
    const button5 = container.find('#number5')
    const button3 = container.find('#number3')
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals')
     // container find me the running total
    const runningTotal = container.find('#running-total');
    // i now "expect" after simulating clicking these buttons to return 15
    button5.simulate('click')
    multiply.simulate('click')
    button3.simulate('click')
    equals.simulate('click')

    expect(runningTotal.text()).toEqual('15');

  })

  it ('should divide two numbers', () => {
    // 21 required pressing two buttons
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button7 = container.find('#number7')
    const divide = container.find('#operator-divide')
    const equals = container.find('#operator-equals')

    const runningTotal = container.find('#running-total');
    // container find me the running total
    button2.simulate('click')
    button1.simulate('click')
    divide.simulate('click')
    button7.simulate('click')
    equals.simulate('click')
    // i now "expect" after simulating clicking these buttons to return 15
    expect(runningTotal.text()).toEqual('3');





  })

  

    
    




  




});



