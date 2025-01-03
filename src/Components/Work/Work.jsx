import './Work.css'

import work1_img from '../../assets/work1.png'
import work2_img from '../../assets/work2.jpg'
import work3_img from '../../assets/work3.png'

const Work = () => {
  return (
    <div id='work' className='work'>
      <div className="work-title">
        <h1>Work Experience</h1>
      </div>
      <div className="work-container">
        {WorkData.map((work, index) => {
          return (
            <div key={index} className="project-card">
              <img key={index} src={work.w_img} alt={work.w_name} />
              <div className="project-overlay">
                <h2>{work.w_name}</h2>
                <p>{work.w_description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const WorkData = [
  {
    w_no: 1,
    w_name: 'Bioinformatics Software Developer',
    w_img: work3_img,
    w_description: 'January 2025 - Current',
  },
  {
    w_no: 2,
    w_name: 'Teaching Assistant - Digital Systems',
    w_img: work2_img,
    w_description: 'September 2024 - December 2024',
  },
  {
    w_no: 3,
    w_name: 'Junior Software Developer',
    w_img: work1_img,
    w_description: 'April 2024 - August 2024',
  }
];

export default Work