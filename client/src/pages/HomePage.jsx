import {React } from 'react'
// import { axiosInstance } from '../library/Api';
import Hero from '../components/Hero';
import ReportingForm from '../components/ReportingForm';
import Footer from '../components/Footer';

function HomePage() {
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [description , setDescription] = useState('');
  // const [image, setImage] = useState('');
  // const formData = new FormData();
  // const Image = async(e) => {
  //   e.preventDefault()
  //   const file  = e.target.files[0];
  //   formData.append('image', file);

  // }
  // const handleSubmit = async() => {


  //   formData.append('name', name);
  //   formData.append('price', price);
  //   formData.append('description', description);


  //   try {
  //     for(let pair of formData.entries()){
  //       console.log(pair)
  //     }
  //     const res = await axiosInstance.post('/product/addProduct', formData);
  //     console.log(res.data);  
  //     return;

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
    <Hero />
    <Footer />
  </>
  )
}
export default HomePage
