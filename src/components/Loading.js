import Loader from "react-loader-spinner"

const Loading = () => {
    return (
        <div className="min-h-screen bg-third flex flex-col items-center justify-center">
            <Loader
                type="Puff"
                color="#081845"
                height={100}
                width={100}                        
            />
            <p className="text-primary pt-4">Loading</p>    
            
        </div>
    )
}

export default Loading
