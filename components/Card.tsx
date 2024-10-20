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
    image: "/speaker.png", // Path to the actual image in the public folder
    twitterUrl: "https://twitter.com/sophiawhite",
    linkedinUrl: "https://linkedin.com/in/sophiawhite",
    instagramUrl: "https://instagram.com/sophiawhite",
    youtubeUrl: "https://youtube.com/sophiawhite",
  },
  {
    name: "Alexander Turner",
    title: "Tech Entrepreneur",
    description:
      "A successful entrepreneur with a visionary approach to new business models and digital strategies.",
    image: "/speaker.png", // Path to the actual image in the public folder
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
  Icon: React.ComponentType<any>;
  url: string;
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Icon className="h-8 w-8 text-gray-400 hover:text-white transition-colors" />
  </a>
);

export default function Card() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white text-center mb-4">
          Speakers
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12">
          Get ready to be inspired by industry leaders and visionaries. Explore
          a lineup of speakers who are at the forefront of innovation, sharing
          insights and expertise on the latest trends and technologies shaping
          the future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group flex flex-col bg-black rounded-lg border border-gray-500 p-6 shadow-lg transition-all hover:shadow-blue-500/50 hover:border-blue-500"
            >
              {/* Upper Container: Title, Name, Description (centered) */}
              <div className="text-center">
                {/* Title */}
                <p className={`text-2xl font-sans text-blue-500 mb-2`}>
                  {speaker.title}
                </p>
                {/* Name */}
                <h3 className="text-4xl font-mono font-semibold text-white mb-2">
                  {speaker.name}
                </h3>
                {/* Description */}
                <p className="text-gray-300 font-sans font-medium text-xl">
                  {speaker.description}
                </p>
              </div>

              {/* Lower Container: Social Icons and Image in flex */}
              <div className="flex items-end">
                {/* Social icons aligned vertically on the left */}
                <div className="flex flex-col items-center space-y-6 mr-4">
                  <SocialIcon Icon={Twitter} url={speaker.twitterUrl} />
                  <SocialIcon Icon={Linkedin} url={speaker.linkedinUrl} />
                  <SocialIcon Icon={Instagram} url={speaker.instagramUrl} />
                  <SocialIcon Icon={Youtube} url={speaker.youtubeUrl} />
                </div>

                {/* Image stays on the right side and appears from the bottom border */}
                <div className="relative ml-24">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={340}
                    height={360}
                    className="object-cover transition-transform duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:scale-105 shadow-lg relative top-6"
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
