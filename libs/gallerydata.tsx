type Image = {
  src: string;
  alt: string;
};

type GalleryData = {
  year: string;
  images: Image[];
};

export async function fetchGalleryData(): Promise<GalleryData[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/items/innovance_gallery`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();

  const baseImageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/assets`;

  const galleryData = data?.data?.reduce((acc: GalleryData[], item: any) => {
    const yearIndex = acc.findIndex((section) => section.year === item.year);
    const image = {
      src: `${baseImageUrl}/${item.image}`,
      alt: item.title || "Gallery Image",
    };

    if (yearIndex >= 0) {
      acc[yearIndex].images.push(image);
    } else {
      acc.push({
        year: item.year,
        images: [image],
      });
    }

    return acc;
  }, []);

  return galleryData.sort(
    (a: GalleryData, b: GalleryData) => Number(b.year) - Number(a.year)
  );
}
