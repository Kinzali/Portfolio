import React from 'react';
import Image from 'next/image';
import web from './../../public/design.png';
import data from './../../public/data.png';
import devops from './../../public/Devops.png';

const Skills = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-3 dark:text-white">
          Skills / Services I offer
        </h3>
        <p className="text-md py-4 leading-8 text-gray-800 dark:text-gray-200 tracking-wider">
          Experienced Software Engineer adept at SaaS product development using
          <span className="text-teal-500 tracking-wider">
            {' '}
            Python, Dash Plotly, React, SQL, Firebase{' '}
          </span>
          and <span className="text-teal-500 tracking-wider"> Azure. </span>
          Specialized in crafting end-to-end solutions, from planning to
          deployment. Proficient Data Analyst in
          <span className="text-teal-500 tracking-wider"> Power BI </span>,
          transforming data into actionable insights. Mobile Network RAN PoC
          Analyst with a knack for optimizing connectivity trials. Proactive and
          innovative tech enthusiast.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 tracking-wider">
          I provide a diverse set of services, encompassing web development,
          data analytics using Power BI, and technical consulting for effective
          data management and database solutions.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
          <Image
            className="mx-auto"
            src={web}
            width={100}
            height={100}
            alt="web image"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800">
            Full Stack Developer
          </h3>
          <p className="py-2 text-gray-800">
            Crafting sophisticated web solutions tailored to your requirements,
            employing a foundation in core design principles.
          </p>
          <h4 className="py-4 text-teal-600">Technologies I Use</h4>
          <p className="text-gray-800 py-1">HTML</p>
          <p className="text-gray-800 py-1">Tailwind CSS, Material UI</p>
          <p className="text-gray-800 py-1">JavaScript, TypeScript</p>
          <p className="text-gray-800 py-1">React, Next.js</p>
          <p className="text-gray-800 py-1">Node, Flask, PHP</p>
          <p className="text-gray-800 py-1">SQL, MongoDB, Azure</p>
        </div>

        {/* Code Section */}
        <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
          <Image
            className="mx-auto"
            src={data}
            width={100}
            height={100}
            alt="data image"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800">
            Data Analytics & Data Engineering
          </h3>
          <p className="py-2 text-gray-800">
            Offering comprehensive data analysis and visualization services for
            informed decision-making.
          </p>
          <h4 className="py-4 text-teal-600">Technologies I Use</h4>
          <p className="text-gray-800 py-1">Python</p>
          <p className="text-gray-800 py-1">SQL</p>
          <p className="text-gray-800 py-1">Pandas, Dash, Plotly, Seaborn</p>
          <p className="text-gray-800 py-1">Power BI</p>
          <p className="text-gray-800 py-1">Excell</p>
        </div>

        {/* Consulting Section */}
        <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
          <Image
            className="mx-auto"
            src={devops}
            width={150}
            height={150}
            alt="devops image"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800">
            DevOps & Cloud
          </h3>
          <p className="py-2 text-gray-800">
            Versatile DevOps practitioner with expertise in GitHub, CI/CD
            servers for automated workflows, and server-side application
            deployment and integration. Proficient in deploying applications on
            Azure.
          </p>
          <h4 className="py-4 text-teal-600">Technologies I Use</h4>
          <p className="text-gray-800 py-1">Azure</p>
          <p className="text-gray-800 py-1">GitHub</p>
          <p className="text-gray-800 py-1">CI/CD</p>
          <p className="text-gray-800 py-1">git</p>
          <p className="text-gray-800 py-1">Docker</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
