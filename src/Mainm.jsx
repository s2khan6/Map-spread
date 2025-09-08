import { useState } from "react";

const Mainm = () => {
	const [statuses, setStatuses] = useState(Array(6).fill(null)); // null — ничего не выбрано

const handleStatusClick = (studentIndex, statusIndex) => {
  const updated = [...statuses];
  updated[studentIndex] = statusIndex;
  setStatuses(updated);
};

	const avatars = [
  "src//assets/avatar1.png",
  "src//assets/avatar1.png",
    "src//assets/avatar1.png",
	  "src//assets/avatar1.png",
	    "src//assets/avatar1.png",
		  "src//assets/avatar1.png",
];

const names = [
  "Иванов Иван",
  "Петрова Мария",
  "Сидоров Алексей",
  "Кузнецова Ольга",
  "Морозов Николай",
  "Смирнова Анна",
];



const statusColors = ["bg-green-500", "bg-yellow-400", "bg-red-500"];

  return (
	
    <div className="flex-1 px-10 py-8 bg-blue-50 rounded-l-xl overflow-auto">
      {/* Топбар */}
      <div className="flex justify-between items-center mb-10">
        <div className="w-52 h-10 bg-black rounded-full"></div>
        <div className="w-28 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">Фильтр</div>
      </div>

      {/* Контент */}
      <div className="bg-white px-6 py-8 rounded-2xl shadow-lg w-full max-w-[1200px] mx-auto min-h-[500px]">
        {/* Заголовки таблицы */}
        <div className="flex justify-between mb-6">
          <div className="w-24 h-6 bg-gray-400 rounded flex items-center justify-center text-white font-bold">SDP-242</div>
          <div className="w-24 h-6 bg-gray-400 rounded flex items-center justify-center text-white font-bold">Группа 5</div>
          <div className="w-40 h-6 bg-gray-400 rounded mx-auto flex items-center justify-center text-white font-bold">Количество 	</div>
          <div className="w-28 h-6 bg-gray-400 rounded flex items-center justify-center text-white font-bold">Присутствие</div>
        </div>

        {/* Строки журнала */}
       
          
        {/* Строки журнала */}
{avatars.map((avatar, i) => (
  <div key={i} className="flex items-center justify-between gap-4 mb-4">
    
    {/* Аватар */}
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img src={avatar} alt={`avatar-${i}`} className="w-full h-full object-cover" />
    </div>

    {/* ФИО */}
    <div className="text-gray-700 font-medium w-40 truncate">
      {names[i]}
    </div>

    {/* Метки статуса — теперь СПРАВА */}
    <div className="flex gap-1 ml-auto">
      {statusColors.map((color, statusIdx) => (
        <div
          key={statusIdx}
          onClick={() => handleStatusClick(i, statusIdx)}
          className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all 
            ${color} 
            ${statuses[i] === statusIdx ? 'ring-2 ring-black scale-110' : ''}`}
        />
		
      ))}
	  
    </div>
	
  </div>
))}

{/* Футер */}
<div className="mt-25 flex items-center justify-between bg-black px-6 py-4 rounded-xl shadow">
  {/* Поиск */}
  <input
    type="text"
    placeholder="Поиск..."
    className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  {/* Профиль */}
  <div className="w-10 h-10 rounded-full overflow-hidden ml-4">
    <img src="" alt="Профиль" className="w-full h-full object-cover" />
  </div>
</div>




      </div>
    </div>
  );
};

export default Mainm;
