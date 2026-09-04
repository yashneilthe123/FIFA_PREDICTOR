function LoadingSpinner() {

    return (

        <div className="flex flex-col justify-center items-center mt-12">

            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">

            </div>

            <p className="text-white text-xl mt-6">

                Loading...

            </p>

        </div>

    );

}

export default LoadingSpinner;