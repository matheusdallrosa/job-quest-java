import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import api from "../api/axiosConfig";

const ApplicationsSection = () => {
  const isRecruiter = useSelector((state) => state.auth.isRecruiter);
  const userData = useSelector((state) => state.auth.userData);

  const [isLoading, setIsLoading] = useState(false);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      setIsLoading(true);

      const applicationsResponse = await api.get("/api/v1/applications");
      const jobsResponse = await api.get("/api/v1/jobs");

      const applicationsData = applicationsResponse.data;
      const jobsData = jobsResponse.data;

      if (isRecruiter) {
        const recruiterApplications = applicationsData.filter((application) =>
          userData?.jobIds.includes(application.jobId)
        );

        const formattedApplications = recruiterApplications.map(
          (application) => {
            const jobInfo = jobsData.find(
              (job) => job.id === application.jobId
            );
            return {
              ...application,
              position: jobInfo?.position || null,
            };
          }
        );

        setApplications(formattedApplications);
      } else {
        const candidateApplications = applicationsData.filter(
          (item) => item.email === userData?.email
        );

        const formattedApplications = candidateApplications.map(
          (application) => {
            const jobInfo = jobsData.find(
              (job) => job.id === application.jobId
            );
            return {
              ...application,
              position: jobInfo?.position || null,
              company: jobInfo?.company || null,
              location: jobInfo?.location || null,
            };
          }
        );

        setApplications(formattedApplications);
      }

      setIsLoading(false);
    };

    fetchApplications();
  }, [isRecruiter, userData]);

  if (isRecruiter) {
    return (
      <div className="my-10">
        <h1 className="text-white text-2xl font-bold">Pending Applications</h1>

        <div className="my-8 flex flex-col gap-6 text-white">
          {isLoading ? (
            <div>
              <p className="my-10 text-lg font-semibold">Loading...</p>
            </div>
          ) : (
            applications.map(
              (item) =>
                item.status === "Pending" && (
                  <div
                    key={item.id}
                    className="flex justify-between divide-x-2 border rounded-lg"
                  >
                    <div className="p-6 w-4/5">
                      <div className="mb-6">
                        <p className="font-semibold">
                          {item.name}{" "}
                          <span className="ml-10 text-sm opacity-80">
                            {item.qualification}
                          </span>
                        </p>
                        <p>{item.position}</p>
                      </div>
                      <div>
                        <p className="opacity-80">{item.email}</p>
                        <p className="opacity-80">{item.phone}</p>

                        <p className="my-4">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="mr-2 py-1 px-2 bg-slate-700 text-xs border rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </p>

                        <a
                          href={item.resumeLink}
                          target="_blank"
                          className="underline"
                        >
                          Resume
                        </a>
                      </div>
                    </div>
                    <div className="px-6 w-1/5 flex flex-col flex-grow justify-evenly items-center text-white">
                      <button className="py-6 px-8 bg-green-600 hover:opacity-70 rounded-lg text-white text-lg font-semibold transition-opacity">
                        Accept
                      </button>
                      <button className="py-6 px-8 bg-red-600 hover:opacity-70 rounded-lg text-white text-lg font-semibold transition-opacity">
                        Reject
                      </button>
                    </div>
                  </div>
                )
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="my-10">
      <h1 className="text-white text-2xl font-bold">Your Applications</h1>

      <div className="p-4 my-4 border rounded-lg text-white">
        <div className="flex flex-col gap-2 divide-y divide-white/40">
          {isLoading ? (
            <div>
              <p className="my-10 text-lg font-semibold">Loading...</p>
            </div>
          ) : applications.length > 0 ? (
            applications.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 px-4"
              >
                <div>
                  <p className="font-semibold">{item.position}</p>
                  <p>
                    {item.company}
                    <span className="ml-4 text-sm opacity-80">
                      @ {item.location}
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    className={`${
                      item.status === "Accepted"
                        ? "text-green-500"
                        : item.status === "Rejected" && "text-red-500"
                    }`}
                  >
                    {item.status}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>You have not applied to any jobs!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSection;
