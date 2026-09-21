import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  caption?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white transition-all duration-200"
        aria-label="Đóng xem ảnh"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white transition-all duration-200"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Main Image */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center">
        <img
          src={images[currentIndex]}
          alt={caption || `Gallery ${currentIndex + 1}`}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-gold-500/20"
        />
        <div className="mt-4 text-center">
          {caption && (
            <p className="text-slate-200 text-sm md:text-base font-serif italic">{caption}</p>
          )}
          <span className="inline-block mt-1 text-xs text-gold-400 font-sans tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white transition-all duration-200"
          aria-label="Ảnh kế tiếp"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};
