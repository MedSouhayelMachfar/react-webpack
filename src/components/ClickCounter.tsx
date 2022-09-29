import { useState, useEffect } from "react";

export const ClickCounter = (): JSX.Element => {
  async function fnHandler(): Promise<number> {
    return 123;
  }

  useEffect(() => {
    const test = fnHandler();
    console.log(test);
  }, []);

  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={(): void => setCount((c) => c + 1)}>
        Count {count}
      </button>
    </div>
  );
};
