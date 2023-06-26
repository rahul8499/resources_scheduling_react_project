import TableHeader from '../../../components/TableHeader/TableHeader';
import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import './FacultyCreate.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const url = `http://dev.allen-api.com:5020/api/createfaculty`
const locationgetURL = `http://dev.allen-api.com:5020/api/getlocation?q=&limit=20&page=1&name=1&sortBy=name&sortOrder=DESC`
const batch_slotApi = `http://dev.allen-api.com:5020/api/getBatchslot?q=&limit=5&page=1&name=1&sortBy=name&sortOrder=DESC`

const FacultyCreate = () => {
  const [locationState, setLocationState] = useState([])
  const [batchSlot, setBatchSlot] = useState([])
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mail: "",
    phone: "",
    gender: "",
    location_id: "",
    experience: '',
    address: '',
    age: '',
    subject: "",
    batch_slot_id: ''
  });

  const [formErrors, setFormErrors] = useState({
    first_name: false,
    last_name: false,
    mail: false,
    phone: false,
    gender: false,
    location_id: false,
    experience: false,
    address: false,
    age: false,
    subject: false,
    batch_slot_id: false
  });

  const getLocation = async () => {
    await axios.get(locationgetURL)
      .then(res => { setLocationState(res.data.data) }).catch(err => {
        console.log(err)
      })
  }
  const getBatch_slot = async () => {
    await axios.get(batch_slotApi)
      .then(res => {  setBatchSlot(res.data.data)}).catch(err => {
        console.log(err)
      })
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const submitHandler = () => {
    // Check for empty required fields
    const errors = {};
    let hasError = false;
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && !formData[key]) {
        errors[key] = true;
        hasError = true;
      }
    }
    setFormErrors(errors);

    if (hasError) {
      // Display error message or take appropriate action
      console.log('Please fill in all required fields');
    } else {
      //  Make API call using Axios
      axios.post(url, formData)
        .then(response => {
          // Handle successful response
          console.log('API response:', response.data);
          toast.success('Data submitted successfully');
          cancelHandler()
          
        })
        .catch(error => {
          // Handle error
          console.log('API error:', error);
          toast.error('error');
        });
    }
  };
  const cancelHandler = () => {
    setFormData({
      first_name: '',
      last_name: '',
      mail: "",
      phone: "",
      gender: "",
      location: "",
      experience: '',
      address: '',
      age: '',
      subject: "",
      batch_slot: ''
    });
  }
  console.log('batchslot',batchSlot)
  console.log('locations',locationState)

  useEffect(() => {
    getBatch_slot()
    getLocation()
  }, [])


  return (
    <>
    <>
    <ToastContainer />
    </>
      <TableHeader pagename="Faculty Create" />
      <div className='mt-5'>
        <section className='createContainer grid grid-cols-12'>
          <div className="inputcontainer col-span-6">
            <label className='text-xl inputLable'>First Name</label>
            <input
              type="text"
              onChange={changeHandler}
              value={formData.first_name}
              name='first_name'
              className={`input hover:bg-gray-100  border-gray-400 text-xl ${formErrors.first_name ? 'error' : ''}`}
              required
            />
            {formErrors.first_name && <span className="error-text">Please enter your first name</span>}
          </div>

          <div className="inputcontainer col-span-6">
            <label className='text-xl inputLable'>Last Name</label>
            <input
              type="text"
              name='last_name'
              onChange={changeHandler}
              value={formData.last_name}
              className={`input hover:bg-gray-100  border-gray-400 text-xl ${formErrors.last_name ? 'error' : ''}`}
              required
            />
            {formErrors.last_name && <span className="error-text">Please enter your Last name</span>}
          </div>

          <div className="inputcontainer col-span-6">
            <label className='text-xl inputLable'>EmailId</label>
            <input
              type="email"
              name='mail'
              onChange={changeHandler}
              value={formData.mail}
              className={`input hover:bg-gray-100  border-gray-400 text-xl ${formErrors.mail ? 'error' : ''}`}
              required
            />
            {formErrors.email && <span className="error-text">Please enter a valid email</span>}
          </div>

          <div className="inputcontainer col-span-6">
            <label className='text-xl inputLable'>Contact Number</label>
            <input
              type="number"
              name='phone'
              onChange={changeHandler}
              value={formData.phone}
              className={`input hover:bg-gray-100  border-gray-400 text-xl ${formErrors.phone ? 'error' : ''}`}
              required
            />
            {formErrors.phone && <span className="error-text">Please enter a valid phone number</span>}
          </div>

          <div className="dropdwon inputcontainer col-span-6">
            <label htmlFor="countries" className="block mb-2 inputLable text-xl font-light dark:text-white w-full">
              Location*
            </label>
            <select
              id="countries"
              name="location_id"
              onChange={changeHandler}
              value={formData.location_id}
              className={`input bg-gray-50 border border-gray-300 text-xl block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full ${formErrors.location ? 'error' : ''}`}
              required
            ><option value="" >Select Location</option>
              {locationState.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            {formErrors.location && <span className="error-text">Please select a location</span>}
          </div>

          <div className="dropdwon inputcontainer col-span-6">
            <label htmlFor="gender" className="block mb-2 inputLable text-xl font-light dark:text-white w-full">
              Gender*
            </label>
            <select
              id="gender"
              name="gender"
              onChange={changeHandler}
              value={formData.gender}
              className={`input bg-gray-50 border border-gray-300 text-xl block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full ${formErrors.gender ? 'error' : ''}`}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {formErrors.gender && <span className="error-text">Please select a gender</span>}
          </div>

          <div className="inputcontainer col-span-6">
            <label className='text-xl inputLable'>Age</label>
            <input
              type="number"
              name='age'
              onChange={changeHandler}
              value={formData.age}
              className={`input hover:bg-gray-100  border-gray-400 text-xl ${formErrors.age ? 'error' : ''}`}
              required
            />
            {formErrors.age && <span className="error-text">Please enter your age</span>}
          </div>

          <div className="dropdwon inputcontainer col-span-6">
            <label htmlFor="experience" className="block mb-2 inputLable text-xl font-light dark:text-white w-full">
              Experience*
            </label>
            <select
              id="experience"
              name="experience"
              onChange={changeHandler}
              value={formData.experience}
              className={`input bg-gray-50 border border-gray-300 text-xl block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full ${formErrors.experience ? 'error' : ''}`}
              required
            >
              <option value="">Select Experience</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            {formErrors.experience && <span className="error-text">Please select an experience</span>}
          </div>

          <div className="inputcontainer col-span-6">
            <label className='text-xl inputLable'>Address</label>
            <input
              type="text"
              name='address'
              onChange={changeHandler}
              value={formData.address}
              className={`input hover:bg-gray-100  border-gray-400 text-xl ${formErrors.address ? 'error' : ''}`}
              required
            />
            {formErrors.address && <span className="error-text">Please enter your address</span>}
          </div>

          <div className="inputcontainer col-span-6">
            <label className='text-xl inputLable'>Subject</label>
            <input
              type="text"
              name='subject'
              onChange={changeHandler}
              value={formData.subject}
              className={`input hover:bg-gray-100  border-gray-400 text-xl ${formErrors.subject ? 'error' : ''}`}
              required
            />
            {formErrors.subject && <span className="error-text">Please enter a subject</span>}
          </div>

          <div className="dropdwon inputcontainer col-span-6">
            <label htmlFor="batch_slot_id" className="block mb-2 inputLable text-xl font-light dark:text-white w-full">
              Batch Slot*
            </label>
            <select
              id="batch_slot_id"
              name="batch_slot_id"
              onChange={changeHandler}
              value={formData.batch_slot_id}
              className={`input bg-gray-50 border border-gray-300 text-xl block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full ${formErrors.batch_slot ? 'error' : ''}`}
              required
            >
              <option value="">Select Batch Slot</option>
              {batchSlot.map(batch => (
                <option key={batch.id} value={batch.id}>
                  {batch.name}
                </option>
              ))}
            </select>
            {formErrors.batch_slot && <span className="error-text">Please select a batch slot</span>}
          </div>
        </section>

        <section className='btncontainer'>
          <button className='bg-primary btn text-xl' onClick={submitHandler}>Save</button>
          <button className='bg-primary btn text-xl' onClick={cancelHandler}>Cancel</button>
        </section>
      </div>
    </>
  )
}

export default FacultyCreate;
