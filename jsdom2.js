//1. Update the 'Coffee' item to say 'Fair Trade Coffee'

function myFunction(){
    const element = document.getElementById ("list").children[1];
    const newNode = document.createTextNode("Fair Trade Coffee");
    element.replaceChild(newNode, element.childNodes[0]);
}
myFunction()


//2. Remove 'Twinkies' from the list

function myFunction1(){
    const list = document.getElementById ("list");
    list.removeChild (list.childNodes[7]);
}
myFunction1()

//3. Add an item 'Cheese Whiz'

function myFunction2(){
    const addItem = document.createElement("li");
    const addtextItem = document.createTextNode ("Cheese Whiz");
    addItem.appendChild(addtextItem);
    document.getElementById("list").appendChild(addItem);
}
myFunction2()

//4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']

function myFunction5(){
    var items = document.getElementById ("list");
    while (items.firstChild){
        items.removeChild(items.firstChild);
    }
}
myFunction5()

function myFunction3(){
    const element = document.createElement("li");
    const textNode = document.createTextNode("protein powder");
    element.appendChild(textNode);
    document.getElementById("list").appendChild(element);
  
    const element2 = document.createElement("li");
    const textNode2 = document.createTextNode("muscle milk");
    element2.appendChild(textNode2);
    document.getElementById("list").appendChild(element2);
  
    const element3 = document.createElement("li");
    const textNode3 = document.createTextNode("power bars");
    element3.appendChild(textNode3);
    document.getElementById("list").appendChild(element3);
  
  }
myFunction3()

//5. Add the class 'important' to the muscle milk item.

function myFunction4(){
    const addClass = document.getElementById ("list").children[1];
    addClass.classList.add("important");
}
myFunction4()
