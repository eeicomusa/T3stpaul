const FloatingBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-auto bg-amber-400 rounded-[3px] shadow font-['Mulish'] overflow-hidden p-4 space-y-4 md:space-y-0 md:p-10 md:flex-row md:justify-between md:items-center md:w-[1110px] md:h-[275px]">
        {/* Left side with text, centered on small screens */}
            <div className="text-center md:text-left space-y-4 w-full">
                <div className="text-[40px] md:text-[64px] font-bold" style={{ fontFamily: "'Volkhov', serif" }}>Magical Kenya</div>
                <div className="text-sm md:text-base font-semibold leading-6 md:leading-[25px] w-full md:w-[464px]">
                    Discover the breathtaking landscapes of Kenya, from its vast savannas and rugged mountains to its abundant wildlife and pristine wilderness. Experience the adventure of a lifetime in Africa vibrant heart.
                </div>
            </div>
            {/* Right side with feature cards */}
            <div className="flex flex-col space-y-2 w-full items-center md:items-start">
                <div className="bg-white rounded-lg shadow flex items-center p-2 gap-2" style={{ minWidth: '212px' }}>
                    <div className="w-5 h-5 bg-fuchsia-400 rounded-full"></div>
                    <div className="text-fuchsia-400 text-sm font-bold">Public Transportations</div>
                </div>
                <div className="bg-white rounded-lg shadow flex items-center p-2 gap-2" style={{ minWidth: '196px' }}>
                    <div className="w-5 h-5 bg-slate-400 rounded-full"></div>
                    <div className="text-slate-400 text-sm font-bold">Nature & Adventure</div>
                </div>
                <div className="bg-white rounded-lg shadow flex items-center p-2 gap-2" style={{ minWidth: '160px' }}>
                    <div className="w-5 h-5 bg-red-400 rounded-full"></div>
                    <div className="text-red-500 text-sm font-bold">Business Tours</div>
                </div>
                <div className="bg-white rounded-lg shadow flex items-center p-2 gap-2" style={{ minWidth: '224px' }}>
                    <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                    <div className="text-yellow-500 text-sm font-bold">Private Transportations</div>
                </div>
                <div className="bg-white rounded-lg shadow flex items-center p-2 gap-2" style={{ minWidth: '130px' }}>
                    <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
                    <div className="text-blue-400 text-sm font-bold">Local Visit</div>
                </div>
            </div>
        </div>
    )
}

export default FloatingBanner;
