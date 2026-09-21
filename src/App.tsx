import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ToastContainer, ToastMessage } from './components/common/Toast';
import { LightboxModal } from './components/common/LightboxModal';
import { BookingModal } from './components/common/BookingModal';

import { HeroSection } from './components/home/HeroSection';
import { SearchBox } from './components/home/SearchBox';
import { FeaturedDestinations } from './components/home/FeaturedDestinations';
import { PopularTours } from './components/home/PopularTours';
import { GoldenDeals } from './components/home/GoldenDeals';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { StorytellingAbout } from './components/home/StorytellingAbout';
import { TravelExperience } from './components/home/TravelExperience';
import { Testimonials } from './components/home/Testimonials';
import { TravelGallery, GALLERY_IMAGES } from './components/home/TravelGallery';
import { BlogSection } from './components/home/BlogSection';
import { NewsletterSection } from './components/home/NewsletterSection';

import { TourListing } from './components/tours/TourListing';
import { TourDetail } from './components/tours/TourDetail';
import { DestinationView } from './components/destinations/DestinationView';
import { AboutView } from './components/about/AboutView';
import { BlogView } from './components/blog/BlogView';
import { ContactView } from './components/contact/ContactView';

import { TOURS_DATA } from './data/toursData';
import { Tour, SearchFilterParams } from './types';
import { ArrowUp, Compass } from 'lucide-react';
import { I18nProvider, Language } from './i18n';

