import GalleryHeader from "../components/GalleryComponents/GalleryHeader";
import GallerySection from "../components/GalleryComponents/GallerySection";
import { fetchGalleryData } from "../../libs/gallerydata";
import Footer from "../components/global/Footer";

const GalleryPage = async () => {
  const galleryData = await fetchGalleryData();

  return (
    <div className="container mx-auto  ">
      <GalleryHeader />
      {galleryData.map(({ year, images }) => (
        <GallerySection key={year} year={year} images={images} />
      ))}
      <Footer />
    </div>
  );
};

export default GalleryPage;
