
function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 min-[320px]:text-center  px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4   text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How AirBnb Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Just a clone</p>
                <p>Only frontend done here</p>
                <p>Look around</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Arif Onoy</p>
                <p>Presents</p>
                <p>AirBnb 2.0</p>
                <p>clone of the original</p>
                <a href="https://www.airbnb.com">Airbnb</a>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Tutorial</h5>
                <p>Type in Search bar</p>
                <p>select dates</p>
                <p>See the Results</p>
                
                <p>Thank You</p>
            </div>
        </div>
    )
}

export default Footer