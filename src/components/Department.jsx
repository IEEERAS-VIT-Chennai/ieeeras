import React from 'react';
import './deptCard.css';

function Departments() {
  return (
    <div id="Departments" className="px-2 py-10 lg:py-0 lg:h-screen overflow-y-hidden">
      <div className="text-4xl sm:text-5xl lg:text-7xl ml-[10%]">
        <span className="text-white underline-offset-2">Departments </span>
        <span className="text-white">.</span>
      </div>
      <hr className="ml-[10%] w-[19%] md:w-[14%] lg:w-[16%] xl:w-[11%] mt-5 h-1 rounded-lg border-0 bg-[#0073AE]" />

      {/* Background glow effects */}
      <div className="absolute left-[10%] top-[200%] w-[10%] h-80 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[200px] rounded-full transform rotate-45"></div>
      <div className="absolute left-[20%] top-[270%] w-[10%] h-60 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FFF] filter blur-[180px] rounded-full transform rotate-90"></div>
      <div className="absolute left-[50%] top-[270%] w-[10%] h-60 -mt-60 bg-gradient-to-r from-[#1A2980] to-[#26D0CE] filter blur-[180px] rounded-full transform rotate-90"></div>

      {/* Department Cards */}
      <div className="container">
        <div className="box box-1">
          <div
            className="box-inner"
            style={{ backgroundImage: "url(assets/members/webdev.jpg)" }}
          ></div>
          <div className="box-desc">
            Build and maintain dynamic web and mobile applications using modern technologies.
          </div>
        </div>

        <div className="box box-2">
          <div
            className="box-inner"
            style={{ backgroundImage: "url(assets/members/design.jpg)" }}
          ></div>
          <div className="box-desc">
            Design beautiful posters, UI/UX, and digital assets with strong brand identity.
          </div>
        </div>

        <div className="box box-3">
          <div
            className="box-inner"
            style={{ backgroundImage: "url(assets/members/projects.jpg)" }}
          ></div>
          <div className="box-desc">
            Lead innovative projects from ideation to execution with real-world impact.
          </div>
        </div>

        <div className="box box-4">
          <div
            className="box-inner"
            style={{ backgroundImage: "url(assets/members/operations.jpg)" }}
          ></div>
          <div className="box-desc">
            Manage team logistics, events, documentation, and smooth club operations.
          </div>
        </div>

        <div className="box box-5">
          <div
            className="box-inner"
            style={{ backgroundImage: "url(assets/members/datascience.jpg)" }}
          ></div>
          <div className="box-desc">
            Explore machine learning, data visualization, and analytics-driven solutions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
