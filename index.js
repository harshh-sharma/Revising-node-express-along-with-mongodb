import fs from "fs";


// fs.writeFile("hey.txt","Hello ",(err) => {
//     if(err) console.log(err);
//     else console.log("done");
// })

// console.log("one");
// fs.appendFile("hey.txt","I am fine what about you? ",(err) => {
//     if(err) console.log(err);
//     else console.log("done");
// })
// console.log("two");

// console.log("one");
// fs.rename("hey.txt","hello.txt",(err) => {
//     if(err) console.log(err);
//     else console.log("done");
// })
// console.log("two");

// console.log("one");
// fs.copyFile("hello.txt","./copy.txt",(err) => {
//     if(err) console.log(err);
//     else console.log("done");
// })
// console.log("two");
// fs.unlink("hello.txt",(err) => {
//     if(err) console.log(err.message);
//     else console.log("remove");
// })

// fs.rm("./copy",{recursive:true},(err) => {
//     if(err) console.log(err.message);
//     else console.log("remove");
// })
// console.log("two");

// console.log("one");
// fs.readFile("hello.txt",'utf8',(err,data) => {
//     if(err) console.log(err.message);
//     else console.log(data);
// })
// console.log("two");

fs.access("./copy",(err) => {
    if(err) console.log(err.message);
    else console.log("done");
})