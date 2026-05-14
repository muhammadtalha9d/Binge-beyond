import React, { useState, useEffect, useRef } from 'react';
// import bgImage from './collage2.jpg'; // Adjust path as needed
import bgImage from './hero-logo.png';
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
import logo from "../Binge-logo.svg";

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
        // Prevent it from firing again if it's already running or done
        if (revealStage === 'scanning' || revealStage === 'done') return;
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

// --- NEW: Scroll Detection Logic ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the section is in view AND the animation hasn't started yet, run it
                if (entry.isIntersecting && revealStage === 'problem') {
                    startAnimationSequence();
                }
            },
            {
                threshold: 0.4 // Triggers when 40% of the section is visible on screen
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [revealStage]); // Dependency array ensures it checks the current stage


    const multiverseContent = [
        { src:"/images/adulting.png"},
        { src:"/images/bone-breaker.png"},
        { src:"/images/chucky.png"},
        { src:"/images/classroom.png"},
        { src:"/images/despicable.png"},
        { src:"/images/friends.png"},
        { src:"/images/masterchef.png"},
        { src:"/images/memory.png"},
        { src:"/images/messi.png"},
        { src:"/images/normal-people.png"},
        { src:"/images/onepiece.png"},
        { src:"/images/onimai.png"},
        { src:"/images/reign.png"},
        { src:"/images/rickandmorty.png"},
        { src:"/images/romeo.png"},
        { src:"/images/scent.png"},
        { src:"/images/southpark.png"},
        { src:"/images/strange-hero.png"},
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
            icon: <AppWindow className="text-cyan-400" />,
            imgSrc: "/images/3card1.png"
        },
        {
            title: "Discover Beyond",
            subtitle: "Universal Library",
            desc: "Explore our unified hub to find global releases, live sports, and regional catalogs you never knew you had access to.",
            icon: <GlobeIcon className="text-cyan-400" />,
            imgSrc: "/images/3card2.png"
        },
        {
            title: "Just hit play",
            subtitle: "Instant Override",
            desc: "Tap any title and we'll instantly route the right global connection in the background. Grab the popcorn, we handle the rest.",
            icon: <PlayCircle className="text-cyan-400" />,
            imgSrc: "/images/3card3.png"
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
            a: "BingeBeyond is designed for popular streaming platforms such as Netflix, Amazon Prime Video, and other supported entertainment apps."
        },
        {
            q: "Is this app legal to use?",
            a: "Absolutely. BingeBeyond is completely legal and safe to use. It changes your virtual location to unlock content on streaming platforms."
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

// No more grouping needed! Loop directly through the length of the array.
    const nextTestimonial = () => setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="min-h-screen master-raycast-atmosphere text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
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
            <nav className={`left-0 right-0 max-w-7xl mx-auto fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between ${scrolled ? 'backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'}`}>                <div className="flex items-center gap-8">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <img
                            src="/images/Binge-logo.svg"
                            alt="BingeBeyond Logo"
                            className="h-8 w-8 object-contain mr-2"
                        />
                        <span className="text-white font-gilroy text-[16px] md:text-[22px] lg:text-[28px] font-normal non-italic leading-[130%]">Binge</span>
                        <span className="text-[#00D1E9] font-gilroy text-[16px] md:text-[22px] lg:text-[28px] font-normal non-italic leading-[130%]">Beyond</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-[10px] font-black tracking-[0.3em] text-gray-300 uppercase">
                        <a href="#benefits" className="hover:text-cyan-400 transition-colors uppercase">Benefits</a>
                        <a href="#protocol" className="hover:text-cyan-400 transition-colors uppercase">How it works</a>
                        <a href="" className="hover:text-cyan-400 transition-colors uppercase">Discover Beyond</a>
                    </div>
                </div>
                <a
                    href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                <button className="px-6 py-2 bg-cyan-400 text-black font-black rounded-full text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">Download The App</button>
                </a>
                </nav>


            {/* Hero Section */}
            {/*<section className="relative h-[90vh] w-full overflow-hidden flex items-center bg-transparent z-10">*/}
            {/*        <div className="absolute inset-0 pointer-events-none">*/}
            {/*            /!*<img*!/*/}
            {/*            /!*    src={bgImage}*!/*/}
            {/*            /!*    className="w-full h-full object-cover"*!/*/}
            {/*            /!*    alt="Background"*!/*/}
            {/*            /!*//*/}
            {/*        </div>*/}

            {/*    <div className="absolute inset-0 z-10" />*/}

            {/*    <div className="relative z-20 px-8 md:px-20 max-w-7xl">*/}
            {/*        <div className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 rounded-full text-cyan-400 text-[10px] font-black tracking-[0.4em] mb-8 inline-block uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-md">Unlock Global Content</div>*/}
            {/*        <h1 className="text-[48px] font-black leading-[1.1] tracking-tighter max-w-4xl uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] text-glow text-white">*/}
            {/*            Watch Shows, Movies & <br/>*/}
            {/*            Live Sports - <br/>*/}
            {/*            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-100 to-white text-glow">Without Location Limits</span>*/}
            {/*        </h1>*/}
            {/*        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl leading-relaxed font-semibold drop-shadow-md">*/}
            {/*            BingeBeyond works with your streaming apps to access content available in other regions - fast, smooth, and without breaking your device.*/}
            {/*        </p>*/}

            {/*        <a*/}
            {/*            href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming&pli=1"*/}
            {/*            target="_blank"*/}
            {/*            rel="noopener noreferrer"*/}
            {/*            className="w-1/2 sm:w-1/2 flex items-center justify-center gap-3 bg-cyan-400 text-white px-8 py-3.5 rounded-xl transition-all shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:shadow-[0_0_60px_rgba(34,211,238,0.9)] hover:scale-105 transition-all group"*/}
            {/*        >*/}


            {/*            <svg className="w-7 h-7" viewBox="0 0 512 512" fill="currentColor">*/}
            {/*                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>*/}
            {/*            </svg>*/}
            {/*            <div className="text-left">*/}
            {/*                <div className="text-[12px] font-normal leading-none mb-1 opacity-80 text-glow-white font-black">GET IT*/}
            {/*                    ON*/}
            {/*                </div>*/}
            {/*                <div className="text-[20px] font-semibold leading-none text-glow-white font-black">Google Play</div>*/}
            {/*            </div>*/}
            {/*        </a>*/}

            {/*        /!*<button className="px-12 py-6 bg-cyan-400 text-white font-black rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:shadow-[0_0_60px_rgba(34,211,238,0.9)] hover:scale-105 transition-all flex items-center gap-3 text-sm uppercase tracking-widest group">*!/*/}
            {/*        /!*    <span className="text-glow-white font-black">Download the app</span> <ChevronRight className="group-hover:translate-x-1 transition-transform drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />*!/*/}
            {/*        /!*</button>*!/*/}
            {/*    </div>*/}


            {/*    /!* DEVICE SUPPORT INDICATOR *!/*/}
            {/*    <div className="absolute bottom-12 right-12 z-30 flex gap-8 transition-all duration-700">*/}
            {/*        <div className="flex flex-col items-center group">*/}
            {/*            <div className="neon-device-circle transition-all group-hover:scale-110">*/}
            {/*                <Smartphone className="text-cyan-400" size={24} />*/}
            {/*            </div>*/}
            {/*            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/90">Mobile</span>*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col items-center group">*/}
            {/*            <div className="neon-device-circle transition-all group-hover:scale-110">*/}
            {/*                <Tablet className="text-cyan-400" size={24} />*/}
            {/*            </div>*/}
            {/*            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/90">Tablet</span>*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col items-center group">*/}
            {/*            <div className="neon-device-circle transition-all group-hover:scale-110">*/}
            {/*                <Tv className="text-cyan-400" size={24} />*/}
            {/*            </div>*/}
            {/*            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/90">Smart TV</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}


            {/*    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0f172a] to-transparent z-30" />*/}
            {/*</section>*/}
            {/* Removed max-w-7xl and mx-auto from here */}
            <section className="mt-20 lg:mt-0 relative h-[90vh] w-full overflow-hidden flex items-center bg-[#091115] z-10">

                {/* 1. Background Gradient Fix */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute inset-0 pointer-events-none bg-transparent">
                        <img
                            src={bgImage}
                            className="w-full h-full object-cover bg-transparent"
                            alt="Background"
                        />
                    </div>
                </div>

                {/* 2. Dark Overlay */}

                {/* 3. Content Container */}
                {/* Added mx-auto and w-full here to center the content within the full-width section */}
                <div className="w-full mx-auto relative z-20 px-8  max-w-7xl">



                    <h1 className="text-[48px] font-black leading-[1.1] tracking-tighter max-w-4xl uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] text-white">
                        Watch Shows, Movies & <br/>
                        Live Sports - <br/>
                        <span className=" text-cyan-400 ">
                Without Location Limits
            </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-100 mt-6 mb-10 max-w-2xl leading-relaxed font-semibold">
                        BingeBeyond works with your streaming apps to access content available in other regions - fast, smooth, and without breaking your device.
                    </p>

                    <a
                        href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-max flex items-center justify-center gap-3 bg-cyan-400 text-white px-8 py-3.5 rounded-xl transition-all hover:scale-105 group"
                    >
                        <svg className="w-7 h-7" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                        </svg>
                        <div className="text-left">
                            <div className="text-[12px] font-normal leading-none mb-1 opacity-80 font-black">GET IT ON</div>
                            <div className="text-[20px] font-semibold leading-none font-black">Google Play</div>
                        </div>
                    </a>
                </div>

            </section>


            {/* Marquee Bar - UPDATED SERVICES LIST */}
            <section className="bg-[#091115] border-y border-white/15 shadow-2xl flex items-center overflow-hidden backdrop-blur-2xl z-10">
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


                {/* SCANNER SECTION - UPDATED TO STACKED LAYOUT WITH NEW TEXT */}
                <section ref={sectionRef} className="py-20 bg-[#091115] px-6 relative overflow-hidden z-10 text-center">
                    <div className="depth-wash-light" />
                    <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                        <div className="space-y-6 text-white mb-20 max-w-4xl">
                            <h2 className="text-[44px] font-black tracking-tighter uppercase leading-[1.1] high-visibility-heading">
                                Your Favorite Shows Aren't Gone.<br/>
                                <span className="text-cyan-400">They're Being Gatekept.</span>
                            </h2>
                            <p className="text-xl font-medium text-white/80 high-visibility-heading tracking-tight">
                                You pay 100% for your OTT subscription. Stop settling for 10% access.
                            </p>
                        </div>


                        <div
                            onClick={revealStage === 'done' ? handleReplay : undefined}
                            className="relative h-auto w-full max-w-5xl rounded-[56px] border border-white/20 overflow-hidden bg-black/20 shadow-[0_0_80px_rgba(0,0,0,0.5)] cursor-pointer group backdrop-blur-xl"
                        >
                            <div className="relative w-full h-[550px] overflow-hidden">

                                {/* 1. Background Image Layer */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <img
                                        src="/images/unlocked.jpg"
                                        alt="Background"
                                        className="w-full h-[550px] md:h-auto"
                                    />
                                     <div className="absolute inset-0 bg-[#111827]/70 backdrop-blur-md" />
                                </div>



                            </div>
                            <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center p-8 text-white backdrop-blur-md">
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


                            <div className={`absolute inset-0 z-30  bg-[#111827]/60 backdrop-blur-3xl ${revealStage === 'scanning' ? 'animate-clip' : revealStage === 'done' ? '' : 'opacity-0'}`} style={revealStage === 'done' ? {clipPath: 'inset(0 0 0 0)'} : {}}>
                                <img src="/images/unlocked.jpg" alt=""/>
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


            {/* UNIFIED SPOTLIGHT BENEFITS SECTION */}
            <section id="benefits" className="relative z-10 py-20 bg-transparent">
                <div className="depth-wash-heavy" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-5 premium-badge text-[10px] uppercase tracking-[0.4em] mb-8">High-Performance Network</div>
                        <h2 className="text-[38px] font-black uppercase tracking-tighter leading-[1.1] mb-2 high-visibility-heading">
                            Built For Binge-Watching.<br/>
                            <span className="text-cyan-400">Optimized For Speed.</span>
                        </h2>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="benefit-card-pop">
                            <img src="/images/4grid1.png" alt="" className="h-[280px] w-full rounded-[32px]  overflow-hidden shadow-inner mb-10 flex items-center justify-center"/>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-white">
                                    <Target size={24} className="text-cyan-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Universal Remote</span>
                                </div>
                                <h2 className="text-2xl font-black uppercase tracking-tighter high-visibility-heading">One Tap From Search <span className="text-cyan-400">To Stream.</span></h2>
                                <p className="text-sm text-white/90 font-medium leading-relaxed">
                                    No more guessing which country server to pick. Find any show in our hub, hit play, and we connect you to the right node instantly.
                                </p>
                            </div>
                        </div>
                        <div className="benefit-card-pop">
                            <img src="/images/4grid2.png" alt="" className="h-[280px] w-full rounded-[32px]  overflow-hidden shadow-inner mb-10 flex items-center justify-center"/>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-white">
                                    <GlobeIcon size={24} className="text-cyan-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Global Discovery</span>
                                </div>
                                <h2 className="text-2xl font-black uppercase tracking-tighter high-visibility-heading">See What You Are <span className="text-cyan-400">Missing.</span></h2>
                                <p className="text-sm text-white/90 font-medium leading-relaxed">
                                    Browse movies and live sports not available in your region. Explore global catalogs in one unified hub without switching between apps.
                                </p>
                            </div>
                        </div>
                        <div className="benefit-card-pop">
                            <img src="/images/4grid3.png" alt="" className="h-[280px] w-full rounded-[32px]  overflow-hidden shadow-inner mb-10 flex items-center justify-center"/>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-white">
                                    <Zap size={24} className="text-cyan-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Zero Lag</span>
                                </div>
                                <h2 className="text-2xl font-black uppercase tracking-tighter high-visibility-heading">Stream Without <span className="text-cyan-400">Device Lag.</span></h2>
                                <p className="text-sm text-white/90 font-medium leading-relaxed">
                                    Traditional VPNs slow your entire device. We target only your streaming apps, leaving your maps, banking, and messages at full speed.
                                </p>
                            </div>
                        </div>
                        <div className="benefit-card-pop">
                            <img src="/images/4grid4.png" alt="" className="h-[280px] w-full rounded-[32px]  overflow-hidden shadow-inner mb-10 flex items-center justify-center"/>                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-white">
                                    <FastForward size={24} className="text-cyan-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Instant Delivery</span>
                                </div>
                                <h2 className="text-2xl font-black uppercase tracking-tighter high-visibility-heading">Smooth Buffer-Free <span className="text-cyan-400">Playback.</span></h2>
                                <p className="text-sm text-white/90 font-medium leading-relaxed">
                                    Our network is built for high-bandwidth 4K video. Connect to optimized routing lanes for lag-free global premieres.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* HOW IT WORKS SECTION */}
            <section id="protocol" className="relative bg-transparent py-20 overflow-hidden z-10 border-y border-white/5">
                <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                    <div className="flex flex-col items-center text-center mb-20">
                        <div className="inline-flex items-center gap-5 premium-badge text-[10px] uppercase tracking-[0.4em] mb-8">How it works</div>

                        <h2 className="text-[38px] font-black uppercase tracking-tighter mb-6 high-visibility-heading">
                            Start Binge-Watching<br/>
                            <span className="text-cyan-400">In 3 Simple Steps.</span>
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


                        {/* RIGHT COLUMN */}
                        <div className="lg:col-span-7 relative h-[300px] md:h-[650px] lg:h-[550px] 2xl:h-[650px] bg-[#111827]/90 border border-white/30 rounded-[20px] overflow-hidden shadow-3xl backdrop-blur-3xl">
                            {/* Optional background grid for texture */}
                            <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

                            {/* Map through the steps array to show the corresponding image */}
                            {steps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0  transition-all duration-700 flex items-center justify-center ${
                                        activeStep === idx
                                            ? 'opacity-100 scale-100 z-10'
                                            : 'opacity-0 scale-95 z-0 pointer-events-none'
                                    }`}
                                >
                                    <img
                                        src={step.imgSrc}
                                        alt={step.title}
                                        className="w-full h-[300px] md:h-[650px] lg:h-[550px] 2xl:h-[650px] object-cover rounded-[10px] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* MULTIVERSE FEED SECTION - RESTORED DUAL ROWS */}
            <section id="beyond" className="relative py-20 bg-transparent relative overflow-hidden z-10 border-t border-white/10">
                <div className="absolute inset-0 blueprint-grid opacity-60 z-0" />



                <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-5 premium-badge text-[10px] uppercase tracking-[0.4em] mb-8">Millions of Shows, Matches & Movies</div>
                    <h2 className="text-[38px] font-black uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-md">Stream right on the apps <br/> <span className="text-cyan-400">you already use.</span></h2>
                    <p className="text-slate-100 max-w-xl mx-auto text-sm font-bold leading-relaxed uppercase tracking-[0.2em] drop-shadow-md">Access live sports on SonyLiv, exclusive anime on Crunchyroll Japan, and blockbusters on US Netflix in seconds. Connect once and explore entertainment worldwide.</p>
                </div>


                <div className="relative z-10 flex flex-col gap-20 perspective-[2000px] pb-10 mask-fade-x">
                    <div className="animate-marquee whitespace-nowrap flex gap-12 py-4">
                        {[...multiverseContent, ...multiverseContent].map((item, i) => (
                            <div key={i} className="group relative w-[320px] aspect-[16/9] flex-shrink-0 rounded-[20px] overflow-hidden  transition-all duration-700  shadow-[0_30px_70px_rgba(0,0,0,0.6)] border-white/40">
                                <img src={item.src} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" alt="" />


                            </div>
                        ))}
                    </div>
                    {/* ROW 2 RESTORED */}
                    <div className="animate-marquee-reverse whitespace-nowrap flex gap-12 py-4">
                        {[...multiverseContent].reverse().concat([...multiverseContent].reverse()).map((item, i) => (
                            <div key={i} className="group relative w-[320px] aspect-[16/9] flex-shrink-0 rounded-[20px] overflow-hidden  transition-all duration-700  shadow-[0_30px_70px_rgba(0,0,0,0.6)] border-white/40" >
                                <img src={item.src} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* TESTIMONIALS SECTION - 3 CARDS PER SLIDE */}
            <section id="testimonials" className="relative bg-transparent py-20 overflow-hidden border-t border-white/10 z-10">
                <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-5 premium-badge text-[10px] uppercase tracking-[0.4em] mb-8">Reviews</div>
                        <h2 className="text-[38px] font-black uppercase tracking-tighter text-white leading-[1.1] drop-shadow-md">
                            Trusted by over <br/> <span className="text-cyan-400">100,000 Streamers</span>
                        </h2>
                    </div>

                    <div className="relative group">
                        <div className="relative overflow-hidden min-h-[400px]">
                            <div
                                className="flex transition-transform duration-700 ease-in-out h-full"
                                style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
                            >
                                {testimonials.map((item, i) => (
                                    <div key={i} className="min-w-full flex-shrink-0 px-4 flex justify-center">
                                <div className="glass-card w-[250px] md:w-[600px] lg:w-full lg:max-w-3xl p-10 md:p-14 rounded-[55px]  transition-all duration-500 group border-white/30  flex flex-col bg-white/[0.08]">
                                    <Quote className="text-cyan-400/40 mb-8 group-hover:text-cyan-400 transition-colors" size={40} />
                                    <p className="text-[12px] md:text-2xl text-white font-semibold leading-relaxed italic mb-8">
                                        "{item.text}"
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="h-8 w-8 md:w-12 md:h-12 rounded-md md:rounded-2xl bg-cyan-400 text-black flex items-center justify-center font-black tex-[13px] md:text-xl">
                                            {item.avatar}
                                        </div>
                                        <h4 className="font-black uppercase tracking-tighter text-white text-sm">{item.name}</h4>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevTestimonial}
                        className="absolute top-1/2 -left-2 md:left-4 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all border-white/20 z-20"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute top-1/2 -right-2 md:right-4 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all border-white/20 z-20"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, i) => (
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
            <section id="faqs" className="relative bg-transparent py-20 overflow-hidden border-t border-white/20 z-10 blueprint-grid">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 text-white">
                        <h2 className="text-[38px] font-black uppercase tracking-tighter mb-6 drop-shadow-md">
                            Frequently Asked <span className="text-cyan-400">Questions</span>
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
            <section className="relative py-72 bg-transparent overflow-hidden border-t border-white/20 z-10">
                <div className="absolute inset-0 z-0">
                    <img src="/images/cta-img.png" alt="CTA Hero" className="w-full h-full object-cover scale-100 animate-slow-pan" />

                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">

                    <h2 className="text-[38px] md:text-[54px] font-black uppercase tracking-tighter text-white leading-none mb-10">
                        Get More From The Subscriptions <br/>
                        <span className="text-cyan-400">You Already Pay For</span>
                    </h2>
                    <p className="text-slate-100 max-w-2xl mx-auto text-xl font-bold leading-relaxed mb-16 drop-shadow-2xl">
                        Unlock more shows, more regions, and smoother streaming - without slowing down the rest of your phone.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <a
                            href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming&pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-14 py-7 bg-cyan-400 text-white font-black rounded-[32px]  hover:scale-105 transition-all flex items-center gap-4 text-base uppercase tracking-widest group"
                        >
                            <span className=" font-black">Download the app</span>
                            <ChevronRight className="group-hover:translate-x-2 transition-transform drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
                        </a>

                    </div>
                </div>
            </section>


            {/* FOOTER */}
            <footer className="bg-transparent pt-20 px-6 border-t border-white/20 relative overflow-hidden z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-cyan-500/[0.15] blur-[220px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex-shrink-0 flex items-center cursor-pointer mb-10">
                                <img
                                    src="/images/Binge-logo.svg"
                                    alt="BingeBeyond Logo"
                                    className="h-8 w-8 object-contain mr-2"
                                />
                                <span className="text-white font-gilroy text-[16px] md:text-[22px] lg:text-[28px] font-normal non-italic leading-[130%]">Binge</span>
                                <span className="text-[#00D1E9] font-gilroy text-[16px] md:text-[22px] lg:text-[28px] font-normal non-italic leading-[130%]">Beyond</span>
                            </div>
                            <p className="text-slate-200 max-w-sm mb-14 font-semibold text-lg leading-relaxed italic drop-shadow-sm">
                                Stream global content seamlessly across your favorite OTT platforms. Fast, private, and built for uninterrupted viewing.
                            </p>
                            {/*<div className="flex gap-6">*/}
                            {/*    {[Twitter, Instagram, Github, Mail].map((Icon, i) => (*/}
                            {/*        <div key={i} className="w-14 h-14 rounded-2xl bg-white/[0.15] border border-white/30 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:scale-110 cursor-pointer transition-all duration-300 text-white shadow-xl">*/}
                            {/*            <Icon size={22} />*/}
                            {/*        </div>*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                        </div>
                        {/*<div className="space-y-10 text-white">*/}
                        {/*    <h5 className="font-black text-[11px] uppercase tracking-[0.4em] mb-4 text-slate-300">Core Network</h5>*/}
                        {/*    <ul className="space-y-5 text-base font-bold">*/}
                        {/*        <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Global Library</a></li>*/}
                        {/*        <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Server Status</a></li>*/}
                        {/*        <li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Speed Test</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <div className="space-y-10 text-white">
                            <ul className="space-y-5 text-base font-bold">

                                <li><a  href="https://bingebeyond.com/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                         className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Privacy Policy</a></li>
                                <li><a  href="https://bingebeyond.com/bingebeyond-terms-of-use"
                                        target="_blank"
                                        rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Terms & Conditions</a></li>
                                {/*<li><a href="#" className="text-white hover:text-cyan-400 transition-colors uppercase text-[12px] tracking-widest">Upgrade Hub</a></li>*/}
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};


export default App;

