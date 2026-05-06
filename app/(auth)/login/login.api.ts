import type { LoginData } from "./schema";

export const loginAPI = async (payload: LoginData) => {
  const res = await fetch("http://192.168.18.11:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("");
  }

  const json = await res.json();
};
