import { useState } from 'react'
import { states, courses } from './assets/data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const initialState = {
  firstName: { value: "", error: false },
  lastName: { value: "", error: false },
  email: { value: "", error: false },
  phone: { value: "", error: false },
  dob: { value: "", error: false },
  gender: { value: "", error: false },
  maritalStatus: { value: "", error: false },
  address: { value: "", error: false },
  city: { value: "", error: false },
  state: { value: "", error: false },
  zip: { value: "", error: false },
  courses: { value: "", error: false },
  checkbox: { value: false, error: false }
}

function App() {
  const newState =  JSON.parse(JSON.stringify(initialState))
  const [user, setUser] = useState(newState)

  function changeVal(key, value){
    let temp = {...user}
    temp[key].value = value
    setUser({...temp})
  }
  
  function submitData(e){
    e.preventDefault()
    let temp = {}

    Object.keys(user).forEach((key)=> {
      temp[key] = {...user[key], error: false}
    })

    let message = ""

    if(user.firstName.value.length < 3){
      temp.firstName.error = true
      message += "The first name should be more than 3 characters long \n"
    }

    if(user.lastName.value.length < 3){
      temp.lastName.error = true
      message += "The last name should be more than 3 characters long \n"
    }

    if(!user.email.value.includes(".com")){
      temp.email.error = true
      message += "The email should be valid (example@email.com) \n"
    }
    
    if(user.address.value.length < 10){
      temp.address.error = true
      message += "The address should be more than 10 characters long \n"
    }

    if(user.city.value.length < 3){
      temp.city.error = true
      message += "The city name should be more than 3 characters long \n"
    }

    if(user.zip.value.length < 6){
      temp.zip.error = true
      message += "The zip code should be more than 6 characters long \n"
    }
    
    if(message.length > 0){
      message = messageFormat(message)
      toast.error(message,{ position: "top-left" })
      setUser({...temp})
      return
    }

    // FYI - send details to server to save it
    toast.success("The course enrollment was success!",{ position: "top-center" })
    const tmpState =  JSON.parse(JSON.stringify(initialState))
    setUser(tmpState)
  }

  return (
    <div className="App">
      <ToastContainer />
      <header>
        <h1>E-Course Registration</h1>
      </header>
      <section className='main'>
        <div className="register-form">
          <h4>Registration Form</h4>
        <hr />
          <form onSubmit={submitData} className="row g-3 main-form">

            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input type="text" placeholder="Enter your first name" className={`form-control ${user.firstName.error ? "error" : ""}`} id="firstName" value={user.firstName.value} onChange={(e)=>changeVal("firstName", e.target.value)} required />
            </div>

            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" placeholder="Enter your last name" className={`form-control ${user.lastName.error ? "error" : ""}`} id="lastName" value={user.lastName.value} onChange={(e)=>changeVal("lastName", e.target.value)} required />
            </div>

            <div className="col-md-12">
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input type="email" placeholder="Enter your email id" className={`form-control ${user.email.error ? "error" : ""}`} id="email" value={user.email.value} onChange={(e)=>changeVal("email", e.target.value)} required />
              </div>
            </div>

            <div className="col-md-12">
              <label htmlFor="phone" className="form-label">Mobile Number</label>
              <input type="tel" placeholder="Enter your phone number" pattern="[0-9]{10}" className={`form-control ${user.phone.error ? "error" : ""}`} id="phone" value={user.phone.value} onChange={(e)=>changeVal("phone", e.target.value)} required />
            </div>

            <div className="col-md-4">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input type="date" className={`form-control ${user.dob.error ? "error" : ""}`} id="dob" value={user.dob.value} onChange={(e)=>changeVal("dob", e.target.value)} required />
            </div>

            <div className="col-md-4">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select className={`form-select ${user.gender.error ? "error" : ""}`} id="gender" value={user.gender.value} onChange={(e)=>changeVal("gender", e.target.value)} required>
                <option disabled value="">Choose...</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
              <select className={`form-select ${user.maritalStatus.error ? "error" : ""}`} id="maritalStatus" value={user.maritalStatus.value} onChange={(e)=>changeVal("maritalStatus", e.target.value)} required>
                <option disabled value="">Choose...</option>
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>

            <div className="col-md-12">
            <label htmlFor="address" className="form-label">Address</label>
              <textarea className={`form-control ${user.address.error ? "error" : ""}`} placeholder="Adddress" id="address" value={user.address.value} onChange={(e)=>changeVal("address", e.target.value)} required></textarea>
            </div>

            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input placeholder="Enter your city name" type="text" className={`form-control ${user.city.error ? "error" : ""}`} id="city" value={user.city.value} onChange={(e)=>changeVal("city", e.target.value)} required />
            </div>

            <div className="col-md-3">
              <label htmlFor="state" className="form-label">State</label>
              <select className={`form-select ${user.state.error ? "error" : ""}`} id="state" value={user.state.value} onChange={(e)=>changeVal("state", e.target.value)} required>
              <option value="" disabled>Choose...</option>
                {states.map((item,i)=>(<option key={i}>{item}</option>))}
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="number" placeholder="Enter zip code" className={`form-control ${user.zip.error ? "error" : ""}`} id="zip" value={user.zip.value} onChange={(e)=>changeVal("zip", e.target.value)} required />
            </div>

            <div className="col-md-12">
              <label htmlFor="courses" className="form-label">Courses</label>
              <select className={`form-select ${user.courses.error ? "error" : ""}`} id="courses" value={user.courses.value} onChange={(e)=>changeVal("courses", e.target.value)} required>
                <option value="" disabled>Choose...</option>
                {courses.map((item,i)=>(<option key={i}>{item}</option>))}
              </select>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checkbox" checked={user.checkbox.value} onChange={(e)=>changeVal("checkbox", !user.checkbox.value)} />
                <label className="form-check-label" htmlFor="checkbox">
                  Receive new course launch notifications
                </label>
              </div>
            </div>
            
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit Data</button>
            </div>
        </form>
      </div>
      </section>
    </div>
  )
}

function messageFormat(message) {
  let newMessage = message.split("\n")
  newMessage.pop()

    return (
      <div className='message'>
        <h6>Please correct details mentioned below </h6>
        <ul>
          {newMessage.map((item, index)=>(<li key={index}>{item}</li>))}
        </ul>
      </div>
    )
}

export default App
