import { useState } from "react";
import JobsList from "../components/JobsList";
import JobApplication from "../components/modals/JobApplication";

const jobs = [
  {
    id: 1,
    position: "Data Scientist",
    company: "Google",
    location: "Bengaluru, IN",
    skills: ["Python", "R", "Jupyter Notebook", "MATLAB"],
    experience: "0 - 2 Years",
  },
  {
    id: 2,
    position: "Lead Backend Engineer",
    company: "Spotify",
    location: "Mumbai, IN",
    skills: ["Java", "SpringBoot", "NGINX"],
    experience: "3 - 5 Years",
  },
];

const JobListings = () => {
  const [isJobApplicationModalOpen, setIsJobApplicationModalOpen] =
    useState(false);

  const [selectedJob, setSelectedJob] = useState(null);

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
