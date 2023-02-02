import { updateOne } from "./basicActions";

export const changePassword = async (userData, navigate, link) => {
  const func = () => {
    navigate(link);
  };
  await updateOne("api/password/", userData, func);
};
