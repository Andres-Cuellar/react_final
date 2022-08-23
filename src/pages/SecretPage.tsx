import { useNavigate } from "react-router-dom";

const SecretPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container d-flex">
      <div className="mt-5">
        <h2>This is a Secret Page, please be quiet...</h2>
        <button onClick={handleBack} className="btn btn-dark">
          Back
        </button>
      </div>
    </div>
  );
};

export default SecretPage;
