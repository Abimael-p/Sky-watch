import "./LoadingWeather.css"

const LoadingWeather = ({ setWeather }) => {
    return (
        <>
            <p className="loading">
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
            </p>
            <p className="loading">
                <span>W</span>
                <span>e</span>
                <span>a</span>
                <span>t</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
            </p>
        </>
    );
};

export default LoadingWeather;