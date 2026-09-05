import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // ✅ Link import karo

// Lucide React - All unique imports
import {
  ChevronDown,
  Menu,
  X,
  Home,
  User,
  Stethoscope,
  FlaskRound,
  Venus,
  Mars,
  Image,
  MessageCircle,
  Baby,
  Filter,
  Activity,
  Syringe,
  Bug,
  Flame,
  Scissors,
  Newspaper,
  Trophy,
  Eye,
  UserRound,
  Bandage,
  Droplet,
  Camera,
  Crosshair,
  Maximize2,
  ShieldAlert,
  Gauge,
  Dna,
  Zap,
  ArrowUp,
  Clock,
  AlertCircle,
  Thermometer,
  TrendingDown,
  Layers,
  ZapOff,
  CornerUpRight,
  HeartOff,
  BatteryLow,
  Microscope,
  TrendingUp,
  RotateCw,
  Waves,
  Wind,
  PauseCircle,
  ArrowDown,
  Shield,
  Moon,
} from 'lucide-react';

const navLinks = [
  { label: 'HOME', icon: Home, href: '/' },
  { label: 'ABOUT', icon: User, href: '/about' },
  {
    label: 'CONDITIONS',
    dropdown: true,
    icon: Stethoscope,
    items: [
      { label: 'Paediatric Urology', icon: Baby, href: '/paediatric-urology' },
      { label: 'Reconstructive Urology Surgeries', icon: Crosshair, href: '/reconstructive-urology' },
      { label: 'Kidney Stones', icon: Filter, href: '/kidney-stones' },
      { label: 'Prostate Enlargement', icon: Maximize2, href: '/prostate-enlargement' },
      { label: 'Prostatitis', icon: Syringe, href: '/prostatitis' },
      { label: 'UTI Infection', icon: Bug, href: '/uti-infection' },
      { label: 'Stricture Urethra', icon: ShieldAlert, href: '/stricture-urethra' },
      { label: 'Urethritis', icon: Flame, href: '/urethritis' },
      { label: 'Over Active Bladder', icon: Gauge, href: '/over-active-bladder' },
      { label: 'Ruptured Urethra', icon: Bandage, href: '/ruptured-urethra' },
      { label: 'Kidney/Renal Transplantation', icon: Droplet, href: '/kidney-transplant' },
    ]
  },
  {
    label: 'ANDROLOGY',
    dropdown: true,
    icon: FlaskRound,
    items: [
      { label: 'Male Infertility', icon: Dna, href: '/male-infertility' },
      { label: 'Erectile Dysfunction', icon: Zap, href: '/erectile-dysfunction' },
      { label: 'Penile Enlargement', icon: ArrowUp, href: '/penile-enlargement' },
      { label: 'Premature Ejaculation', icon: Clock, href: '/premature-ejaculation' },
      { label: 'Chronic Orchialgia', icon: AlertCircle, href: '/chronic-orchialgia' },
      { label: 'Chronic Testicular Pain', icon: Thermometer, href: '/chronic-testicular-pain' },
      { label: 'Varicocele Surgery', icon: Scissors, href: '/varicocele-surgery' }
    ]
  },
  {
    label: 'MALE UROLOGY',
    dropdown: true,
    icon: Mars,
    items: [
      { label: 'Hypogonadism', icon: TrendingDown, href: '/hypogonadism' },
      { label: 'Varicocele', icon: Layers, href: '/varicocele' },
      { label: 'Erectile Dysfunction', icon: ZapOff, href: '/male-erectile-dysfunction' },
      { label: "Peyronie's Diseases", icon: CornerUpRight, href: '/peyronies-disease' },
      { label: 'Loss Of Libido', icon: HeartOff, href: '/loss-of-libido' },
      { label: 'Impotency', icon: BatteryLow, href: '/impotency' },
      { label: 'Male Infertility', icon: Microscope, href: '/male-infertility-male' },
      { label: 'Penile Curvature', icon: TrendingUp, href: '/penile-curvature' }
    ]
  },
  {
    label: 'FEMALE UROLOGY',
    dropdown: true,
    icon: Venus,
    items: [
      { label: 'Recurrent Urinary Tract Infection', icon: RotateCw, href: '/recurrent-uti' },
      { label: 'Urinary Incontinence', icon: Waves, href: '/urinary-incontinence' },
      { label: 'Stress Urinary Incontinence', icon: Wind, href: '/stress-urinary-incontinence' },
      { label: 'Voiding Difficulties', icon: PauseCircle, href: '/voiding-difficulties' },
      { label: 'Over Active Bladder', icon: Activity, href: '/female-overactive-bladder' },
      { label: 'Cystocele', icon: ArrowDown, href: '/cystocele' },
      { label: 'Pelvic Organ Prolapse', icon: Shield, href: '/pelvic-organ-prolapse' },
      { label: 'Nocturia', icon: Moon, href: '/nocturia' }
    ]
  },
  {
    label: 'GALLERY',
    dropdown: true,
    icon: Image,
    items: [
      { label: 'Photo Gallery', icon: Camera, href: '/gallery#photos' },
      { label: 'News & Media', icon: Newspaper, href: '/gallery#news' },
      { label: 'Award & Achievement', icon: Trophy, href: '/gallery#awards' }
    ]
  }
];

