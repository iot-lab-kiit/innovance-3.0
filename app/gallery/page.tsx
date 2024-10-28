import GalleryHeader from "../components/GalleryComponents/GalleryHeader";
import GallerySection from "../components/GalleryComponents/GallerySection";
import { fetchGalleryData } from "../../libs/gallerydata";

const GalleryPage = async () => {
  const galleryData = await fetchGalleryData();

  return (
    <div className="container mx-auto px-4">
      <GalleryHeader />
      {galleryData.map(({ year, images }) => (
        <GallerySection key={year} year={year} images={images} />
      ))}
    </div>
  );
};

export default GalleryPage;
