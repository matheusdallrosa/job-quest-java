import { useState, useEffect } from "react";

import api from "../api/axiosConfig";
import JobsList from "../components/JobsList";
import JobApplication from "../components/modals/JobApplication";
import Confirmation from "../components/modals/Confirmation";

const JobListings = () => {
  const [isJobApplicationModalOpen, setIsJobApplicationModalOpen] =
    useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const [confirmationMessage, setConfirmationMessage] = useState("");

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

  const openConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const applyForJob = async (formData) => {
    try {
      const applyResponse = await api.post("/api/v1/applications", formData);

      if (applyResponse.status === 201) {
        closeApplicationModal();

        setConfirmationMessage(
          `Successfully applied to the job: ${selectedJob?.position} at ${selectedJob?.company}`
        );

        openConfirmationModal();
      }
    } catch (error) {
      console.log(error);
      closeApplicationModal();

      setConfirmationMessage(
        "Some error occurred while applying for the job. Kindly try again!"
      );

      openConfirmationModal();
    }
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
        applyForJob={applyForJob}
      />

      <Confirmation
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        message={confirmationMessage}
      />
    </div>
  );
};

export default JobListings;
