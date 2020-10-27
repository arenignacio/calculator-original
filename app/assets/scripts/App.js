import infixToPostfix from '../modules/infixToPostfix';
import calculate from '../modules/calcPostfix';

if (module.hot) {
	module.hot.accept();
}

/* @ts-check 
#Order of operation
Parentheses,
Exponents,
Multiplication or Division (left-to-right),
Subtraction or Addition (left-to-right)

#RPN stack precedence
If symbol is lower or equal precedence, stack gets popped into the result.

https://www.youtube.com/watch?v=LQ-iW8jm6Mk&t=26s

Symbol      Name
^           Exponential
* / ~       Multiplication, Division, Roughly Equal
+ -         Plus, Minus
(           Parentheses
=           Equal
*/

//.compare if two elements in an array have the same quantity
const submitBtn = document.querySelector('input[type="button"]');

submitBtn.addEventListener('click', () => {
	const input = document.querySelector('input[type="text"]').value;

	const showResult = document.getElementById('result');

	//validator. prevents user from entering invalid formula or alphabet characters.
	if (infixToPostfix(input) === 'invalid entry' || /[a-zA-Z]/.test(input)) {
		document.getElementById('result').innerHTML =
			'Please enter numerical values only and make sure each operator has two operands to evaluate';
		document.getElementById('rpn').innerHTML = '';
	} else {
		document.getElementById(
			'result'
		).innerHTML = `reverse polish notation: ${infixToPostfix(input)}`;

		document.getElementById('rpn').innerHTML = `total: ${calculate(
			infixToPostfix(input)
		)}
		`;
	}
});
