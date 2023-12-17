(function add(a, b) {
    console.log(a + b)
})(2, 3);

(function sayHello() {
    console.log('Hello!!')
})();

(() => console.log('HEY!!'))();