import React, { useState } from 'react';
import { axiosInstance } from '../library/Api';

export default function ReportingForm() {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [anonymous, setAnonymous] = useState('');
  const [contact, setContact] = useState('');
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const handleImageRemoval = () => {
    setFile(null);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category', category);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('anonymous', anonymous);
    formData.append('contact', contact);
    if (file) {
      formData.append('file', file);
    }
    try {
      for(let pair of formData.entries()){
        console.log(pair)}
      const response = await axiosInstance.post('/report/addReport', formData);
      console.log('Report submitted:', response.data);
      alert("Report submitted successfully.");
    } catch (error) {
      console.error('Error submitting report:', error);
      alert("Something went wrong.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Report an Incident</h2>
      <div>
        <label className="block font-semibold mb-1">Category of Incident</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded">
          <option value="">Select a Category</option>
          <option>Child Abuse</option>
          <option>Drug Activity</option>
          <option>Domestic Violence</option>
          <option>Sexual Harassment</option>
          <option>Human Trafficking</option>
          <option>Other</option>
        </select>
      </div>

  
      <div>
        <label className="block font-semibold mb-1">Incident Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          placeholder="Describe what happened in detail..."
          className="w-full border border-gray-300 p-2 rounded"
        ></textarea>
      </div>


      <div>
        <label className="block font-semibold mb-1">Location of Incident</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Pathanamthitta, Kerala"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Upload Photo/Video (optional)</label>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleImageUpload}
          className="block w-full mt-1"
        />
        <p onChange={handleImageRemoval}>remove</p>
      </div>

      <div>
        <label className="block font-semibold mb-1">Do you want to remain anonymous?</label>
        <select
          value={anonymous}
          onChange={(e) => setAnonymous(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Choose</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {anonymous == 'yes' && <div>
      <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>}
      <div>
        <label className="block font-semibold mb-1">Your Contact (Optional)</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Email or Phone"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
      >
        Report Now
      </button>
    </form>
  );
}


// import {React, useState } from 'react'
// import { axiosInstance } from '../library/Api';
// export default function ReportingForm() {
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [description , setDescription] = useState('');
//     // const [image, setImage] = useState('');
//     const formData = new FormData();
//     const Image = async(e) => {
//       e.preventDefault()
//       const file  = e.target.files[0];
//       formData.append('image', file);
//     }
//     const handleSubmit = async() => {
  
  
//       formData.append('name', name);
//       formData.append('price', price);
//       formData.append('description', description);
//       try {
//         for(let pair of formData.entries()){
//           console.log(pair)}
//         const res = await axiosInstance.post('/product/addProduct', formData);
//         console.log(res.data);  
//         return;
//       } catch (error) {
//         console.log(error);}}
//   return (
//     <>
//           <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center">Submit Details</h2>
//       <div className="space-y-4">
//         <div>
//           <label className="block text-gray-700 font-medium">Name</label>
//           <input  type="text"  name="name" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             onChange={(e) => setName(e.target.value)} required/>
//         </div><div>
//           <label className="block text-gray-700 font-medium">Email</label>
//           <input
//             type="number"
//             name="price"
//             className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-medium">Description</label>
//           <textarea
//             name="description"
//             rows="4"
//             className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-medium">Upload Image</label>
//           <input
//             type="file"
//             name="image"
      
//             className="mt-2" onChange={(e) => {Image(e)}}/>
//         </div>
//         <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={() => {handleSubmit()}}>Submit</button>
//       </div>
//     </div>
//     </>)}