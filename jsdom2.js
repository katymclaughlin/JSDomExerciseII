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



//5. Add the class 'important' to the muscle milk item.