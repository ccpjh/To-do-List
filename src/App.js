
import DiaryEditor from './DiaryEditor';
import DiaryList from "./DiaryList";
import { useState, useRef } from 'react';
import './App.css';



function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data])
  }

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  return (
      <div className="App">
          <DiaryEditor onCreate={onCreate} />
          <DiaryList onDelete={onRemove} diaryList={data} />
      </div>
  );
}

export default App;