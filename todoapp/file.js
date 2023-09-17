
async function addItem(event) {
  event.preventDefault(); // no reloads

  // get the input text
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value;

  db.collection("checker").add({
    text: todoText,
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

    // Add a click event listener to toggle the completion status
    todoItem.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
  }
  else {
    alert("Please enter a todo item!");
  }
}


async function loadTodosFromDatabase() {
  const todoList = document.getElementById("todoList");

  // Fetch all documents from the 'checker' collection
  const querySnapshot = await db.collection("checker").get();

  // Iterate through each document and display it
  querySnapshot.forEach(doc => {
      const todoData = doc.data();
      const todoText = todoData.text;

      // Create the to-do item DOM elements (similar to your addItem function)
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

      // Add the click event listener
      todoItem.addEventListener('click', function() {
          this.classList.toggle('completed');
      });
  });
}

// Call the loadTodosFromDatabase function when the page loads
window.onload = loadTodosFromDatabase;
