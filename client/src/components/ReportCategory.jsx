import React from 'react'

export default function ReportCategory() {
  return (
    
    <div>
      <div className="py-12 px-6 sm:px-10 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Report Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

          <div className="bg-white rounded-lg shadow-sm border-t-4 border-red-500 hover:shadow-md transition">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-emotion-sad-line text-red-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Child Abuse Report
              </h3>
              <p className="text-gray-600">
                Report suspected child abuse, neglect, or exploitation. Your
                report can save a child's life.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-sm border-t-4 border-purple-500 hover:shadow-md transition">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-medicine-bottle-line text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Drug-Related Activity
              </h3>
              <p className="text-gray-600">
                Report drug trafficking, manufacturing, or distribution. Help
                keep your community safe.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border-t-4 border-blue-500 hover:shadow-md transition">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-alarm-warning-line text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Criminal Activity
              </h3>
              <p className="text-gray-600">
                Report suspicious or criminal activities in your area. Your
                vigilance helps prevent crime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
