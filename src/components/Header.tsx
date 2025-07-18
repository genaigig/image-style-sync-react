import { User, Grid3X3 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "DASHBOARD", path: "/dashboard", icon: Grid3X3 },
    { name: "LAUNCH", path: "/", icon: null },
    { name: "DCIQ", path: "#", icon: null },
    { name: "EQUIPMENT", path: "#", icon: null },
    { name: "MANAGE SITE", path: "#", icon: null },
  ];

  const handleTabClick = (tab: any) => {
    if (tab.path !== "#") {
      navigate(tab.path);
    }
  };

  return (
    <header className="bg-green-600 text-white">
      <div className="flex items-center justify-between">
        <div className="flex">
          {tabs.map((tab, index) => {
            const isActive = location.pathname === tab.path;
            return (
              <div
                key={tab.name}
                className={`px-6 py-4 cursor-pointer transition-colors ${
                  isActive 
                    ? "bg-yellow-400 text-black font-semibold" 
                    : "hover:bg-green-700"
                } ${index === 0 && !isActive ? "bg-green-700" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                <div className="flex items-center gap-2">
                  {tab.icon && <tab.icon size={20} />}
                  <span className="text-sm font-medium">{tab.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4 px-6">
          <div className="bg-white text-black p-2 rounded">
            <Grid3X3 size={20} />
          </div>
          <div className="bg-gray-600 text-white p-2 rounded-full">
            <span className="text-sm font-bold">RR</span>
          </div>
          <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
            appian
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
