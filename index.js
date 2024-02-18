// let d=document.createElement("div");
// let h=document.createElement("h1");
// let p=document.createElement("p");
// let btn=document.createElement("button");
// d.setAttribute("id","container");
// document.body.appendChild(d);
// h.innerText="i am read";
// p.innerText="i am para";
// p.setAttribute("class","demo");
// btn.innerText="submit";
// d.appendChild(h);
// d.appendChild(p);
// d.appendChild(btn);





// let a=React.createElement("div",{id:"container"},"i am a div tag")
// console.log(a);

// ReactDOM.render(a,document.getElementById("root"), () => {
//     console.log("VDOM connected successfully");
// })

// let div=React.createElement("div",{id:"container"},React.createElement("h1",null,"I am head"),React.createElement("p",{className:"demo"},"I am para"),React.createElement("button",null,"submit"));

// ReactDOM.render(div,document.getElementById("root"),() =>{
//     console.log("successfully rendered");
// })
import React from 'react';
import  ReactDOM  from 'react-dom';
import "./style.css"

// let ele=<h1>welcome to ReactJS</h1>
// let ele=<img src="https://source.unsplash.com/450x300?beach" alt="" />
// ReactDOM.render(
//     <>
//         <h1>Lion</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at illum nesciunt tempora, adipisci dolorum beatae quia mollitia animi suscipit, laborum aliquam et velit eum porro consequuntur. Quidem, quibusdam ipsam!
//         </p>
//         </>,
//     document.getElementById("root")

// )
ReactDOM.render(<div>
    <img src="https://source.unsplash.com/450x300?paper" alt="" />
    <h1>100 days of code:The complete python pro Bootcamp</h1>

    <p>4.7⭐⭐⭐⭐(270.056)</p>
    <p>RS.3,499</p>
    <button>Bestseller</button>
    <button>knowmore</button>

</div>,document.getElementById("root"))

