import "./styles.scss";
import IMAGE from "./assets/ecran.jpg";
import { ClickCounter } from "./components/ClickCounter";
import Title from "./components/Title";

export const App = (): JSX.Element => {
  return (
    <>
      <Title />
      <h2>{process.env.NODE_ENV}</h2>
      <img src={IMAGE} alt="screenshot" />
      <ClickCounter />
    </>
  );
};
