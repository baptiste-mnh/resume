import {
  ChevronDown,
  ExternalLink,
  Laptop,
  Plane,
  SailboatIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  GiJapan,
  GiRunningNinja,
  GiSharkFin,
  GiSurfBoard,
} from "react-icons/gi";
import { SiGithub, SiLinkedin } from "react-icons/si";

function App() {
  const [activeMenu, setActiveMenu] = useState<string>();
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          scrollContainerRef.current;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
        setShowScrollIndicator(!isAtBottom && scrollHeight > clientHeight);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll(); // Check initial state
      return () => scrollContainer.removeEventListener("scroll", checkScroll);
    }
  }, [activeMenu]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-light tracking-wide mb-3">
          Baptiste <span className="font-bold">MANACH</span>
        </h1>
        <p className="text-base text-gray-600 font-light tracking-wide">
          Lead Full Stack Developer {"</>"} DevOps Engineer
        </p>
      </div>

      {/* Contact */}
      <div className="flex flex-row gap-4 mb-6">
        <a
          href="https://www.linkedin.com/in/baptiste-manach/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          <SiLinkedin size={20} />
        </a>
        <a
          href="https://github.com/baptiste-mnh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          <SiGithub size={20} />
        </a>
      </div>

      {/* Separator */}
      <div className="h-px w-64 bg-black mb-8"></div>

      {/* Menu */}
      <div
        className={`flex flex-wrap justify-center gap-8 transition-all duration-500 ease-in-out ${
          activeMenu ? "mb-8" : "mb-0"
        } ${activeMenu ? "md:flex hidden" : "flex"}`}
      >
        {[
          "tldr",
          "education",
          "experience",
          "projects & achievements",
          "skills",
          "languages",
          "interests",
        ].map((menu) => (
          <button
            key={menu}
            className={`text-sm font-light tracking-widest uppercase hover:underline transition-all duration-300 ${
              activeMenu === menu ? "underline" : ""
            }`}
            onClick={() =>
              setActiveMenu(activeMenu === menu ? undefined : menu)
            }
          >
            {menu}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className={`w-full max-w-4xl flex-1 flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${
          activeMenu
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className="overflow-y-auto pr-4 scrollbar-hide flex-1"
          ref={scrollContainerRef}
        >
          {activeMenu === "tldr" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-black pb-4">
                <h2 className="text-3xl font-light tracking-wide">TL;DR</h2>
                <button
                  onClick={() => setActiveMenu(undefined)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  <XIcon size={20} />
                </button>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                Experienced Lead Backend Developer & DevOps, enthusiastic about
                Frontend, eager to collaborate on cutting-edge remote projects
                that drive innovation and according importance to open-source.
                Passionate about delivering high-quality solutions.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Backend Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["NodeJS", "NestJS", "Python"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-black text-sm font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "CDK", "K8S"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-black text-sm font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Architecture Engineering
                  </h3>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Mobile Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Expo"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-black text-sm font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "NextJS"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-black text-sm font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Python & AI Models
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "NeMo", "Whisper", "BeamCloud"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-black text-sm font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "education" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-black pb-4">
                <h2 className="text-3xl font-light tracking-wide">Education</h2>
                <button
                  onClick={() => setActiveMenu(undefined)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  <XIcon size={20} />
                </button>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-6">
                  <h3 className="text-xl font-medium mb-2">
                    École Nationale d'Ingénieurs de Brest (ENIB)
                  </h3>
                  <p className="text-gray-700 mb-1">
                    Generalist Engineer, IT Specialisation
                  </p>
                  <p className="text-sm text-gray-500">2014 - 2019</p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h3 className="text-xl font-medium mb-2">
                    Fontys Hogescholen
                  </h3>
                  <p className="text-gray-700 mb-1">ERASMUS - IT & Business</p>
                  <p className="text-sm text-gray-500">2018 - 6 months</p>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "experience" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-black pb-4">
                <h2 className="text-3xl font-light tracking-wide">
                  Experience
                </h2>
                <button
                  onClick={() => setActiveMenu(undefined)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  <XIcon size={20} />
                </button>
              </div>
              <div className="space-y-8">
                <div className="border-l-2 border-black pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Theseus AI</h3>
                    <span className="text-sm text-gray-500">
                      June 2024 - Present
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Senior Full Stack & DevOps Engineer
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Bordeaux, Nouvelle-Aquitaine, France
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      <strong>INFRASTRUCTURE & DEVOPS:</strong> AWS
                      administration, SaaS migration, Infrastructure as Code
                      with AWS CDK, SOC2 certification, Kubernetes, monitoring
                      (Sentry, Grafana), CI/CD GitHub Actions
                    </p>
                    <p>
                      <strong>DEVELOPMENT:</strong> New features, Supabase to
                      Prisma migration, web UI redesign, admin dashboard
                    </p>
                    <p>
                      <strong>AI:</strong> AI agent creation, self-hosting of AI
                      models
                    </p>
                    <p>
                      <strong>LEADERSHIP:</strong> Mentoring, cost optimization,
                      GitFlow, code standards
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Spacefill</h3>
                    <span className="text-sm text-gray-500">
                      February 2024 - May 2024
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Full Stack Engineer
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Paris, Île-de-France, France
                  </p>
                  <p className="text-sm text-gray-700">
                    Specialist in temporary professional storage in Europe
                  </p>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">acracy</h3>
                    <span className="text-sm text-gray-500">
                      January 2023 - January 2024
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Lead Backend Developer
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Brest, FR</p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      Backend design and maintenance at Acracy relies on a
                      robust technological stack encompassing GraphQL, AWS
                      Lambda, Serverless, and MongoDB. As a Lead Dev Backend, my
                      primary responsibilities include:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Participating in the design, development, and
                        maintenance of the software architecture, including
                        migrating the application to TypeScript.
                      </li>
                      <li>
                        Implementing unit and integration tests to ensure code
                        quality.
                      </li>
                      <li>
                        Optimizing Serverless deployment for improved
                        operational efficiency and reduced costs within the AWS
                        Cloud infrastructure.
                      </li>
                      <li>
                        Securing the API using AWS WAF (Web Application
                        Firewall).
                      </li>
                      <li>
                        Establishing robust permissions within the application
                        based on user roles.
                      </li>
                      <li>
                        Integrating a subscription system for clients using the
                        Stripe platform.
                      </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> TypeScript, NodeJS,
                      GraphQL, Apollo, Serverless, AWS Lambda, CloudFormation,
                      API Gateway, MongoDB
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Abbeal</h3>
                    <span className="text-sm text-gray-500">
                      May 2022 - December 2022
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Full Stack Engineer
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Internal Project, FR/JP
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      Back-end development with NestJS for a social application:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Writing user scenarios and feature specifications.
                      </li>
                      <li>
                        Setup database and persistence with TypeORM and caching
                        with Redis.
                      </li>
                      <li>
                        Setup CI/CD and automatic tests with GitHub Actions,
                        Jest and Heroku.
                      </li>
                      <li>
                        Creation of Rest API using express with NestJS. Setup
                        the Swagger.
                      </li>
                      <li>Setup authentication, roles, and permissions.</li>
                      <li>
                        Setup dev & test environment using Docker Compose.
                      </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> NestJS, React, TypeScript,
                      NodeJS, Express, PostgreSQL, MongoDB, GitHub Actions,
                      Heroku, TypeORM, Redis
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Emeria</h3>
                    <span className="text-sm text-gray-500">
                      March 2022 - May 2022
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Full Stack Engineer
                  </p>
                  <p className="text-sm text-gray-500 mb-2">Paris, FR</p>
                  <p className="text-sm text-gray-700">
                    Integration of new functionalities into the real estate
                    agency's system was executed leveraging Node.js, TypeScript
                    and MongoDB, accompanied by ongoing incident resolution
                    efforts to ensure sustained system stability
                  </p>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Astek</h3>
                    <span className="text-sm text-gray-500">
                      March 2021 - February 2022
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Full Stack Engineer
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Client: CERVVAL, Brest, FR
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      Full stack development on several planning and material
                      management tools.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Development of the server side with NodeJS.</li>
                      <li>Implementation of authentication and permissions.</li>
                      <li>Development of the interface and the client part.</li>
                      <li>
                        Unit and integration testing with Mocha and Cypress.
                      </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> JavaScript, NodeJS,
                      Express, TypeScript, PostgreSQL, Cypress
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Astek</h3>
                    <span className="text-sm text-gray-500">
                      September 2020 - March 2021
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Full Stack Engineer
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Client: AUMAX, Brest, FR
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      Participation in the development of continuous evolutions
                      and improvements of a banking application backend.
                      Micro-services architecture.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Implementation of backend APIs and services.</li>
                      <li>Incident analysis and resolution.</li>
                      <li>Unit test, integration test, code refactoring.</li>
                      <li>Banking environment, Arkéa IS.</li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> Java, Spring Boot,
                      Hibernate, Git, Gitlab CI, IntelliJ, Docker
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Akur8</h3>
                    <span className="text-sm text-gray-500">
                      February 2019 - August 2020
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Full Stack Engineer & DevOps
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Paris, FR</p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>Development of a tool for actuaries using AI.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Implementation of backend APIs and services.</li>
                      <li>
                        Development of the user interface using Angular and
                        TypeScript.
                      </li>
                      <li>
                        Unit and integration test using jUnit5 and Karma. Code
                        refactoring.
                      </li>
                      <li>
                        Tasks scheduling on AWS, RAM optimisation of the AWS
                        computation machine.
                      </li>
                      <li>Cloud infrastructure enhancement using Terraform.</li>
                      <li>Optimisation of the CI/CD.</li>
                      <li>
                        Creation of an automated backup and restore module for
                        AWS environments.
                      </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> Java, Spring Boot, Angular,
                      TypeScript, Python, Linux, MacOS, AWS, Git, Jira,
                      IntelliJ, Docker, Terraform, Intercom, TravisCI, Logz.io,
                      Sentry
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Argos</h3>
                    <span className="text-sm text-gray-500">
                      February 2018 - August 2018
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    R&D Developer VR Systems, 3D Scanner
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Brest, FR</p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      Research and development of a 3D scanning solution using
                      photogrammetry and point cloud capture.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Improvement and stabilisation of network communication
                        between capture machines (Raspberry Pi, Intel NUC, NAS,
                        user PC).
                      </li>
                      <li>
                        Research and development on Intel RealSense D400 depth
                        of field cameras using Intel SDK.
                      </li>
                      <li>
                        Creation of a module for automated geographic
                        calibration of Intel RealSense cameras and a module for
                        real-time 360° 3D scanning using multiple Intel
                        RealSense cameras.
                      </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> Python, C++, JavaScript,
                      MQTT, MySQL, Linux, NAS, RealSense SDK
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">Sophia-Antipolis</h3>
                    <span className="text-sm text-gray-500">
                      June 2017 - January 2018
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    Android & Web Developer
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Sophia-Antipolis, FR
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>Software development on a smart robot.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        ChatBot integration triggered by a keyword using
                        DialogFlow.
                      </li>
                      <li>
                        Implementation of features linked to the chatbot:
                        Reminders, alarms, weather, translation, Spotify.
                      </li>
                      <li>
                        Creation of an admin interface to link robots and send
                        messages directly to them.
                      </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> Android, Java, PHP,
                      Bootstrap, MySQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "projects & achievements" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-black pb-4">
                <h2 className="text-3xl font-light tracking-wide">Projects</h2>
                <button
                  onClick={() => setActiveMenu(undefined)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  <XIcon size={20} />
                </button>
              </div>
              <div className="space-y-6">
                <div className="border border-black p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Curry Culum</h3>
                      <p className="text-gray-700 mb-3">
                        Make CV from Templates using JSON. Open source project
                        for creating resumes from templates
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          React
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          TypeScript
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          JSON
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Templates
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Open Source
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://curry-culum.manach.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href="https://github.com/baptiste-mnh/curry-culum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <SiGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Duckdev Tools
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Your complete development toolbox featuring essential
                        tools for developers.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          JWT Creator
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Password Generator
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Color Palette
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Encoder/Decoder
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Regex Tester
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Logo Creator
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Open Source
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://duck-dev-tools.manach.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href="https://github.com/baptiste-mnh/duckdev-tools"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <SiGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Resume</h3>
                      <p className="text-gray-700 mb-3">
                        Interactive resume built with React and TypeScript.
                        Minimalist design showcasing professional experience
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          React
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          TypeScript
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Tailwind CSS
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Interactive
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Minimalist
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Open Source
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://ressume.manach.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href="https://github.com/baptiste-mnh/vs-resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <SiGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Fipbal</h3>
                      <p className="text-gray-700 mb-3">
                        Dumb project to know a real existential question
                      </p>
                      <p className="text-gray-700 italic mb-3">
                        Fait-il plus beau à Lorient qu'à Brest ?
                      </p>
                      <p className="text-gray-500 italic mb-3">
                        Is the weather better in Lorient than in Brest ?
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Weather API
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Fun Project
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Brittany
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Comparison
                        </span>
                        <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                          Open Source
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://fipbal.manach.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href="https://github.com/baptiste-mnh/fipbal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <SiGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-black pb-4">
                  <h2 className="text-3xl font-light tracking-wide">
                    Achievements
                  </h2>
                </div>
                <div className="border border-black p-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Cloud Infrastructure Migration
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Complete migration to Kubernetes with performance/cost
                      optimization at Theseus AI
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        Kubernetes
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        AWS
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        Migration
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        Performance
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        Cost Optimization
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      SOC2 Certification
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Preparation and obtaining SOC2 certification for Theseus
                      AI
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        Security
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        Compliance
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        SOC2
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        Audit
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">
                        Theseus AI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "skills" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-black pb-4">
                <h2 className="text-3xl font-light tracking-wide">Skills</h2>
                <button
                  onClick={() => setActiveMenu(undefined)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  <XIcon size={20} />
                </button>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "TypeScript",
                      "JavaScript",
                      "Python",
                      "Java",
                      "C++",
                      "HTML/CSS",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-black text-sm font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "NodeJS",
                      "NestJS",
                      "React",
                      "React Native",
                      "NextJS",
                      "GraphQL",
                      "Serverless",
                      "Angular",
                      "Express",
                      "Spring Boot",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-black text-sm font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">Databases</h3>
                  <div className="flex flex-wrap gap-3">
                    {["PostgreSQL", "Redis", "MongoDB", "MySQL"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 border border-black text-sm font-light"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">DevOps & Cloud</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Docker",
                      "Kubernetes",
                      "AWS",
                      "AWS CDK",
                      "EC2",
                      "S3",
                      "Lambda",
                      "IAM",
                      "Terraform",
                      "CI/CD",
                      "Infrastructure as Code",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-black text-sm font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "languages" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-black pb-4">
                <h2 className="text-3xl font-light tracking-wide">Languages</h2>
                <button
                  onClick={() => setActiveMenu(undefined)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  <XIcon size={20} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-black">
                  <span className="text-lg font-medium">French</span>
                  <span className="text-sm text-gray-600">Mother tongue</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-black">
                  <span className="text-lg font-medium">English</span>
                  <span className="text-sm text-gray-600">Confirmed</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-black">
                  <span className="text-lg font-medium">Spanish</span>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-black">
                  <span className="text-lg font-medium">Japanese</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "interests" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-black pb-4">
                <h2 className="text-3xl font-light tracking-wide">
                  Interests & Hobbies
                </h2>
                <button
                  onClick={() => setActiveMenu(undefined)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  <XIcon size={20} />
                </button>
              </div>

              {/* Hobbies Section */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-black p-6 hover:bg-gray-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-black rounded-full mb-4 flex items-center justify-center">
                      <GiSurfBoard className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Surf</h4>
                    <p className="text-gray-700 text-sm">
                      Weekend warrior surfer
                    </p>
                  </div>

                  <div className="border border-black p-6 hover:bg-gray-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-black rounded-full mb-4 flex items-center justify-center">
                      <GiRunningNinja className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Running</h4>
                    <p className="text-gray-700 text-sm">
                      When it does not rain
                    </p>
                    <p className="text-gray-700 text-sm">
                      (living in the rainiest french city)
                    </p>
                  </div>

                  <div className="border border-black p-6 hover:bg-gray-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-black rounded-full mb-4 flex items-center justify-center">
                      <GiSharkFin className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Swimming</h4>
                    <p className="text-gray-700 text-sm">
                      Backup for rainy days
                    </p>
                  </div>

                  <div className="border border-black p-6 hover:bg-gray-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-black rounded-full mb-4 flex items-center justify-center">
                      <SailboatIcon className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Sailing</h4>
                    <p className="text-gray-700 text-sm">
                      Playing on Brest bay
                    </p>
                  </div>

                  <div className="border border-black p-6 hover:bg-gray-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-black rounded-full mb-4 flex items-center justify-center">
                      <Plane className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Travel</h4>
                    <p className="text-gray-700 text-sm">
                      Discovering new cultures and places
                    </p>
                  </div>

                  <div className="border border-black p-6 hover:bg-gray-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-black rounded-full mb-4 flex items-center justify-center">
                      <GiJapan className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">
                      Japanese Culture
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Not a big anime fan, but love the culture
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Interests Section */}
              <div className="space-y-6">
                <div className="border border-black p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Laptop className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-4">
                        Technology & Innovation
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Always tinkering with code, even in my free time. I
                        thrive in environments where I can touch a bit of
                        everything, especially when there's a good mix of R&D
                        and hands-on building. Love diving into emerging tech,
                        AI/ML, cloud computing, and DevOps - basically anything
                        that lets me experiment and create something new.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showScrollIndicator && (
            <div className="absolute bottom-4 right-4 animate-bounce">
              <ChevronDown size={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
