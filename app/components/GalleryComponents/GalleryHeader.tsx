const GalleryHeader = () => {
  return (
    <header className="text-center py-10">
      <h3 className="lg:text-4xl font-bold text-blue-500 mb-2 lg:pt-10 lg:pb-2">Gallery</h3>
      <h1 className="lg:text-8xl sm:text-4xl font-bitter mb-4 lg:px-[25vw] leading-10">
        Discover Event Highlights
      </h1>
      <p className="text-base lg:px-[25vw] lg:py-5 sm:text-lg text-white px-4 sm:px-16 md:px-32">
        Explore our gallery showcasing future technologies, impactful speakers, 
        and the vibrant conference atmosphere. Witness unforgettable moments from the Laonga Event.
      </p>
      {/* Star symbol after header */}
      <div className="flex justify-center mt-6">
        <img src="/star.svg" alt="Star symbol" className="my-5 w-20 h-20" />
      </div>
    </header>
  );
};

export default GalleryHeader;

