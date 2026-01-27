import trinetraLogo from '../../assets/images/trinetra-logo.svg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={trinetraLogo} 
        alt="Trinetra - Commercial EV charging infrastructure and fleet enablement services" 
        className={`${sizes[size]} object-contain`}
        loading="lazy"
      />
      {showText && (
        <span className={`font-bold ${textSizes[size]} bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent`}>
          Trinetra
        </span>
      )}
    </div>
  );
};
