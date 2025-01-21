'use client'
import { useState } from 'react'

import PrimaryModal from '../Modals/PrimaryModal'
import EditProfileForm from '@/components/Forms/EditProfileForm'
import { FaEdit, FaRegClock } from 'react-icons/fa'

const ProfilePage = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)
  // Open/Close functions for Registration Modal
  const closeRegistrationModal = () => setIsRegistrationModalOpen(false)

  return (
    <>
      <div className=" bg-[#290d2f] p-8 rounded-lg shadow-lg text-white">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Personal Profile</h2>
            <p className="text-sm text-gray-300">
              Fill in the empty fields to take advantage of the enhanced
              features of the website!
            </p>
          </div>
          <button
            onClick={() => setIsRegistrationModalOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaEdit /> Edit Profile
          </button>
        </div>

        {/* Account Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account Info</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Account Number</span>
              <span className="font-semibold">2024 789574875124</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Password</span>
              <span className="font-semibold">●●●●●●●●●</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Registration Date</span>
              <span className="font-semibold">27 October 2024</span>
            </div>
          </div>
        </div>
        {/* Contact Details Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Phone</span>
              <span className="font-semibold">01950633485</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Email</span>
              <span className="font-semibold">
                sabbir.saidul.mentor@gmail.com
              </span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Address</span>
              <span className="font-semibold">Uttara, Dhaka, Bangladesh</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>User Name</span>
              <span className="font-semibold">Sabbir Saidul</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Surname</span>
              <span className="font-semibold">Sabbir</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Date of Birth</span>
              <span className="font-semibold">24 October 2024</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Type of document</span>
              <span className="font-semibold">............</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Document Number</span>
              <span className="font-semibold">............</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Document Issue Date</span>
              <span className="font-semibold">12 October 2024</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Country</span>
              <span className="font-semibold">Bangladesh</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
              <span>Gender</span>
              <span className="font-semibold">Male</span>
            </div>
          </div>
        </div>
        {/* Recent Sessions Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Recent Sessions</h3>
          <div className="space-y-3">
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex items-center gap-3">
              <FaRegClock className="text-gray-400" />
              <span className="font-semibold">28 Oct 2024</span>
              <span className="ml-auto">Uttara, Dhaka, Bangladesh</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex items-center gap-3">
              <FaRegClock className="text-gray-400" />
              <span className="font-semibold">28 Oct 2024</span>
              <span className="ml-auto">Uttara, Dhaka, Bangladesh</span>
            </div>
            <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex items-center gap-3">
              <FaRegClock className="text-gray-400" />
              <span className="font-semibold">28 Oct 2024</span>
              <span className="ml-auto">Uttara, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {isRegistrationModalOpen && (
        <PrimaryModal
          isOpen={isRegistrationModalOpen}
          onClose={closeRegistrationModal}
        >
          <EditProfileForm />
        </PrimaryModal>
      )}
    </>
  )
}

export default ProfilePage

// import { FaEdit, FaRegClock } from 'react-icons/fa'

// const ProfilePage = () => {
//   return (
//     <div className=" bg-[#290d2f] p-8 rounded-lg shadow-lg text-white">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl font-bold">Personal Profile</h2>
//           <p className="text-sm text-gray-300">
//             Fill in the empty fields to take advantage of the enhanced features
//             of the website!
//           </p>
//         </div>
//         <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
//           <FaEdit /> Edit Profile
//         </button>
//       </div>

//       {/* Account Info Section */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Account Info</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Account Number</span>
//             <span className="font-semibold">2024 789574875124</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Password</span>
//             <span className="font-semibold">●●●●●●●●●</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Registration Date</span>
//             <span className="font-semibold">27 October 2024</span>
//           </div>
//         </div>
//       </div>

//       {/* Contact Details Section */}
//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Phone</span>
//             <span className="font-semibold">01950633485</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Email</span>
//             <span className="font-semibold">
//               sabbir.saidul.mentor@gmail.com
//             </span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Address</span>
//             <span className="font-semibold">Uttara, Dhaka, Bangladesh</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>User Name</span>
//             <span className="font-semibold">Sabbir Saidul</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Surname</span>
//             <span className="font-semibold">Sabbir</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Date of Birth</span>
//             <span className="font-semibold">24 October 2024</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Type of document</span>
//             <span className="font-semibold">............</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Document Number</span>
//             <span className="font-semibold">............</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Document Issue Date</span>
//             <span className="font-semibold">12 October 2024</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Country</span>
//             <span className="font-semibold">Bangladesh</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex justify-between items-center">
//             <span>Gender</span>
//             <span className="font-semibold">Male</span>
//           </div>
//         </div>
//       </div>

//       {/* Recent Sessions Section */}
//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-4">Recent Sessions</h3>
//         <div className="space-y-3">
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex items-center gap-3">
//             <FaRegClock className="text-gray-400" />
//             <span className="font-semibold">28 Oct 2024</span>
//             <span className="ml-auto">Uttara, Dhaka, Bangladesh</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex items-center gap-3">
//             <FaRegClock className="text-gray-400" />
//             <span className="font-semibold">28 Oct 2024</span>
//             <span className="ml-auto">Uttara, Dhaka, Bangladesh</span>
//           </div>
//           <div className="bg-[#3b2b4b]/50 p-3 rounded-md flex items-center gap-3">
//             <FaRegClock className="text-gray-400" />
//             <span className="font-semibold">28 Oct 2024</span>
//             <span className="ml-auto">Uttara, Dhaka, Bangladesh</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfilePage
