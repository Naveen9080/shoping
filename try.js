// const a=[1,2,3,4];
// a.unshift(0);
// a.push(6);
// a.reverse();
// //console.log(a.toString());
// const a1=[1,2,3,4];
// const a2=[5,6,7,8];
// const a3=[...a1,...a2];
// console.log(a3.toString());

// function hello(){
//     console.log("hello");
// }
// hello();
// function getcelcious(f){
//     return (f-32)*5/9;
// }
// const getcelcious1=(f)=>{ return (f-32)*5/9};
// let x;
// (function(f){
//     console.log( (f-32)*5/9 );
// })(50);
// console.log(`${getcelcious1(50)} \xB0C `);
// const a=[1,2,3,4,5,6];
// function min(a){
//     return {Max:Math.max(...a),
//            Min:Math.min(...a)
//     };
// }
// console.log(min(a));
// let area=10;
// ((l,b)=>{
//     area=l*b;
//     return l*b;
// })(5,2);
// console.log(area);
// let a=[1,2,3,4,5];
// let res=a.filter(num=>num%2===0);
// console.log(res);
// const ar=[];
// a.forEach(function(num){if(num%2===0)ar.push(num)});
// console.log(ar);
// const r=a
//     .map( (i)=>i=i*2) 
//     .map((j)=>j=j*3);
// console.log(r);

// const re=a.reduce((p,c)=>p+c,0);
// console.log(re);

// const info=[
//     {
//         name:'raj',
//         city:'salem',
//         age:18
//     },
//     {
//         name:'ram',
//         city:'erode',
//         age:25
//     },
//     {
//         name:'ravi',
//         city:'attur',
//         age:23
//     }
// ]
// const res=info.filter((eachperson)=>{
//     if(eachperson.age>18)
//       return {name:eachperson.name,city:eachperson.city};
// })
// console.log(res);

// let a=[1,2,3,4,5,-1,-2,-3,-4,-5];
// const r=a
//         .filter((i)=>i>=0)
//         .reduce((s1,s2)=>s1+s2,0);
// console.log(r);

let a=['hello','welcome'];
let ch=a.map((i)=>i[0].toUpperCase()+i.substring(1));
console.log(ch);
//document.body.innerHTML='<h1>hello</h1>';
