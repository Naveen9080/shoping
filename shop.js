let l=[]
const a=Array.from(document.getElementById('add').children);
a.forEach((a)=>l.push(a.innerText.slice(0,a.innerText.length-2)));
function hello(){
   console.log('hello');
   const a=document.getElementById('get1').value;
   if(a.length===0){
     const msg=document.getElementById('err').innerText;
     if(msg.length==0)
         err.innerText='please enter an item'
   }
//if(a.length===0)
 //    alert('plese enter an item');
   else{
    err.innerText='';
    l.push(a);
    console.log(l);
    let t=document.getElementById('add');
    const n=document.createElement('li');
    n.className='t1';
    n.innerHTML=`<button class="btn-li">${a}<i id="t">&#215;</i> </button>`;
    t.appendChild(n);
    console.log('hello');
   }
}
function del(a){
   console.log(a);
}
//const p=document.querySelector('ul');
//const d=document.querySelector('li:last-child');
//p.removeChild(d);
//console.log(d);