export const isAuthenticated = (): boolean => {
  return localStorage.getItem("token") !== null;
};

export const login = () => {
  localStorage.setItem("token", "authenticated");
};

export const logout = () => {
  localStorage.removeItem("token");
};