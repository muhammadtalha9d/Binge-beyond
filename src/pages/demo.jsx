import React, { useState, useEffect, useRef } from 'react';
import {
    Play, Plus, Info, Monitor, Smartphone, Tablet, Tv, Gamepad2,
    ChevronRight, ChevronLeft, Search, User, Menu, X, Check, Zap, MessageSquare,
    Layers, Star, HelpCircle, ChevronDown, Globe as GlobeIcon, ShieldCheck,
    Lock, Unlock, AlertCircle, RotateCcw, Pointer, Radio, Activity, ZapIcon,
    Cpu, MousePointer2, Wifi, FastForward, Target, PlayCircle, Terminal,
    Navigation, Share2, Layers as LayersIcon, Zap as ZapBolt, AppWindow,
    Instagram, Twitter, Github, Mail, ExternalLink, Quote, Plus as PlusIcon, Minus as MinusIcon
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
            a: "Absolutely. BingeBeyond is completely legal and safe to use. It changes your virtual location to unlock content on streaming platforms. We recommend reviewing your streaming provider's terms of service for the best experience."
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
       
        .master-raycast-atmosphere {
          background-color: #004D59;
          background-image:
            radial-gradient(circle at 50% 30%, rgba(224,251,255,0.18) 0%, transparent 50%),
            radial-gradient(circle at 50% 40%, rgba(0,209,233,0.38) 0%, transparent 80%),
            radial-gradient(circle at 10% 10%, rgba(0,240,255,0.18) 0%, transparent 60%),
            radial-gradient(circle at 90% 90%, rgba(0,209,233,0.12) 0%, transparent 60%),
            linear-gradient(180deg, #004D59 0%, #050809 100%);
          position: relative;
        }


        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url('https://grainy-gradients.vercel.app/noise.svg');
          pointer-events: none;
          z-index: 2;
        }


        .depth-wash-heavy {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, transparent 85%);
        }
        .depth-wash-light {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, rgba(0,0,0,0.15) 0%, transparent 70%);
        }


        .benefit-card-pop {
          border-radius: 48px;
          padding: 32px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(17, 24, 39, 0.85);
          backdrop-filter: blur(40px);
        }
        .benefit-card-pop:hover {
          transform: translateY(-12px);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          border-color: rgba(0, 242, 255, 0.5);
        }


        .premium-badge {
          background: #000;
          border: 2px solid #00f2ff;
          color: #fff;
          font-weight: 900;
          box-shadow: 0 0 25px rgba(0, 242, 255, 0.5);
          text-shadow: 0 0 8px rgba(0, 242, 255, 0.6);
          padding: 8px 24px;
          border-radius: 9999px;
        }


        .high-visibility-heading {
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8), 0 4px 24px rgba(0, 0, 0, 0.6);
        }


        .electric-cyan-highlight {
          color: #fff;
          text-shadow:
            0 0 12px #00f2ff,
            0 0 25px rgba(0, 242, 255, 0.8),
            0 0 45px rgba(0, 242, 255, 0.5),
            0 4px 10px rgba(0, 0, 0, 1);
          font-style: italic;
        }


        .depth-radial-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, transparent 100%);
        }
      `}</style>


            {/* HERO SECTION */}
            <section className="relative h-[95vh] w-full overflow-hidden flex items-center bg-[#0f172a] z-10">
                <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3 p-3 opacity-90 animate-slow-pan pointer-events-none">
                    {[...posters, ...posters, ...posters, ...posters].map((p, i) => (
                        <div key={i} className="aspect-[2/3] rounded-lg bg-gray-900/50 border border-white/10 overflow-hidden shadow-inner">
                            <img src={p.url} className="w-full h-full object-cover opacity-70" alt="" />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at 15% 50%, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 35%, rgba(30, 41, 59, 0.3) 100%)' }} />
                <div className="relative z-20 px-8 md:px-20 max-w-7xl">
                    <div className="premium-badge text-[10px] mb-8 inline-block uppercase tracking-[0.4em]">Unlock Global Content</div>
                    <h1 className="text-[48px] font-black leading-[1.1] tracking-tighter max-w-4xl uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] text-white high-visibility-heading">
                        Watch Shows, Movies & <br/>
                        Live Sports - <br/>
                        <span className="electric-cyan-highlight">Without Location Limits</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl leading-relaxed font-semibold drop-shadow-md">
                        BingeBeyond works with your streaming apps to access content available in other regions - fast, smooth, and without breaking your device.
                    </p>
                    <button className="px-12 py-6 bg-cyan-400 text-white font-black rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:shadow-[0_0_60px_rgba(34,211,238,0.9)] hover:scale-105 transition-all flex items-center gap-3 text-sm uppercase tracking-widest group">
                        <span className="text-glow-white font-black">Download the app</span> <ChevronRight className="group-hover:translate-x-1 transition-transform drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0f172a] to-transparent z-30" />
            </section>


            {/* Marquee Bar */}
            <section className="bg-slate-800/60 border-y border-white/15 shadow-2xl flex items-center overflow-hidden backdrop-blur-2xl z-20 relative">
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


            {/* MASTER ATMOSPHERE */}
            <div className="master-raycast-atmosphere">
                <div className="noise-overlay" />

                {/* SCANNER SECTION - UPDATED TO STACKED LAYOUT WITH NEW TEXT */}
                <section ref={sectionRef} className="py-40 bg-transparent px-6 relative overflow-hidden z-10 text-center">
                    <div className="depth-wash-light" />
                    <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                        <div className="space-y-6 text-white mb-20 max-w-4xl">
                            <h2 className="text-[44px] font-black tracking-tighter uppercase leading-[1.1] high-visibility-heading">
                                Your Favorite Shows Aren't Gone.<br/>
                                <span className="electric-cyan-highlight">They're Being Gatekept.</span>
                            </h2>
                            <p className="text-xl font-medium text-white/80 high-visibility-heading tracking-tight">
                                You pay 100% for your OTT subscription. Stop settling for 10% access.
                            </p>
                        </div>


                        <div
                            onClick={revealStage === 'problem' ? startAnimationSequence : handleReplay}
                            className="relative h-[550px] w-full max-w-5xl rounded-[56px] border border-white/20 overflow-hidden bg-black/20 shadow-[0_0_80px_rgba(0,0,0,0.5)] cursor-pointer group backdrop-blur-xl"
                        >
                            <div className="absolute inset-0 bg-[#111827]/70 flex flex-col items-center justify-center p-8 text-white backdrop-blur-md">
                                <div className="w-full max-w-md bg-[#111827]/80 p-12 rounded-[40px] border border-white/20 shadow-2xl transition-all duration-700">
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`p-5 bg-red-500/10 border border-red-500/30 rounded-full mb-8 ${revealStage === 'problem' ? 'animate-lock-shake' : ''}`}><Lock size={44} className="text-red-500" /></div>
                                        <h4 className="text-2xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-md text-glow">"This title is not available in your current region."</h4>
                                        <div className="px-6 py-2 bg-red-500/20 border border-red-500/30 rounded-full shadow-lg">
                                            <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.2em]">ERROR: GEO-BLOCKED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`absolute inset-0 z-30 p-8 bg-[#111827]/60 backdrop-blur-3xl ${revealStage === 'scanning' ? 'animate-clip' : revealStage === 'done' ? '' : 'opacity-0'}`} style={revealStage === 'done' ? {clipPath: 'inset(0 0 0 0)'} : {}}>
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-6 h-full">
                                    {posters.concat(posters).slice(0, 4).map((p, i) => (
                                        <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
                                            <img src={p.url} className="w-full h-full object-cover" alt="" />
                                            <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/20 text-[10px] text-white font-black">{p.flag}</div>
                                        </div>
                                    ))}
                                </div>
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
                </section>


                {/* BENEFITS GRID SECTION */}
                <section id="benefits" className="relative z-10 py-40 bg-transparent">
                    <div className="depth-wash-heavy" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                        <div className="text-center mb-24">
                            <div className="inline-flex items-center gap-5 premium-badge text-[10px] uppercase tracking-[0.4em] mb-8">High-Performance Network</div>
                            <h2 className="text-[38px] font-black uppercase tracking-tighter leading-[1.1] mb-2 high-visibility-heading">
                                Built For Binge-Watching.<br/>
                                <span className="electric-cyan-highlight">Optimized For Speed.</span>
                            </h2>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="benefit-card-pop">
                                <img src="/images/4grid1.png" alt="" className="h-[280px] w-full rounded-[32px]"/>
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 text-white">
                                        <Target size={24} className="text-cyan-300" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Universal Remote</span>
                                    </div>
                                    <h2 className="text-2xl font-black uppercase tracking-tighter high-visibility-heading">One Tap From Search <span className="electric-cyan-highlight">To Stream.</span></h2>
                                    <p className="text-sm text-white/90 font-medium leading-relaxed">
                                        No more guessing which country server to pick. Find any show in our hub, hit play, and we connect you to the right node instantly.
                                    </p>
                                </div>
                            </div>
                            <div className="benefit-card-pop">
                                <div className="h-[280px] w-full rounded-[32px] bg-black/40 border border-white/5 relative overflow-hidden shadow-inner mb-10 flex items-center justify-center text-white/5 font-black text-4xl italic uppercase font-black">Explore</div>
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 text-white">
                                        <GlobeIcon size={24} className="text-cyan-300" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Global Discovery</span>
                                    </div>
                                    <h2 className="text-2xl font-black uppercase tracking-tighter high-visibility-heading">See What You Are <span className="electric-cyan-highlight">Missing.</span></h2>
                                    <p className="text-sm text-white/90 font-medium leading-relaxed">
                                        Browse movies and live sports not available in your region. Explore global catalogs in one unified hub without switching between apps.
                                    </p>
                                </div>
                            </div>
                            <div className="benefit-card-pop">
                                <div className="h-[280px] w-full rounded-[32px] bg-black/40 border border-white/5 relative overflow-hidden shadow-inner mb-10 flex items-center justify-center text-white/5 font-black text-4xl italic uppercase font-black">Performance</div>
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 text-white">
                                        <Zap size={24} className="text-cyan-300" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Zero Lag</span>
                                    </div>
                                    <h2 className="text-2xl font-black uppercase tracking-tighter high-visibility-heading">Stream Without <span className="electric-cyan-highlight">Device Lag.</span></h2>
                                    <p className="text-sm text-white/90 font-medium leading-relaxed">
                                        Traditional VPNs slow your entire device. We target only your streaming apps, leaving your maps, banking, and messages at full speed.
                                    </p>
                                </div>
                            </div>
                            <div className="benefit-card-pop">
                                <div className="h-[280px] w-full rounded-[32px] bg-black/40 border border-white/5 relative overflow-hidden shadow-inner mb-10 flex items-center justify-center text-white/5 font-black text-4xl italic uppercase font-black">Stability</div>
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 text-white">
                                        <FastForward size={24} className="text-cyan-300" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Instant Delivery</span>
                                    </div>
                                    <h2 className="text-2xl font-black uppercase tracking-tighter high-visibility-heading">Smooth Buffer-Free <span className="electric-cyan-highlight">Playback.</span></h2>
                                    <p className="text-sm text-white/90 font-medium leading-relaxed">
                                        Our network is built for high-bandwidth 4K video. Connect to optimized routing lanes for lag-free global premieres.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* HOW IT WORKS SECTION */}
                <section id="protocol" className="relative bg-transparent py-56 overflow-hidden z-10 border-y border-white/5">
                    <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                        <div className="flex flex-col items-center text-center mb-32">
                            <h2 className="text-[38px] font-black uppercase tracking-tighter mb-6 high-visibility-heading">
                                Start Binge-Watching<br/>
                                <span className="electric-cyan-highlight">In 3 Simple Steps.</span>
                            </h2>
                        </div>


                        <div className="grid lg:grid-cols-12 gap-24 items-center">
                            <div className="lg:col-span-5 flex flex-col gap-4 h-[650px]">
                                {steps.map((step, i) => (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setActiveStep(i)}
                                        className={`flex-1 group relative p-6 rounded-[32px] border transition-all duration-500 cursor-pointer flex items-center ${activeStep === i ? 'bg-[#111827]/95 border-cyan-300/50 shadow-[0_0_40px_rgba(0,242,255,0.1)] scale-[1.02]' : 'bg-[#111827]/40 border-white/5 hover:border-white/20'}`}
                                    >
                                        <div className="flex gap-6 items-center">
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl italic ${activeStep === i ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,242,255,0.4)]' : 'bg-white/5 text-white/40'}`}>
                                                {i + 1}
                                            </div>
                                            <div className="pr-4 text-left">
                                                <p className={`text-[10px] font-black uppercase tracking-[0.25em] mb-1 ${activeStep === i ? 'text-cyan-300' : 'text-white/40'}`}>{step.subtitle}</p>
                                                <h4 className="text-lg font-black uppercase tracking-tight mb-1 text-white">{step.title}</h4>
                                                <p className={`text-xs font-medium leading-relaxed ${activeStep === i ? 'text-white' : 'text-white/60'}`}>{step.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className="lg:col-span-7 relative h-[650px] bg-[#111827]/90 border border-white/30 rounded-[70px] overflow-hidden shadow-3xl backdrop-blur-3xl group font-black uppercase italic">
                                <div className="absolute inset-0 blueprint-grid opacity-30" />
                                <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${activeStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                    <div className="grid grid-cols-3 gap-8 w-full max-w-md text-white">
                                        {services.map((s, idx) => (
                                            <div key={idx} className="aspect-square rounded-[36px] bg-white/[0.1] border border-white/20 flex items-center justify-center relative overflow-hidden">
                                                <span className="text-[14px] uppercase tracking-tighter" style={{ color: s.color }}>{s.name[0]}</span>
                                                <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full ${idx < 3 ? 'bg-cyan-400 animate-pulse shadow-[0_0_20px_#22d3ee]' : 'bg-slate-700'}`} />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-white animate-pulse">Syncing Active Subscriptions</p>
                                </div>
                                <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${activeStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                    <div className="w-full max-w-lg bg-white/[0.05] border border-white/20 rounded-[50px] p-10 shadow-2xl relative overflow-hidden backdrop-blur-md text-white">
                                        <div className="flex items-center gap-6 border-b border-white/20 pb-8 mb-10 font-black">
                                            <Search className="text-cyan-400" size={32} />
                                            <div className="h-3 w-64 bg-white/20 rounded-full" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-8 text-white">
                                            <div className="aspect-[3/4] bg-white/10 rounded-3xl border border-white/10 animate-pulse" />
                                            <div className="aspect-[3/4] bg-white/10 rounded-2xl border border-white/10 animate-pulse delay-75" />
                                        </div>
                                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white text-black text-[10px] font-black rounded-full shadow-2xl uppercase tracking-widest">Scanning 14,000+ Titles...</div>
                                    </div>
                                </div>
                                <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${activeStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                    <div className="w-full max-w-lg aspect-video bg-black/60 rounded-[50px] overflow-hidden border border-white/30 shadow-2xl relative">
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="w-28 h-28 rounded-full bg-cyan-400 flex items-center justify-center text-black shadow-[0_0_80px_rgba(34,211,238,0.8)] font-black"><Play size={48} fill="black" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* MULTIVERSE FEED SECTION */}
                <section id="beyond" className="relative py-48 bg-transparent relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35)_0%,transparent_90%)] pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10 text-center text-white">
                        <div className="inline-flex items-center gap-3 premium-badge rounded-full text-cyan-300 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md mb-8 shadow-xl">Millions of Shows, Matches & Movies</div>
                        <h2 className="text-[38px] font-black uppercase tracking-tighter leading-[1.1] mb-6 high-contrast-heading text-white">
                            Stream Right On The Apps<br/>
                            <span className="electric-cyan-highlight">You Already Use.</span>
                        </h2>
                        <p className="text-white/80 max-w-xl mx-auto text-sm font-bold leading-relaxed uppercase tracking-[0.2em] drop-shadow-md">Access live sports on SonyLiv, exclusive anime on Crunchyroll Japan, and blockbusters on US Netflix in seconds. Connect once and explore entertainment worldwide.</p>
                    </div>


                    <div className="relative z-10 flex flex-col gap-20 perspective-[2000px] py-10 mask-fade-x">
                        <div className="animate-marquee whitespace-nowrap flex gap-12 py-4">
                            {[...multiverseContent, ...multiverseContent].map((item, i) => (
                                <div key={i} className="group relative w-[320px] aspect-[16/9] flex-shrink-0 rounded-[40px] overflow-hidden glass-card transition-all duration-700 vortex-card shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                                    <img src={item.url} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-90" />
                                    <div className="absolute top-5 left-5 right-5 flex justify-between items-start text-white font-black">
                        <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-xl text-[10px] border border-white/30 uppercase tracking-tight shadow-xl font-black uppercase italic">
                           {item.region} - {item.type}
                        </span>
                                        <div className={`w-3 h-3 rounded-full shadow-[0_0_25px_currentColor]`} style={{ backgroundColor: item.color, color: item.color }} />
                                    </div>
                                    <div className="absolute bottom-6 left-7 text-white">
                                        <h4 className="text-xl font-black uppercase tracking-tighter mb-1 group-hover:text-cyan-400 transition-colors drop-shadow-lg font-black uppercase italic">{item.title}</h4>
                                        <span className="text-[11px] font-bold uppercase tracking-widest drop-shadow-md opacity-80" style={{ color: item.color }}>{item.platform}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="animate-marquee-reverse whitespace-nowrap flex gap-12 py-4">
                            {[...multiverseContent].reverse().concat([...multiverseContent].reverse()).map((item, i) => (
                                <div key={i} className="group relative w-[320px] aspect-[16/9] flex-shrink-0 rounded-[40px] overflow-hidden glass-card transition-all duration-700 vortex-card shadow-[0_30px_70px_rgba(0,0,0,0.6)]" style={{ transform: 'rotateX(20deg) rotateY(15deg)' }}>
                                    <img src={item.url} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-90" />
                                    <div className="absolute top-5 left-5 right-5 flex justify-between items-start text-white font-black">
                        <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-xl text-[10px] border border-white/30 uppercase tracking-tight shadow-xl font-black uppercase italic">
                           {item.region} - {item.type}
                        </span>
                                        <Activity size={16} className="text-white group-hover:text-cyan-400 animate-pulse transition-colors drop-shadow-lg" />
                                    </div>
                                    <div className="absolute bottom-6 left-7 text-white">
                                        <h4 className="text-xl font-black uppercase tracking-tighter mb-1 group-hover:text-cyan-400 transition-colors drop-shadow-lg font-black uppercase italic">{item.title}</h4>
                                        <span className="text-[11px] font-bold uppercase tracking-widest drop-shadow-md opacity-80" style={{ color: item.color }}>{item.platform}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* TESTIMONIALS SECTION */}
                <section id="testimonials" className="relative py-56 overflow-hidden border-t border-white/5 z-10 text-white bg-transparent text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,209,233,0.1)_0%,transparent_75%)] pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="mb-32">
                            <div className="inline-flex items-center gap-3 premium-badge border-white/10 rounded-full text-cyan-300 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md mb-8 shadow-xl">Reviews</div>
                            <h2 className="text-[38px] font-black uppercase tracking-tighter leading-[1.1] high-visibility-heading">
                                Trusted By Over<br/>
                                <span className="electric-cyan-highlight">100,000 Streamers</span>
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
                                                <div key={i} className="glass-card p-10 rounded-[55px] hover:-translate-y-3 transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col h-full bg-[#111827]/90 text-left">
                                                    <Quote className="text-cyan-400/40 mb-8 group-hover:text-cyan-400 transition-colors" size={40} />
                                                    <p className="text-lg text-white font-semibold leading-relaxed italic mb-auto">
                                                        "{item.text}"
                                                    </p>
                                                    <div className="flex items-center gap-4 mt-10">
                                                        <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center font-black text-xl shadow-2xl">
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


                            <button onClick={prevTestimonial} className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all border-white/20 z-20 shadow-xl"><ChevronLeft size={24} /></button>
                            <button onClick={nextTestimonial} className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all border-white/20 z-20 shadow-xl"><ChevronRight size={24} /></button>


                            <div className="flex justify-center gap-3 mt-12">
                                {testimonialPages.map((_, i) => (
                                    <button key={i} onClick={() => setTestimonialSlide(i)} className={`w-3 h-3 rounded-full transition-all ${testimonialSlide === i ? 'bg-cyan-400 w-8' : 'bg-white/20'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* FAQs SECTION */}
                <section id="faqs" className="relative py-56 overflow-hidden border-t border-white/10 z-10 bg-transparent text-center" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                    <div className="max-w-5xl mx-auto px-6 relative z-10 text-white">
                        <h2 className="text-[38px] font-black uppercase tracking-tighter mb-6 high-visibility-heading">
                            Frequently Asked<br/>
                            <span className="electric-cyan-highlight">Questions</span>
                        </h2>
                        <div className="space-y-6 text-left mt-32">
                            {faqs.map((item, i) => (
                                <div
                                    key={i}
                                    className={`rounded-[40px] border transition-all duration-500 overflow-hidden cursor-pointer ${openFaq === i ? 'bg-[#111827] border-white/40 shadow-[0_0_60px_rgba(255,255,255,0.1)]' : 'bg-[#111827]/80 border-white/5 hover:border-white/20 backdrop-blur-md'}`}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <div className="p-10 flex items-center justify-between gap-8">
                                        <h4 className={`text-2xl font-black uppercase tracking-tighter transition-colors ${openFaq === i ? 'text-cyan-300' : 'text-white'}`}>{item.q}</h4>
                                        <div className={`p-3 rounded-2xl transition-all shadow-xl ${openFaq === i ? 'bg-white/10 text-white' : 'bg-white/5 text-white'}`}>
                                            {openFaq === i ? <MinusIcon size={24} /> : <PlusIcon size={24} />}
                                        </div>
                                    </div>
                                    <div className={`transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className={`p-10 pt-0 text-lg font-semibold leading-relaxed border-t border-white/5 ${openFaq === i ? 'text-white/90' : 'text-white/40'}`}>
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* FINAL CTA SECTION */}
                <section className="relative py-72 bg-black/15 overflow-hidden border-t border-white/10 z-10 text-white text-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00D1E9]/30 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="premium-badge text-[10px] mb-10 inline-block uppercase tracking-[0.4em] shadow-2xl">
                            <Zap size={20} fill="currentColor" /> Limited Access Override
                        </div>
                        <h2 className="text-[38px] md:text-[54px] font-black uppercase tracking-tighter text-white leading-none mb-10 high-visibility-heading">
                            Stop Settling For 10%.<br/>
                            <span className="electric-cyan-highlight">The Whole World Is Waiting.</span>
                        </h2>
                        <p className="text-white/95 max-w-2xl mx-auto text-xl font-bold leading-relaxed mb-16 drop-shadow-2xl">
                            Join 50,000+ streamers who have already unlocked their subscriptions. Fast, private, and built for 4K.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <button className="px-14 py-7 bg-cyan-400 text-white font-black rounded-[32px] shadow-[0_0_80px_rgba(34,211,238,0.9)] hover:shadow-[0_0_100px_rgba(34,211,238,1)] hover:scale-105 transition-all flex items-center gap-4 text-base uppercase tracking-widest group">
                                <span className="text-glow-white font-black font-black uppercase italic">Download The App</span> <ChevronRight className="group-hover:translate-x-2 transition-transform drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
                            </button>
                            <button className="px-12 py-7 bg-[#111827]/80 border border-white/20 text-white font-black rounded-[32px] hover:bg-white/10 transition-all text-base uppercase tracking-widest shadow-2xl backdrop-blur-sm font-black uppercase italic">
                                Browse Library
                            </button>
                        </div>
                    </div>
                </section>


                {/* FOOTER */}
                <footer className="bg-black/80 pt-32 pb-16 px-6 border-t border-white/5 relative overflow-hidden z-10 text-white">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24 font-black">
                            <div className="col-span-1 md:col-span-2">
                                <div className="text-5xl font-black tracking-tighter flex items-center mb-10 uppercase font-black uppercase italic">
                                    <span>BINGE</span>
                                    <span className="text-cyan-400 ml-1">BEYOND</span>
                                </div>
                                <p className="text-white/60 max-w-sm mb-14 font-semibold text-lg leading-relaxed italic drop-shadow-sm font-black uppercase italic">
                                    BingeBeyond bridges the gap between your local catalog and the global multiverse of content. Optimized for speed, built for privacy.
                                </p>
                                <div className="flex gap-6">
                                    {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
                                        <div key={i} className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:scale-110 cursor-pointer transition-all duration-300 shadow-xl">
                                            <Icon size={22} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-10 uppercase tracking-widest font-black uppercase italic">
                                <h5 className="font-black text-[11px] uppercase tracking-[0.4em] mb-4 text-white/40">Core Network</h5>
                                <ul className="space-y-5 text-sm font-black">
                                    <li><a href="#" className="hover:text-cyan-400 transition-colors">Global Library</a></li>
                                    <li><a href="#" className="hover:text-cyan-400 transition-colors">Server Status</a></li>
                                    <li><a href="#" className="hover:text-cyan-400 transition-colors">Speed Test</a></li>
                                </ul>
                            </div>
                            <div className="space-y-10 uppercase tracking-widest font-black uppercase italic">
                                <h5 className="font-black text-[11px] uppercase tracking-[0.4em] mb-4 text-white/40">Protocol Support</h5>
                                <ul className="space-y-5 text-sm font-black">
                                    <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Shield</a></li>
                                    <li><a href="#" className="hover:text-cyan-400 transition-colors">Legal Hub</a></li>
                                    <li><a href="#" className="hover:text-cyan-400 transition-colors">Upgrade Hub</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] font-black tracking-[0.6em] gap-10 text-center uppercase font-black">
                            <div className="flex items-center gap-5">
                                <span>© 2024 BINGEBEYOND NETWORKS</span>
                                <div className="w-2 h-2 bg-white/20 rounded-full" />
                                <span className="text-cyan-400 font-black drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">SYSTEM STATUS: OPTIMAL</span>
                            </div>
                            <div className="flex gap-12 font-bold font-black uppercase italic">
                                <a href="#" className="hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em]">Privacy Override</a>
                                <a href="#" className="hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em]">Term of Protocol</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};


export default App;

