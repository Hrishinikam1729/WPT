function sum(a) {
    return function f1(b) {
        return function f2(c) {
            return a + b + c;
        };
    };
}

console.log(sum(2)(3)(4));

const fun1 = sum(4);
const fun2 = fun1(3);
const fun3 = fun2(2);

console.log(fun3);

function sendEmail(to) {
    return function(subject) {
        return function(body) {
            console.log(`Sending email to ${to} withc subject ${subject} and body ${body}`);
        }
    }
}


const f1 = sendEmail('Hrishinikam1729@gmail.com')
const f2 = f1(`Hey hrishi this email is for you`)

f2('blank')


const add = (num1) => (num2) => (num3) => num1 + num2 + num3;

console.log(add(5)(6)(7));