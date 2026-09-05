import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AskYourProblem from './pages/AskYourProblem';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ConditionsTreated from './components/sections/ConditionsTreated';
import RenalTransplant from './components/sections/RenalTransplant';
import Testimonials from './components/sections/Testimonials';
import InstagramFeed from './components/sections/InstagramFeed';
import Gallery from './components/sections/Gallery';
import Blog from './components/sections/Blog';
import BookAppointment from './components/sections/BookAppointment';
import AboutPage from './pages/AboutPage';
import PaediatricUrology from './pages/PaediatricUrology';
import ReconstructiveUrology from './pages/ReconstructiveUrology';
import KidneyStones from './pages/KidneyStones';
import ProstateEnlargement from './pages/ProstateEnlargement';
import Prostatitis from './pages/Prostatitis';
import UTIInfection from './pages/UTIInfection';
import StrictureUrethra from './pages/StrictureUrethra';
import Urethritis from './pages/Urethritis';
import OverActiveBladder from './pages/OverActiveBladder';
import RupturedUrethra from './pages/RupturedUrethra';
import KidneyTransplant from './pages/KidneyTransplant';
// ===== GALLERY PAGE =====
import GalleryPage from './pages/GalleryPage';
// ===== BLOG PAGES =====
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
// ===== ANDROLOGY =====
import MaleInfertility from './pages/MaleInfertility';
import ErectileDysfunction from './pages/ErectileDysfunction';
import PenileEnlargement from './pages/PenileEnlargement';
import PrematureEjaculation from './pages/PrematureEjaculation';
import ChronicOrchialgia from './pages/ChronicOrchialgia';
import ChronicTesticularPain from './pages/ChronicTesticularPain';
import VaricoceleSurgery from './pages/VaricoceleSurgery';
// ===== MALE UROLOGY =====
import Hypogonadism from './pages/Hypogonadism';
import Varicocele from './pages/Varicocele';
import MaleErectileDysfunction from './pages/MaleErectileDysfunction';
import PeyroniesDisease from './pages/PeyroniesDisease';
import LossOfLibido from './pages/LossOfLibido';
import Impotency from './pages/Impotency';
import MaleInfertilityMale from './pages/MaleInfertilityMale';
import PenileCurvature from './pages/PenileCurvature';
// ===== FEMALE UROLOGY =====
import RecurrentUTI from './pages/RecurrentUTI';
import UrinaryIncontinence from './pages/UrinaryIncontinence';
import StressUrinaryIncontinence from './pages/StressUrinaryIncontinence';
import VoidingDifficulties from './pages/VoidingDifficulties';
import FemaleOveractiveBladder from './pages/FemaleOveractiveBladder';
import Cystocele from './pages/Cystocele';
import PelvicOrganProlapse from './pages/PelvicOrganProlapse';
import Nocturia from './pages/Nocturia';
// ===== PAEDIATRIC UROLOGY TREATMENTS =====
import Phimosis from './pages/treatments/Phimosis';
import CongenitalHernia from './pages/treatments/CongenitalHernia';
import TorsionTestis from './pages/treatments/TorsionTestis';
import UndescendedTestis from './pages/treatments/UndescendedTestis';
import Hypospadias from './pages/treatments/Hypospadias';
// ===== RECONSTRUCTIVE UROLOGY TREATMENTS =====
import Urethroplasty from './pages/treatments/Urethroplasty';
import HypospadiasSurgery from './pages/treatments/HypospadiasSurgery';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ===== HOMEPAGE ===== */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <ConditionsTreated />
            <RenalTransplant />
            <Testimonials />
            <InstagramFeed />
            <Gallery />
            <Blog />
            <BookAppointment />
          </>
        } />

        {/* ===== OTHER PAGES ===== */}
        <Route path="/ask-your-problem" element={<AskYourProblem />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/paediatric-urology" element={<PaediatricUrology />} />
        <Route path="/reconstructive-urology" element={<ReconstructiveUrology />} />
        <Route path="/kidney-stones" element={<KidneyStones />} />
        <Route path="/prostate-enlargement" element={<ProstateEnlargement />} />
        <Route path="/prostatitis" element={<Prostatitis />} />
        <Route path="/uti-infection" element={<UTIInfection />} />
        <Route path="/stricture-urethra" element={<StrictureUrethra />} />
        <Route path="/urethritis" element={<Urethritis />} />
        <Route path="/over-active-bladder" element={<OverActiveBladder />} />
        <Route path="/ruptured-urethra" element={<RupturedUrethra />} />
        <Route path="/kidney-transplant" element={<KidneyTransplant />} />

        {/* ===== GALLERY ===== */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* ===== BLOG ===== */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />

        {/* ===== ANDROLOGY ===== */}
        <Route path="/male-infertility" element={<MaleInfertility />} />
        <Route path="/erectile-dysfunction" element={<ErectileDysfunction />} />
        <Route path="/penile-enlargement" element={<PenileEnlargement />} />
        <Route path="/premature-ejaculation" element={<PrematureEjaculation />} />
        <Route path="/chronic-orchialgia" element={<ChronicOrchialgia />} />
        <Route path="/chronic-testicular-pain" element={<ChronicTesticularPain />} />
        <Route path="/varicocele-surgery" element={<VaricoceleSurgery />} />

        {/* ===== MALE UROLOGY ===== */}
        <Route path="/hypogonadism" element={<Hypogonadism />} />
        <Route path="/varicocele" element={<Varicocele />} />
        <Route path="/male-erectile-dysfunction" element={<MaleErectileDysfunction />} />
        <Route path="/peyronies-disease" element={<PeyroniesDisease />} />
        <Route path="/loss-of-libido" element={<LossOfLibido />} />
        <Route path="/impotency" element={<Impotency />} />
        <Route path="/male-infertility-male" element={<MaleInfertilityMale />} />
        <Route path="/penile-curvature" element={<PenileCurvature />} />

        {/* ===== FEMALE UROLOGY ===== */}
        <Route path="/recurrent-uti" element={<RecurrentUTI />} />
        <Route path="/urinary-incontinence" element={<UrinaryIncontinence />} />
        <Route path="/stress-urinary-incontinence" element={<StressUrinaryIncontinence />} />
        <Route path="/voiding-difficulties" element={<VoidingDifficulties />} />
        <Route path="/female-overactive-bladder" element={<FemaleOveractiveBladder />} />
        <Route path="/cystocele" element={<Cystocele />} />
        <Route path="/pelvic-organ-prolapse" element={<PelvicOrganProlapse />} />
        <Route path="/nocturia" element={<Nocturia />} />

        {/* ===== PAEDIATRIC UROLOGY TREATMENTS ===== */}
        <Route path="/treatment/phimosis" element={<Phimosis />} />
        <Route path="/treatment/congenital-hernia" element={<CongenitalHernia />} />
        <Route path="/treatment/torsion-testis" element={<TorsionTestis />} />
        <Route path="/treatment/undescended-testis" element={<UndescendedTestis />} />
        <Route path="/treatment/hypospadias" element={<Hypospadias />} />

        {/* ===== RECONSTRUCTIVE UROLOGY TREATMENTS ===== */}
        <Route path="/treatment/urethroplasty" element={<Urethroplasty />} />
        <Route path="/treatment/hypospadias-surgery" element={<HypospadiasSurgery />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;