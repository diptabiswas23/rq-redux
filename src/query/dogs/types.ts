export type DogsApiOriginalResponse = {
  message: Record<string , unknown>;
  status: string;
};

export type DogsApiResponse = {
  list : Array<keyof DogsApiOriginalResponse["message"]>;
}
