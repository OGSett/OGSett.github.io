function signInAnonymously() {
    return firebase.auth().signInAnonymously().catch(function(error) {
        console.error("Error signing in anonymously:", error.code, error.message);
    });
}

// function addItem(event){
    
//     event.preventDefault();

//     let text = document.getElementById("todoInput");
//     const userId = firebase.auth().currentUser.uid;
//     db.collection('todo-items').add({
//         text: text.value,
//         status: "active"
//     });
//     text.value = "";
// }

async function addItem(event){
    event.preventDefault();  
    
    await signInAnonymously();

    const user = firebase.auth().currentUser;
    if (user) {
        const userId = user.uid;
        let text = document.getElementById("todoInput");
        
        // Adjusting the database path to use user-specific subcollections
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

// function getItems(){
//     db.collection('todo-items').onSnapshot((snapshot) =>{
//         console.log(snapshot);
//         let items = [];
//         snapshot.docs.forEach((doc) =>{
//             items.push({
//                 id: doc.id,
//                 ...doc.data()
//             })
//         })
//         generateItems(items);
//     })
// }

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
                generateItems(items);
            });
        });
    } else {
        console.error("User not authenticated.");
    }
});
}




function generateItems(items){
    let itemsHTML = "";
    items.forEach((item) => {
        itemsHTML += `
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

    document.querySelector(".todo-items").innerHTML = itemsHTML;
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
    let item = db.collection('todo-items').doc(id);
    item.get().then(function(doc){
        if(doc.exists){
            let status = doc.data().status;
            if(status == "active"){
                item.update({
                    status: "completed"
                })
            }else if(status == "completed"){
                item.update({
                    status: "active"
                })
            }
        }
    })
}

getItems();