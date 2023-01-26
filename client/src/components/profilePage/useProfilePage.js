import { useLocation, useNavigate, useParams } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { getData } from "./helper";
import { profilePageButtons } from "./profilePage.buttons";

const useProfilePage = (classes) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const id = useParams().id;
  const clickLogout = () => {
    signOut(navigate);
  };

  const buttons = profilePageButtons(clickLogout, classes);
  const data = getData(navigate, location, id);
  return { buttons, data, location };
};
export default useProfilePage;
