import React, { useState } from 'react';


// Inline SVGs for fast loading and guaranteed preview rendering
const Play = ({ size = 24, fill = "none", className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>);
const Zap = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>);
const Smartphone = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>);
const Globe2 = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>);
const Star = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>);
const Menu = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>);
const X = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const AlertCircle = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>);
const Layers = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>);
const Settings = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>);
const CheckCircle = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>);


// Device Icons for Trust/Compatibility
const AndroidIcon = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.5 15c.8 0 1.5-.7 1.5-1.5S18.3 12 17.5 12 16 12.7 16 13.5s.7 1.5 1.5 1.5zm-11 0c.8 0 1.5-.7 1.5-1.5S7.3 12 6.5 12 5 12.7 5 13.5 5.7 15 6.5 15zM12 3C8.1 3 5 6.1 5 10v6h14v-6c0-3.9-3.1-7-7-7z" /></svg>);


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                            <Play fill="white" size={16} className="ml-1" />
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-white">
              BingeBeyond
            </span>
                    </div>


                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How it Works</a>
                        <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</a>
                        <button className="bg-indigo-500 text-white hover:bg-indigo-600 px-6 py-2.5 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95 flex items-center">
                            Download the App
                        </button>
                    </div>


                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
                        <a href="#how-it-works" className="text-base font-medium text-gray-300 hover:text-white block">How it Works</a>
                        <a href="#features" className="text-base font-medium text-gray-300 hover:text-white block">Features</a>
                        <button className="w-full mt-4 bg-indigo-500 text-white px-5 py-3 rounded-xl font-semibold text-base flex justify-center items-center">
                            Download the App
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};


