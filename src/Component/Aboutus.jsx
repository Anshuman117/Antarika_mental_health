const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-5xl font-bold text-center mb-8">About Antarika</h1>

      {/* Content Section with Centered Text */}
      <div className="flex flex-col gap-12 items-center">
        {/* First Block */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-3/4">
          <h2 className="text-3xl font-semibold mb-4">Antarika</h2>
          <p className="text-gray-700 text-lg mb-4">
            We aim to develop a web-based platform that enhances the
            effectiveness and efficiency of therapists by facilitating better
            communication with clients, offering personalized therapy tools, and
            streamlining therapy management processes.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            The platform aims to support therapists in organizing sessions,
            tracking client progress, and providing interactive therapeutic
            exercises, while also enabling clients to engage with their
            therapists more effectively.
          </p>
        </div>

        {/* Second Block */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-3/4">
          <h2 className="text-3xl font-semibold mb-4">
            Enhanced Communication Portal
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Provide a secure and interactive communication channel between
            therapists and clients, allowing for real-time feedback, session
            scheduling, and post-session follow-ups.
          </p>
        </div>

        {/* Third Block */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-3/4">
          <h2 className="text-3xl font-semibold mb-4">
            Interactive Client Exercises
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Offer clients engaging, evidence-based therapeutic exercises such as
            mindfulness practices, relaxation techniques, and
            cognitive-behavioral tasks to work on between sessions, helping
            reinforce therapy outcomes.
          </p>
        </div>

        {/* Fourth Block */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-3/4">
          <h2 className="text-3xl font-semibold mb-4">Progress Monitoring</h2>
          <p className="text-gray-700 text-lg mb-4">
            Implement a system where therapists and clients can collaboratively
            track progress, symptom severity, and behavioral changes, enabling
            timely adjustments to treatment plans.
          </p>
        </div>

        {/* Fifth Block */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-3/4">
          <h2 className="text-3xl font-semibold mb-4">
            Therapist Efficiency Dashboard
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Include an intuitive dashboard that helps therapists manage multiple
            clients, track their progress, and access session histories,
            improving workflow and reducing administrative burdens.
          </p>
        </div>

        {/* Sixth Block */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-3/4">
          <h2 className="text-3xl font-semibold mb-4">Client Empowerment</h2>
          <p className="text-gray-700 text-lg mb-4">
            Empower clients by providing a clear view of their therapeutic
            journey, enabling them to engage in self-guided activities and
            better understand their progress through transparent, real-time
            feedback.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-3/4 mt-12 mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Antarika Targets To:</h2>
        <p className="text-gray-700 text-lg">
          A web-based platform that enhances the effectiveness and efficiency of
          therapists by facilitating better communication with clients, offering
          personalized therapy tools, and streamlining therapy management
          processes. The platform aims to support therapists in organizing
          sessions, tracking client progress, and providing interactive
          therapeutic exercises, while also enabling clients to engage with
          their therapists more effectively.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
