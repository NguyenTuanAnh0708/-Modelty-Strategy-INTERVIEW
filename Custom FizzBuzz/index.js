function solution(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('X or Y is not a number!');
    }
    for (let i = 1; i <= 100; i++) {
        if (i % x === 0 && i % y === 0) {
            console.log("FooBar");
        } else if (i % x === 0) {
            console.log("Foo");
        } else if (i % y === 0) {
            console.log("Bar");
        } else {
            console.log(i);
        }
    }
}

// Example usage
try {
    solution(3, 5);
} catch (e) {
    console.error(e);
}