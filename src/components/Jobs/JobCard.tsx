import { FaAngleDoubleRight } from "react-icons/fa";
import { Job } from "../../data/types";

const JobCard = ({ id, title, company, dates, duties }: Job) => {
  return (
    <article key={id} className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>

      {duties.length > 0 &&
        duties.map((duty: string, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
    </article>
  );
};

export default JobCard;
