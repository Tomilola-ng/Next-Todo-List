import Link from "next/link";
import { prisma } from "../db";
import Button from "@/components/Button";
import { redirect } from "next/navigation";
import { BiHomeHeart } from "react-icons/bi";

const newTodo = async (formData) => {
  "use server";

  const title = formData.get("title");

  await prisma.todo.create({ data: { title, complete: false } });

  redirect("/");
};

const page = () => {
  const classes =
    "border transition-colors bg-gray-100 border-neutral-700 bg-neutral-800/30 h-full mx-auto px-3 py-2 rounded";

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-primary font-bold"> New </h1>
        <Link
          href=".."
          className="border transition-colors border-neutral-700 text-light flex place-items-center gap-2 px-3 py-1 rounded"
        >
          Home <BiHomeHeart />
        </Link>
      </header>

      <form
        action={newTodo}
        className="flex flex-col gap-y-2 mt-12 w-screen max-w-full"
      >
        <input
          type="text"
          name="title"
          required={true}
          className={`${classes} py-6 w-full outline-none focus-within:border-neutral-100 hover:border-neutral-100`}
        />
        <Button classes={classes} />
      </form>
    </>
  );
};

export default page;
