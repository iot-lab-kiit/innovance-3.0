import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    branch: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    roll: "",
    total_fare: "",
    txn_id: "",
    type: "offline",
    whatsapp: "",
    year: "",
  });
  const [numberFieldState, setNumberFieldState] = useState(false);
  //   const [isHovered, setIsHovered] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSelectChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 2) {
      try {
        setIsPending(true);
        const response = await fetch(
          "/api/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        setUniqueId(data.uniqueId);
        setIsPending(false);
        setStep(3);
      } catch (error) {
        console.error("Error:", error);
        setIsPending(false);
      }
    } else {
      setStep(step + 1);
    }
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="p-6 sm:p-10 rounded-lg shadow-lg max-w-4xl w-full  text-white">
        <h1 className="text-center mb-6 sm:mb-10 font-medium font-bitter md:text-5xl md:text-5xl text-2xl sm:text-5xl lg:text-6xl">
          Registration Form
        </h1>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Personal Info */}
              <div className="flex mb-4 gap-4">
                <input
                  className="w-[70%] px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                <input
                  className="w-[30%] px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4  py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="KIIT Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex mb-4 gap-4">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {!numberFieldState && (
                  <input
                    className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="whatsapp"
                    placeholder="WhatsApp Number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                )}
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="w-6 h-6  rounded-full border-2 border-gray-300 checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={() => {
                      setNumberFieldState(!numberFieldState);
                      setFormData({ ...formData, whatsapp: formData.phone });
                    }}
                  ></input>
                </div>
              </div>

              {/* Roll Number */}
              <div className="flex mb-4 gap-4">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="roll"
                  placeholder="Roll Number"
                  value={formData.roll}
                  onChange={handleChange}
                />

                {/* Branch */}
                <select
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="branch"
                  value={formData.branch}
                  onChange={handleSelectChanges}
                >
                  <option value="" disabled>
                    Select Branch
                  </option>
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECSE">ECSE</option>
                  <option value="EEE">EEE</option>
                  <option value="ECE">ECE</option>
                  <option value="Mech">Mech</option>
                  <option value="Civil">Civil</option>
                </select>
              </div>

              {/* Year */}
              <select
                className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="year"
                value={formData.year}
                onChange={handleSelectChanges}
              >
                <option value="" disabled>
                  Select your year
                </option>
                <option value="1st year">1st Year</option>
                <option value="2nd year">2nd Year</option>
                <option value="3rd year">3rd Year</option>
                <option value="4th year">4th Year</option>
              </select>

              <div
                className="relative w-fit m-auto mt-0 sm:mt-4 md:mt-8"
                onMouseEnter={() => {
                  setIsHovered(!isHovered);
                }}
                onMouseLeave={() => {
                  setIsHovered(!isHovered);
                }}
              >
                <motion.div
                  animate={
                    isHovered
                      ? { width: 0, y: 0, opacity: 1 }
                      : { width: "100%", y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                  className="absolute w-full h-full bg-blue-500"
                ></motion.div>

                <motion.button
                  animate={
                    isHovered
                      ? {
                          color: "#3b82f6",
                          borderColor: "#3b82f6",
                          y: 0,
                          opacity: 1,
                        }
                      : { y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                  whileHover={{ color: "#3b82f6", borderColor: "#3b82f6" }}
                  className={`text-xs sm:text-base hover:font-semibold text-background border-background border w-fit m-auto py-3 px-7 ${poppins.className}`}
                >
                  REGISTER
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Payment Info */}
              <div className="mb-4 text-center">
                <p>Scan the QR code below to make payment:</p>
                <Image
                  src="/qr-code.svg"
                  alt="QR Code"
                  className="w-40 mx-auto my-4"
                  width={50}
                  height={50}
                />

                {/* Total Fare */}
                <div className="mb-4">
                  <input
                    value={"Registration - Rs 249"}
                    className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="total_fare"
                    placeholder="Enter the total fare"
                  />
                </div>

                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="txn_id"
                  placeholder="Transaction ID"
                  value={formData.txn_id}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <div
                className="relative w-fit m-auto mt-0 sm:mt-4 md:mt-8"
                onMouseEnter={() => {
                  setIsHovered(!isHovered);
                }}
                onMouseLeave={() => {
                  setIsHovered(!isHovered);
                }}
              >
                <motion.div
                  animate={
                    !isHovered
                      ? { width: 0, y: 0, opacity: 1 }
                      : { width: "100%", y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                  className="absolute w-full h-full bg-blue-500"
                ></motion.div>

                <motion.button
                  animate={
                    !isHovered
                      ? {
                          color: "#3b82f6",
                          borderColor: "#3b82f6",
                          y: 0,
                          opacity: 1,
                        }
                      : { y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                  whileHover={{ color: "#3b82f6", borderColor: "#3b82f6" }}
                  className={`text-xs sm:text-base hover:font-semibold text-background border-background border w-fit m-auto py-3 px-7 ${poppins.className}`}
                >
                  SUBMIT
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Confirmation Page */}
              {isPending ? (
                <div className="flex flex-col items-center">
                  <p className="mb-4 text-center">Processing...</p>
                  <Image
                    src="/backgrounds/star_image_blue.jpg"
                    alt="Loading"
                    className="w-20"
                    width={50}
                    height={50}
                  />
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl mb-4">Registration Confirmed!</h2>
                  <p>Your Unique ID:</p>
                  <p className="text-lg font-bold">{uniqueId}</p>
                  <p className="mt-6">Details:</p>
                  <div className="text-sm text-left">
                    <p>
                      Name: {formData.first_name} {formData.last_name}
                    </p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>WhatsApp: {formData.whatsapp}</p>
                    <p>Roll: {formData.roll}</p>
                    <p>Branch: {formData.branch}</p>
                    <p>Year: {formData.year}</p>
                    <p>Transaction ID: {formData.txn_id}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
