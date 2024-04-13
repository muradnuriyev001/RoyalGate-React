import c from "./NotFoundPage.module.scss";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/", { replace: true });
  usePageTitle("Royal Gate | Not Found");
  return (
    <div className={c.notFound}>
      <span>Oopss.. Page Not Found</span>
      <button onClick={goHome} className={c.backHome}>
        Back To Home
      </button>
    </div>
  );
};

export default NotFoundPage;
