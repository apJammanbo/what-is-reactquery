import { useQuery } from "@tanstack/react-query";

interface ITodo {
  id: string;
  title: string;
}

const fetchTodoList = async (): Promise<ITodo[]> => {
  console.log("fetchTodoList");
  //   throw new Error("This is Error");
  return [
    { id: "a", title: "todo1" },
    { id: "b", title: "todo2" },
    { id: "c", title: "todo3" },
  ];
};

const Queries = () => {
  const { isLoading, isError, data, error, fetchStatus } = useQuery<ITodo[], Error>(["todos"], fetchTodoList);

  console.log(isLoading, isError, data, fetchStatus);
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Queries;
