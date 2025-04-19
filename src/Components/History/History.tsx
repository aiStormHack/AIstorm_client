import { HiOutlineBookOpen } from "react-icons/hi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const History = () => {
  const history = [
    {
      agent: "Executor",
      date: "Apr 17, 2025 - 14:21",
      actionType: "Update",
      description: "Price changed, 42$ → 39$",
      target: "Essential Hoodie",
    },
    {
      agent: "Business Consultant",
      date: "Apr 17, 2025 - 14:21",
      actionType: "Insight",
      description: "Suggested urgency banner o...",
      target: "Phone Case Pro",
    },
    {
      agent: "Business Consultant",
      date: "Apr 17, 2025 - 14:21",
      actionType: "Insight",
      description: "Suggested urgency banner o...",
      target: "Phone Case Pro",
    },
    {
      agent: "Business Consultant",
      date: "Apr 17, 2025 - 14:21",
      actionType: "Insight",
      description: "Suggested urgency banner o...",
      target: "Phone Case Pro",
    },
  ];

  const hasHistory = history.length > 0;

  return (
    <div className="flex flex-col min-h-64 bg-white rounded-lg p-4 border-[1px] border-[#CBD5E1]">
      {!hasHistory ? (
        <div className="flex flex-col items-center justify-center h-full">
          <HiOutlineBookOpen size={48} className="text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-700">Your History</h3>
          <p className="text-gray-500 mt-2">No recent history to display</p>
        </div>
      ) : (
        <Table className="border border-[#CBD5E1] rounded-md overflow-hidden">
          <TableHeader className="bg-[#E7EFF8] text-[#334155]">
            <TableRow>
              <TableHead className="w-60">Agent</TableHead>
              <TableHead className="w-60">Date & Time</TableHead>
              <TableHead className="w-60">Action Type</TableHead>
              <TableHead className="w-60">Description</TableHead>
              <TableHead className="text-left">Target</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#E2F1FF] rounded-md">
                        <img
                          src="/imgs/ayorIcon.svg"
                          alt="agent-icon"
                          className=""
                        />
                      </div>
                      <h2 className="text-sm text-[#334155] font-medium capitalize">
                        {item.agent}
                      </h2>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-[#334155] font-medium capitalize">
                  {item.date}
                </TableCell>
                <TableCell className="text-sm text-[#334155] font-medium capitalize">
                  {item.actionType}
                </TableCell>
                <TableCell className="text-sm text-[#334155] font-medium capitalize">
                  {item.description}
                </TableCell>
                <TableCell className="text-sm text-[#334155] font-medium capitalize">
                  <div className="flex items-center justify-between w-full">
                    <div className="">{item.target}</div>
                    <div className="text-3xl">›</div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default History;
