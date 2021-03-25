
document.getElementById("display-email").innerHTML = localStorage.getItem("email")

const inputText=document.getElementById('todo-item')
const list=document.getElementById('list')
const userId=localStorage.getItem("uid")
const database=firebase.database()

// console.log(userId);
// console.log(database);

database.ref(userId).child("todos").on('child_added',function(data){
    //create li tag with text node
        var li = document.createElement('li')
        var liText = document.createTextNode(data.val().todo)
        li.appendChild(liText)
        li.setAttribute("key",data.val().key)
        li.setAttribute("class",'col-12')
    
    // create delete button
        var delBtn = document.createElement("button")
        var delText = document.createTextNode("DELETE")
        delBtn.setAttribute("class", "li-btn")
        delBtn.setAttribute("onclick", "deleteItem(this)")

        delBtn.appendChild(delText)
        var delBtn=document.createElement("a");
        delBtn.setAttribute("class","fa fa-trash-o li-btn")
        delBtn.setAttribute("onclick","deleteItem(this)")

    // create edit button
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("EDIT")
        editBtn.setAttribute("class","li-btn")
        editBtn.appendChild(editText)
        editBtn.setAttribute("onclick", "editItem(this)")

        var editBtn=document.createElement("a");
        editBtn.setAttribute("class","fa fa-pencil-square-o li-btn")
        editBtn.setAttribute("onclick","editItem(this)")

        li.appendChild(delBtn)
        li.appendChild(editBtn)
    
        list.appendChild(li)
    
})

function addTodo() {
    if(inputText.value==""){
        alert("TextBox is Empty");
    }else{
    //save data in firebase
    var firebasekey=database.ref(userId).child("todos").push().key
    var todoData={
        todo: inputText.value,
        key: firebasekey 
    }
    
    database.ref(userId).child("todos").child(firebasekey).set(todoData)

    inputText.value = ""}
}

function deleteItem(e) {
    let parentId=e.parentNode.getAttribute("key")
    database.ref(userId).child("todos").child(parentId).remove()
    e.parentNode.remove()
}

function editItem(e) {
    let parentId=e.parentNode.getAttribute("key")
    let val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    var editTodo={
        todo:val,
        key:parentId
    }
    database.ref(userId).child("todos").child(parentId).set(editTodo)
    e.parentNode.firstChild.nodeValue=val
}

function deleteAll() {
    firebase.database().ref(userId).child("todos").remove()
    list.innerHTML=""
}




const logOut = () => {
    // console.log("logout");
    localStorage.removeItem("uid");
    // localStorage.removeItem("displayName");
    localStorage.removeItem("email");
    firebase.auth().signOut();
    window.location.replace("signin.html")

  }