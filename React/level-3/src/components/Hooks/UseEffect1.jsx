import { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count is ${count}`;
    console.log("UseEffect render hua");
  }, [count]);
  // useEffect(() => {}, [dependency]);
  // useEffect(() => {}, []);

  // dependency
  // []- kaam sirf 1 bar hoga
  // [count] - kaam tab hoga jab count ki value badlegi
  // []-  ❌ ( no array ) ->  kaam har render  par hoga
  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Click me </button>
        <button>Click me </button>
      </div>
    </div>
  );
};

export default UseEffect1;
