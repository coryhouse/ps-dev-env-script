import numeral from 'numeral';
import {getCalculations} from './api/api';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);

getCalculations().then(result => {
  console.log(result);
});
