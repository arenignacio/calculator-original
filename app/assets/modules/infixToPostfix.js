//.converts string of infix to postfix.
const infixToPostfix = function (input) {
	let result = '';
	const stack = [];
	let inputArr = input.split('');

	//check if operator
	const isOperator = function (char) {
		return ['+', '-', '/', '*', '^', '~', '%'].includes(char);
	};

	//validator
	if (isNaN(inputArr[0]) && !['+', '-'].includes(inputArr[0])) {
		return 'invalid entry';
	}

	//if two consecutive operator are entered
	for (const [index, value] of inputArr.entries()) {
		if (isOperator(value) && isOperator(inputArr[index + 1])) {
			return 'invalid entry';
		}
	}

	//groups numeric values together
	for (let i = 0; i <= inputArr.length - 1; ) {
		!isNaN(inputArr[i]) && !isNaN(inputArr[i + 1])
			? (inputArr.splice(i, 2, inputArr[i] + inputArr[i + 1]), (i = 0))
			: i++;
	}

	//get top of stack or (last element of stack array)
	const topOfStack = () => {
		return stack[stack.length - 1];
	};

	//evaluates level of symbol
	const getPrecedence = function (symbol) {
		switch (symbol) {
			case '^':
				return 5;
			case '*' || '/' || '~':
				return 4;
			case '+' || '-':
				return 3;
			case '(':
				return 2;
			case '=':
				return 1;
		}
	};

	//checks if parentheses if preceded by a number of operator. if it's alphanumeric, it adds a "*" between
	if (input.includes('(')) {
		for (const [index, value] of inputArr.entries()) {
			if (
				value === '(' &&
				(/\w/.test(inputArr[index - 1]) || inputArr[index - 1] === ')') &&
				inputArr[index - 1] !== undefined
			) {
				inputArr.splice(index, 0, '*');
			}
		}
	}

	//evaluate inputArr and convert to postfix
	for (let idx = 0; idx <= inputArr.length - 1; ) {
		let element = inputArr[idx];

		if (/\w/.test(element)) {
			result += `${element} `;
		} else if (element === '(') {
			stack.push(element);
		} else if (element === ')') {
			//if element is closing parentheses, empty stack until open parantheses has been found
			while (topOfStack() !== '(') {
				result += `${stack.pop()} `;
			}
			stack.pop();
		} else if (['+', '-'].includes(element) && idx === 0) {
			result += `0 ${inputArr[idx + 1]} ${element} `;
			idx++;
		} else {
			//if element is an operator, compare precedence with top of stack
			while (getPrecedence(element) <= getPrecedence(topOfStack())) {
				result += `${stack.pop()} `;
			}
			stack.push(element);
		}
		idx++;
	}

	//push remaining operators in stack to result after each element has been evaluated
	while (stack.length > 0) {
		result += `${stack.pop()} `;
	}

	//since each operator and number is followed by a space, last number/operator will contain a space, this cleans that and prepares result for calculation which splits the string by space.
	return result.trimEnd();
}; //#end of infixToPostfix function;

export default infixToPostfix;
