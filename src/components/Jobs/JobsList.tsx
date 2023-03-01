import { useEffect, useState } from "react";
import { jobsApiUrl } from "../../data/constants";
import { Category, Job } from "../../data/types";
import Loading from "../Tours/Loading";
import JobCard from "./JobCard";
import JobTabs from "./JobTabs";

const JobsList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Array<Job>>([]);
  const [filteredJobs, setFilteredJobs] = useState<Array<Job>>([]);
  const [tabs, setTabs] = useState<Array<Category>>([]);

  const fetchJobs = async () => {
    setLoading(true);

    try {
      const response = await fetch(jobsApiUrl);
      const jobs = await response.json();
      setLoading(false);
      setJobs(jobs);

      let companies: Array<Category> = jobs
        .map((job: Job) => {
          return job.company;
        })
        .filter((x: any, i: any, a: string | any[]) => a.indexOf(x) == i) // Distinct the categories
        .map((categoryTitle: string, index: number) => {
          return { id: index + 1, title: categoryTitle };
        });

      if (companies.length > 0) setTabs(companies);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const filterJobs = (company: string) => {
    let filteredJobsByCompany = jobs.filter((job) => {
      return job.company === company;
    });
    if (filteredJobsByCompany.length > 0)
      setFilteredJobs(filteredJobsByCompany);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (jobs.length > 0) filterJobs(jobs[0].company);
  }, [jobs]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="jobs-center">
      <JobTabs
        tabs={tabs}
        active={filteredJobs[0]?.company || tabs[0].title}
        onClick={filterJobs}
      />
      {filteredJobs.map((job) => {
        return <JobCard key={job.id} {...job} />;
      })}
    </div>
  );
};

export default JobsList;
