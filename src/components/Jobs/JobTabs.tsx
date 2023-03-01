import { Category } from "../../data/types";

type JobTabsProps = {
  tabs: Array<Category>;
  active: string;
  onClick: (company: string) => void;
};

const JobTabs = ({ tabs, active, onClick }: JobTabsProps) => {
  return (
    <div className="tabs-container">
      {tabs.map(({ id, title }: Category) => {
        return (
          <button
            key={id}
            className={`job-btn ${active == title ? ' active' : ' false'}`}
            onClick={() => onClick(title)}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default JobTabs;
