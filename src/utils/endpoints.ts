type EndpointTypes = {
  LOGIN_PATH: string;
  AGENT01_PATH: string;
  AGENT01_PATH2: string;
};

export const endpoints: EndpointTypes = {
  LOGIN_PATH: "auth/jwt/create/",
  AGENT01_PATH: "v1/execute",
  AGENT01_PATH2: "v1/consult",
};
