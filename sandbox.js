const getToDos = async () => {
  const response = await fetch("list/cats.json");

  if (response.status !== 200) {
    throw new Error("cannot fetch data");
  }

  const data = await response.json();
  return data;
};

getToDos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));
