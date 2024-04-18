import { useState, useEffect } from "react";

import api from "../api/axiosConfig";
import JobsList from "../components/JobsList";
import JobApplication from "../components/modals/JobApplication";

const JobListings = () => {
  const [isJobApplicationModalOpen, setIsJobApplicationModalOpen] =
    useState(false);

  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsResponse = await api.get("/api/v1/jobs");
      setJobs(jobsResponse.data);
    };

    fetchJobs();
  }, []);

  const openApplicationModal = () => {
    setIsJobApplicationModalOpen(true);
  };

  const closeApplicationModal = () => {
    setIsJobApplicationModalOpen(false);
  };

  return (
    <div className="pt-40 px-32">
      <JobsList
        jobs={jobs}
        onApply={openApplicationModal}
        setSelectedJob={setSelectedJob}
      />

      <JobApplication
        isOpen={isJobApplicationModalOpen}
        onClose={closeApplicationModal}
        job={selectedJob}
      />
    </div>
  );
};

export default JobListings;
