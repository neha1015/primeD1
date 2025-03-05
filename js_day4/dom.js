// //document children for color but don't use it-------------------------------------------

// const elem=document.getElementById("text1");
// console.log(elem);
// elem.style.color="blue";

// const el=document.getElementById("text2");
// console.log(el);
// el.style.color="red";

// const e=document.getElementById("text3");
// console.log(e);
// e.style.color="violet";


// //OR-------------------
// const outerDiv=document.querySelector("div");
// outerDiv.style.backgroundColor="yellow";
// console.log(outerDiv);

//inner div bg yellow
// const divChildren=Array.from(outerDiv.children);
// console.log("divChildren:",divChildren);

// divChildren.forEach((el)=>{
//     el.style.backgroundColor="yellow";
// });

//OR------------------------------------------------
let mappings={
    Invitation:"You are invited",
    notice:"You are invited",
    hello:"You are invited",
    hi:"You are invited",
};
const newElement = document.createElement("div");
const rootElement = document.querySelector("body");
rootElement.appendChild(newElement);

console.log(Object.entries(mappings));

Object.entries(mappings).forEach((elem) => {
    const newChildDiv = document.createElement("div");
    // newChildDiv.innerText = "hello from dom !";
    newChildDiv.style.border = "1px solid lime";
    newChildDiv.innerHTML = `
        <h4 style="color: orange">${elem[0]}</h4>       
        <p>${elem[1]}</p>
    `;
    newElement.appendChild(newChildDiv);
});
