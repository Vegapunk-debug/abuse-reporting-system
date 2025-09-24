import React from 'react'

export default function AdminHome() {
    
  return (
    <div> 
    <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                {/* <p className="text-3xl font-bold text-blue-600">{allUsers?.length}</p> */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700">Total Reports</h3>
                {/* <p className="text-3xl font-bold text-blue-600">{reports?.length}</p> */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700">Pending Reports</h3>
                {/* <p className="text-3xl font-bold text-blue-600">{pendingReports}</p> */}
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6  mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Users</h3>
            <div className="overflow-x-auto">
                {/* <UserTable allUsers={allUsers} length={6} /> */}
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Reports</h3>
            <div className="overflow-x-auto">
                {/* <ReportTable reports={reports} length={6} /> */}
            </div>
        </div>
    </main>
</div>
  )
}
