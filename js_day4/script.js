// console.log(document);
// console.dir(document);  //dir:shows key-value pair :DOM
// console.dir(window);  //window represents window(browser) obj :BOM
//----------------------------------------------------------------------------------------------------------

//DOM
// document.write("Hello"); //don't use this
//--------------------------------------
//finding the element

// document.getElementById                           return null/element

// const elem=document.getElementById("text-1");
// console.log(elem);
// elem.style.color="blue";


// document.getElementsByClassName("class-Name")       return HTML collection(iterable)
// const el=document.getElementsByClassName("text2");
// console.log(el);


// document.getElementsByTagName
// const el=document.getElementsByTagName("text3");
// console.log(el);

// document.querySelector
const el=document.querySelector(".text2");
console.log(el);
// document.querySelectorAll