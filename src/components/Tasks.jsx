import { ChevronRightIcon, Trash2, Check } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <ul className="space-y-4 p-6 bg-slate-100 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2 ">
          <ul className="  flex  gap-2 bg-slate-200 text-left w-full  text-black p-2 px-3 rounded-md transition-all hover:bg-blue-200">
            <label key={task.id} className="flex items-center cursor-pointer ">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => props.onTaskClick(task.id)}
                className="hidden peer"
              />
              <div className="h-5 w-5 rounded  border bg-slate-100 border-slate-300 transition-all   peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-hover:shadow-md relative"></div>
              <Check className="w-4 h-4 text-white absolute ml-[2px]  hidden peer-checked:flex" />
            </label>
            <button>{task.title}</button>
          </ul>

          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-200 hover:bg-blue-400"
          >
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => props.onDeleteTaskClick(task.id)}>
            <Trash2 />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
