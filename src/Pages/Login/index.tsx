import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/types/Login/schema";
import useLogin from "@/hooks/auth/useLogin";
import { toast } from "react-toastify";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const storeAccessToken = useAuthStore((state) => state.store_access_token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const loginMutation = useLogin();

  const onSubmit = (data: LoginSchemaType) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        const { access, refresh } = res || {};

        if (access && refresh) {
          storeAccessToken(access);
          toast.success("Logged in successfully!");
          navigate("/dashboard/agents");
        } else {
          toast.error("Invalid login response from server.");
        }
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message || "Login failed!");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full border border-gray-200 placeholder:text-gray-400 placeholder:font-semibold rounded-md py-3 px-4"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full border border-gray-200 placeholder:text-gray-400 placeholder:font-semibold rounded-md py-3 px-4"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="bg-indigo-500 text-white py-3 px-4 rounded-lg font-medium text-lg hover:bg-indigo-600 transition disabled:opacity-50"
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
