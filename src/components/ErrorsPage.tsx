import { ErrorsIcon } from "../icons/Icons.component";

const ErrorsPage = () => {
  return (
    <div className="errors | container">
      <div className="errors-icons">
        <ErrorsIcon />
      </div>
      <p>Username Not Found!</p>
    </div>
  );
};

export default ErrorsPage;
