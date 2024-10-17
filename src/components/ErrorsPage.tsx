import { ErrorsIcon } from "../icons/Icons.component";

const ErrorsPage = () => {
  return (
    <div className="errors">
      <div className="errors-icons">
        <ErrorsIcon />
      </div>
      <p>404 Error Not Found!</p>
    </div>
  );
};

export default ErrorsPage;
