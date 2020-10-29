//TODO: needs more logic for negative numbers. negative preluded by parenthesis needs to be recognized.

//.converts string of infix to postfix.
const infixToPostfix = function (input) {
	let result = '';
	const stack = [];
	let inputArr = input.replace(/\s/g, '').split('');

	//#checks
	const isOperator = function (char) {
		return ['+', '-', '/', '*', '^', '~'].includes(char);
	};

	const isSpecialChar = function (char) {
		return ['.', '%'].includes(char);
	};

	const isEqualQty = function (element1, element2, iterative) {
		let count = [0, 0];

		for (const cur of iterative) {
			if (cur === element1) {
				count[0]++;
			} else if (cur === element2) {
				count[1]++;
			}
		}

		return count[0] === count[1];
	};

	//get top of stack or (last element of stack array)
	const topOfStack = () => {
		return stack[stack.length - 1];
	};

	//evaluates level of symbol
	const getPrecedence = function (symbol) {
		switch (symbol) {
			case '^':
				return 5;
			case '*':
			case '/':
			case '~':
				return 4;
			case '+':
			case '-':
				return 3;
			case '(':
				return 2;
			case '=':
				return 1;
		}
	};

	//#validator
	if (
		(!['+', '-', '.', '('].includes(inputArr[0]) && isNaN(inputArr[0])) ||
		!isEqualQty('(', ')', inputArr)
	) {
		return 'invalid entry';
	}

	for (const [index, value] of inputArr.entries()) {
		if (isOperator(value) && isOperator(inputArr[index + 1])) {
			return 'invalid entry';
		} else if (
			isSpecialChar(value) &&
			isOperator(inputArr[index - 1]) &&
			isOperator(inputArr[index + 1])
		) {
			return 'invalid entry';
		} else if (value === '%' && isNaN(inputArr[index - 1])) {
			return 'invalid entry';
		}
	}

	//#grouper
	//groups numeric values together
	for (let i = 0; i <= inputArr.length - 1; ) {
		if (inputArr[0] === '.' && !isNaN(inputArr[1])) {
			inputArr.splice(i, 2, `0${inputArr[i] + inputArr[i + 1]}`);
		} else if (
			(isOperator(inputArr[i]) || ['(', ')'].includes(inputArr[i])) &&
			inputArr[i + 1] === '.'
		) {
			inputArr.splice(i + 1, 1, `0.`);
		} else if (inputArr[i + 1] === '.' && !inputArr[i].includes('.')) {
			inputArr.splice(i, 2, inputArr[i] + inputArr[i + 1]);
		} else if (
			['+', '-'].includes(inputArr[i]) &&
			['(', '%'].includes(inputArr[i - 1]) &&
			!isNaN(inputArr[i + 1])
		) {
			inputArr.splice(i, 2, inputArr[i] + inputArr[i + 1]);
		} else if (!isNaN(inputArr[i]) && !isNaN(inputArr[i + 1])) {
			inputArr.splice(i, 2, inputArr[i] + inputArr[i + 1]);
		} else {
			i++;
		}
	}

	//checks if parentheses if preceded by a number of operator. if it's alphanumeric, it inserts a '*' at beginning of the problem inside the parentheses so the solution inside the parentheses gets multiplied to the number outside before solving the rest of the problem
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

		if (!isNaN(element) && inputArr[idx + 1] === '%') {
			!isNaN(inputArr[idx + 2])
				? inputArr.splice(
						idx,
						3,
						`${
							(Number(inputArr[idx]) / 100) * Number(inputArr[idx + 2])
						} `
				  )
				: inputArr.splice(idx, 2, `${Number(inputArr[idx]) / 100} `);
			result += inputArr[idx];
		} else if (/\w/.test(element)) {
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
			if (getPrecedence(element) <= getPrecedence(topOfStack())) {
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
