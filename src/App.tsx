import Card, { CardVariant } from "./components/Card";

const App = () => {
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
    </div>
  );
};

export default App;
