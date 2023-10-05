import Link from "next/link";
import { prisma } from "./db";
import { LuPlus } from "react-icons/lu"
import TodoItem from "@/components/TodoItem";

const getTodos = () => {
  return prisma.todo?.findMany();
};

const updateTodo = async (todo_id, todo_bool) => {
  "use server";

  await prisma.todo?.update({
    where: { id: todo_id, data: { complete: todo_bool } },
  });
};

const Home = async () => {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-primary font-bold"> Todos </h1>
        <Link
          href="/create-new"
          className="border transition-colors border-neutral-700 text-light px-3 py-1 rounded flex gap-2 items-center"
        >
          New <LuPlus size={20} />
        </Link>
      </header>
      <main className="w-full max-h-[70%] overflow-y-scroll">
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
        ))}
      </main>
    </>
  );
};

export default Home;
