import GalleryHeader from '../components/GalleryComponents/GalleryHeader';
import GallerySection from '../components/GalleryComponents/GallerySection';

type Image = {
  src: string;
  alt: string;
};

type GalleryData = {
  year: string;
  images: Image[];
};

const fetchGalleryData = async (): Promise<GalleryData[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/innovance_gallery`);
  const data = await res.json();

  // Transform the API response into the format we need
  const galleryData: GalleryData[] = data?.data?.reduce((acc: GalleryData[], item: any) => {
    const yearIndex = acc.findIndex((section) => section.year === item.year);
    
    const image = {
      src: `/uploads/${item.image}`, // Assuming the image URL is under /uploads
      alt: item.title || 'Gallery Image',
    };

    if (yearIndex >= 0) {
      // Add image to existing year's section
      acc[yearIndex].images.push(image);
    } else {
      // Create a new section for the year
      acc.push({
        year: item.year,
        images: [image],
      });
    }

    return acc;
  }, []);

  return galleryData;
};

const GalleryPage = async () => {
  // Fetch the gallery data on the server side
  const galleryData = await fetchGalleryData();

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <GalleryHeader />

      {/* Yearly Gallery Sections */}
      {galleryData.map(({ year, images }) => (
        <GallerySection key={year} year={year} images={images} />
      ))}
    </div>
  );
};

export default GalleryPage;
