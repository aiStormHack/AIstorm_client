import { useState } from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";

import AgentsTab from "../../Components/Agents/AgentsTab";
import History from "../../Components/History/History";

const Agents = () => {
  const [selectedTab, setSelectedTab] = useState("Agents");

  const selectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const tabs = [
    {
      name: "Agents",
      icon: <RiRobot2Line className="" size={24} />,
    },
    {
      name: "History",
      icon: <HiOutlineBookOpen className="" size={24} />,
    },
  ];

  return (
    <section className="min-h-screen py-8 px-6 sm:px-10 flex flex-col gap-8">
      {/* Banner Image */}
      <div className="w-full rounded-xl overflow-hidden shadow-sm">
        <img
          src="/imgs/pageHeader.png"
          alt="Ayor Agent Studio"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Welcome Text */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl sm:text-3xl text-gray-900 font-semibold">
          Hello, Oussama
        </h2>
        <h5 className="text-gray-400 text-lg sm:text-xl font-medium">
          Let's us help you
        </h5>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-10">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex flex-col items-center gap-1 pb-2 border-b-2 transition-colors ${
              selectedTab === tab.name
                ? "border-indigo-500 text-indigo-500"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => selectTab(tab.name)}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span className="text-base font-medium capitalize">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Agent Cards Grid */}
      {selectedTab === "Agents" ? <AgentsTab /> : <History />}
    </section>
  );
};

export default Agents;
