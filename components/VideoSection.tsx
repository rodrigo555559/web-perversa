interface VideoSectionProps {
  videoUrl: string;
  title?: string;
  subtitle?: string;
}

const VideoSection = ({ videoUrl, title, subtitle }: VideoSectionProps) => {
  return (
    <section className="relative py-0">
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
        {(title || subtitle) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            {title && (
              <h2 className="font-display text-4xl md:text-6xl font-black text-primary tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-body text-sm text-muted-foreground mt-3 tracking-[0.2em] uppercase">
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
