import { useMutation } from "@tanstack/react-query";
import { endpoints } from "../../utils/endpoints";
import AuthenticatedCalls from "@/api/authenticatedapi";

const useExecute = () => {
  const execute = async (data: any) => {
    const response = await AuthenticatedCalls.postRequest({
      url: endpoints.AGENT01_PATH,
      data: {
        recommendations: [data],
      },
    });

    return response?.data;
  };

  return useMutation({
    mutationFn: (data: any) => execute(data),
  });
};

export default useExecute;
