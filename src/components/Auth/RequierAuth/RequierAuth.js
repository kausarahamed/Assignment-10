import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase.init";

const RequierAuth = ({ childern }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (user) {
    return childern;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequierAuth;
