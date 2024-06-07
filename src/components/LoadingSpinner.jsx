import { GridLoader } from "react-spinners";



const LoadingSpinner = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
            <GridLoader color="#36d7b7" />
        </div>
    );
};

export default LoadingSpinner;