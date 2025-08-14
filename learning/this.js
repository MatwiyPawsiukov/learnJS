/*function foo(){
    var bar = "local";
    console.log(this.bar); // undefined
}
 
var bar = "global";
 
foo(); 
/*
const obj = {
    bar: "object",
    foo: function(){
        console.log(this.bar);
    }
}
var bar = "global";
obj.foo();
/*
function foo(){
    var bar = "foo_bar";
    console.log(this.bar);
}
  
const obj1 = {bar:"obj1_bar", foo: foo};
const obj2 = {bar:"obj2_bar", foo: foo};
  
var bar = "global_bar";
  
foo();  // global_bar
obj1.foo();   // obj1_bar
obj2.foo();   // obj2_bar

var bar = "global_bar";
 /*
const obj1 = {
    bar: "obj1_bar",
    foo: function(){
        console.log(this.bar);  // bar = "obj1_bar"
    }
}
const obj2 = {bar: "obj2_bar", foo: obj1.foo}; // bar = "obj2_bar"
 
const foo = obj1.foo;   // bar = "global_bar"
 
obj1.foo(); // obj1_bar
obj2.foo(); // obj2_bar
foo();      // global_bar*/

/*function foo(){
    console.log(this.bar);
}
 
var obj = {bar: "obj_bar"}
var bar = "global_bar";
foo();              // global_bar
foo.call(obj);*/