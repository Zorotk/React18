import React, { useMemo, useTransition } from "react";
import { flushSync } from "react-dom";
import "./index.css";

const App = () => {
  const [inputValue, setinputValue] = React.useState(0);
  const [filter, setfilter] = React.useState(0);
  const [value, setvalue] = React.useState(1);
  const [arr, setarr] = React.useState([]);

  const [isLoading, startTransition] = useTransition();
  //  const defferedValue= useDefferedValue();
  //  const id= useId()

  const createRandomNumber = (count) => Math.floor(Math.random() * count);

  const createArr = (arr) =>
    arr.fill("").map((el, _) => (el = createRandomNumber(111)));

  const random = () => setarr(createArr(Array(10_000)));

  const filterItem = useMemo(() => arr.filter((el) => el == filter), [filter]);

  const test = () => {
    setTimeout(() => {
      setvalue((value) => value + 2);
      setvalue((value) => value + 2);
      flushSync(() => setvalue((value) => value + 1));
    }, [200]);
  };

  const onChange = (e) => {
    setinputValue(e.target.value);
    startTransition(() => setfilter(e.target.value));
  };

  console.log("render");

  // +
  // Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м. Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз. На какие сутки черепашка залезет на столб? Требуется написать код на JS для решения задачи и дать отве
  // В комнате находится человек. Через какое-то время в комнату заходит еще один человек и здоровается с первым. Людей в комнате становится 2, а счетчик рукопожатий становится равен 1. Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате. Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д. Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.
  // Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка..."). Известно, что в строке встречаются повторяющиеся слова. Нужно написать функцию на JS. На вход передаются строка с дублями, а на выходе мы получаем строку без дублей

  const top = (top) => {
    let days = 0;
    let distance = 0;
    const daytime = 50;
    const night = -30;
    while (distance < top) {
      distance += daytime + night;
      days++;
    }
    return days;
  };

  console.log(top(100));

  const handshakes = (count) => {
    let hands = 1;
    for (let i = 0; i <= count; i++) {
      hands += i - 1;
    }
    return hands;
  };

  console.log(handshakes(3));

  const repeat = (str) => {
    const arr = new Set(str.split(","));
    let res = "";
    arr.forEach((el) => (res += `,${el}`));
    return res.substring(1);
  };

  console.log(repeat("кошка,собака,лошадь,корова,кошка"));

  return (
    <div>
      <div>{value}</div>
      <button onClick={test}>batching</button>
      <button onClick={random}>random</button>
      <input value={inputValue} onChange={onChange} />
      <div className="">
        {isLoading && "loading"}
        {filterItem.map((el, i) => (
          <div key={i}>
            {i + 1} {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