export function App() {
  // Initial loading splash screen
  const [initialLoading, setInitialLoading] = useState(true);
  const [language, setLanguage] = useState<Language>('en');

  // View state: 'home' | 'tours' | 'destinations' | 'deals' | 'about' | 'blog' | 'contact' | 'tour-detail'
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeNavView, setActiveNavView] = useState<string>('home');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [tourFilterKeyword, setTourFilterKeyword] = useState<string>('');

  // Modals & Popups
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingTourTarget, setBookingTourTarget] = useState<Tour | null>(null);

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Scroll Progress & Back to Top
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Simulate luxury loading screen on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Scroll listener for progress & back to top
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentView !== 'home') return;

    const handleHomeSectionActive = () => {
      const deals = document.getElementById('golden-deals-section');
      if (!deals) return;

      const rect = deals.getBoundingClientRect();
      const viewportMiddle = window.innerHeight * 0.45;
      const isDealsActive = rect.top <= viewportMiddle && rect.bottom >= viewportMiddle;

      setActiveNavView(isDealsActive ? 'deals' : 'home');
    };

    handleHomeSectionActive();
    window.addEventListener('scroll', handleHomeSectionActive, { passive: true });
    return () => window.removeEventListener('scroll', handleHomeSectionActive);
  }, [currentView]);

  // Scroll-triggered reveal animations for sections and cards.
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main section, main > div, .glass-card, .glass-dark, [data-reveal]'
      )
    );

    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
    });

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [currentView]);

  // Helper to add toast
  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const newToast: ToastMessage = {
      id: Math.random().toString(),
      title,
      description,
      type,
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Navigation handler
  const handleNavigate = (view: string, keyword = '') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'deals') {
      setActiveNavView('deals');
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('golden-deals-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('golden-deals-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    setActiveNavView(view);
    setTourFilterKeyword(keyword);
    setCurrentView(view);
  };

  const handleSelectTour = (tour: Tour) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveNavView('tours');
    setSelectedTour(tour);
    setCurrentView('tour-detail');
  };

  const handleSelectDestination = (destName: string) => {
    handleNavigate('tours', destName);
  };

  const handleOpenBookingModal = (tour?: Tour) => {
    const target = tour || selectedTour || TOURS_DATA[0];
    setBookingTourTarget(target);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleSearchSubmit = (params: SearchFilterParams) => {
    handleNavigate('tours', params.destination);
    addToast(
      language === 'vi' ? 'Đang tìm kiếm chuyến đi...' : 'Searching for journeys...',
      language === 'vi'
        ? `Điểm đến: ${params.destination || 'Tất cả'} • Khách: ${params.adults} người lớn`
        : `Destination: ${params.destination || 'All'} • Guests: ${params.adults} adults`,
      'info'
    );
  };

  const handleNewsletterSubscribe = (email: string) => {
    addToast(
      'Đăng ký nhận ưu đãi thành công!',
      `Voucher giảm 1.000.000 VNĐ đã được gửi đến ${email}.`,
      'success'
    );
  };

  const handleBookingSuccess = (bookingDetails: any) => {
    addToast(
      'Đặt giữ chỗ VIP thành công!',
      `Mã đặt chỗ ${bookingDetails.bookingRef}. Chuyên viên sẽ liên hệ quý khách trong 15 phút.`,
      'success'
    );
  };

  const handleShareTour = (title: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Đã sao chép liên kết!', `Đường dẫn tour "${title}" đã được lưu vào bộ nhớ tạm.`, 'info');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Splash Loading Screen
  if (initialLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-navy-950 flex flex-col items-center justify-center text-center p-4">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-gold-400 bg-navy-900 shadow-gold mb-6 animate-pulse">
          <Compass className="w-8 h-8 text-gold-400 animate-spin-slow" />
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-gold-gradient tracking-[0.2em] mb-2">
          GOLDEN TRIP
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-sans">
          Luxury Travel Agency
        </p>
        <div className="w-48 h-1 bg-navy-800 rounded-full mt-6 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-gold-500 to-amber-300 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <I18nProvider language={language}>
    <div className="travel-light relative min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-gold-500 selection:text-navy-950">
      {/* Scroll Progress Bar at very top */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-ocean-500 via-gold-400 to-emerald-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Master Navbar */}
      <Navbar
        currentView={activeNavView}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={(v) => handleNavigate(v)}
        onOpenBookingFast={() => handleOpenBookingModal()}
      />

      {/* Main Content View Switcher */}
      <div className="flex-1">
        {currentView === 'home' && (
          <main>
            <HeroSection
              onExploreClick={() => {
                const el = document.getElementById('featured-destinations-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onViewAllTours={() => handleNavigate('tours')}
            />

            <SearchBox onSearch={handleSearchSubmit} />

            <div id="featured-destinations-section">
              <FeaturedDestinations
                onSelectDestination={handleSelectDestination}
                onViewAllDestinations={() => handleNavigate('destinations')}
              />
            </div>

            <PopularTours
              tours={TOURS_DATA}
              onSelectTour={handleSelectTour}
              onViewAllTours={() => handleNavigate('tours')}
            />

            <div id="golden-deals-section">
              <GoldenDeals
                onClaimDeal={() => {
                  handleNavigate('tours');
                  addToast('Đã áp dụng mã ưu đãi GOLDENFALL30', 'Giảm 30% cho các tour mùa thu.', 'success');
                }}
              />
            </div>

            <WhyChooseUs />

            <StorytellingAbout onLearnMore={() => handleNavigate('about')} />

            <TravelExperience />

            <Testimonials />

            <TravelGallery onOpenImage={handleOpenLightbox} />

            <BlogSection
              onSelectPost={() => handleNavigate('blog')}
              onViewAllPosts={() => handleNavigate('blog')}
            />

            <NewsletterSection onSubscribe={handleNewsletterSubscribe} />
          </main>
        )}

        {currentView === 'tours' && (
          <TourListing
            tours={TOURS_DATA}
            onSelectTour={handleSelectTour}
            initialFilter={tourFilterKeyword}
          />
        )}

        {currentView === 'tour-detail' && selectedTour && (
          <TourDetail
            tour={selectedTour}
            onBack={() => handleNavigate('tours')}
            onBookNow={(tour) => handleOpenBookingModal(tour)}
            onShare={handleShareTour}
          />
        )}

        {currentView === 'destinations' && (
          <DestinationView onSelectDestination={handleSelectDestination} />
        )}

        {currentView === 'about' && (
          <AboutView onExploreTours={() => handleNavigate('tours')} />
        )}

        {currentView === 'blog' && <BlogView />}

        {currentView === 'contact' && (
          <ContactView
            onSendMessageSuccess={() =>
              addToast(
                'Yêu cầu tư vấn đã được gửi thành công!',
                'Chuyên viên VIP sẽ liên hệ trong 15 phút.',
                'success'
              )
            }
          />
        )}
      </div>

      {/* Master Footer */}
      <Footer onNavigate={(v) => handleNavigate(v)} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        tour={bookingTourTarget}
        onClose={() => setBookingModalOpen(false)}
        onSuccess={handleBookingSuccess}
      />

      {/* Gallery Lightbox */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={GALLERY_IMAGES.map((img) => img.url)}
        currentIndex={lightboxIndex}
        caption={GALLERY_IMAGES[lightboxIndex]?.caption}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
        }
      />

      {/* Floating Toast Alerts */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full glass-dark border border-gold-500/40 text-gold-400 hover:text-navy-950 hover:bg-gold-500 flex items-center justify-center shadow-gold transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
    </I18nProvider>
  );
}

export default App;
