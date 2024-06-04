import { RotatingSquare } from "react-loader-spinner";


const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <RotatingSquare
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="rotating-square-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
    );
};

export default LoadingSpinner;