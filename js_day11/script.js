// const parent=document.getElementById("parent")

// const ul=document.createElement('ul');

// const li1=document.createElement("li");
// li1.innerText="Item-1";
// const li2=document.createElement("li");
// li2.innerText="Item-2";
// const li3=document.createElement("li");
// li3.innerText="Item-3";
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// parent.appendChild(ul);

//-----------------------------------------------------------------------

// console.log(React);
// console.log(ReactDOM);

// const domRoot=document.getElementById("parent");
// const reactRoot=ReactDOM.createRoot(domRoot);   //connect

// const li1= React.createElement("li",{
//     style:{
//         color: "blue",
//     },
// },"item 1") //type,option,children
// const li2= React.createElement("li",{
//     className: "text-big",
// },"item 2")
// const li3= React.createElement("li",{},"item 3")

// const ul=React.createElement("ul",{},[li1,li2,li3]);

// reactRoot.render(ul);




//-------------------------
// const domRoot=document.getElementById("parent");
// const reactRoot=ReactDOM.createRoot(domRoot);

// // const title=React.createElement("h1",{},"Helloooo");
// // console.log("type of title",typeof title);
// // console.log("title",title);
//------------------------------------


// const domRoot=document.getElementById("parent");
// const reactRoot=ReactDOM.createRoot(domRoot);

// // const title=React.createElement("h1",{},"Helloooo");
// // console.log("type of title",typeof title);
// // console.log("title",title);

// //creating my own react element
// const title2={
//     $$typeof: Symbol.for("react.element"),               // $$typeof :security from injection attack
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         style: {color:"brown"},
//         "children": "Helloooo",
//     },
//     "_owner": null,
//     "_store": {}
// }
// reactRoot.render(title2);

//----------------------------------------------------------

//syntax error

const domRoot=document.getElementById("parent");
const reactRoot=ReactDOM.createRoot(domRoot);

// const title2=<h1>hellooooooo jsx</h1>;              //React Element
const Title2=()=>{
    return <h1>hellooooooo jsx</h1>; 
};  
reactRoot.render(<Title2/>);