function Counter(num) {
    console.log(num);

    if (num > 0) {
        Counter(num - 1);
    }
}

Counter(5);