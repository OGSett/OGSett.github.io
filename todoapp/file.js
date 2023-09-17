
async function addItem(event) {
  event.preventDefault(); // no reloads

  // get the input text
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value;
  const userId = firebase.auth().currentUser.uid;

  db.collection('todos').doc(userId).collection('items').add({
    text: todoText,   // The to-do's text
    status: "active"
}).then(() => {
    console.log("Document successfully written!");
}).catch((error) => {
    console.error("Error writing document: ", error);
});


  if (todoText !== "") {
    // create  div parentr
    const todoItem = document.createElement("div");
    todoItem.classList.add("todoItem");

    // create the check div
    const check = document.createElement("div");
    check.classList.add("check");

    // todoCheckMark
    const todoCheckMark = document.createElement("div");
    todoCheckMark.classList.add("todoCheckMark");
    const checkImage = document.createElement("img");
    checkImage.src = "./images/icon-check.svg";
    todoCheckMark.appendChild(checkImage);

    // create todoText div with the user's input
    const todoTextDiv = document.createElement("div");
    todoTextDiv.classList.add("todoText");
    todoTextDiv.textContent = todoText;

    // todoCheckMark and todoText to the todoItem
    check.appendChild(todoCheckMark);
    todoItem.appendChild(check);
    todoItem.appendChild(todoTextDiv);

    // new todoItem to the todoList
    const todoList = document.getElementById("todoList");
    todoList.appendChild(todoItem);

    // clear the input
    todoInput.value = "";

    // event listener to toggle the completion status
    todoItem.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
  }
  else {
    alert("Please enter a todo item!");
  }
}


async function loadTodosFromDatabase(userId) {
  const todoList = document.getElementById("todoList");


  const todosRef = db.collection('todos').doc(userId).collection('items');
  const querySnapshot = await todosRef.get();
  // const querySnapshot = await db.collection("checker").get();

  // iterate through each document and display it
  querySnapshot.forEach(doc => {
      const todoData = doc.data();
      const todoText = todoData.text;

      // to-do item DOM elements
      const todoItem = document.createElement("div");
      todoItem.classList.add("todoItem");
      if (todoData.status === "completed") {
          todoItem.classList.add("completed");
      }

      const check = document.createElement("div");
      check.classList.add("check");
      const todoCheckMark = document.createElement("div");
      todoCheckMark.classList.add("todoCheckMark");
      const checkImage = document.createElement("img");
      checkImage.src = "./images/icon-check.svg";
      todoCheckMark.appendChild(checkImage);

      const todoTextDiv = document.createElement("div");
      todoTextDiv.classList.add("todoText");
      todoTextDiv.textContent = todoText;

      check.appendChild(todoCheckMark);
      todoItem.appendChild(check);
      todoItem.appendChild(todoTextDiv);
      todoList.appendChild(todoItem);

      // click event listener
      todoItem.addEventListener('click', function() {
          this.classList.toggle('completed');
      });
  });
}

// loadTodosFromDatabase function when the page loads
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      loadTodosFromDatabase(user.uid);
  }
});
