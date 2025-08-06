"use client";
import React from 'react';
import './deptCard.css';

function Departments() {
    return (
        <div id="Departments" className="px-4 sm:px-6 md:px-8 lg:px-2 py-10 lg:py-10 min-h-screen lg:h-screen relative">
            {/* Background glow effect for heading - responsive positioning */}
            <div className="absolute -top-10 sm:-top-16 md:-top-20 -left-10 sm:-left-16 md:-left-20 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-br from-[#0073AE] to-[#00ffc3] rounded-full blur-3xl opacity-30 z-0"></div>

            {/* Header section with responsive margins */}
            <div className="relative z-10 mb-6 sm:mb-8 md:mb-10">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-[4%] sm:ml-[6%] md:ml-[8%]">
                    <span className="text-white underline-offset-2 inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_20px_#00ffc3] group">Departments</span>
                    <span className="text-white">.</span>
                </div>
                <hr className="ml-[4%] sm:ml-[6%] md:ml-[8%] w-[25%] sm:w-[20%] md:w-[16%] lg:w-[14%] xl:w-[11%] mt-3 sm:mt-4 md:mt-5 h-1 rounded-lg border-0 bg-[#0073AE]" />
            </div>

            {/* Background glow effects - responsive positioning */}
            <div className="absolute left-[5%] sm:left-[8%] md:left-[10%] top-[180%] sm:top-[190%] md:top-[200%] w-[15%] sm:w-[12%] md:w-[10%] h-60 sm:h-70 md:h-80 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[150px] sm:blur-[180px] md:blur-[200px] rounded-full transform rotate-45"></div>
            <div className="absolute left-[15%] sm:left-[18%] md:left-[20%] top-[250%] sm:top-[260%] md:top-[270%] w-[15%] sm:w-[12%] md:w-[10%] h-50 sm:h-55 md:h-60 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FFF] filter blur-[150px] sm:blur-[170px] md:blur-[180px] rounded-full transform rotate-90"></div>
            <div className="absolute left-[45%] sm:left-[48%] md:left-[50%] top-[250%] sm:top-[260%] md:top-[270%] w-[15%] sm:w-[12%] md:w-[10%] h-50 sm:h-55 md:h-60 -mt-60 bg-gradient-to-r from-[#1A2980] to-[#26D0CE] filter blur-[150px] sm:blur-[170px] md:blur-[180px] rounded-full transform rotate-90"></div>

            {/* Department Cards - responsive container */}
            <div className="relative z-10">
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
        </div>
    );
}

export default Departments;
