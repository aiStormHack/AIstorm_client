import { useAuthStore } from "@/store/authStore";
import { axiosPrivate } from "@/utils/axiosPrivate";

const AuthenticatedCalls = {
  async getRequest({ url }: { url: string }): Promise<any> {
    const access_token = useAuthStore.getState().access_token; // Get the access_token
    const response = await axiosPrivate.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  },

  async postRequest({
    url,
    data,
  }: {
    url: string;
    data: any[] | any;
  }): Promise<any> {
    const access_token = useAuthStore.getState().access_token; // Get the access_token
    const response = await axiosPrivate.post(url, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  },

  async patchRequest({
    url,
    data,
  }: {
    url: string;
    data: any[] | any;
  }): Promise<any> {
    const access_token = useAuthStore.getState().access_token; // Get the access_token
    const response = await axiosPrivate.patch(url, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  },

  async deleteRequest({ url }: { url: string }): Promise<any> {
    const access_token = useAuthStore.getState().access_token; // Get the access_token
    const response = await axiosPrivate.delete(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  },

  async postRequestFormData({
    url,
    data,
  }: {
    url: string;
    data: FormData;
  }): Promise<any> {
    const access_token = useAuthStore.getState().access_token; // Get the access_token
    const response = await axiosPrivate.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  },
};

export default AuthenticatedCalls;
