import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  CreditCard,
  HelpCircle,
  FileText,
  Calendar,
  InfoIcon,
} from "lucide-react";

const RegistrationPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Registration"
        description="Register for ICSEAMS-2026. Early bird and regular registration fees for academicians, industry professionals, students, and attendees."
        canonical="/registration"
      />
      <div className="bg-gradient-to-r from-conference-orange/90 to-conference-green/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Conference Registration
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join us at ICSEAMS-2026 for an enriching experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Registration Information
            </h2>
            <p className="text-gray-700 mb-6 text-justify">
              Registration for ICSEAMS-2026 includes access to all conference
              sessions, conference materials, coffee breaks, lunches during the
              conference days, and a certificate of participation.
            </p>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8">
              <div className="bg-gray-50 p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <CreditCard
                    size={20}
                    className="mr-2 text-conference-orange"
                  />
                  Registration Fees
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                        Category
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                        Early Bird (till Mar 15, 2026)
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                        Late Registration (till Mar 27, 2026)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b text-gray-800">
                        Academicians
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹1500
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹2000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b text-gray-800">
                        R&D/Industry
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹2000
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹2500
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b text-gray-800">
                        Foreign Delegates
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">$200</td>
                      <td className="py-3 px-4 border-b text-gray-800">$250</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b text-gray-800">
                        Students / Research Scholars
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹1000
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹1500
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-800">Attendees</td>
                      <td className="py-3 px-4 text-gray-800">₹500</td>
                      <td className="py-3 px-4 text-gray-800">₹750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-700 text-sm mb-1">
                  <strong>Note:</strong> All fees are inclusive of 18% GST
                </p>
                <p className="text-gray-700 text-sm">
                  Publication charges are separate and will be communicated upon
                  paper acceptance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <InfoIcon size={18} className="mr-2 text-conference-orange" />
                  What's Included
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Conference registration kit
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Access to all technical sessions
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Lunch and refreshments on conference days
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Certificate of participation
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Conference proceedings
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <HelpCircle
                    size={18}
                    className="mr-2 text-conference-orange"
                  />
                  Important Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Registration fees are non-refundable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    At least one author must register per accepted paper
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Each registration covers only one paper
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Registration Deadline: March 27, 2026
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Payment Details
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Bank Transfer Details
              </h3>

              <div className="flex justify-around flex-wrap gap-2 items-center">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/qr-code.png"
                    alt="ICSEAMS Payment QR Code"
                    className="w-68 h-68 border rounded-lg shadow-sm"
                  />
                </div>
                {/* Left: Bank Info */}
                OR
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Bank Name:</span> Indian Bank
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Account Name:</span>{" "}
                    ICSEAMS-2026
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Account Number:</span>{" "}
                    7598701049
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">IFSC Code:</span> IDIB000N183
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Branch:</span> Narsapur
                  </p>
                </div>
                {/* Right: QR Code */}
              </div>
            </div>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Registration Process
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Complete the Registration Form
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Fill out the online registration form with your personal and
                    professional details.
                  </p>
                  <button className="btn-primary">Register Now</button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Make Payment
                  </h3>
                  <p className="text-gray-700">
                    Complete the payment using bank transfer with the details
                    provided above. Include your name and paper ID (if
                    applicable) as reference.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Submit Payment Proof
                  </h3>
                  <p className="text-gray-700">
                    Send the payment confirmation/receipt to{" "}
                    <a
                      href="mailto:icseams@bvrit.ac.in"
                      className="text-conference-orange hover:underline"
                    >
                      icseams@bvrit.ac.in
                    </a>{" "}
                    with the subject "Payment Confirmation - [Your Name]".
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Receive Confirmation
                  </h3>
                  <p className="text-gray-700">
                    You will receive a confirmation email with your registration
                    details and receipt within 3 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col md:flex-row items-center justify-between"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <Calendar size={36} className="text-conference-purple mr-4" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Registration Deadlines
                </h3>
                <p className="text-sm text-gray-600">
                  Early Bird: March 15, 2026 | Late Registration: March 27, 2026
                </p>
              </div>
            </div>
            <Link to="/important-dates" className="btn-primary">
              View All Deadlines
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
