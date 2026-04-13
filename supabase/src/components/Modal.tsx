import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  price: string;
  image?: string;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, description, price, image, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background border border-border rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground hover:text-primary transition-all duration-200 z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        {image && (
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">{title}</h2>
          {description && (
            <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
          )}
          <div className="flex items-center justify-between mb-6">
            <span className="font-display text-2xl sm:text-3xl font-black text-primary">{price}</span>
            <button
              onClick={onClose}
              className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-primary-foreground bg-primary px-6 py-2.5 rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Cerrar
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
