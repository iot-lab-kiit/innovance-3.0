import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

interface Speaker {
  name: string;
  title: string;
  description: string;
  image: string;
  twitterUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
}

const speakers: Speaker[] = [
  {
    name: "Sophia White",
    title: "HealthTech Innovator",
    description:
      "A pioneer in health tech, exploring the digital transformation and innovation in the healthcare sector.",
    image: "/speaker1.png",
    twitterUrl: "https://twitter.com/sophiawhite",
    linkedinUrl: "https://linkedin.com/in/sophiawhite",
    instagramUrl: "https://instagram.com/sophiawhite",
    youtubeUrl: "https://youtube.com/sophiawhite",
  },
  {
    name: "Alexander Turner",
    title: "Tech Entrepreneur",
    description:
      "A successful entrepreneur with a visionary and innovative approach to developing new business models and strategies.",
    image: "/speaker1.png",
    twitterUrl: "https://twitter.com/alexanderturner",
    linkedinUrl: "https://linkedin.com/in/alexanderturner",
    instagramUrl: "https://instagram.com/alexanderturner",
    youtubeUrl: "https://youtube.com/alexanderturner",
  },
];

const SocialIcon = ({
  Icon,
  url,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Icon className="h-6 w-6 md:h-5 md:w-5 sm:h-7 sm:w-7 lg:h-5 lg:w-5 text-gray-400 hover:text-white transition-colors" />
  </a>
);

export default function Card() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-[90%] xl:max-w-[70%] md:max-w-[75%] sm:max-w-[60%] mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bitter text-white text-center mb-4">
          Speakers
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-geist text-gray-300 text-center mb-12">
          Get ready to be inspired by industry leaders and visionaries. Explore
          a lineup of speakers who are at the forefront of innovation, sharing
          insights and expertise on the latest trends and technologies shaping
          the future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group flex flex-col bg-black rounded-lg border border-gray-500 p-6 shadow-lg transition-all hover:shadow-[#3b82f6]/50 hover:border-[#3b82f6]"
            >
              {/* Upper Container: Title, Name, Description (centered) */}
              <div className="text-center">
                {/* Title */}
                <p className="text-lg sm:text-xl lg:text-2xl font-geist text-[#3b82f6] mb-2">
                  {speaker.title}
                </p>
                {/* Name */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bitter text-white mb-2">
                  {speaker.name}
                </h3>
                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 font-geist">
                  {speaker.description}
                </p>
              </div>

              {/* Lower Container: Social Icons and Image */}
              <div className="flex items-end justify-between mt-4 lg:mt-6">
                {/* Social icons aligned vertically */}
                <div className="flex flex-col items-center space-y-4 lg:space-y-6">
                  <SocialIcon Icon={Twitter} url={speaker.twitterUrl} />
                  <SocialIcon Icon={Linkedin} url={speaker.linkedinUrl} />
                  <SocialIcon Icon={Instagram} url={speaker.instagramUrl} />
                  <SocialIcon Icon={Youtube} url={speaker.youtubeUrl} />
                </div>

                {/* Image stays on the right side and appears from the bottom border */}
                <div className="relative">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={280} // Adjust width
                    height={300} // Adjust height
                    className="object-cover transition-transform duration-300 ease-in-out transform group-hover:-translate-y-3 group-hover:scale-110 shadow-lg relative top-6"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
