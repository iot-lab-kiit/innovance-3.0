import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins } from "next/font/google";
import QRCode from "react-qr-code";
import { useRef } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Watch } from "react-loader-spinner";
// import { Watch } from "react-loader-spinner";

const notify = () =>
  toast.info("OTP Sent to your registered email!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    branch: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    roll: "",
    total_fare: "249",
    txn_id: "",
    type: "online",
    whatsapp: "",
    year: "",
    otp: "",
  });

  const qrRef = useRef(null);
  const [numberFieldState, setNumberFieldState] = useState(false);
  //   const [isHovered, setIsHovered] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [timer, setTimer] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && isOtpSent) {
      setIsOtpSent(false);
    }
    return () => clearInterval(interval);
  }, [timer, isOtpSent]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSendOtp = () => {
    sendOtp();
    setIsOtpSent(true);
    setTimer(120);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setFormData({ ...formData, [id]: value });
    if (id === "email") {
      if (!value.endsWith("@kiit.ac.in")) {
        setEmailError("Email must be a KIIT email ID");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSelectChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDownloadQRCode = () => {
    if (!qrRef.current) return;
    const svg = (qrRef.current as HTMLElement).querySelector("svg");
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new window.Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "innovance_virtial_ticket_status.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  async function sendOtp() {
    const response = await fetch("/api/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.email, rollNo: formData.roll }),
    });

    const data = await response.json();

    if (data.success) {
      if (data.message === "email is already verified") setStep(3);
      else notify();
    } else toast.error("Failed to send OTP", { autoClose: 3000 });
  }
  async function verifyOTP() {
    setLoading(true);
    const response = await fetch("/api/otp/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.email, otp: formData.otp }),
    });

    const data = await response.json();
    if (data.success) {
      toast.success("OTP Verified!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        transition: Bounce,
      });
      setStep(3);
      setLoading(false);
    } else {
      toast.error("OTP is not correct!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
    }
    setLoading(false);
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (step === 3) {
      try {
        setIsPending(true);
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        setUniqueId(data?.data.id);
        setStep(4);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
        setIsPending(false);
      }
    } else {
      if (step === 2) return;
      if (step === 1 && !formData.email.endsWith("@kiit.ac.in")) {
        setEmailError("Email must be a KIIT email ID");
        return;
      }
      setStep(step + 1);
      setLoading(false);
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="p-6 sm:p-10 rounded-lg shadow-lg max-w-4xl w-full  text-white">
        <h1 className="text-center mb-6 sm:mb-10 font-medium font-bitter md:text-5xl text-2xl sm:text-5xl lg:text-6xl">
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
              <div className="flex my-3 gap-4">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="first_name"
                  required
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="my-3">
                <input
                  className="w-full px-4  py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  required
                  placeholder="KIIT Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
                {emailError && (
                  <p className="text-red-500 text-sm my-2 mt-4 md:mx-4">
                    {emailError}
                  </p>
                )}
              </div>
              <div className="flex my-3 gap-4">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  maxLength={10}
                  id="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {!numberFieldState && (
                  <input
                    className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    maxLength={10}
                    id="whatsapp"
                    required
                    placeholder="WhatsApp Number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                )}
              </div>

              <div className="flex items-center my-3">
                <input
                  id="phone_whatsapp"
                  type="checkbox"
                  className="w-4 h-4 mx-5 rounded-full border-2 text-gray-400 border-gray-300 checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={() => {
                    setNumberFieldState(!numberFieldState);
                    setFormData({ ...formData, whatsapp: formData.phone });
                  }}
                ></input>
                <label
                  className="text-red text-sm text-gray-300 my-6"
                  htmlFor="phone_whatsapp"
                >
                  Whatsapp Number is same as your Phone Number *
                </label>
              </div>

              {/* Roll Number */}
              <div className="flex my-3 gap-4">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  id="roll"
                  required
                  placeholder="Roll Number"
                  value={formData.roll}
                  onChange={handleChange}
                />

                {/* Branch */}
                <div className="w-full px-4 bg-[#171717] rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-outline:none">
                  <select
                    className={`w-full h-full bg-[#171717] focus:outline-none ${
                      !formData.branch && "text-gray-400"
                    }`}
                    id="branch"
                    required
                    value={formData.branch}
                    onChange={handleSelectChanges}
                  >
                    <option value="" disabled>
                      Select Branch
                    </option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="CSSE">CSSE</option>
                    <option value="CSCE">CSCE</option>
                    <option value="CE">CE</option>
                    <option value="MME">MME</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="MTech">MTech</option>
                    <option value="ECSE">ECSE</option>
                    <option value="ETC">ETC</option>
                    <option value="EEE">EEE</option>
                    <option value="ECE">ECE</option>
                    <option value="MBA">MBA</option>
                    <option value="ME">ME</option>
                    <option value="Civil">Civil</option>
                    <option value="BioTech">Bio Tech</option>
                  </select>
                </div>
              </div>

              {/* Year */}
              <div className="w-full px-4 mb-3 lg:mb-0 bg-[#171717] rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-outline:none">
                <select
                  className={`w-full py-4 h-full bg-[#171717] focus:outline-none ${
                    !formData.year && "text-gray-400"
                  }`}
                  id="year"
                  value={formData.year}
                  required
                  onChange={handleSelectChanges}
                >
                  <option value="" disabled>
                    Select your year
                  </option>
                  {formData.branch === "MCA" && (
                    <option value="1">1st Year</option>
                  )}
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
              <div
                className="block relative w-[11rem] mx-auto my-8"
                onMouseEnter={() => {
                  setIsHovered(!isHovered);
                }}
                onMouseLeave={() => {
                  setIsHovered(!isHovered);
                }}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  animate={isHovered ? { width: 0 } : { width: "100%" }}
                  transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                  className="absolute w-full h-full bg-blue-500"
                ></motion.div>

                <motion.button
                  transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                  whileHover={{ color: "#3b82f6", borderColor: "#3b82f6" }}
                  className="w-full h-full text-background relative z-10 py-2 px-5 border border-background"
                >
                  NEXT
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
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
              />
              {/* OTP Button */}

              <div className="my-4 flex items-center justify-center">
                <input
                  className="w-[50%] px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="otp"
                  required
                  placeholder="Enter OTP"
                  value={formData.otp || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className={`text-xs sm:text-base text-white border-white hover:font-semibold text-background border-background border w-fit m-auto py-3 px-7 ${
                    poppins.className
                  } ${isOtpSent ? "grayscale cursor-not-allowed" : ""}`}
                  onClick={() => handleSendOtp()}
                  disabled={isOtpSent}
                >
                  {isOtpSent
                    ? `Resend OTP in ${formatTime(timer)}`
                    : "Send OTP"}
                </button>
              </div>

              {/*    
              <div className="text-center mb-4">
                <button
                  type="button"
                  className={`text-xs sm:text-base hover:font-semibold text-background border-background border w-fit m-auto py-3 px-7 ${poppins.className}`}
                  onClick={() => setStep(1)}
                >
                  BACK
                </button>
              </div> */}

              {/* Verify Button */}
              <div
                className="block relative w-[11rem] mx-auto my-8"
                onClick={() => {
                  verifyOTP();
                }}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  // animate={isHovered ? { width: 0 } : { width: "100%" }}
                  // transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}

                  className="absolute w-full h-full bg-blue-500"
                ></motion.div>

                <motion.button
                  transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                  whileHover={{
                    color: "#3b82f6",
                    borderColor: "#3b82f6",
                    backgroundColor: "black",
                  }}
                  className="w-full h-full text-background relative z-10 py-2 px-5 border border-background"
                >
                  VERIFY OTP
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
              {/* Payment Info */}
              <div className="mb-4 text-center">
                <p>Scan the QR code below to make payment:</p>
                <Image
                  src="/code9.jpg"
                  alt="QR Code"
                  className="w-52 mx-auto my-4"
                  width={500}
                  height={500}
                />

                {/* Total Fare */}
                <div className="w-full px-4 mb-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Registration amount : ₹{formData.total_fare}
                </div>

                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="txn_id"
                  required
                  placeholder="Transaction ID"
                  value={formData.txn_id}
                  onChange={handleChange}
                />
                <p className="text-red text-sm py-5 text-red-700">
                  NOTE: If you are using PhonePe for payment, please enter your
                  UTR, instead of Transaction ID.
                </p>
              </div>
              {/* 
              <div className="text-center mb-4">
                <button
                  type="button"
                  className={`text-xs sm:text-base hover:font-semibold text-background border-background border w-fit m-auto py-3 px-7 ${poppins.className}`}
                  onClick={() => setStep(2)}
                >
                  BACK
                </button>
              </div> */}

              {/* Submit Button */}

              {
                <div
                  className="block relative"
                  onMouseEnter={() => {
                    setIsHovered(!isHovered);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(!isHovered);
                  }}
                >
                  <motion.div
                    initial={{ width: "100%" }}
                    // animate={isHovered ? { width: 0 } : { width: "100%" }}
                    // transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                    className="absolute w-full h-full bg-blue-500"
                  ></motion.div>

                  <motion.button
                    transition={{
                      duration: 0.5,
                      ease: [0.17, 0.55, 0.55, 1],
                    }}
                    whileHover={{
                      color: "#3b82f6",
                      borderColor: "#3b82f6",
                      backgroundColor: "#171717",
                    }}
                    className="w-full h-full text-background relative z-10 py-2 px-5 border border-background flex justify-center gap-5 items-center"
                  >
                    GET TICKET
                    <Watch
                      visible={loading}
                      height="20"
                      width="20"
                      radius="48"
                      color="#3b82f6"
                      ariaLabel="watch-loading"
                      wrapperStyle={{}}
                      wrapperClass="text-white"
                    />
                  </motion.button>
                </div>
              }
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
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
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  id="hero"
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mx-auto text-center flex flex-col items-center  justify-center gap-2 w-fit max-w-4xl h-[600px] border border-white bg-opacity-5 rounded-3xl backdrop-blur-md"
                >
                  <h2 className="text-2xl mb-4">You have registered!</h2>
                  <span>Your Participation ID:</span>
                  <span className="text-lg font-bold text-blue-500 mx-3">
                    {uniqueId}
                  </span>

                  <div ref={qrRef}>
                    <QRCode
                      size={256}
                      value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/${uniqueId}`}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  <div className="flex items-center flex-col justify-center w-56 gap-3 my-2">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadQRCode();
                      }}
                      className="bg-blue-500 rounded px-5 py-1 text-center text-sm cursor-pointer w-full"
                    >
                      Download QR Code
                    </div>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/${uniqueId}`}
                      className="bg-blue-500 rounded px-5 py-1 text-center text-sm cursor-pointer w-full"
                    >
                      <button>Go to Ticket</button>
                    </Link>
                  </div>
                  <span className="text-sm italic text-blue-500 mx-6">
                    Your ticket will be validated within 48 hours . Download the
                    above QR to check yout ticket status.Ticket is sent to your
                    registered email.
                  </span>
                </motion.div>
              )}
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
