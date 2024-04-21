import { useState, useEffect } from "react";

import api from "../api/axiosConfig";
import JobsList from "../components/JobsList";
import JobApplication from "../components/modals/JobApplication";
import Confirmation from "../components/modals/Confirmation";

const JobListings = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isJobApplicationModalOpen, setIsJobApplicationModalOpen] =
    useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      const jobsResponse = await api.get("/api/v1/jobs");
      setJobs(jobsResponse.data);
      setIsLoading(false);
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
      {isLoading ? (
        <div>
          <p className="text-white text-lg font-bold">Loading...</p>
        </div>
      ) : jobs.length > 0 ? (
        <JobsList
          jobs={jobs}
          onApply={openApplicationModal}
          setSelectedJob={setSelectedJob}
        />
      ) : (
        <div>
          <p className="text-white text-lg font-bold">
            No available jobs to show! Kindly check later
          </p>
        </div>
      )}

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