// Shared nav bar markup — rendered twice (static + floating popup)
const NavContent = ({ idPrefix, isOpen, setIsOpen }) => (
  <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
    <div className="flex items-center h-16">

      {/* ===== LOGO WITH LINK TO HOME ===== */}
      <Link to="/" className="flex items-center flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-[1.03]">
        <img 
          src="/images/logo/logo.png" 
          alt="Dr. Vinish Kumar Singh - Urologist"
          className="h-12 w-auto object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </Link>

      {/* ===== DESKTOP MENU ===== */}
      <div className="hidden xl:flex items-center gap-0.5 ml-auto min-w-0">
        {navLinks.map((link, index) => {
          const Icon = link.icon;
          if (link.dropdown) {
            return (
              <div key={index} className="relative group">
                <button
                  className="px-2.5 py-2 text-[11px] font-medium text-[#1E293B] hover:text-[#08404D] transition-colors duration-200 flex items-center gap-1.5 tracking-wide whitespace-nowrap rounded-lg hover:bg-[#E8F8FC]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#5DA9B3] group-hover:text-[#08404D] transition-colors duration-200" />
                  <span>{link.label}</span>
                  <ChevronDown className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180 text-[#94A3B8]" />
                </button>
                <span className="absolute left-2.5 right-2.5 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-[#5DA9B3] to-[#08404D] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>

                <div className="absolute top-full left-0 mt-2.5 w-60 bg-white text-[#1E293B] rounded-2xl shadow-2xl shadow-[#08404D]/10 border border-[#5DA9B3]/10 py-2 z-50 opacity-0 invisible translate-y-2 scale-[0.98] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 origin-top transition-all duration-200 ease-out">
                  {link.items.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href || '#'}
                        className="flex items-center gap-2.5 px-3.5 py-2 mx-1.5 rounded-lg text-[11px] text-[#334155] hover:bg-[#E8F8FC] hover:text-[#08404D] hover:pl-4 transition-all duration-150"
                      >
                        <ItemIcon className="w-3.5 h-3.5 text-[#5DA9B3] flex-shrink-0" />
                        <span className="leading-snug">{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          }
          return (
            <a
              key={index}
              href={link.href}
              className="relative group/link px-2.5 py-2 text-[11px] font-medium text-[#1E293B] hover:text-[#08404D] transition-colors duration-200 flex items-center gap-1.5 tracking-wide whitespace-nowrap rounded-lg hover:bg-[#E8F8FC]"
            >
              <Icon className="w-3.5 h-3.5 text-[#5DA9B3]" />
              {link.label}
              <span className="absolute left-2.5 right-2.5 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-[#5DA9B3] to-[#08404D] scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          );
        })}

        {/* ===== ASK YOUR PROBLEM BUTTON ===== */}
        <a
          href="/ask-your-problem"
          className="ml-2.5 flex-shrink-0 bg-gradient-to-r from-[#F77F00] to-[#E06A00] hover:from-[#E06A00] hover:to-[#F77F00] text-white px-4 py-2 rounded-full text-[11px] font-semibold transition-all duration-300 shadow-md shadow-[#F77F00]/30 hover:shadow-lg hover:shadow-[#F77F00]/40 hover:-translate-y-0.5 whitespace-nowrap inline-flex items-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Ask Your Problem
        </a>
      </div>

      {/* ===== MOBILE / TABLET TOGGLE ===== */}
      <button
        className="xl:hidden ml-auto text-[#1E293B] p-2 rounded-lg hover:bg-[#E8F8FC] active:scale-95 transition-all duration-150"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>

    {/* ===== MOBILE MENU ===== */}
    {isOpen && (
      <div className="xl:hidden pb-3 pt-1.5 border-t border-[#E2E8F0] space-y-0.5 animate-[fadeIn_0.2s_ease-out]">
        {navLinks.map((link, index) => {
          const Icon = link.icon;
          if (link.dropdown) {
            return (
              <div key={index}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2.5 text-xs font-semibold text-[#1E293B] hover:text-[#08404D] hover:bg-[#E8F8FC] rounded-lg transition-colors duration-150"
                  onClick={() => {
                    const el = document.getElementById(`${idPrefix}-mobile-dropdown-${index}`);
                    if (el) el.classList.toggle('hidden');
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#5DA9B3]" />
                    {link.label}
                  </span>
                  <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
                </button>
                <div id={`${idPrefix}-mobile-dropdown-${index}`} className="ml-4 space-y-0.5 border-l-2 border-[#5DA9B3]/30 pl-3 max-h-48 overflow-y-auto hidden">
                  {link.items.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href || '#'}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] text-[#64748B] hover:text-[#08404D] hover:bg-[#E8F8FC] transition-colors duration-150"
                        onClick={() => setIsOpen(false)}
                      >
                        <ItemIcon className="w-3 h-3" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          }
          return (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#1E293B] hover:text-[#08404D] hover:bg-[#E8F8FC] rounded-lg transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              <Icon className="w-3.5 h-3.5 text-[#5DA9B3]" />
              {link.label}
            </a>
          );
        })}
        <a
          href="/ask-your-problem"
          className="block mt-1.5 bg-gradient-to-r from-[#F77F00] to-[#E06A00] text-white text-center px-4 py-2.5 rounded-full text-xs font-semibold hover:shadow-lg transition-all duration-200"
          onClick={() => setIsOpen(false)}
        >
          <MessageCircle className="inline w-3.5 h-3.5 mr-1.5" />
          Ask Your Problem
        </a>
      </div>
    )}
  </div>
);

const Navbar = () => {
  const [isOpenStatic, setIsOpenStatic] = useState(false);
  const [isOpenFloating, setIsOpenFloating] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowFloating(window.scrollY > 160);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const barClasses =
    'navbar-white w-full shadow-sm';

  return (
    <>
      {/* ===== STATIC NAVBAR ===== */}
      <nav className={`relative ${barClasses} z-40`}>
        <NavContent idPrefix="static" isOpen={isOpenStatic} setIsOpen={setIsOpenStatic} />
      </nav>

      {/* ===== FLOATING POPUP NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 ${barClasses} shadow-lg shadow-black/10 z-50 transition-transform duration-300 ease-out ${showFloating ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <NavContent idPrefix="floating" isOpen={isOpenFloating} setIsOpen={setIsOpenFloating} />
      </nav>
    </>
  );
};

export default Navbar;