const Hero = () => {
    return (
        <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <div className="text-left order-2 lg:order-1">
                        <p className="text-indigo-400 font-bold tracking-widest text-sm mb-4 uppercase">Unlock Global Content</p>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                            Watch Shows, Movies & Live Sports - <br className="hidden lg:block" />
                            <span className="text-indigo-400">Without Location Limits</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                            BingeBeyond works with your streaming apps to access content available in other regions - fast, smooth, and without breaking your device.
                        </p>

                        <div className="flex flex-col items-start gap-3 mt-2">
                            <a href="#" className="inline-block transition-transform hover:scale-105 active:scale-95">
                                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-16 md:h-[72px] -ml-2" />
                            </a>
                        </div>
                    </div>


                    <div className="relative mt-8 lg:mt-0 order-1 lg:order-2">
                        <div className="relative bg-slate-900 border border-slate-800/80 rounded-2xl shadow-2xl p-4 overflow-hidden transform md:rotate-2 hover:rotate-0 transition-transform duration-500 max-w-lg mx-auto lg:ml-auto lg:mr-0">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                                <div className="flex items-center gap-2"><Globe2 size={20} className="text-indigo-400"/> <span className="font-bold text-white">Discover Hub</span></div>
                                <div className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><Zap size={12}/> Connected</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "The Office", platform: "Netflix", region: "UK", color: "bg-red-500/20 text-red-400" },
                                    { title: "IPL Live", platform: "SonyLiv", region: "IND", color: "bg-blue-500/20 text-blue-400" },
                                    { title: "F1 Grand Prix", platform: "F1TV", region: "USA", color: "bg-red-600/20 text-red-500" },
                                    { title: "Tokyo Anime", platform: "Crunchyroll", region: "JPN", color: "bg-orange-500/20 text-orange-400" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-800/50 rounded-xl p-4 flex flex-col justify-end h-48 relative group cursor-pointer border border-slate-700/50 hover:border-indigo-500 transition-colors shadow-lg">
                                        <div className="absolute top-3 right-3 bg-slate-900/80 px-2 py-1 rounded text-[10px] font-bold text-gray-300">{item.region}</div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">{item.title}</h4>
                                            <span className={`text-[10px] px-2 py-1 rounded font-bold ${item.color} mt-2 inline-block`}>{item.platform}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};


const Logos = () => {
    // Stylized text-based logos for fast loading
    const logos = [
        <span className="text-2xl md:text-3xl font-black text-[#E50914] tracking-tighter uppercase font-sans">NETFLIX</span>,
        <span className="text-2xl md:text-3xl font-black text-white tracking-tighter lowercase font-sans">max</span>,
        <span className="text-2xl md:text-3xl font-bold text-white tracking-wider font-serif italic">Disney+</span>,
        <span className="text-2xl md:text-3xl font-black text-[#1ce783] tracking-tighter lowercase font-sans">hulu</span>,
        <span className="text-2xl md:text-3xl font-black text-white tracking-tight">SONY<span className="text-[#00A8E1]">LIV</span></span>,
        <span className="text-xl md:text-2xl font-bold text-[#00A8E1] tracking-tight font-sans">prime video</span>,
        <span className="text-2xl md:text-3xl font-black text-green-500 tracking-tighter italic font-sans">PTV Sports</span>,
    ];


    return (
        <div className="py-6 bg-slate-900 border-y border-slate-800 flex items-center overflow-hidden">
            <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
          width: max-content;
        }
        .animate-marquee-fast:hover {
          animation-play-state: paused;
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-4 w-full flex items-center">
                {/* Static Left Side */}
                <div className="relative z-20 pr-6 md:pr-10 bg-slate-900 border-r border-slate-800 flex-shrink-0 flex items-center h-12">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Works With</span>
                </div>


                {/* Scrolling Right Side */}
                <div className="flex-1 overflow-hidden relative ml-4 md:ml-8 h-12 flex items-center">
                    {/* Fade Edges */}
                    <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-marquee-fast flex items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                        {/* Duplicated multiple times to ensure seamless infinite scroll on ultra-wide screens */}
                        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0">
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


/* --- INTEGRATED GATHER SECTIONS --- */


const ProblemSection = () => {
    return (
        <div id="problem" className="py-24 bg-slate-950 border-y border-slate-800/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950"></div>


            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your favorite shows aren't gone. <br className="md:hidden"/>They're being gatekept.</h2>
                    <p className="text-xl text-gray-400">You pay 100% for the subscriptions. Stop settling for 10%.</p>
                </div>


                <div className="max-w-2xl mx-auto">
                    <div className="bg-slate-900 border border-red-500/30 rounded-2xl p-10 md:p-14 flex flex-col items-center text-center shadow-[0_0_50px_rgba(239,68,68,0.1)] relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                        <AlertCircle size={56} className="text-red-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                        <p className="text-white font-bold text-2xl md:text-3xl leading-snug">"This title is not available in your current region."</p>
                        <div className="mt-8 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-red-500/20">
                            Error: Geo-blocked
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const MentalModel = () => {
    return (
        <div className="py-24 bg-indigo-950/10 relative border-b border-slate-800/50">
            {/* Abstract background blur to differentiate the section visually */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>


            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center leading-tight">
                    Your favorite streaming apps, <br className="hidden md:block"/>
                    now without borders.
                </h2>


                {/* Asymmetrical Bento Box Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Card 1: Wide */}
                    <div className="md:col-span-7 bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-slate-800/50 rounded-3xl p-10 md:p-12 flex flex-col justify-center relative overflow-hidden group hover:border-slate-700 transition-all">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[50px] group-hover:bg-indigo-500/10 transition-colors"></div>
                        <Layers size={48} className="text-indigo-400 mb-8 relative z-10" strokeWidth={1.5} />
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">No new apps</h3>
                        <p className="text-gray-400 text-lg relative z-10 leading-relaxed">Keep using the streaming apps already installed on your phone.</p>
                    </div>


                    {/* Card 2: Square */}
                    <div className="md:col-span-5 bg-slate-900 border border-slate-800/50 rounded-3xl p-10 md:p-12 flex flex-col justify-center group hover:border-slate-700 transition-all">
                        <Globe2 size={48} className="text-indigo-400 mb-8" strokeWidth={1.5} />
                        <h3 className="text-2xl font-bold text-white mb-4">No switching platforms</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">Browse what’s available globally from one central hub.</p>
                    </div>


                    {/* Card 3: Full Width Banner */}
                    <div className="md:col-span-12 bg-slate-900 border border-slate-800/50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:border-slate-700 transition-all">
                        <div className="w-20 h-20 shrink-0 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                            <Settings size={36} className="text-indigo-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">No complicated setup</h3>
                            <p className="text-gray-400 text-lg">It just works in the background. Zero tech skills required.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};


/* --- OLD PAGE SECTIONS RESUME --- */


const ContentShowcase = () => {
    const row1 = [
        { title: "IPL Cricket Finals", platform: "SonyLiv", region: "IND", category: "Live Sports", color: "text-blue-400", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600&auto=format&fit=crop" },
        { title: "Demon Slayer S4", platform: "Crunchyroll", region: "JPN", category: "Global Anime", color: "text-orange-400", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop" },
        { title: "Premier League", platform: "Peacock", region: "USA", category: "Live Sports", color: "text-green-400", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop" },
        { title: "Jujutsu Kaisen", platform: "Netflix", region: "JPN", category: "Global Anime", color: "text-red-400", image: "https://images.unsplash.com/photo-1580477655124-b908ef922d41?q=80&w=600&auto=format&fit=crop" },
        { title: "UFC Fight Night", platform: "ESPN+", region: "USA", category: "Live Sports", color: "text-red-500", image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=600&auto=format&fit=crop" },
    ];


    const row2 = [
        { title: "The Untamed", platform: "Netflix", region: "CHN", category: "C-Drama", color: "text-red-400", image: "https://images.unsplash.com/photo-1545785002-95f70bb7e3ff?q=80&w=600&auto=format&fit=crop" },
        { title: "The Last of Us", platform: "HBO Max", region: "USA", category: "Drama", color: "text-purple-400", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop" },
        { title: "Squid Game", platform: "Netflix", region: "KR", category: "K-Drama", color: "text-pink-400", image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=600&auto=format&fit=crop" },
        { title: "The Bear", platform: "Hulu", region: "USA", category: "Originals", color: "text-green-400", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop" },
        { title: "Queen of Tears", platform: "Netflix", region: "KR", category: "K-Drama", color: "text-indigo-400", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop" },
    ];


    const getPlatformLogo = (platform) => {
        switch (platform.toLowerCase()) {
            case 'netflix': return <span className="font-black text-[#E50914] tracking-tighter uppercase font-sans">NETFLIX</span>;
            case 'hbo max': return <span className="font-black text-white tracking-tighter uppercase font-sans">HBO <span className="text-purple-500">MAX</span></span>;
            case 'disney+': return <span className="font-bold text-white tracking-wider font-serif italic">Disney+</span>;
            case 'hulu': return <span className="font-black text-[#1ce783] tracking-tighter lowercase font-sans">hulu</span>;
            case 'sonyliv': return <span className="font-black text-white tracking-tight">SONY<span className="text-[#00A8E1]">LIV</span></span>;
            case 'prime video': return <span className="font-bold text-[#00A8E1] tracking-tight font-sans lowercase">prime video</span>;
            case 'crunchyroll': return <span className="font-black text-[#F47521] tracking-tighter uppercase font-sans">CRUNCHYROLL</span>;
            case 'peacock': return <span className="font-black text-white tracking-widest uppercase font-sans">PEACOCK</span>;
            case 'espn+': return <span className="font-black text-[#E31837] tracking-tighter italic font-sans">ESPN+</span>;
            default: return <span className="font-bold text-gray-300 tracking-wider uppercase">{platform}</span>;
        }
    };


    return (
        <div className="py-24 bg-slate-900 border-b border-slate-800 overflow-hidden relative">
            <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
          width: max-content;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>


            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
                <p className="text-indigo-400 font-bold tracking-widest text-sm mb-4 uppercase">Millions of Shows, Matches & Movies</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                    Stream right on the apps <br className="hidden md:block"/> you already use.
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Access live sports on SonyLiv, exclusive anime on Crunchyroll Japan, and blockbusters on US Netflix in seconds. Connect once and explore entertainment worldwide.
                </p>
            </div>


            <div className="relative w-full flex flex-col gap-6 select-none opacity-90">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>

                <div className="animate-scroll-left flex gap-6 px-3">
                    {[...row1, ...row1].map((item, idx) => (
                        <div key={idx} className={`flex-shrink-0 w-72 rounded-2xl border border-slate-700/50 p-5 flex flex-col justify-between h-44 cursor-pointer hover:scale-105 hover:border-slate-500 transition-all duration-300 relative overflow-hidden group shadow-lg`}>
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 bg-slate-800" style={{ backgroundImage: `url(${item.image})` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/30 group-hover:via-slate-900/60 transition-colors duration-300"></div>

                            <div className="flex justify-between items-start relative z-10">
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-slate-950/80 border border-slate-700/50 ${item.color}`}>{item.category}</span>
                                <span className="text-[10px] font-bold text-white bg-black/40 border border-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md">{item.region}</span>
                            </div>
                            <div className="relative z-10 mt-4">
                                <h4 className="text-white font-extrabold text-lg leading-tight mb-2 tracking-tight drop-shadow-md">{item.title}</h4>
                                <div className="flex items-center gap-1.5 drop-shadow-md">
                                    <Play size={12} className={item.color} fill="currentColor"/>
                                    <div className="text-[11px] flex items-center">
                                        {getPlatformLogo(item.platform)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="animate-scroll-right flex gap-6 px-3">
                    {[...row2, ...row2].map((item, idx) => (
                        <div key={idx} className={`flex-shrink-0 w-72 rounded-2xl border border-slate-700/50 p-5 flex flex-col justify-between h-44 cursor-pointer hover:scale-105 hover:border-slate-500 transition-all duration-300 relative overflow-hidden group shadow-lg`}>
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 bg-slate-800" style={{ backgroundImage: `url(${item.image})` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/30 group-hover:via-slate-900/60 transition-colors duration-300"></div>

                            <div className="flex justify-between items-start relative z-10">
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-slate-950/80 border border-slate-700/50 ${item.color}`}>{item.category}</span>
                                <span className="text-[10px] font-bold text-white bg-black/40 border border-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md">{item.region}</span>
                            </div>
                            <div className="relative z-10 mt-4">
                                <h4 className="text-white font-extrabold text-lg leading-tight mb-2 tracking-tight drop-shadow-md">{item.title}</h4>
                                <div className="flex items-center gap-1.5 drop-shadow-md">
                                    <Play size={12} className={item.color} fill="currentColor"/>
                                    <div className="text-[11px] flex items-center">
                                        {getPlatformLogo(item.platform)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
            </div>
        </div>
    );
};


const VisualSmartRoute = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 p-8 gap-6">
        <div className="w-full bg-slate-900 border border-indigo-500/30 rounded-xl p-4 flex items-center relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
            <Play size={28} className="text-indigo-400 ml-2 mr-4" fill="currentColor"/>
            <div className="text-left flex-1">
                <h4 className="text-white font-bold text-sm">Streaming Apps</h4>
                <p className="text-indigo-300/80 text-xs mt-0.5">Routed globally</p>
            </div>
            <div className="bg-indigo-500/20 text-indigo-400 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                <Zap size={12} /> Express Lane
            </div>
        </div>


        <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 flex items-center relative overflow-hidden opacity-60 shadow-lg">
            <div className="absolute top-0 left-0 w-1 h-full bg-gray-600"></div>
            <Smartphone size={28} className="text-gray-400 ml-2 mr-4" />
            <div className="text-left flex-1">
                <h4 className="text-white font-bold text-sm">Everyday Apps</h4>
                <p className="text-gray-500 text-xs mt-0.5">Maps, Banking, Social</p>
            </div>
            <div className="bg-slate-800 text-gray-400 text-[10px] font-bold px-3 py-1.5 rounded-full">
                Local Internet
            </div>
        </div>
    </div>
);


const SimpleFeature = ({ eyebrow, title, description, points, visual, reverse }) => (
    <div className={`py-16 lg:py-24 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`order-2 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl bg-slate-900/50 border border-slate-800/50 p-2 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                        {visual}
                    </div>
                </div>
                <div className={`order-1 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                    {eyebrow && (
                        <p className="text-indigo-400 font-bold tracking-widest text-sm mb-4 uppercase">
                            {eyebrow}
                        </p>
                    )}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{title}</h2>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">{description}</p>

                    {points && (
                        <ul className="space-y-4">
                            {points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <CheckCircle className="text-indigo-500 mt-1 flex-shrink-0" size={20} />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    </div>
);


const VisualPerformance = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 p-8">
        <div className="text-center mb-8">
            <div className="text-5xl font-black text-white tracking-tighter">4K <span className="text-indigo-500">UHD</span></div>
            <p className="text-gray-400 font-medium mt-2">Smooth Playback</p>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full h-full animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>
        <p className="text-xs text-gray-500 mt-4 font-mono">Speed: Optimized for Streaming</p>
    </div>
);


const VisualAutoConnect = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 p-8 gap-4">
        <div className="w-full bg-slate-900 border border-indigo-500/30 rounded-xl p-3 flex items-center gap-3 shadow-lg">
            <Globe2 size={20} className="text-indigo-400"/>
            <div className="text-left flex-1">
                <div className="text-white font-bold text-sm">1. Find Show in Hub</div>
                <div className="text-gray-500 text-[10px]">Browsing global catalog</div>
            </div>
        </div>

        <div className="flex flex-col items-center gap-1">
            <div className="w-1 h-4 bg-gradient-to-b from-indigo-500/50 to-indigo-500"></div>
            <Zap size={16} className="text-indigo-500" />
            <div className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-indigo-500/50"></div>
        </div>


        <div className="w-full bg-indigo-500/10 border border-indigo-500/50 rounded-xl p-3 flex items-center gap-3 shadow-[0_0_20px_rgba(99,102,241,0.2)] relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]"></div>
            <Play size={20} className="text-white" fill="white"/>
            <div className="text-left flex-1">
                <div className="text-white font-bold text-sm">2. Instant Playback</div>
                <div className="text-indigo-400 text-[10px]">Auto-connected to Node</div>
            </div>
        </div>
    </div>
);


const HowItWorks = () => {
    return (
        <div id="how-it-works" className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950/20 border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Start binge-watching in 3 simple steps.</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Step 1 */}
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 relative overflow-hidden group hover:border-indigo-500/50 transition-all shadow-xl">
                        <div className="absolute -right-4 -top-8 text-[150px] font-black text-slate-800/30 group-hover:text-indigo-500/10 transition-colors pointer-events-none leading-none select-none">1</div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4">Connect your platforms</h3>
                            <p className="text-gray-400 text-base leading-relaxed">Select the streaming apps you already use. Zero logins or passwords required - we just need to know what you have.</p>
                        </div>
                    </div>


                    {/* Step 2 */}
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 relative overflow-hidden group hover:border-indigo-500/50 transition-all shadow-xl">
                        <div className="absolute -right-4 -top-8 text-[150px] font-black text-slate-800/30 group-hover:text-indigo-500/10 transition-colors pointer-events-none leading-none select-none">2</div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4">Discover Beyond</h3>
                            <p className="text-gray-400 text-base leading-relaxed">Explore our unified hub to find global releases, live sports, and regional catalogs you never knew you had access to.</p>
                        </div>
                    </div>


                    {/* Step 3 - Accent Color */}
                    <div className="bg-indigo-600/10 border border-indigo-500/30 rounded-3xl p-10 relative overflow-hidden group hover:border-indigo-500/50 hover:bg-indigo-600/20 transition-all shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                        <div className="absolute -right-4 -top-8 text-[150px] font-black text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors pointer-events-none leading-none select-none">3</div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4">Just hit play</h3>
                            <p className="text-gray-300 text-base leading-relaxed">Tap any title and we'll instantly route the right global connection in the background. Grab the popcorn, we handle the rest.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};


const TrustSection = () => (
    <div id="trust" className="py-20 bg-slate-900/40 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={28} className="text-yellow-500 fill-yellow-500 mx-1" />)}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Trusted by over 100,000 streamers</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                "I used to spend 10 minutes guessing which VPN server wouldn't buffer my F1 stream. Now I just open the app and hit play. It's incredibly simple."
            </p>
            <p className="text-indigo-400 font-bold">- Ahmed R., Global Expat</p>
        </div>
    </div>
);


const Footer = () => (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center">
                        <Play fill="white" size={10} className="ml-0.5" />
                    </div>
                    <span className="font-bold text-xl text-white">BingeBeyond</span>
                </div>
                <div className="flex gap-6 text-sm text-gray-500 font-medium">
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms of Service</a>
                    <a href="#" className="hover:text-white transition">Contact Us</a>
                </div>
                <p className="text-gray-600 text-sm">© 2026 BingeBeyond.</p>
            </div>
        </div>
    </footer>
);


export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-gray-100 selection:bg-indigo-500/30">
            <Navbar />

            <main>
                <Hero />

                <Logos />


                <ProblemSection />

                <ContentShowcase />


                <HowItWorks />

                {/* UNIFIED FEATURES SECTION */}
                <div id="features" className="py-24 bg-slate-950 relative border-b border-gray-800">

                    {/* Unifying Section Heading */}
                    <div className="max-w-4xl mx-auto px-4 text-center mb-8 md:mb-16">
                        <p className="text-indigo-400 font-bold tracking-widest text-sm mb-4 uppercase">High-Performance Network</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Built for binge-watching. <br className="hidden md:block"/> Optimized for speed.
                        </h2>
                    </div>


                    <SimpleFeature
                        reverse={true}
                        eyebrow="Zero Tunnel Tax"
                        title="Stream globally with zero phone lag."
                        description="Traditional VPNs force your entire device through a slow connection, causing massive lag. BingeBeyond uses SmartRoute™ technology to fix this by intelligently separating your traffic. We apply the VPN only to the specific streaming apps you select, leaving the rest of your phone completely untouched."
                        points={[
                            "SmartRoute™ separates streaming traffic from normal traffic",
                            "The VPN is only applied to the streaming apps you pick",
                            "Everyday apps bypass the VPN to stay lightning fast"
                        ]}
                        visual={<VisualSmartRoute />}
                    />

                    <SimpleFeature
                        reverse={true}
                        eyebrow="Instant Delivery"
                        title="Smooth, buffer-free playback."
                        description="Wherever you connect from, the network is built for speed, stability, and smooth playback. Stop playing server roulette trying to find a good connection."
                        points={[
                            "Built specifically for high-speed 4K streaming",
                            "Automatically connects to the fastest routing lane",
                            "Optimized for live sports and global premieres"
                        ]}
                        visual={<VisualPerformance />}
                    />


                    <SimpleFeature
                        reverse={true}
                        eyebrow="Universal Remote"
                        title="One tap from search to stream."
                        description="Don't waste time guessing which country's server has the show you want. Find it directly in the BingeBeyond hub, hit play, and we automatically connect the right global node to launch your stream."
                        points={[
                            "Browse global catalogs in one unified hub",
                            "Auto-connects to the required country node",
                            "Launches your streaming app instantly"
                        ]}
                        visual={<VisualAutoConnect />}
                    />
                </div>


                <MentalModel />


                <TrustSection />


                <div className="py-24 relative overflow-hidden bg-blue-950/20">
                    <div className="absolute inset-0 bg-indigo-900/10"></div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start watching global TV today.</h2>
                        <p className="text-xl text-gray-400 mb-10">Download Binge Beyond now to unlock shows and movies from around the globe.</p>
                        <a href="#" className="inline-block transition-transform hover:scale-105 active:scale-95">
                            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-16 md:h-[72px]" />
                        </a>
                    </div>
                </div>


            </main>


            <Footer />
        </div>
    );
}



