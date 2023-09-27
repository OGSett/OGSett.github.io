function signInAnonymously() {
    return firebase.auth().signInAnonymously().catch(function(error) {
        console.error("Error signing in anonymously:", error.code, error.message);
    });
}


async function addItem(event){
    event.preventDefault();  
    
    await signInAnonymously();

    const user = firebase.auth().currentUser;
    if (user) {
        const userId = user.uid;
        let text = document.getElementById("todoInput");
        
        db.collection('todo-items').doc(userId).collection('items').add({
            text: text.value,
            status: "active"
        }).then(() => {
            console.log("Document successfully written!");
            text.value = "";
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    } else {
        console.error("Failed to authenticate user.");
    }
}


function getItems(){
    const user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        const userId = user.uid;

        db.collection('todo-items').doc(userId).collection('items').onSnapshot((snapshot) =>{
            console.log(snapshot);
            let items = [];
            snapshot.docs.forEach((doc) =>{
                items.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            let lenItems = items.length;
            console.log(lenItems);
            generateItems(items);
        });
    } else {
        console.error("User not authenticated.");
    }
});
}


function generateItems(items){
    let itemsHTML1 = "";
    let itemsHTML2 = "";
    items.forEach((item) => {
        itemsHTML1 += `
        <div class="todo-item">
          <div class="check">
            <div data-id="${item.id}" class="check-mark ${item.status == "completed" ? "checked": ""}">
              <img src="./images/icon-check.svg">
            </div>
          </div>
          <div class="todo-text ${item.status == "completed" ? "checked": ""}">
            ${item.text}
          </div>
        </div>
        `
    })
    itemsHTML2 += `
            <div class="items-left">
                ${items.length} items left
            </div>`

    document.querySelector(".todo-items").innerHTML = itemsHTML1;
    document.querySelector(".items-left").innerHTML = itemsHTML2;
    createEventListeners();
}

function createEventListeners(){
    let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
    todoCheckMarks.forEach((checkMark)=>{
        checkMark.addEventListener("click", function(){
            markCompleted(checkMark.dataset.id);
        })
    })
}


function markCompleted(id){
    const user = firebase.auth().currentUser;
    if (user) {
        const userId = user.uid;
        let item = db.collection('todo-items').doc(userId).collection('items').doc(id);
        
        item.get().then(function(doc){
            if(doc.exists){
                let status = doc.data().status;
                if(status == "active"){
                    item.update({
                        status: "completed"
                    })
                } else if(status == "completed"){
                    item.update({
                        status: "active"
                    })
                }
            }
        });
    } else {
        console.error("User not authenticated.");
    }
}

function clearItems(){
    const user = firebase.auth().currentUser;
    if(user){
        const userId = user.uid;
        let items = db.collection('todo-items').doc(userId).collection('items');
        items.get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                doc.ref.delete();
            });
        });
    }
}

// function onlyActive(){
//     const user = firebase.auth().currentUser;
//     if(user) {
//         const userId = user.uid;
//         let items = db.collection('todo-items').
//     }
// }

function lightTheme(){
    const bodyElement = document.body;
    const themeIcon = document.querySelector(".theme img");
    const background = document.querySelector(".background-image img");
    if (bodyElement.classList.contains("dark-theme")) {
        bodyElement.classList.remove("dark-theme");
        bodyElement.classList.add("light-theme");
        themeIcon.src = "./images/icon-moon.svg";
        background.src = "./images/bg-desktop-light.jpg";

    } else {
        bodyElement.classList.remove("light-theme");
        bodyElement.classList.add("dark-theme");
        themeIcon.src = "./images/icon-sun.svg";
        background.src = "./images/bg-desktop-dark.jpg";
    }
}

getItems();