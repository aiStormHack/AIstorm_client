import { useNavigate } from "react-router-dom";

const AgentsTab = () => {
  const agentCards = [
    {
      path: "/dashboard/executer",
      img: "/imgs/executor.png",
    },
    {
      path: "dashboard/agents/",
      img: "/imgs/productReaserch.png",
    },
    {
      path: "dashboard/agents/",
      img: "/imgs/priceCard.png",
    },
    {
      path: "/dashboard/consultant/",
      img: "/imgs/business.png",
    },
    {
      path: "dashboard/agents/",
      img: "/imgs/retention.png",
    },
    {
      path: "dashboard/agents/",
      img: "/imgs/landingPage.png",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {agentCards.map((card, index) => (
        <div
          onClick={() => navigate(card.path)}
          className="hover:shadow-xl duration-200 ease-in cursor-pointer"
        >
          <img
            src={card.img}
            key={index}
            alt="card"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default AgentsTab;
