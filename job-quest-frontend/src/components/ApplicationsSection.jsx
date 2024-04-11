const ApplicationsSection = () => {
  const isRecruiter = true;

  const recruiterApplications = [
    {
      id: 1,
      position: "SWE - II",
      name: "Prakash S.",
      qualification: "M.Sc.",
      skills: ["Python", "Quantum Computing", "React"],
      email: "prakash@gmail.com",
      phone: "+91 74834 93742",
      resumeLink:
        "https://drive.google.com/file/d/1xEj5mHcEib2wTuwx2pE5tc32TJy-zPLF/view?usp=drive_link",
    },
    {
      id: 2,
      position: "Graphic Designer",
      name: "Aman Sharma",
      qualification: "B.Com.",
      skills: ["Photoshop", "Illustrator", "Adobe XD"],
      email: "aman.sharma@gmail.com",
      phone: "+91 99328 19274",
      resumeLink:
        "https://drive.google.com/file/d/1xEj5mHcEib2wTuwx2pE5tc32TJy-zPLF/view?usp=drive_link",
    },
  ];

  const applications = [
    {
      id: 1,
      position: "SWE - II",
      company: "Google",
      location: "Bengaluru, IN",
      status: "Pending",
    },
    {
      id: 2,
      position: "Tech Lead",
      company: "Zomato",
      location: "Pune, IN",
      status: "Interview Scheduled",
    },
  ];

  if (isRecruiter) {
    return (
      <div className="my-10">
        <h1 className="text-white text-2xl font-bold">Applications</h1>

        <div className="my-8 flex flex-col gap-6 text-white">
          {recruiterApplications.map((item) => (
            <div
              key={item.id}
              className="flex justify-between divide-x-2 border rounded-lg"
            >
              <div className="p-6 w-4/5">
                <div className="mb-6">
                  <p className="font-semibold">{item.name}</p>
                  <p>
                    {item.position}
                    <span className="ml-4 text-sm opacity-80">
                      {item.qualification}
                    </span>
                  </p>
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
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-10">
      <h1 className="text-white text-2xl font-bold">Your Applications</h1>

      <div className="p-4 my-4 border rounded-lg text-white">
        <div className="flex flex-col gap-2 divide-y divide-white/40">
          {applications.map((item) => (
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
                <p>{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSection;
