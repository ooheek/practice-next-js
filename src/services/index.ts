import fetch from "isomorphic-fetch";

type HelloResponse = {
  name: string;
};

export async function getHello(): Promise<HelloResponse> {
  const response = await fetch("/api/hello");
  const result: HelloResponse = await response.json();

  return result;
}
