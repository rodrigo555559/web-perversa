interface VideoSectionProps {
  videoUrl: string;
  title?: string;
  subtitle?: string;
}

const VideoSection = ({ videoUrl, title, subtitle }: VideoSectionProps) => {
  return (
    <section className="relative py-0">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/40" />
        {(title || subtitle) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary tracking-tight drop-shadow-lg">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground mt-2 sm:mt-3 tracking-[0.15em] sm:tracking-[0.2em] uppercase max-w-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
