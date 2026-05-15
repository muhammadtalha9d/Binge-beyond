import React, { useState, useEffect, useRef } from 'react';
import { Play, Download, Zap, Power, Battery, Monitor, Search, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';


const App = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-12');
                }
            });
        }, observerOptions);


        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));


        return () => observer.disconnect();
    }, []);


    const stepData = [
        {
            title: "Pick Your Apps",
            text: "Select your favorite streaming platforms on your phone or Android TV."
        },
        {
            title: "Find Your Show",
            text: "Search for movies, series, or live matches across global catalogs in one place."
        },
        {
            title: "Start Watching Instantly",
            text: "Tap play and start streaming immediately on your chosen platform."
        }
    ];


    const faqs = [
        {
            question: "How does BingeBeyond unblock geo-restricted content on streaming apps?",
            answer: "BingeBeyond uses secure and advanced connection technology to route your internet connection through servers in different countries, bypassing geo-restrictions on platforms like Netflix, Prime Video, and Disney+. Simply select a server in the desired country to access its content library."
        },
        {
            question: "How is BingeBeyond different from a regular VPN?",
            answer: "Traditional VPNs route your entire device through one connection, which can slow speeds and affect other apps. BingeBeyond is designed for streaming, so only supported streaming apps are routed while banking, maps, food delivery, and other apps impacted by location, stay local."
        },
        {
            question: "Will BingeBeyond slow down my internet?",
            answer: "BingeBeyond is built for smooth streaming performance. By routing only streaming traffic instead of your whole device, it helps reduce the slowdowns often experienced with full-device VPNs."
        },
        {
            question: "Which streaming apps work with BingeBeyond?",
            answer: "BingeBeyond is designed for popular streaming platforms such as Netflix, Amazon Prime Video, and other supported entertainment apps."
        },
        {
            question: "Is this app legal to use?",
            answer: "Absolutely. BingeBeyond is completely legal and safe to use. It changes your virtual location to unlock content on streaming platforms."
        }
    ];


    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };


    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <style>{`
        :root {
          --cyan: #00E5FF;
          --max-blur: 80px;
        }
        @keyframes infiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: infiniteScroll 40s linear infinite;
        }
        .glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(var(--max-blur));
          -webkit-backdrop-filter: blur(var(--max-blur));
        }
        .glass-light {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(var(--max-blur));
          -webkit-backdrop-filter: blur(var(--max-blur));
        }
        .animate-slow-pan { animation: slowPan 40s ease-in-out infinite; }
        .hero-heading {
          font-size: 48px;
          line-height: 1.15;
          letter-spacing: -0.05em;
        }
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 32px;
          }
        }
      `}</style>


            {/* 1. Dark Hero Section */}
            <header className="bg-[#020617] relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
                {/* Mesh Glow */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[80%] bg-[radial-gradient(circle,rgba(0,229,255,0.15)_0%,transparent_70%)] blur-[100px]" />
                </div>


                {/* Sticky Nav */}
                <nav className="absolute top-6 md:top-8 left-0 w-full z-[100] px-6 ">
                    <div className="max-w-6xl mx-auto glass rounded-[2.5rem] h-16 flex items-center justify-between px-8 border border-white/10 shadow-lg">
                        <div className="flex-shrink-0 flex items-center cursor-pointer relative z-10">
                            <img
                                src="/images/Binge-logo.svg"
                                alt="BingeBeyond Logo"
                                className="h-8 w-8 object-contain mr-2"
                            />
                            <span className="text-white font-gilroy text-[16px] md:text-[22px] lg:text-[28px] font-normal non-italic leading-[130%]">Binge</span>
                            <span className="text-[#00D1E9] font-gilroy text-[16px] md:text-[22px] lg:text-[28px] font-normal non-italic leading-[130%]">Beyond</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-white">
                            <a href="#features" className="hover:text-[#00E5FF] transition-colors">Performance</a>
                            <a href="#how-it-works" className="hover:text-[#00E5FF] transition-colors">How it Works</a>
                            <a href="#faq" className="hover:text-[#00E5FF] transition-colors">FAQ</a>
                        </div>

                        {isMenuOpen && (
                            <div className="md:hidden mt-4 mx-auto max-w-sm glass rounded-3xl p-6 border border-white/10 flex flex-col gap-4 text-center">
                                <a href="#features" className="text-white font-bold" onClick={() => setIsMenuOpen(false)}>Performance</a>
                                <a href="#how-it-works" className="text-white font-bold" onClick={() => setIsMenuOpen(false)}>How it Works</a>
                                <a href="#faq" className="text-white font-bold" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                            </div>
                        )}
                        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black px-2 md:px-6 py-1.5 md:py-2.5 rounded-xl md:rounded-full font-black text-sm hover:scale-105 transition-all"
                            >
                                Get App
                            </a>
                            {/* Mobile Menu Button */}

                        </div>
                    </div>

                    {/* Mobile Dropdown */}

                </nav>


                {/* Hero Content */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                    <div className="glass p-8 md:p-12 lg:p-24 rounded-[3rem] md:rounded-[5rem] text-center flex flex-col items-center border border-white/10 shadow-2xl">
                        <div className="max-w-4xl mb-12 md:mb-20">
                            <h1 className="hero-heading mb-8 text-white font-black text-[36px] md:text-[48px]">
                                The Streaming-First VPN for <span className="text-[#00E5FF]">Geo-Blocked Content</span>
                            </h1>
                            <p className="text-[18px] md:text-[20px] text-white/60 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                                Access geo-blocked movies, shows, and live sports across your favourite OTT platforms - while the rest of your phone stays fast and unaffected.
                            </p>
                            <a
                                href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming"
                                className="bg-white text-black px-4 md:px-12 py-4 md:py-5 rounded-3xl md:rounded-[2rem] font-black text-base text-md md:text-lg shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
                            >
                                Download for Play Store <Download className="w-5 h-5" />
                            </a>
                        </div>


                        {/* Mockup Area */}
                        <img src="/images/v2-hero.png" alt=""/>
                    </div>
                </div>
            </header>


            {/* 2. Trust Bar */}
            <section className="relative z-20 -mt-12">
                <div className="bg-white border-y border-slate-100 h-24 flex items-center overflow-hidden shadow-sm">
                    <div className="flex items-center animate-scroll whitespace-nowrap">
                        {[1, 2].map((loop) => (
                            <React.Fragment key={loop}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6 md:h-8 mx-6 md:mx-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="h-6 md:h-8 mx-6 md:mx-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" alt="Disney+" className="h-6 md:h-8 mx-6 md:mx-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max" className="h-6 md:h-8 mx-6 md:mx-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg" alt="Prime Video" className="h-6 md:h-8 mx-6 md:mx-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="Hulu" className="h-6 md:h-8 mx-6 md:mx-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.svg" alt="Crunchyroll" className="h-6 md:h-8 mx-6 md:mx-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Sony_LIV_logo.svg" alt="SonyLiv" className="h-6 md:h-8 mx-6 md:mx-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>


            {/* 3. Built for Fast Streaming */}
            <section id="features" className="bg-white py-24 md:py-32 px-6">
                <div className="bg-[url('/images/bg-gradient1.png')] bg-cover bg-center bg-no-repeat max-w-7xl mx-auto   p-8 md:p-12 lg:p-20 rounded-[3rem] md:rounded-[4rem] animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-block bg-black text-[#00E5FF] px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase mb-6 shadow-md border border-white/10">
                            WHY BINGEBEYOND
                        </div>
                        <h2 className="text-[28px] md:text-[36px] font-black text-slate-900 leading-tight">Built for Fast Streaming</h2>
                    </div>


                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col group shadow-sm">
                            <div className="flex-1 mb-10">
                                <div className="w-14 h-14 bg-[#00E5FF]/10 rounded-2xl flex items-center justify-center text-[#00E5FF] mb-8 border border-[#00E5FF]/20 shadow-inner">
                                    <Zap className="w-7 h-7" />
                                </div>
                                <h4 className="text-[18px] md:text-[24px] font-black text-slate-900 mb-4">Full Device Speed Intact</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">BingeBeyond only works with streaming apps, so the rest of your phone stays fast.</p>
                            </div>
                            <img src="/images/4grid1.png" alt=""/>                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col group shadow-sm">
                            <div className="flex-1 mb-10">
                                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600 mb-8 border border-green-500/20 shadow-inner">
                                    <Power className="w-7 h-7" />
                                </div>
                                <h4 className="text-[18px] md:text-[24px] font-black text-slate-900 mb-4">One-Taps Setup</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">Pick your show and start streaming instantly — no server switching or setup needed.</p>
                            </div>
                            <img src="/images/4grid2.png" alt=""/>
                        </div>


                        {/* Feature 3 */}
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col group shadow-sm">
                            <div className="flex-1 mb-10">
                                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600 mb-8 border border-purple-500/20 shadow-inner">
                                    <Battery className="w-7 h-7" />
                                </div>
                                <h4 className="text-[18px] md:text-[24px] font-black text-slate-900 mb-4">Lower Battery Drain</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">Focused streaming keeps your device from working overtime like full-device VPNs.</p>
                            </div>
                            <img src="/images/4grid3.png" alt=""/>
                        </div>


                        {/* Feature 4 */}
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col group shadow-sm">
                            <div className="flex-1 mb-10">
                                <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-600 mb-8 border border-yellow-500/20 shadow-inner">
                                    <Monitor className="w-7 h-7" />
                                </div>
                                <h4 className="text-[18px] md:text-[24px] font-black text-slate-900 mb-4">Stable 4K Streaming</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">Enjoy smooth HD and 4K playback built for high-quality OTT viewing.</p>
                            </div>
                            <img src="/images/4grid4.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>


            {/* 4. How It Works */}
            <section id="how-it-works" className=" bg-white py-24 md:py-32 px-6 md:px-12">
                <div className="bg-[url('/images/bg-gradient1.png')] bg-cover bg-center bg-no-repeat max-w-7xl mx-auto   p-8 md:p-12 lg:p-20 rounded-[3rem] md:rounded-[4rem] animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                    <div className="text-center mb-16 md:mb-24 animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                        <div className="inline-block bg-black text-[#00E5FF] px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase mb-6 shadow-md border border-white/10">
                            HOW IT WORKS
                        </div>
                        <h2 className="text-[28px] md:text-[36px] font-black text-slate-900 leading-tight">Start Binge Watching in 3 Steps</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                            <div className="space-y-4 mb-12 md:mb-16">
                                {stepData.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className={`cursor-pointer py-4 border-l-4 transition-all duration-300 pl-6 md:pl-8 ${
                                            activeStep === idx ? 'border-[#00E5FF]' : 'border-transparent'
                                        }`}
                                        onClick={() => setActiveStep(idx)}
                                    >
                                        {/* Title */}
                                        <h4 className={`text-[18px] md:text-[24px] font-extrabold ${
                                            activeStep === idx ? 'text-[#0891b2]' : 'text-slate-400'
                                        }`}>
                                            {idx + 1}. {step.title}
                                        </h4>

                                        {/* Collapsible Text Content */}
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                                activeStep === idx
                                                    ? 'grid-rows-[1fr] opacity-100 mt-4'
                                                    : 'grid-rows-[0fr] opacity-0 mt-0'
                                            }`}
                                        >
                                            {/* overflow-hidden is required for the grid-rows animation to work */}
                                            <div className="overflow-hidden">
                                                <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                                    {step.text}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            {/* Note: Completely delete your second 'Dynamic Step Detail Container' below this */}


                            <a
                                href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-10 py-4 rounded-full font-black text-sm hover:scale-105 transition-all self-start shadow-xl"
                            >
                                Install BingeBeyond
                            </a>
                        </div>


                        {/* Right Visual Image Box */}
                        <div className="relative flex items-center animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                            <div className="glass-light rounded-[2.5rem] md:rounded-[3rem] w-full  overflow-hidden flex items-center justify-center relative shadow-2xl">
                                {/* Visuals change based on activeStep */}
                                {activeStep === 0 && (
                                    <img src="/images/A1.png" alt=""/>
                                )}
                                {activeStep === 1 && (
                                    <img src="/images/A2.png" alt=""/>
                                )}
                                {activeStep === 2 && (
                                    <img src="/images/A3.png" alt=""/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 5. FAQ Section (Accordion) */}
            <section id="faq" className="bg-white py-24 md:py-32 px-6">
                <div className="bg-[url('/images/bg-gradient1.png')] bg-cover bg-center bg-no-repeat max-w-7xl mx-auto   p-8 md:p-12 lg:p-20 rounded-[3rem] md:rounded-[4rem] animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                    <div className="text-center mb-16 md:mb-20 animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                        <div className="inline-block bg-black text-[#00E5FF] px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase mb-6 shadow-md border border-white/10">
                            FAQ
                        </div>
                        <h2 className="text-[28px] md:text-[36px] font-black text-slate-900 leading-tight">Common Questions</h2>
                    </div>

                    <div className="space-y-4 animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm transition-all duration-300 ${openFaqIndex === index ? 'shadow-md ring-1 ring-[#00E5FF]/20' : ''}`}
                            >
                                <button
                                    className="w-full text-left p-6 md:p-8 flex justify-between items-center outline-none"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h4 className="text-base md:text-lg font-bold text-slate-900 pr-8">{faq.question}</h4>
                                    <div className={`w-8 md:w-10 h-8 md:h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-300 ${openFaqIndex === index ? 'rotate-180 bg-[#00E5FF]/10' : ''}`}>
                                        <ChevronDown className={`w-4 md:w-5 h-4 md:h-5 ${openFaqIndex === index ? 'text-[#0891b2]' : 'text-slate-400'}`} />
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 md:px-8 pb-8 pt-0">
                                        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 6. Footer CTA */}
            <section className="max-w-7xl mx-auto px-6 py-24 animate-on-scroll transition-all duration-1000 opacity-0 translate-y-12">

                <div className="rounded-[3rem] md:rounded-[4rem] py-20 md:py-24 px-8 text-center relative overflow-hidden shadow-2xl border border-white/10 group">
                    {/* Fun Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img src="/images/cta-img.png" alt="CTA Hero" className="w-full h-full object-cover scale-100 animate-slow-pan" />

                    </div>
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.2)_0%,transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-[28px] md:text-[36px] font-black italic uppercase tracking-tighter text-white mb-8 md:mb-10 leading-tight">
                            Unlock Global <span className="text-[#00E5FF]">Content in Seconds</span>
                        </h2>
                        <a
                            href="https://play.google.com/store/apps/details?id=bingebeyond.vpn.streaming"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-10 py-4 rounded-full font-black text-base md:text-lg hover:scale-105 transition-all shadow-xl inline-block"
                        >
                            Download for Android Now
                        </a>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="py-20 text-center border-t border-slate-100 bg-slate-50">
                <div className="flex flex-col items-center gap-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                            <Play className="fill-[#00E5FF] text-[#00E5FF] w-4 h-4" />
                        </div>
                        <span className="text-2xl font-black text-slate-900 tracking-tight">BingeBeyond</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
                        <a href="#" className="hover:text-[#00E5FF] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#00E5FF] transition-colors">Terms</a>
                        <a href="#" className="hover:text-[#00E5FF] transition-colors">Support</a>
                    </div>
                    <p className="text-slate-300 text-[9px] font-bold uppercase tracking-widest italic px-6">
                        © 2026 BingeBeyond. High-Speed Global Access. Built for Android.
                    </p>
                </div>
            </footer>
        </div>
    );
};


export default App;

