import { useEffect, useState } from "react";

const CountDownview = () => {
  const[count, setCount] = useState(10);


  useEffect(() => {
    if (count === 0) {
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [count])

  return (
    <div>
      {count}

    </div>
  )
}

export default CountDownview;