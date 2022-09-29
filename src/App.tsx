import "./styles.css";
import IMAGE from "./ecran.png";
import { ClickCounter } from "./ClickCounter";

export const App = (props: { name: string }): JSX.Element => {
  const array: string[] = [];

  const myFunc = (): void => {
    console.log("hello");
    console.log(array);
    console.log(props);
  };

  return (
    <>
      <h2>{process.env.NODE_ENV}</h2>
      <img src={IMAGE} alt="screenshot" />
      <h1>React18 Typescript webpack</h1>
      <button onClick={myFunc}></button>
      <ClickCounter />
    </>
  );
};
