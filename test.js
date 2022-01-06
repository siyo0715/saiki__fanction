function foo(n) {
    if (n != 0) {
        return n * foo(n - 1);
    }
    return 1;
}
console.log(foo(4));