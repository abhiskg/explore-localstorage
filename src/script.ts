// const setStorageData = () => {
//     const storageField = document.querySelector(
//       "#storage-field"
//     ) as HTMLInputElement;
//     const fieldValue = storageField.value;

//     const previousData = localStorage.getItem("Type");
//     if (!previousData) {
//       const finalValue = [
//         {
//           type: fieldValue,
//         },
//       ];
//       localStorage.setItem("Type", JSON.stringify(finalValue));
//     } else {
//       const prevUpdatedData = JSON.parse(previousData);
//       const finalValue = [
//         ...prevUpdatedData,
//         {
//           type: fieldValue,
//         },
//       ];
//       localStorage.setItem("Type", JSON.stringify(finalValue));
//     }
//     showStorageData();
//   };

//   const showStorageData = () => {
//     const storageContainer = document.querySelector(
//       "#storage-container"
//     ) as HTMLOListElement;
//     storageContainer.textContent = "";
//     const storageDataString = localStorage.getItem("Type");
//     if (!storageDataString) {
//       return;
//     }
//     const storageData = JSON.parse(storageDataString);
//     storageData.forEach((data: any) => {
//       const li = document.createElement("li");
//       li.innerText = data.type;
//       storageContainer.append(li);
//     });
//   };
//   showStorageData();

const addTodoBtn = document.querySelector("#add-todo-btn") as HTMLButtonElement;
addTodoBtn.addEventListener("click", () => {
  const todoText = document.querySelector("#todo-text") as HTMLInputElement;
  const textValue = todoText.value;
  todoText.value = "";
  if (textValue === "") {
    alert("Please provide some title");
    return;
  }
  const todos = localStorage.getItem("TODOS");

  if (!todos) {
    const todoList = [
      {
        title: textValue,
        completed: false,
      },
    ];
    localStorage.setItem("TODOS", JSON.stringify(todoList));
  } else {
    const previousTodos = JSON.parse(todos);
    const todoList = [
      ...previousTodos,
      {
        title: textValue,
        completed: false,
      },
    ];
    localStorage.setItem("TODOS", JSON.stringify(todoList));
  }
  showTitle();
});

interface Todos {
  title: string;
  completed: boolean;
}

const showTitle = () => {
  const todoList = document.querySelector("#todo-list") as HTMLUListElement;
  todoList.textContent = "";
  const alltodosInString = localStorage.getItem("TODOS");
  if (!alltodosInString) {
    todoList.textContent = "NO Data Found In LocalStorage";
    return;
  }
  const allTodos = JSON.parse(alltodosInString);
  allTodos.forEach((todos: Todos) => {
    const li = document.createElement("li");
    li.classList.add("py-1.5", "flex", "justify-between", "items-center");
    li.innerHTML = `
    <p>${todos.title}</p>
    <button><i onclick="removeTitle(${todos.title})" class="fa-solid fa-square-minus text-[30px] text-red-400"></i></button>
    `;
    todoList.append(li);
  });
};
showTitle();

const removeTitle = (title: string) => {
  localStorage.removeItem(title);
};

const handleClear = () => {
  localStorage.clear();
  showTitle();
};
