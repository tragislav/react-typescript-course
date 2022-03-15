import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: "Tomas",
      email: "email@email.ru",
      address: { city: "Vitebsk", street: "Titova", zipcode: "2100001" },
    },
    {
      id: 2,
      name: "Tragislav",
      email: "email@email.ru",
      address: { city: "Minsk", street: "Pobeda", zipcode: "2430007" },
    },
  ];

  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
      >
        <button>fkkf</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
