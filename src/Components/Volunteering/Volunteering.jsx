import "./Volunteering.css";
import PropTypes from "prop-types";

import volunteer1_img from "../../assets/volenteer1.png";
import volunteer2_img from "../../assets/volenteer2.png";
import volunteer3_img from "../../assets/volenteer3.png";

const VolunteeringData = [
    {
        v_name: "TPU System Engineer",
        v_img: volunteer1_img,
        v_dates: "August 2024 - May 2025",
    },
    {
        v_name: "VP of Technology & Projects",
        v_img: volunteer2_img,
        v_dates: "September 2024 - Present",
    },
    {
        v_name: "Webmaster",
        v_img: volunteer3_img,
        v_dates: "July 2025 - Present",
    },
];

const VolunteeringCard = ({ volunteer }) => (
    <div className="project-card">
        <img src={volunteer.v_img} alt={volunteer.v_name} />
        <div className="project-overlay">
            <h2>{volunteer.v_name}</h2>
            <p>{volunteer.v_dates}</p>
        </div>
    </div>
);

VolunteeringCard.propTypes = {
    volunteer: PropTypes.shape({
        v_img: PropTypes.string.isRequired,
        v_name: PropTypes.string.isRequired,
        v_dates: PropTypes.string.isRequired,
    }).isRequired,
};

const Volunteering = () => (
    <div id="volunteering" className="volunteering">
        <div className="volunteering-title">
            <h1>Volunteering Experience</h1>
        </div>
        <div className="volunteering-container">
            {VolunteeringData.map((volunteer, index) => (
                <VolunteeringCard key={index} volunteer={volunteer} />
            ))}
        </div>
    </div>
);

export default Volunteering;
