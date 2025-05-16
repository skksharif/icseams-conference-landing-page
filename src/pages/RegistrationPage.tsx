import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle, Download } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import AnimatedSection from "../components/common/AnimatedSection";

const RegistrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Registration | ICSEAMS 2025";
  }, []);

  // Registration fee data
  const registrationFees = [
    {
      category: "Academicians",
      earlyBird: "Rs. 1500/-",
      regular: "Rs. 2000/-",
    },
    {
      category: "R&D / Industry / Corporate Executives",
      earlyBird: "Rs. 2000/-",
      regular: "Rs. 2500/-",
    },
    {
      category: "Foreign Delegates",
      earlyBird: "$ 200",
      regular: "$ 250",
    },
    {
      category: "Students / Research Scholars",
      earlyBird: "Rs. 1000/-",
      regular: "Rs. 1500/-",
    },
    {
      category: "Attendee",
      earlyBird: "Rs. 500/-",
      regular: "Rs. 750/-",
    },
  ];

  // Payment details
  const paymentDetails = {
    bankName: "International Bank of Science",
    accountName: "ICSEAMS 2025 Conference",
    accountNumber: "1234567890",
    ifscCode: "IBSC0001234",
    swiftCode: "IBSCINT123",
  };

  return (
    <div>
      <PageHeader
        title="Registration"
        subtitle="Secure your place at ICSEAMS 2025"
      />

      <div className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md mb-10"
            >
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Registration Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Registration for ICSEAMS 2025 can be completed through our
                  online registration system. The registration fee varies
                  depending on your category and the time of registration.
                </p>

                <div className="space-y-2">
                  <p className="font-medium">Important Notes:</p>
                  <ul className="list-none space-y-2">
                    {[
                      "Early bird registration ends July 31, 2025",
                      "At least one author must register for each accepted paper",
                      "Registration is required for all attendees, including presenters",
                      "Student registrations require proof of student status",
                      "Cancellations before August 15, 2025, will receive a 70% refund",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Registration Fees Table */}
            {/* Registration Fees Table */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Registration Fees
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary-100">
                      <th className="py-3 px-4 text-left font-semibold text-primary-800 border border-primary-200">
                        Category
                      </th>
                      <th className="py-3 px-4 text-center font-semibold text-primary-800 border border-primary-200">
                        Early Bird
                        <br /> (Until August 25, 2025)
                      </th>
                      <th className="py-3 px-4 text-center font-semibold text-primary-800 border border-primary-200">
                        Regular
                        <br /> (Until September 5, 2025)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrationFees.map((fee, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="py-4 px-4 border border-gray-200 font-medium text-gray-800">
                          {fee.category}
                        </td>
                        <td className="py-4 px-4 text-center font-medium text-primary-700 border border-gray-200">
                          {fee.earlyBird}
                        </td>
                        <td className="py-4 px-4 text-center font-medium text-primary-700 border border-gray-200">
                          {fee.regular}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-gray-600 italic text-sm flex items-start">
                <HelpCircle className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 text-primary-500" />
                <p>
                  All fees are in INR unless stated otherwise. Foreign delegates
                  are charged in USD.
                </p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Payment Details
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-primary-700 mb-4">
                  Bank Transfer Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Bank Name
                    </p>
                    <p className="text-gray-800">{paymentDetails.bankName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Account Name
                    </p>
                    <p className="text-gray-800">
                      {paymentDetails.accountName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Account Number
                    </p>
                    <p className="text-gray-800">
                      {paymentDetails.accountNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      IFSC Code
                    </p>
                    <p className="text-gray-800">{paymentDetails.ifscCode}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      SWIFT Code
                    </p>
                    <p className="text-gray-800">{paymentDetails.swiftCode}</p>
                  </div>
                </div>

                <div className="mt-6 text-gray-600 italic text-sm flex items-start">
                  <HelpCircle className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 text-primary-500" />
                  <p>
                    Please include your full name and paper ID (if applicable)
                    in the transfer reference. After payment, email the
                    transaction details to registration@icseams2025.org
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Registration Form
              </h2>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  Complete your registration by filling out the registration
                  form and submitting it along with your payment.
                </p>

                <div className="space-y-4">
                  <a
                    href="#"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Register Online
                  </a>

                  <div className="flex items-center">
                    <span className="mr-4 text-gray-700">or</span>
                    <a
                      href="#"
                      className="btn btn-outline inline-flex items-center"
                    >
                      Download Registration Form
                      <Download className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-6 text-gray-600 text-sm">
                  <p>
                    For registration assistance, please contact: <br />
                    <a
                      href="mailto:registration@icseams2025.org"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      registration@icseams2025.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
