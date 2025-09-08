import styles from "./Bar.module.css";

const Sidebar = () => {
  const sidebarItems = [
    { icon: "src//assets/groups.svg", label: "Главная" },
    { icon: "src//assets/groups.svg", label: "Профиль" },
    { icon: "src//assets/list.svg", label: "Настройки" },
    { icon: "/assets/schedule.svg", label: "Уведомления" },
    { icon: "/assets/search.svg", label: "Выход" },
  ];

  return (
    <div className="w-70 h-165 bg-white ml-8 shadow-md p-2 flex flex-col justify-between rounded-xl">
      <div className="w-[260px] h-[50px] bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
        Logo
      </div>

      <div className="flex justify-between mt-5 gap-4">
        {/* Левый столбец с иконками */}
        <div className="space-y-2">
          {sidebarItems.map((item, i) => (
            <div key={i} className={styles.icon}>
              <img src={item.icon} alt="" className="w-5 h-5 mx-auto" />
            </div>
          ))}
        </div>

        {/* Правый столбец с названиями */}
        <div className="space-y-2">
          {sidebarItems.map((item, i) => (
            <div key={i} className={styles.iconBlack}>
              <span className="text-white text-sm flex justify-center items-center h-full">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[260px] h-[50px] bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
        Log In
      </div>
    </div>
  );
};

export default Sidebar;
