// import addTask from "./addTask.js";
// import currentTaskNumberFunction from "./CurrentTaskNumber.js";
// import insertTask from "./insertTask.js";

const setValuesForExistingNote = (Id, mainDiv, note) => {
  //   console.log(note);

  const noteObject = Object.entries(note);
  noteObject.forEach(([key, _]) => {
    if (key === "task") {
      if (note["task"].length !== 0) {
        note["task"].map((task, i) => {
          if (task["content"].length > 0) {
            const div = document.createElement("div");
            const checkbox = document.createElement("input");
            const input = document.createElement("input");
            div.className = "notes--input";
            //   const workingDiv = note["id"];

            div.id = `${task["id"]}`;

            checkbox.type = "checkbox";
            checkbox.className = "note--checkbox";

            input.type = "text";
            input.className = "specific-note__style";
            input.id = `task${i}`;
            let message = task["content"] === "" ? "" : task["content"];
            input.value = message;

            if (task["completedStatus"]) {
              input.classList.add("strike--task");
              checkbox.checked = true;
            } else {
              input.classList.remove("strike--task");
              checkbox.checked = false;
            }

            //   console.log(task['content']);

            div.appendChild(checkbox);
            div.appendChild(input);

            const currentDiv = Id;
            let taskAddingDiv = document.getElementById(
              `divAppender${currentDiv}`
            );

            taskAddingDiv.appendChild(div);
            // console.log(taskAddingDiv);
          }
        });
      }
    }
  });
};

export default setValuesForExistingNote;