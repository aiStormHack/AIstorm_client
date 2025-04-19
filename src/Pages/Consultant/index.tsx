import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineDuplicate } from "react-icons/hi";
import { LuSparkles } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useConsultant from "@/hooks/agent/useConsultant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSchema = z.object({
  prompt: z.string().min(1, "Prompt is required"),
});

const Consultant = () => {
  const [activate, setActivate] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const {} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { prompt: "" },
  });

  const consultMutation = useConsultant();

  const handleConsult = () => {
    consultMutation.mutate(undefined, {
      onSuccess: () => {
        toast.success("Report successfully generated and sent!");
        setShowTable(true);
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    });
  };

  const isLoading = consultMutation.isPending;

  return (
    <section className="flex flex-col gap-8 py-10">
      <Link
        to="/dashboard/agents"
        className="flex items-center gap-3 text-gray-400"
      >
        <FaArrowLeft className="text-2xl" />
        <h3 className="font-semibold text-lg">Back to Agents</h3>
      </Link>

      <div className="flex flex-col gap-5 px-5 w-4/5 mx-auto bg-white py-5 rounded-xl border-[1px] border-[#CBD5E1]">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-[#EEE4FF] p-4 rounded-2xl w-20 h-20 flex items-center justify-center mb-2">
            <img src="/imgs/ayorIcon.svg" alt="AI Robot" className="w-20" />
          </div>
          <h2 className="text-xl font-bold">Business Consultant AI Agent</h2>
          <p className="text-gray-500 font-medium text-center mt-1">
            Get high-level insights and recommendations to grow your store.
          </p>
        </div>

        <div className="h-0.5 w-full mx-auto bg-gray-200" />

        <div className="flex flex-col gap-5 items-center">
          <button
            onClick={handleConsult}
            disabled={isLoading || showTable}
            className={`flex items-center gap-2 min-w-40 px-2 py-3 justify-center rounded-lg border-2 duration-200 ${
              showTable || isLoading
                ? "bg-[#F5F4F7] text-[#B0AEB9] border-[#B0AEB9] cursor-not-allowed"
                : "bg-[#7269F8] text-white border-[#7269F8] hover:opacity-90"
            }`}
          >
            {isLoading ? (
              <span className="animate-pulse text-lg font-semibold">
                Loading...
              </span>
            ) : showTable ? (
              <>
                <LuSparkles className="text-2xl" />
                <h2 className="text-lg font-semibold capitalize">
                  Already sent
                </h2>
              </>
            ) : (
              <>
                <LuSparkles className="text-2xl" />
                <h2 className="text-lg font-semibold capitalize">
                  Generate report
                </h2>
              </>
            )}
          </button>

          <h4 className="text-[#64748B] font-medium text-xl">
            A detailed report will be sent to your email!
          </h4>

          <button
            // onClick={async () => {
            //   try {
            //     const text = await navigator.clipboard.readText();
            //     if (text) {
            //       setValue("prompt", text);
            //     }
            //   } catch (err) {
            //     console.error("Failed to paste from clipboard:", err);
            //     alert("Clipboard access denied or not supported.");
            //   }
            // }}
            className="flex items-center gap-2 text-[#7269F8] hover:underline duration-200 ease-in"
          >
            <HiOutlineDuplicate className="text-2xl" />
            <h2 className="text-lg">Paste from clipboard</h2>
          </button>
        </div>

        <div className="h-0.5 w-full mx-auto bg-gray-200" />

        <div className="py-3 w-full flex items-center justify-between px-5 border-[1px] border-[#E2E8F0] rounded-lg">
          <h4>Send report every week</h4>
          <button
            onClick={() => setActivate((prev) => !prev)}
            className={`w-20 h-10 rounded-full bg-[#7269F8] flex items-center ${
              activate ? "justify-end" : "justify-start"
            } p-1 ease-linear duration-200`}
          >
            <div className="size-9 bg-white rounded-full"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Consultant;
