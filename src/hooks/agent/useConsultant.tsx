import { useMutation } from "@tanstack/react-query";
import { endpoints } from "../../utils/endpoints";
import AuthenticatedCalls from "@/api/authenticatedapi";

const useConsultant = () => {
  const execute = async () => {
    const response = await AuthenticatedCalls.postRequest({
      url: endpoints.AGENT01_PATH2,
      data: {
        user_id: "213",
        last_month_revenue: "50000",
        user_name: "akram",
        user_email: "bedjaouiakram.93@gmail.com",
      },
    });

    return response?.data;
  };

  return useMutation({
    mutationFn: execute,
  });
};

export default useConsultant;
