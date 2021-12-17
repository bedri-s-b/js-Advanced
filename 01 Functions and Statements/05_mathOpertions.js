function mathOperations(left, right, operant) {
    let result = 0;

    switch (operant) {
        case '+': result = left + right; break;
        case '-': result = left - right; break;
        case '/': result = left / right; break;
        case '*': result = left * right; break;
        case '%': result = left % right; break;
        case '**': result = left ** right; break;
    }
    console.log(result)
}

mathOperations(5, 6, '**')