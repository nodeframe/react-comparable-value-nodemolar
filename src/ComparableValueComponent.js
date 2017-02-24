/**
 * Created by suppanathuss on 1/6/2017 AD.
 */
import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames/bind';

const style = require('./ComparableValueComponent.css');
const c = classnames.bind(style);


export default class ComparableValue extends React.Component {
  render() {
    let {value, type, baseValue, isComparable, hasSign} = this.props;
    let sign;
    if (isComparable || hasSign) {
      baseValue = (baseValue && typeof baseValue === 'number') ? baseValue : 0;
      isComparable = (isComparable) ? isComparable : false;
      hasSign = (hasSign) ? hasSign : false;
      sign = (hasSign && (value > baseValue)) ? '+' : '';
    }
    if (value) {
      switch (type) {
        case 'plaintext':
          return <div className={c('alignLeft')}>{value}</div>;
        case 'quantity':
          return <div className={c('alignRight')}>{numeral(value).format('0,0')}</div>;
        case 'number_2f':
          return <div className={c('alignRight',
            {[`${"greater"}`]: (hasSign || isComparable) && (value > baseValue)},
            {[`${"lesser"}`]: (hasSign || isComparable) && (value < baseValue)},
            {[`${"equal"}`]: (hasSign || isComparable) && (value === baseValue)})}>{sign}{numeral(value).format('0,0.00')}</div>;
        case 'number_4f':
          return (
            <div className={c('alignRight',
              {[`${"greater"}`]: (hasSign || isComparable) && (value > baseValue)},
              {[`${"lesser"}`]: (hasSign || isComparable) && (value < baseValue)},
              {[`${"equal"}`]: (hasSign || isComparable) && (value === baseValue)})}>
              {sign}{numeral(value).format(this.props.format || '0,0.0000')}
            </div>
          );
        default:
          return <div>{value}</div>
      }
    } else {
      return <div>-</div>
    }
  }
}
