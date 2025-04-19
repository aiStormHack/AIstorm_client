import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineCursorClick, HiOutlineDuplicate } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useExecute from "@/hooks/agent/useExecute";

// Schema for form validation
const formSchema = z.object({
  prompt: z.string().min(1, "Prompt is required"),
});

interface Result {
  action: string;
  action_type: string;
  target: string;
  preview: string;
}

const Executor = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Result[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { prompt: "" },
  });

  const executeMutation = useExecute();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const res = await executeMutation.mutateAsync(data.prompt);

      // Backend now returns structured info directly
      if (res && Array.isArray(res)) {
        const parsedResults: Result[] = res.map((item) => ({
          action: item.action,
          action_type: item.action_type,
          target: item.target,
          preview: item.preview,
        }));

        setResults(parsedResults);
        setShowTable(true);
        reset();
      }
    } catch (err) {
      console.error("Execution failed", err);
    } finally {
      setIsLoading(false);
    }
  };

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
          <div className="bg-blue-100 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mb-2">
            <img src="/imgs/ayorIcon.svg" alt="AI Robot" className="w-20" />
          </div>
          <h2 className="text-xl font-bold">Executor AI Agent</h2>
          <p className="text-gray-500 font-medium text-center mt-1">
            Paste recommendations from any agent and execute with one click, or
            write them.
          </p>
        </div>

        <div className="h-0.5 w-full mx-auto bg-gray-200" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-start"
        >
          <div className="flex items-center gap-2 text-gray-800">
            <HiOutlineCursorClick className="text-2xl" />
            <h2 className="text-lg">Task Input</h2>
          </div>

          <div className="flex items-center justify-center gap-2 w-full">
            <input
              {...register("prompt")}
              className="border border-gray-200 placeholder:text-gray-400 placeholder:font-semibold rounded-md py-3.5 px-5 w-[90%] mr-auto"
              placeholder="Update product pricing on 'Essential Hoodie' to €39"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-indigo-500 text-white border-2 border-indigo-600 py-3 w-32 font-medium text-xl rounded-lg flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span className="loader w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Submit"
              )}
            </button>
          </div>

          {errors.prompt && (
            <span className="text-red-500 text-sm ml-2">
              {errors.prompt.message}
            </span>
          )}
        </form>

        <div className="flex items-center justify-end pr-10">
          <button
            onClick={async () => {
              try {
                const text = await navigator.clipboard.readText();
                if (text) {
                  setValue("prompt", text);
                }
              } catch (err) {
                console.error("Failed to paste from clipboard:", err);
                alert("Clipboard access denied or not supported.");
              }
            }}
            className="flex items-center gap-2 text-[#7269F8] hover:underline duration-200 ease-in"
          >
            <HiOutlineDuplicate className="text-2xl" />
            <h2 className="text-lg">Paste another agent’s output</h2>
          </button>
        </div>

        <div className="h-0.5 w-full mx-auto bg-gray-200" />

        {showTable && (
          <div className="mt-6">
            <Table className="border border-[#CBD5E1] rounded-md overflow-hidden">
              <TableHeader className="bg-[#E7EFF8] text-[#334155]">
                <TableRow>
                  <TableHead className="w-60">Action</TableHead>
                  <TableHead className="w-60">Type</TableHead>
                  <TableHead className="w-60">Target</TableHead>
                  <TableHead className="w-60">Preview</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="text-sm text-[#334155] font-medium">
                      {result.action}
                    </TableCell>
                    <TableCell className="text-sm text-[#334155] font-medium">
                      {result.action_type}
                    </TableCell>
                    <TableCell className="text-sm text-[#334155] font-medium">
                      {result.target}
                    </TableCell>
                    <TableCell className="text-sm text-[#334155] font-medium">
                      {result.preview}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="h-0.5 w-full mx-auto bg-gray-200" />

        <div className="flex items-center justify-center gap-5">
          <button
            type="button"
            disabled={isLoading}
            onClick={() => setResults([])}
            className="text-[#64748B] border-2 border-[#CBD5E1] py-2 w-40 font-medium text-xl rounded-lg flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="loader w-5 h-5 border-2 border-t-[#CBD5E1] rounded-full animate-spin"></span>
            ) : (
              "Undo"
            )}
          </button>
          <button
            type="button"
            disabled={isLoading}
            className="bg-indigo-500 text-white border-2 border-indigo-600 py-2 w-40 font-medium text-xl rounded-lg flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="loader w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Apply all"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Executor;
