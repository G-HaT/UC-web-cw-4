alert('hello, welcom to my website, my name is Mohammad and I am going to calculate your grade');

let grade = prompt('Please Enter your grade number');

console.log('%c' + grade,'color: red' );

if (grade>=90) {
    console.log('your grade is A')
}
else if (grade>=80 && grade<=89) {
    console.log('your grade is B')
}
else if (grade>=70 && grade<=79) {
    console.log('your grade is  C')
}
else if (grade>=60 && grade<=69) {
    console.log('your grade is D')
}
else if (grade>=50 && grade<=59) {
    console.log('your grade is Weak')
}
else {
    console.log('your grade is F')
}

// javaScript is not java 