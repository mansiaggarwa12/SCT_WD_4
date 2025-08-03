let serialNumbr = 1;


document.getElementById("addTaskBtn").onclick = function (e) {
    e.preventDefault();
    let now = new Date();
    let task = document.getElementById("task").value;
    let comment = document.getElementById("comments").value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let table = document.getElementById("todo_table");
    let newRow = document.createElement("tr");
    let snoCell = document.createElement("td");
    snoCell.innerText = serialNumbr;

    let taskCell = document.createElement("td");
    taskCell.innerText = task + "\n(" + comment + ")";

    let time = now.toLocaleTimeString();
    let timeCell = document.createElement("td");
    timeCell.innerText = time;


    let cb = document.createElement("button");
    cb.innerText = "Completed";
    cb.onclick = function () {
        taskCell.style.textDecoration = "line-through";
        taskCell.style.color = "gray";
        cb.disabled = true;
        eb.disabled = true;
    };




    // ed=edit delete button
    let ed = document.createElement("td");
    // eb=edit button
    let eb = document.createElement("button");
    eb.innerText = "Edit";
    eb.onclick = function () {
        let newTask = prompt("Edit task:", task);
        let newComment = prompt("Edit comment:", comment);
        if (newTask !== null) {
            task = newTask;
            comment = newComment;
            taskCell.innerText = task + "\n(" + comment + ")";
            let editTime = new Date();
            timeCell.innerText = editTime.toLocaleTimeString();
        }
    };
    ed.appendChild(eb);

 let progressCell = document.createElement("td");
progressCell.innerText = "Pending";
progressCell.style.cursor = "pointer";
progressCell.style.textAlign = "center";
progressCell.onclick = function () {
    if (progressCell.innerText === "Pending") {
        progressCell.innerText = "Done";
    } else {
        progressCell.innerText = "Pending";
    }
};


    newRow.appendChild(snoCell);
    newRow.appendChild(taskCell);
    newRow.appendChild(progressCell);  // ⬅️ Add this line

    newRow.appendChild(timeCell);
    newRow.appendChild(ed);

    table.appendChild(newRow);

    document.getElementById("task").value = "";
    document.getElementById("comments").value = "";
    serialNumbr++;
};
