"use client";
import { motion } from "framer-motion";

const TodoItem = ({ todo, updateTodo }) => {
  const classes =
    "border transition-colors bg-gray-100 border-neutral-700 bg-neutral-800/30 h-full mx-auto px-2 py-4 my-2";

  return (
    <motion.div
      key={todo.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${classes} hover:border-neutral-300 rounded`}
    >
      <input
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.complete}
        className="peer cursor-pointer bg-primary text-primary"
        onChange={() => updateTodo}
      />
      <label
        htmlFor={todo.id}
        className="peer-checked:line-through text-slate-300 cursor-pointer pl-2"
      >
        {todo.title}
      </label>
    </motion.div>
  );
};

export default TodoItem;
