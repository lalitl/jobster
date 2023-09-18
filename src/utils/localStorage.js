export const addToLocalStroage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeItem = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
