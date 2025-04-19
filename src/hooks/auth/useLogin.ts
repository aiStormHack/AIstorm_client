import { useMutation } from "@tanstack/react-query";
import { endpoints } from "../../utils/endpoints";
import { LoginSchemaType } from "@/types/Login/schema";
import UsersCalls from "@/api/usersapi";

const useLogin = () => {
  const login = async (data: LoginSchemaType) => {
    const response = await UsersCalls.postRequest({
      url: endpoints.LOGIN_PATH,
      data: data,
    });

    return response?.data;
  };

  return useMutation({
    mutationFn: (data: LoginSchemaType) => login(data),
  });
};

export default useLogin;
