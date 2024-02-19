export type TUserSession = {
  id: string;
  username: string;
};

export type TError = {
  message: string;
};

export type TSuccess = {
  message: string;
};

export type TFetchResponse<T = null, E = null> = {
  data?: T;
  error?: E;
  status: number;
};
