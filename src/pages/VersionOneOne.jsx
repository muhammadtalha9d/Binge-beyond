import React, { useState, useEffect, useRef } from 'react';
import bgImage from './collage2.jpg'; // Adjust path as needed
import unlocked from './unlocked.jpg';
import bingeWatching from './bingeWatching.jpg';
import stepsImg from './3steps-bg.jpg';
import favourite from './favouritesection.jpg';
// 1. Brand icons imported from react-icons/fi (Feather)
import { FiGithub as Github, FiTwitter as Twitter, FiInstagram as Instagram } from 'react-icons/fi';

// 2. UI icons imported from lucide-react (Removed Github, Twitter, Instagram)
import {
    Play, Plus, Info, Monitor, Smartphone, Tablet, Tv, Gamepad2,
    ChevronRight, ChevronLeft, Search, User, Menu, X, Check, Zap, MessageSquare,
    Layers, Star, HelpCircle, ChevronDown, Globe as GlobeIcon, ShieldCheck,
    Lock, Unlock, AlertCircle, RotateCcw, Pointer, Radio, Activity, ZapIcon,
    Cpu, MousePointer2, Wifi, FastForward, Target, PlayCircle, Terminal,
    Navigation, Share2, Layers as LayersIcon, Zap as ZapBolt, AppWindow,
    Mail, ExternalLink, Quote, Plus as PlusIcon, Minus as MinusIcon
} from 'lucide-react';

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [revealStage, setRevealStage] = useState('problem');
    const [activeStep, setActiveStep] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [testimonialSlide, setTestimonialSlide] = useState(0);
    const sectionRef = useRef(null);
    const timeoutIds = useRef([]);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const clearAllTimeouts = () => {
        timeoutIds.current.forEach(clearTimeout);
        timeoutIds.current = [];
    };


    const startAnimationSequence = () => {
        if (revealStage === 'scanning') return;
        clearAllTimeouts();
        setRevealStage('scanning');
        const id = setTimeout(() => {
            setRevealStage('done');
        }, 3100);
        timeoutIds.current.push(id);
    };


    const handleReplay = () => {
        setRevealStage('problem');
        clearAllTimeouts();
    };


    const multiverseContent = [
        { title: "UFC Fight Night", type: "LIVE SPORTS", region: "USA", platform: "ESPN+", color: "#CB2128", url: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=600" },
        { title: "IPL Cricket Finals", type: "LIVE SPORTS", region: "IND", platform: "SonyLiv", color: "#0064FF", url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600" },
        { title: "Demon Slayer S4", type: "ANIME", region: "JPN", platform: "Crunchyroll", color: "#F47521", url: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=600" },
        { title: "Premier League", type: "LIVE SPORTS", region: "USA", platform: "Peacock", color: "#FFFFFF", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600" },
        { title: "The Last of Us", type: "DRAMA", region: "USA", platform: "HBO Max", color: "#991BFA", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" },
        { title: "Squid Game", type: "KDRAMA", region: "KR", platform: "Netflix", color: "#E50914", url: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=600" },
        { title: "The Bear", type: "DRAMA", region: "USA", platform: "Hulu", color: "#1CE783", url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600" },
        { title: "Queen of Tears", type: "KDRAMA", region: "KR", platform: "Netflix", color: "#E50914", url: "https://images.unsplash.com/photo-1518131681197-4cc528943ec7?q=80&w=600" },
        { title: "Hidden Love", type: "CDRAMA", region: "CHN", platform: "Netflix", color: "#E50914", url: "https://images.unsplash.com/photo-1518131681197-4cc528943ec7?q=80&w=600" },
    ];


    const posters = [
        { title: "Succession", flag: "🇺🇸", url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600' },
        { title: "One Piece", flag: "🇯🇵", url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600' },
        { title: "Money Heist", flag: "🇪🇸", url: 'https://images.unsplash.com/photo-1598897349489-3d023a27965b?q=80&w=600' },
        { title: "Peaky Blinders", flag: "🇬🇧", url: 'https://images.unsplash.com/photo-1510511459019-5dee99c48db9?q=80&w=600' },
    ];


    const services = [
        { name: "YouTube", color: "#FF0000" },
        { name: "Disney+", color: "#0063e5" },
        { name: "Crunchyroll", color: "#f47521" },
        { name: "Paramount", color: "#0064ff" },
        { name: "ESPN+", color: "#cb2128" },
        { name: "HBO Max", color: "#991bfa" },
        { name: "Hotstar", color: "#fbcc33" },
        { name: "JioHotstar", color: "#4b27ff" },
        { name: "Hulu", color: "#1ce783" },
        { name: "Peacock", color: "#ffffff" },
        { name: "Prime Video", color: "#00a8e1" },
        { name: "Showmax", color: "#ff0000" },
        { name: "SonyLiv", color: "#ffffff" },
        { name: "Syfy", color: "#92278f" },
        { name: "TheCW", color: "#39b54a" },
        { name: "Tubi", color: "#ff4f00" },
        { name: "Xumo", color: "#ffffff" }
    ];


    const steps = [
        {
            title: "Connect your platforms",
            subtitle: "Zero Login Setup",
            desc: "Select the streaming apps you already use. Zero logins or passwords required - we just need to know what you have.",
            icon: <AppWindow className="text-cyan-400" />
        },
        {
            title: "Discover Beyond",
            subtitle: "Universal Library",
            desc: "Explore our unified hub to find global releases, live sports, and regional catalogs you never knew you had access to.",
            icon: <GlobeIcon className="text-cyan-400" />
        },
        {
            title: "Just hit play",
            subtitle: "Instant Override",
            desc: "Tap any title and we'll instantly route the right global connection in the background. Grab the popcorn, we handle the rest.",
            icon: <PlayCircle className="text-cyan-400" />
        }
    ];


    const faqs = [
        {
            q: "How does BingeBeyond unblock geo-restricted content on streaming apps?",
            a: "BingeBeyond uses secure and advanced connection technology to route your internet connection through servers in different countries, bypassing geo-restrictions on platforms like Netflix, Prime Video, and Disney+. Simply select a server in the desired country to access its content library."
        },
        {
            q: "How is BingeBeyond different from a regular VPN?",
            a: "Traditional VPNs route your entire device through one connection, which can slow speeds and affect other apps. BingeBeyond is designed for streaming, so only supported streaming apps are routed while banking, maps, food delivery, and other apps impacted by location, stay local."
        },
        {
            q: "Will BingeBeyond slow down my internet?",
            a: "BingeBeyond is built for smooth streaming performance. By routing only streaming traffic instead of your whole device, it helps reduce the slowdowns often experienced with full-device VPNs."
        },
        {
            q: "Which streaming apps work with BingeBeyond?",
            a: "BingeBeyond is designed for popular streaming platforms such as Netflix, Amazon Prime Video, and other supported entertainment apps. Available platforms may vary by device and region."
        },
        {
            q: "Is this app legal to use?",
            a: "Absolutely. BingeBeyond is completely legal and safe to use. It changes your virtual location to unlock content on streaming platforms. We recommend reviewing your streaming provider’s terms of service for the best experience."
        }
    ];


    const testimonials = [
        { name: "Ahmed R.", text: "I used to spend 10 minutes guessing which VPN server wouldn't buffer my F1 stream. Now I just open the app and hit play. It's incredibly simple.", avatar: "A" },
        { name: "Sarah M.", text: "Demon Slayer S4 dropped in Japan and I was watching it a few minutes later. It works perfectly and the connection is always stable.", avatar: "S" },
        { name: "Alex K.", text: "I can finally watch my matches from the US without any buffering. I love that my other apps stay fast while I'm streaming in 4K.", avatar: "A" },
        { name: "Marcus J.", text: "I travel a lot for work. Accessing my home catalogs from anywhere with perfect quality is a lifesaver. It works every single time.", avatar: "M" },
        { name: "Julian T.", text: "The setup was so fast. I just picked my apps and everything started working. No more switching servers manually.", avatar: "J" },
        { name: "Chloe L.", text: "I finally have access to the global library I was already paying for. The quality is amazing and there is zero configuration involved.", avatar: "C" }
    ];


    // Group testimonials into pages of 3
    const testimonialPages = [];
    for (let i = 0; i < testimonials.length; i += 3) {
        testimonialPages.push(testimonials.slice(i, i + 3));
    }


    const nextTestimonial = () => setTestimonialSlide((prev) => (prev + 1) % testimonialPages.length);
    const prevTestimonial = () => setTestimonialSlide((prev) => (prev - 1 + testimonialPages.length) % testimonialPages.length);


    return (
        <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
            <style>{`
        @keyframes slowPan { 0% { transform: scale(1.1) translate(0, 0); } 50% { transform: scale(1.15) translate(-1%, -1%); } 100% { transform: scale(1.1) translate(0, 0); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes scannerLine { 0% { left: 0%; opacity: 1; } 95% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
        @keyframes clipReveal { 0% { clip-path: inset(0 100% 0 0); } 100% { clip-path: inset(0 0 0 0); } }
        @keyframes lockShake { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } }
        @keyframes drift { 0% { transform: translate(0, 0); } 50% { transform: translate(-20px, 30px); } 100% { transform: translate(0, 0); } }
        .animate-slow-pan { animation: slowPan 40s ease-in-out infinite; }
        .animate-marquee { animation: marquee 35s linear infinite; }
        .animate-marquee-reverse { animation: marqueeReverse 45s linear infinite; }
        .animate-scanner { animation: scannerLine 3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-clip { animation: clipReveal 3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-lock-shake { animation: lockShake 0.4s ease-in-out infinite; }
        .text-glow { text-shadow: 0 0 35px rgba(34, 211, 238, 0.7); }
        .text-glow-white { text-shadow: 0 0 15px rgba(255, 255, 255, 1), 0 0 25px rgba(255, 255, 255, 0.6); }
        .blueprint-grid { background-image: radial-gradient(rgba(34, 211, 238, 0.12) 1.5px, transparent 1.5px); background-size: 45px 45px; }
        .vortex-card { transform: rotateX(20deg) rotateY(-15deg); transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .vortex-card:hover { transform: rotateX(0deg) rotateY(0deg) scale(1.1) translateZ(50px); z-index: 50; }
        .mask-fade-x { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
        .glass-card { background: rgba(255, 255, 255, 0.07); backdrop-filter: blur(35px); border: 1px solid rgba(255, 255, 255, 0.2); }
        .luminous-divider { border-top: 1px solid rgba(34, 211, 238, 0.15); box-shadow: 0 -10px 40px rgba(34, 211, 238, 0.05); }
       
        .benefit-card-pop {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.35);
          min-height: 620px;
          display: flex;
          align-items: center;
        }
        .benefit-card-pop:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.08) 100%);
          border-color: rgba(34, 211, 238, 0.6);
          box-shadow: 0 35px 100px rgba(0, 0, 0, 0.5), 0 0 30px rgba(34, 211, 238, 0.2);
        }


        .neon-device-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: black;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #22d3ee;
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.6), inset 0 0 10px rgba(34, 211, 238, 0.3);
          margin-bottom: 8px;
        }
      `}</style>


            {/* FIXED ATMOSPHERIC BACKGROUND LAYER */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-400/[0.05] blur-[160px] rounded-full animate-[drift_20s_ease-in-out_infinite]" />
                <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] bg-indigo-400/[0.04] blur-[180px] rounded-full animate-[drift_25s_ease-in-out_infinite_reverse]" />
                <div className="absolute bottom-[10%] left-[15%] w-[45%] h-[45%] bg-cyan-400/[0.06] blur-[150px] rounded-full animate-[drift_30s_ease-in-out_infinite]" />
                <div className="absolute bottom-[-15%] right-[10%] w-[55%] h-[55%] bg-blue-400/[0.05] blur-[200px] rounded-full animate-[drift_22s_ease-in-out_infinite_reverse]" />
            </div>


            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'}`}>
                <div className="flex items-center gap-8">
                    <div className="text-2xl font-black tracking-tighter flex items-center">
                        <span className="text-white text-[24px]">BINGE</span>
                        <span className="text-cyan-400 text-[24px]">BEYOND</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-[10px] font-black tracking-[0.3em] text-gray-300 uppercase">
                        <a href="#benefits" className="hover:text-cyan-400 transition-colors uppercase">Benefits</a>
                        <a href="#protocol" className="hover:text-cyan-400 transition-colors uppercase">How it works</a>
                        <a href="#beyond" className="hover:text-cyan-400 transition-colors uppercase">Multiverse</a>
                    </div>
                </div>
                <button className="px-6 py-2 bg-cyan-400 text-black font-black rounded-full text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">Get Access</button>
            </nav>


            {/* Hero Section */}
            <section className="relative h-[95vh] w-full overflow-hidden flex items-center bg-transparent z-10">
                    <div className="absolute inset-0 opacity-90 pointer-events-none">
                        <img
                            src={bgImage}
                            className="w-full h-full object-cover opacity-70"
                            alt="Background"
                        />
                    </div>

                <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at 10% 30%, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.05) 35%, rgba(30, 41, 59, 0.05) 50%)' }} />

                <div className="relative z-20 px-8 md:px-20 max-w-7xl">
                    <div className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 rounded-full text-cyan-400 text-[10px] font-black tracking-[0.4em] mb-8 inline-block uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-md">Unlock Global Content</div>
                    <h1 className="text-[48px] font-black leading-[1.1] tracking-tighter max-w-4xl uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] text-glow text-white">
                        Watch Shows, Movies & <br/>
                        Live Sports - <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-100 to-white text-glow">Without Location Limits</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl leading-relaxed font-semibold drop-shadow-md">
                        BingeBeyond works with your streaming apps to access content available in other regions - fast, smooth, and without breaking your device.
                    </p>

                    <a
                        href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 sm:w-1/2 flex items-center justify-center gap-3 bg-cyan-400 text-white px-8 py-3.5 rounded-xl transition-all shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:shadow-[0_0_60px_rgba(34,211,238,0.9)] hover:scale-105 transition-all group"
                    >


                        <svg className="w-7 h-7" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                        </svg>
                        <div className="text-left">
                            <div className="text-[12px] font-normal leading-none mb-1 opacity-80 text-glow-white font-black">GET IT
                                ON
                            </div>
                            <div className="text-[20px] font-semibold leading-none text-glow-white font-black">Google Play</div>
                        </div>
                    </a>

                    {/*<button className="px-12 py-6 bg-cyan-400 text-white font-black rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:shadow-[0_0_60px_rgba(34,211,238,0.9)] hover:scale-105 transition-all flex items-center gap-3 text-sm uppercase tracking-widest group">*/}
                    {/*    <span className="text-glow-white font-black">Download the app</span> <ChevronRight className="group-hover:translate-x-1 transition-transform drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />*/}
                    {/*</button>*/}
                </div>


                {/* DEVICE SUPPORT INDICATOR */}
                <div className="absolute bottom-12 right-12 z-30 flex gap-8 transition-all duration-700">
                    <div className="flex flex-col items-center group">
                        <div className="neon-device-circle transition-all group-hover:scale-110">
                            <Smartphone className="text-cyan-400" size={24} />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/90">Mobile</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <div className="neon-device-circle transition-all group-hover:scale-110">
                            <Tablet className="text-cyan-400" size={24} />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/90">Tablet</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <div className="neon-device-circle transition-all group-hover:scale-110">
                            <Tv className="text-cyan-400" size={24} />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/90">Smart TV</span>
                    </div>
                </div>


                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0f172a] to-transparent z-30" />
            </section>


            {/* Marquee Bar - UPDATED SERVICES LIST */}
            <section className="bg-slate-800/60 border-y border-white/15 shadow-2xl flex items-center overflow-hidden backdrop-blur-2xl z-10">
                <div className="px-8 md:px-12 py-10 flex-shrink-0 border-r border-white/20 z-10 bg-slate-800/40">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 whitespace-nowrap">Works With</span>
                </div>
                <div className="flex-1 overflow-hidden relative">
                    <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-10 text-white">
                        {[...services, ...services].map((s, i) => (
                            <span key={i} className="text-3xl font-black uppercase italic tracking-tighter transition-all opacity-100 drop-shadow-[0_0_15px_currentColor] scale-110" style={{ color: s.color }}>{s.name}</span>
                        ))}
                    </div>
                </div>
            </section>


            {/* SCANNER SECTION */}
            <section ref={sectionRef} className="py-40 px-6 relative overflow-hidden z-10">

                {/* --- ADDED BACKGROUND IMAGE --- */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src={favourite} /* Replace with your actual image path or variable */
                        className="w-full h-full object-cover"
                        alt="Scanner Section Background"
                    />
                    {/* Dark overlay to keep the text and scanner highly visible */}
                    <div className="absolute inset-0 bg-[#0f172a]/45" />
                </div>
                {/* ------------------------------ */}

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-5 gap-16 items-center">
                        <div className="lg:col-span-2 space-y-10 text-white">
                            <h2 className="text-[38px] font-black tracking-tighter uppercase leading-[0.9] drop-shadow-lg">
                                Favorite <br/>
                                shows aren't <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic">gone.</span> <br/>
                                They're being <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic">gatekept.</span>
                            </h2>
                            <p className="text-[38px] font-black tracking-tighter uppercase leading-none text-glow">Stop settling for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic text-5xl font-black tracking-tighter">10% Access.</span></p>
                        </div>

                        <div
                            onClick={revealStage === 'problem' ? startAnimationSequence : handleReplay}
                            className="lg:col-span-3 relative h-[500px] w-full rounded-[48px] border border-white/25 overflow-hidden bg-slate-800/40 shadow-[0_0_80px_rgba(34,211,238,0.2)] cursor-pointer group backdrop-blur-xl"
                        >
                            <div className="absolute inset-0 bg-[#0f172a]/40 flex flex-col items-center justify-center p-8 text-white backdrop-blur-md">
                                <div className="w-full max-w-md bg-slate-800/80 p-12 rounded-[40px] border border-white/20 shadow-2xl transition-all duration-700">
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`p-5 bg-red-500/10 border border-red-500/30 rounded-full mb-8 ${revealStage === 'problem' ? 'animate-lock-shake' : ''}`}><Lock size={44} className="text-red-500" /></div>
                                        <h4 className="text-2xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-md">"This title is not available in your current region."</h4>
                                        <div className="px-6 py-2 bg-red-500/20 border border-red-500/30 rounded-full shadow-lg">
                                            <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.2em]">ERROR: GEO-BLOCKED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`absolute inset-0 z-30 p-8 bg-[#0f172a]/60 backdrop-blur-3xl ${revealStage === 'scanning' ? 'animate-clip' : revealStage === 'done' ? '' : 'opacity-0'}`} style={revealStage === 'done' ? {clipPath: 'inset(0 0 0 0)'} : {}}>
                                {/* Single Image Replaced the Posters Grid */}
                                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-2xl relative">
                                    <img
                                        src={unlocked}
                                        className="w-full h-full object-cover"
                                        alt="Unlocked Content"
                                    />
                                    {/* Optional dark overlay so the '100% UNLOCKED' badge stands out better */}
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>

                                {/* 100% UNLOCKED Badge (Unchanged) */}
                                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 delay-500 ${revealStage === 'done' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                    <div className="bg-cyan-400 text-black px-12 py-6 rounded-[24px] shadow-[0_0_100px_rgba(34,211,238,0.8)] flex flex-col items-center border border-black/10">
                                        <span className="text-3xl font-black uppercase tracking-tighter italic text-glow">100% UNLOCKED</span>
                                    </div>
                                </div>
                            </div>

                            <div className={`absolute top-0 bottom-0 w-[3px] bg-cyan-400 z-50 transition-opacity duration-300 ${revealStage === 'scanning' ? 'opacity-100 animate-scanner' : 'opacity-0 pointer-events-none'}`}>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(34,211,238,1)]"><Unlock size={32} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* UNIFIED SPOTLIGHT BENEFITS SECTION */}
            <section id="benefits" className="relative z-10 border-t border-white/10 overflow-hidden">
                {/* VIBRANT ONE PIECE THEMED LONG BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={bingeWatching}
                        alt="One Piece Vibrant Backdrop"
                        className="w-full h-full object-cover opacity-[0.9] animate-slow-pan"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />
                    <div className="absolute inset-0 bg-cyan-900/10" />
                </div>


                <div className="relative z-10">
                    {/* Main Heading area */}
                    <div className="max-w-7xl mx-auto px-6 py-40 text-center text-white">
                        <div className="inline-flex items-center gap-5 px-5 py-2 bg-cyan-400/30 border border-cyan-400/50 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md mb-8 shadow-xl">High-Performance Network</div>
                        <h2 className="text-[38px] font-black uppercase tracking-tighter text-white leading-[1.1] mb-2 drop-shadow-2xl">
                            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic">binge-watching.</span>
                        </h2>
                        <h2 className="text-[38px] font-black uppercase tracking-tighter text-white leading-[1.1] drop-shadow-2xl">
                            Optimized for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic">speed.</span>
                        </h2>
                    </div>


                    {/* Subsection Grid */}
                    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 pb-40">

                        {/* Feature 1 */}
                        <div className="benefit-card-pop rounded-[60px] p-10 md:p-16 backdrop-blur-3xl transition-all duration-500">
                            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                                <div className="space-y-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-400/30 border border-cyan-400/50 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md shadow-xl"><Zap size={12} fill="currentColor" /> Zero Lag</div>
                                    <h2 className="text-[38px] font-black uppercase tracking-tighter text-glow leading-[0.95]">Stream globally with <br/><span className="text-cyan-400 italic">zero phone lag.</span></h2>
                                    <div className="space-y-6">
                                        <p className="text-lg text-slate-100 font-semibold leading-relaxed drop-shadow-md">
                                            Traditional VPNs force your entire device through a slow connection, causing massive lag. BingeBeyond fixes this by intelligently separating your traffic. We apply the VPN only to the specific streaming apps you select, leaving the rest of your phone completely untouched.
                                        </p>
                                        <ul className="space-y-3 text-sm font-bold text-slate-200">
                                            <li className="flex items-start gap-3"><Check size={18} className="text-cyan-400 mt-0.5" /> Separates streaming traffic from normal traffic</li>
                                            <li className="flex items-start gap-3"><Check size={18} className="text-cyan-400 mt-0.5" /> The VPN is only applied to the streaming apps you pick</li>
                                            <li className="flex items-start gap-3"><Check size={18} className="text-cyan-400 mt-0.5" /> Everyday apps bypass the VPN to stay lightning fast</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden md:block h-[380px] w-full rounded-[45px] bg-white/5 border border-white/10 relative overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 bg-cyan-400/[0.03]" />
                                </div>
                            </div>
                        </div>


                        {/* Feature 2 */}
                        <div className="benefit-card-pop rounded-[60px] p-10 md:p-16 backdrop-blur-3xl transition-all duration-500">
                            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                                <div className="hidden md:block h-[380px] w-full rounded-[45px] bg-white/5 border border-white/10 relative overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 bg-white/[0.02]" />
                                </div>
                                <div className="space-y-8 text-right">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-400/30 border border-cyan-400/50 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-xl backdrop-blur-md ml-auto"><FastForward size={12} fill="currentColor" /> Instant Delivery</div>
                                    <h2 className="text-[38px] font-black uppercase tracking-tighter text-glow leading-[0.95]">Smooth, buffer-free <br/><span className="text-cyan-400 italic">playback.</span></h2>
                                    <div className="space-y-6">
                                        <p className="text-lg text-slate-100 font-semibold leading-relaxed drop-shadow-md ml-auto">
                                            Wherever you connect from, the network is built for speed, stability, and smooth playback. Stop playing server roulette trying to find a good connection.
                                        </p>
                                        <ul className="space-y-3 text-sm font-bold text-slate-200">
                                            <li className="flex items-start justify-end gap-3">Built specifically for high-speed 4K streaming <Check size={18} className="text-cyan-400 mt-0.5" /></li>
                                            <li className="flex items-start justify-end gap-3">Automatically connects to the fastest routing lane <Check size={18} className="text-cyan-400 mt-0.5" /></li>
                                            <li className="flex items-start justify-end gap-3">Optimized for live sports and global premieres <Check size={18} className="text-cyan-400 mt-0.5" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Feature 3 */}
                        <div className="benefit-card-pop rounded-[60px] p-10 md:p-16 backdrop-blur-3xl transition-all duration-500">
                            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                                <div className="space-y-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-400/30 border border-cyan-400/50 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-xl backdrop-blur-md"><Target size={12} fill="currentColor" /> Universal Remote</div>
                                    <h2 className="text-[38px] font-black uppercase tracking-tighter text-glow leading-[0.95]">One tap from search <br/>to <span className="text-cyan-400 italic">stream.</span></h2>
                                    <div className="space-y-6">
                                        <p className="text-lg text-slate-100 font-semibold leading-relaxed drop-shadow-md">
                                            Don't waste time guessing which country's server has the show you want. Find it directly in the BingeBeyond hub, hit play, and we automatically connect the right global node to launch your stream.
                                        </p>
                                        <ul className="space-y-3 text-sm font-bold text-slate-200">
                                            <li className="flex items-start gap-3"><Check size={18} className="text-cyan-400 mt-0.5" /> Browse global catalogs in one unified hub</li>
                                            <li className="flex items-start gap-3"><Check size={18} className="text-cyan-400 mt-0.5" /> Auto-connects to the required country node</li>
                                            <li className="flex items-start gap-3"><Check size={18} className="text-cyan-400 mt-0.5" /> Launches your streaming app instantly</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden md:block h-[380px] w-full rounded-[45px] bg-white/5 border border-white/10 relative overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 bg-white/[0.02]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* HOW IT WORKS SECTION */}
            <section id="protocol" className="relative py-56 overflow-hidden z-10">

                {/* --- ADDED BACKGROUND IMAGE --- */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src={stepsImg}
                        className="w-full h-full object-cover"
                        alt="Protocol Background"
                    />
                    {/* Dark overlay to ensure text stays readable */}
                    <div className="absolute inset-0 bg-[#1e293b]/45" />
                </div>
                {/* ------------------------------ */}

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center mb-32 text-white">
                        <h2 className="text-[38px] font-black uppercase tracking-tighter mb-6 drop-shadow-md">
                            Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic">binge-watching</span> in 3 simple steps.
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-5 space-y-6">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActiveStep(i)}
                                    className={`group relative p-10 rounded-[45px] border transition-all duration-500 cursor-pointer ${activeStep === i ? 'bg-cyan-400 border-cyan-400 scale-[1.03] shadow-[0_0_60px_rgba(34,211,238,0.3)]' : 'bg-white/[0.12] border-white/10 hover:border-white/25 backdrop-blur-md'}`}
                                >
                                    <div className="flex gap-8 items-start">
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-3xl flex items-center justify-center font-black text-2xl italic ${activeStep === i ? 'bg-[#1e293b] text-white' : 'bg-cyan-400/10 text-cyan-400'}`}>
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className={`text-[11px] font-black uppercase tracking-[0.25em] mb-2 ${activeStep === i ? 'text-slate-900' : 'text-white'}`}>{step.subtitle}</p>
                                            <h4 className={`text-2xl font-black uppercase tracking-tighter mb-3 ${activeStep === i ? 'text-black' : 'text-white'}`}>{step.title}</h4>
                                            <p className={`text-base font-semibold leading-relaxed ${activeStep === i ? 'text-slate-800' : 'text-slate-200'}`}>{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-7 relative h-[650px] bg-slate-800/80 border border-white/30 rounded-[70px] overflow-hidden shadow-3xl backdrop-blur-3xl group">
                            <div className="absolute inset-0 blueprint-grid opacity-30" />
                            <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${activeStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                <div className="grid grid-cols-3 gap-8 w-full max-w-md">
                                    {services.map((s, idx) => (
                                        <div key={idx} className="aspect-square rounded-[36px] bg-white/[0.15] border border-white/30 flex items-center justify-center shadow-2xl relative overflow-hidden">
                                            <span className="text-[14px] font-black uppercase tracking-tighter" style={{ color: s.color }}>{s.name[0]}</span>
                                            <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full ${idx < 3 ? 'bg-cyan-400 animate-pulse shadow-[0_0_20px_#22d3ee]' : 'bg-slate-700'}`} />
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-white animate-pulse">Syncing Active Subscriptions</p>
                            </div>
                            <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${activeStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                <div className="w-full max-w-lg bg-white/[0.1] border border-white/30 rounded-[50px] p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
                                    <div className="flex items-center gap-6 border-b border-white/20 pb-8 mb-10">
                                        <Search className="text-cyan-400" size={32} />
                                        <div className="h-3 w-64 bg-white/20 rounded-full" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="aspect-[3/4] bg-white/10 rounded-3xl border border-white/20 animate-pulse" />
                                        <div className="aspect-[3/4] bg-white/10 rounded-2xl border border-white/10 animate-pulse delay-75" />
                                    </div>
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white text-black text-[10px] font-black rounded-full shadow-2xl">Scanning 14,000+ Titles...</div>
                                </div>
                            </div>
                            <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${activeStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                <div className="w-full max-w-lg aspect-video bg-slate-900 rounded-[50px] overflow-hidden border border-white/30 shadow-2xl relative">
                                    <img src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600" className="w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-white/10 flex items-center justify-center backdrop-blur-[4px]">
                                        <div className="w-28 h-28 rounded-full bg-cyan-400 flex items-center justify-center text-black shadow-[0_0_80px_rgba(34,211,238,0.8)]"><Play size={48} fill="black" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* MULTIVERSE FEED SECTION - RESTORED DUAL ROWS */}
            <section id="beyond" className="relative py-48 bg-[#1e293b] relative overflow-hidden z-10 border-t border-white/10">
                <div className="absolute inset-0 blueprint-grid opacity-60 z-0" />
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1400px] max-h-[1400px] bg-cyan-500/[0.18] rounded-full blur-[240px] animate-pulse" />
                    <div className="absolute inset-0 opacity-[0.4]">
                        <img
                            src="https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2000"
                            className="w-full h-full object-cover object-top"
                            style={{ maskImage: 'linear-gradient(to bottom, black 65%, transparent 95%)' }}
                            alt=""
                        />
                    </div>
                </div>


                <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-400/30 border border-cyan-400/50 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md mb-8 shadow-xl">Millions of Shows, Matches & Movies</div>
                    <h2 className="text-[38px] font-black uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-md">Stream right on the apps <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic">you already use.</span></h2>
                    <p className="text-slate-100 max-w-xl mx-auto text-sm font-bold leading-relaxed uppercase tracking-[0.2em] drop-shadow-md">Access live sports on SonyLiv, exclusive anime on Crunchyroll Japan, and blockbusters on US Netflix in seconds. Connect once and explore entertainment worldwide.</p>
                </div>


                <div className="relative z-10 flex flex-col gap-20 perspective-[2000px] py-10 mask-fade-x">
                    <div className="animate-marquee whitespace-nowrap flex gap-12 py-4">
                        {[...multiverseContent, ...multiverseContent].map((item, i) => (
                            <div key={i} className="group relative w-[320px] aspect-[16/9] flex-shrink-0 rounded-[40px] overflow-hidden glass-card transition-all duration-700 vortex-card shadow-[0_30px_70px_rgba(0,0,0,0.6)] border-white/40">
                                <img src={item.url} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
                                <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                      <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-xl text-[10px] font-black text-white border border-white/30 uppercase tracking-tight shadow-xl">
                         {item.region} - {item.type}
                      </span>
                                    <div className={`w-3 h-3 rounded-full shadow-[0_0_25px_currentColor]`} style={{ backgroundColor: item.color, color: item.color }} />
                                </div>
                                <div className="absolute bottom-6 left-7 text-white">
                                    <h4 className="text-xl font-black uppercase tracking-tighter mb-1 group-hover:text-cyan-400 transition-colors drop-shadow-lg">{item.title}</h4>
                                    <span className="text-[11px] font-bold uppercase tracking-widest drop-shadow-md opacity-80" style={{ color: item.color }}>{item.platform}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ROW 2 RESTORED */}
                    <div className="animate-marquee-reverse whitespace-nowrap flex gap-12 py-4">
                        {[...multiverseContent].reverse().concat([...multiverseContent].reverse()).map((item, i) => (
                            <div key={i} className="group relative w-[320px] aspect-[16/9] flex-shrink-0 rounded-[40px] overflow-hidden glass-card transition-all duration-700 vortex-card shadow-[0_30px_70px_rgba(0,0,0,0.6)] border-white/40" style={{ transform: 'rotateX(20deg) rotateY(15deg)' }}>
                                <img src={item.url} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
                                <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                      <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-xl text-[10px] font-black text-white border border-white/30 uppercase tracking-tight shadow-xl">
                         {item.region} - {item.type}
                      </span>
                                    <Activity size={16} className="text-white group-hover:text-cyan-400 animate-pulse transition-colors drop-shadow-lg" />
                                </div>
                                <div className="absolute bottom-6 left-7 text-white">
                                    <h4 className="text-xl font-black uppercase tracking-tighter mb-1 group-hover:text-cyan-400 transition-colors drop-shadow-lg">{item.title}</h4>
                                    <span className="text-[11px] font-bold uppercase tracking-widest drop-shadow-md opacity-80" style={{ color: item.color }}>{item.platform}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* TESTIMONIALS SECTION - 3 CARDS PER SLIDE */}
            <section id="testimonials" className="relative bg-[#1e293b] py-56 overflow-hidden border-t border-white/10 z-10">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-32">
                        <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-400/30 border border-cyan-400/50 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md mb-8 shadow-xl">Reviews</div>
                        <h2 className="text-[38px] font-black uppercase tracking-tighter text-white leading-[1.1] drop-shadow-md">
                            Trusted by over <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic">100,000 Streamers</span>
                        </h2>
                    </div>


                    <div className="relative group">
                        <div className="relative overflow-hidden min-h-[450px]">
                            <div
                                className="flex transition-transform duration-700 ease-in-out h-full"
                                style={{ transform: `translateX(-${testimonialSlide * 100}%)`, width: `${testimonialPages.length * 100}%` }}
                            >
                                {testimonialPages.map((page, pageIndex) => (
                                    <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                                        {page.map((item, i) => (
                                            <div key={i} className="glass-card p-10 rounded-[55px] hover:-translate-y-3 transition-all duration-500 group border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col h-full bg-white/[0.08]">
                                                <Quote className="text-cyan-400/40 mb-8 group-hover:text-cyan-400 transition-colors" size={40} />
                                                <p className="text-lg text-white font-semibold leading-relaxed italic mb-auto">
                                                    "{item.text}"
                                                </p>
                                                <div className="flex items-center gap-4 mt-10">
                                                    <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center font-black text-xl">
                                                        {item.avatar}
                                                    </div>
                                                    <h4 className="font-black uppercase tracking-tighter text-white text-sm">{item.name}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>


                        <button
                            onClick={prevTestimonial}
                            className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all border-white/20 z-20"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all border-white/20 z-20"
                        >
                            <ChevronRight size={24} />
                        </button>


                        <div className="flex justify-center gap-3 mt-12">
                            {testimonialPages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setTestimonialSlide(i)}
                                    className={`w-3 h-3 rounded-full transition-all ${testimonialSlide === i ? 'bg-cyan-400 w-8' : 'bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQs SECTION */}
            <section id="faqs" className="relative bg-[#334155] py-56 overflow-hidden border-t border-white/20 z-10 blueprint-grid">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-32 text-white">
                        <h2 className="text-[38px] font-black uppercase tracking-tighter mb-6 drop-shadow-md">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow italic">Questions</span>
                        </h2>
                    </div>


                    <div className="space-y-6">
                        {faqs.map((item, i) => (
                            <div
                                key={i}
                                className={`rounded-[40px] border transition-all duration-500 overflow-hidden cursor-pointer ${openFaq === i ? 'bg-white border-white shadow-[0_0_60px_rgba(255,255,255,0.2)]' : 'bg-white/[0.08] border-white/10 hover:border-white/30 backdrop-blur-md'}`}
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="p-10 flex items-center justify-between gap-8">
                                    <h4 className={`text-2xl font-black uppercase tracking-tighter transition-colors ${openFaq === i ? 'text-black' : 'text-white'}`}>{item.q}</h4>
                                    <div className={`p-3 rounded-2xl transition-all shadow-xl ${openFaq === i ? 'bg-[#334155] text-white' : 'bg-white/10 text-white'}`}>
                                        {openFaq === i ? <MinusIcon size={24} /> : <PlusIcon size={24} />}
                                    </div>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className={`p-10 pt-0 text-lg font-semibold leading-relaxed border-t ${openFaq === i ? 'text-slate-600 border-slate-100' : 'text-slate-100 border-white/10'}`}>
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* FINAL CTA SECTION */}
            <section className="relative py-72 bg-[#0f172a] overflow-hidden border-t border-white/20 z-10">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000" alt="CTA Hero" className="w-full h-full object-cover scale-105 opacity-[0.6] animate-slow-pan" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-[#0f172a]/80 to-[#0f172a]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-400/30 border border-cyan-400/50 rounded-full mb-10 backdrop-blur-md text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
                        <Zap size={20} fill="currentColor" /> Limited Access Override
                    </div>
                    <h2 className="text-[38px] md:text-[54px] font-black uppercase tracking-tighter text-white leading-none mb-10 text-glow">
                        Get More From The Subscriptions <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white italic">You Already Pay For</span>
                    </h2>
                    <p className="text-slate-100 max-w-2xl mx-auto text-xl font-bold leading-relaxed mb-16 drop-shadow-2xl">
                        Unlock more shows, more regions, and smoother streaming - without slowing down the rest of your phone.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <a
                            href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming&pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-14 py-7 bg-cyan-400 text-white font-black rounded-[32px] shadow-[0_0_80px_rgba(34,211,238,0.9)] hover:shadow-[0_0_100px_rgba(34,211,238,1)] hover:scale-105 transition-all flex items-center gap-4 text-base uppercase tracking-widest group drop-shadow-[0_0_12px_rgba(255,255,255,1)]"
                        >
                            <span className="text-glow-white font-black">Download the app</span>
                            <ChevronRight className="group-hover:translate-x-2 transition-transform drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
                        </a>
                        <button className="px-12 py-7 bg-white/10 border border-white/30 text-white font-black rounded-[32px] hover:bg-white/20 transition-all text-base uppercase tracking-widest shadow-2xl backdrop-blur-sm">
                            Browse Library
                        </button>
                    </div>
                </div>
            </section>


            {/* FOOTER */}
            <footer className="bg-[#0f172a] pt-32 pb-16 px-6 border-t border-white/20 relative overflow-hidden z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-cyan-500/[0.15] blur-[220px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
                        <div className="col-span-1 md:col-span-2">
                            <div className="text-5xl font-black tracking-tighter flex items-center mb-10 text-white">
                                <span>BINGE</span>
                                <span className="text-cyan-400 ml-1">BEYOND</span>
                            </div>
                            <p className="text-slate-200 max-w-sm mb-14 font-semibold text-lg leading-relaxed italic drop-shadow-sm">
                                BingeBeyond bridges the gap between your local catalog and the global multiverse of content. Optimized for speed, built for privacy.
                            </p>
                            <div className="flex gap-6">
                                {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
                                    <div key={i} className="w-14 h-14 rounded-2xl bg-white/[0.15] border border-white/30 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:scale-110 cursor-pointer transition-all duration-300 text-white shadow-xl">
                                        <Icon size={22} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-10 text-white">
                            <h5 className="font-black text-[11px] uppercase tracking-[0.4em] mb-4 text-slate-300">Core Network</h5>
                            <ul className="space-y-5 text-base font-bold">
                                <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Global Library</a></li>
                                <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Server Status</a></li>
                                <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Speed Test</a></li>
                            </ul>
                        </div>
                        <div className="space-y-10 text-white">
                            <h5 className="font-black text-[11px] uppercase tracking-[0.4em] mb-4 text-slate-300">Protocol Support</h5>
                            <ul className="space-y-5 text-base font-bold">
                                <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Privacy Shield</a></li>
                                <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Legal Hub</a></li>
                                <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Upgrade Hub</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-slate-300 text-[10px] font-black tracking-[0.6em] gap-10 text-center uppercase">
                        <div className="flex items-center gap-5">
                            <span>© 2024 BINGEBEYOND NETWORKS</span>
                            <div className="w-2 h-2 bg-slate-600 rounded-full" />
                            <span className="text-cyan-400 font-black drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">SYSTEM STATUS: OPTIMAL</span>
                        </div>
                        <div className="flex gap-12 text-slate-400 font-bold">
                            <a href="#" className="hover:text-white transition-colors">Privacy Override</a>
                            <a href="#" className="hover:text-white transition-colors">Term of Protocol</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};


export default App;

