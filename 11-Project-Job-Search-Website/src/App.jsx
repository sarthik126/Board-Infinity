import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./assets/data";
import {motion} from 'framer-motion'

function App() {
  let dataFormat = data.map((item) => ({ ...item, openMenu: false }));

  const [jobs, setJobs] = useState([...dataFormat]);
  const [search, setSearch] = useState("");

  function changeOpen(index) {
    let tempJobs = [...jobs];
    tempJobs[index].openMenu = !tempJobs[index].openMenu;
    setJobs(tempJobs);
  }

  function searchJobs(e){
    e.preventDefault()
    let tempJobs = [...dataFormat].filter((item) => {

      let tempList = ""
      Object.keys(item).forEach((key) => {
        if(key == "technology") {
          item[key].forEach(tech=>{
            tempList += tech
          })
        } else{
          tempList += item[key]
        }
      });

      if(tempList.toLocaleLowerCase().includes(search.toLowerCase())){
        return true
      } else if (search === "") {
        return true
      } else {
        return false
      }
    });
    setJobs([...tempJobs]);
  }

  useEffect(()=>{
      $('[data-toggle="tooltip"]').tooltip()
  },[])

  return (
    <div className="App">
      <nav>
        <h1>Job Search Portal</h1>
      </nav>

      <form onSubmit={searchJobs} className="search-box side-gap">
        <i data-toggle="tooltip" data-placement="left" title="Search with Company, Technology, Location and 
        Role" className="bi bi-info-circle"></i>
      
        <input onChange={(e)=>setSearch(e.target.value)} value={search} type="search" placeholder="Search" />

        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form>

      {/* <div className="filters">
        filters
      </div> */}

      <div className="jobs side-gap">
        <motion.ul layout>
          {jobs.map((item, index) => (
            <motion.li animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} layout key={item.jobId}>
              <div className="card">
                <div className="job">
                  <img src={new URL(item.companyLogo, import.meta.url).href} alt={item.companyName} />
                  <div className="details">
                    <div className="upper-div">
                      <div className="company-name">{item.companyName}</div>
                      <span> | </span>
                      <div className="location">
                        <i className="bi bi-geo-alt"></i>
                        <span>{item.city}</span>
                      </div>
                    </div>

                    <div className="job-role">{item.jobRole}</div>

                    <div className="lower-div">
                      <div className="role-name">{item.jobRole}</div>
                      <span> | </span>
                      <div className="salary">
                        {/* <i className="bi bi-currency-rupee"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        <span>{item.jobSalary}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary"
                    data-toggle="collapse"
                    data-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`#collapse${index}`}
                    onClick={() => changeOpen(index)}
                  >
                    <span>APPLY</span>
                    {!item.openMenu ? (
                      <i className="bi bi-arrow-down-square-fill"></i>
                    ) : (
                      <i className="bi bi-arrow-up-square-fill"></i>
                    )}
                  </button>
                </div>

                <div
                  id={`collapse${index}`}
                  className="collapse desc"
                  data-parent="#accordion"
                >
                  <hr />
                  <div className="card-body">
                    <h6>Skills Required:</h6>
                    <div className="technology">
                      <ul>
                        {item.technology.map((tech, i) => (
                          <li className="tech" key={i}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="other-details">
                    <div className="deadline">
                    <h6>Last Date:</h6>
                    <div>{item.deadline}</div>
                    </div>

                    <div className="job-type">
                    <h6>Job Type:</h6>
                    <div className="job-type-value">{item.jobType}</div>
                    </div>

                    </div>

                    <hr />
                    <h6>Description:</h6>
                    {item.desc}
                  </div>
                  <hr />
                  <div className="apply">
                    <a href={item.link} target="_blank">
                    <button className="btn btn-success">APPLY</button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <footer>
        <p>© 2023 Search Jobs Portal, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
