import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    name: "Striver",
    title: "Educator",
    description:
      "Empowering people to embrace innovation and explore new possibilities in the wild world of tech",
    image: "/assets/img/striver-final.png",
    twitterUrl: "https://x.com/striver_79?lang=en",
    linkedinUrl:
      "https://www.linkedin.com/in/rajstriver?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagramUrl:
      "https://www.instagram.com/striver_79?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
    youtubeUrl: "https://youtube.com/@striver_79?si=cUeIo7RvfZtcYWlL",
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
    <Icon className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
  </a>
);

export default function Card() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-[90%] xl:max-w-[70%] mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bitter text-white text-center mb-4">
          Past Speaker
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-geist text-gray-300 text-center mb-12">
          Innovance 2.0 united 400+ innovators with Striver&apos;s insights on
          IoT and career guidance, sparking excitement for the tech revolution
        </p>
        <div className="gap-6 lg:gap-8 flex flex-col items-center">
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.name}
              className="group w-full md:w-[50vw] lg:w-[35vw] xl:w-[30vw] flex flex-col rounded-lg border border-gray-500 mx-auto px-6 pt-4 pr-4 shadow-lg transition-all"
              whileHover={{
                boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)",
                borderColor: "#3b82f6",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Upper Container: Title, Name, Description */}
              <div className="text-center">
                <motion.p
                  className="text-lg sm:text-xl lg:text-2xl font-geist text-[#3b82f6] mb-2"
                  whileHover={{ scale: 1.1, color: "#1e90ff" }}
                >
                  {speaker.title}
                </motion.p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bitter text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="font-poppins text-sm sm:text-base lg:text-md text-gray-300">
                  {speaker.description}
                </p>
              </div>

              {/* Lower Container: Social Icons and Image */}
              <div className="flex items-center justify-between mt-4">
                {/* Social icons aligned vertically */}
                <div className="flex flex-col items-center space-y-4">
                  <SocialIcon Icon={Twitter} url={speaker.twitterUrl} />
                  <SocialIcon Icon={Linkedin} url={speaker.linkedinUrl} />
                  <SocialIcon Icon={Instagram} url={speaker.instagramUrl} />
                  <SocialIcon Icon={Youtube} url={speaker.youtubeUrl} />
                </div>

                {/* Image with hover effect */}
                <motion.div
                  className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={600}
                    height={550}
                    className="object-cover ml-4"
                    priority={true}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
