import { useParams } from "react-router-dom";

import RecruiterRegisterForm from "../components/Auth/RecruiterRegisterForm";

const Register = () => {
  const { type } = useParams();

  return (
    <div className="pt-40 px-32">
      {type === "recruiter" ? <RecruiterRegisterForm /> : null}
    </div>
  );
};

export default Register;
