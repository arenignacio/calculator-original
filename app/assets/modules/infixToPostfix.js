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
	if (['+', '-'].includes(inputArr[0])) {
		inputArr.unshift('0');
	} else if (isNaN(inputArr[0])) {
		return 'invalid entry';
	}

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
			case '*' || '/':
				return 4;
			case '+' || '-':
				return 3;
			case '=':
				return 2;
			default:
				return true;
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
	inputArr.forEach((element, idx, arr) => {
		if (/\w/.test(element)) {
			result += `${element} `;
		} else if (
			(isNaN(element) && topOfStack() === undefined) ||
			element === '('
		) {
			stack.push(element);
		} else if (element === ')') {
			while (topOfStack() !== '(') {
				result += `${stack.pop()} `;
			}
			stack.pop();
		} else {
			while (getPrecedence(element) <= getPrecedence(topOfStack())) {
				result += `${stack.pop()} `;
			}
			stack.push(element);
		}
	});

	//push remaining operators in stack to result after each element has been evaluated
	while (stack.length > 0) {
		result += `${stack.pop()} `;
	}

	//since each operator and number is followed by a space, last number/operator will contain a space, this cleans that and prepares result for calculation which splits the string by space.
	return result.trimEnd();
}; //#end of infixToPostfix function;

export default infixToPostfix;
