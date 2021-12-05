let calculator={
    'add' : function(){
        let sum= this.num1+this.num2;
        console.log(sum);
    },
    'mul': function(a,b){
        let multi=this.a * this.b;
        console.log(multi);
    },
    'div':function(){
        let divide= this.num1/this.num2;
        console.log(divide);
    },
    'sub':function(){
        let diff=this.num1-this.num2;
        console.log(diff);
    },
};
let set1={
    'num1':50,
    'num2':20,
}
let set2={
    'a':10,
    'b':20,
}
let set3={
    'num1':30,
    'num2':20,
}
calculator.add.call(set1);
calculator.mul.apply(set2,['a','b']);
let bind=calculator.add.bind(set3);
bind();
calculator.sub.call(set1);