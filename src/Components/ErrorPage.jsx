import "../assets/css/errorPage.css";
import sadMan from "/sadMan.svg";

const ErrorPage = () => {
  return (
    <div id="errorPageContainer">
      <div className="errorText">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
      <div className="sadMan">
        <img src={sadMan} alt="sad man" />
      </div>
    </div>
  );
};

export default ErrorPage;
