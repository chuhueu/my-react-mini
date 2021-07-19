import React, { useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'

const Jobs = ({ jobs }) => {
  const [value, setValue] = useState(0);
  const { company, dates, duties, title } = jobs[value];
  console.log(jobs);
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/**jobs for btn */}
        <div className="btn-container">
            {jobs.map((item, index) => {
                return(
                    <button key={item.id} onClick={() => setValue(index)} className={`job-btn  ${index === value && 'active-btn'}`}>
                        {item.company}
                    </button>
                )
            })}
        </div>
        {/**jobs for info */}
        <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) =>{
                return(
                    <div key={index} className="job-desc">
                        <FaAngleDoubleRight className="job-icon"/>
                        <p>{duty}</p>
                    </div>
                )
            })}
        </article>
      </div>
    </section>
  );
};

export default Jobs;
