import{ React, useEffect, useState } from 'react';
import { axiosInstance } from '../library/Api.js';


function ProductPage() {
    const [products, setProduct] = useState([]);

    const Products = async() => {
      try {
        const response = await axiosInstance.get('/report/getReport');
        setProduct(response.data);
        console.log(response.data)
        return response.data;
        
      } catch (error) {console.log(error)}
      }
useEffect(() => { 
   Products();  
      },[])
   console.log(products);
   

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Details</h2>

        {products.map((product) => (
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>

                <p className="text-sm text-gray-500">Product ID</p>
                <p className="font-medium text-gray-800">{product?._id}</p>
              </div>
              {/* <div>
                <p className="text-sm text-gray-500">User</p>
                <p className="font-medium text-gray-800">{report.userId?.name || 'N/A'}</p>
              </div> */}
              {/* <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium text-gray-800">{report?.department?.station || 'N/A'}</p>
              </div> */}
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium text-gray-800">{product?.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact</p>
                <p className="font-medium text-gray-800">{product?.contact}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Description</h3>
            <p className="text-gray-700">{product?.description}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Attached Files</h3>
                <img src={`/image/${product?.originalFileName}` } alt="" />
          </div>
        </div>))}

        {/* Back Button */}
        {/* <div className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Reports
          </button>
        </div> */}
      </div>
     </div>
  );
}
export default ProductPage;