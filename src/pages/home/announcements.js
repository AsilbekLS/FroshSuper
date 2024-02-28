import React, { useEffect, useState } from 'react';
import { Card } from 'components/card';
import { createPagination } from 'utils/createPagination';
import axios from 'axios';

const Announcements = () => {
  const data = Array.from({ length: 800 }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);
const [anount,setAnount]=useState([])


const api = axios.create({
  baseURL: 'https://api.frossh.uz/api/announcement/get-by-moderation', // Замените на ваш базовый URL
  headers: {
    'Authorization': 'Bearer 13|Jo8fyv4DH1awgqURghcTChgVTfo1A4sjwlOD51Dw306045b1', // Замените на ваш токен
    'Content-Type': 'application/json', // Пример другого заголовка
  },
});

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await api.get('https://api.frossh.uz/api/announcement/get-by-moderation');
     await setAnount(response.data);
      console.log(response.data);
      console.log(anount);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);

  return (
    <div className="container">
      <h2 className="title">{'Top E’lonlar'}</h2>
      <div className={`cards-container ${data?.length / 4 ? 'justify-between' : ''}`}>
        {[...data].splice(currentPage, 8)?.map((_, key) => (
          <Card key={_ + key} item={key + _} />
        ))}
      </div>
      <div className="paginations">
        {createPagination(currentPage, 800 / 8).map((item, key) => (
          <button
            key={item + key}
            onClick={() => setCurrentPage(item === '...' ? currentPage : item)}
            className={currentPage === item ? 'active' : undefined}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
