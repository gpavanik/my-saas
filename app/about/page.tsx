export default function About() {

  const skills = [
    { title: "Programming & Data", items: "Python, SQL, Java, Elixir" },
    { title: "AI & Automation", items: "LLMs, Prompt Engineering, RAG, LangChain, Pydantic, n8n" },
    { title: "Distributed Processing", items: "Apache Spark, PySpark, Databricks, DBT" },
    { title: "Cloud Platforms", items: "AWS, Azure, GCP" },
    { title: "Data Platforms", items: "Snowflake, Hive, BigQuery, Druid, HDFS" },
    { title: "Tools", items: "Airflow, Kubeflow, Docker, Git, REST APIs" }
  ]

  return (
    <div className="p-10">

      {/* INTRO */}

      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>

        <p className="text-gray-400">
          Senior Data and AI Engineer with 6+ years’ experience building scalable
          data platforms and AI-enabled systems. Deep expertise in distributed
          data pipelines, cloud-native architectures, and Agentic AI workflows
          using LLM APIs, RAG, and prompt engineering. Focused on reliable,
          secure, and cost-optimized solutions for production environments.
        </p>
      </div>

      {/* SKILLS */}

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Areas of Expertise
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h3 className="font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400 text-sm">{skill.items}</p>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Professional Experience
      </h2>

      <div className="grid gap-6 max-w-6xl mx-auto mb-16">

        {/* FREELANCER */}

        <div className="border border-gray-700 rounded-xl p-6 shadow-lg">

          <h3 className="font-semibold">Senior Data & AI Engineer</h3>

          <p className="text-gray-400 text-sm mb-3">
            Freelancer | Self-Employed • Jan-17-2024 to Present
          </p>

          <ul className="text-gray-400 space-y-2 list-disc pl-4">

            <li>
            Built and deployed an AI-driven social media automation using n8n on an Azure VM, integrating Google Spread Sheets, Gemini API, and automated posting to LinkedIn, Facebook, and Instagram, entirely replacing manual daily workflow.
            </li>

            <li>
            Reduced approximately 1-1.5 hours of manual work per day to a monthly spreadsheet update, saving 350-400 hours per year and delivering $5,000-$7,000 net annual cost savings, after accounting for Azure VM and AI API costs.
            </li>

            <li>
            Built a modern portfolio website using Next.js and Tailwind CSS, focusing on clean UX, responsive design, and performance, with all code versioned and maintained on GitHub as a public reference.
            </li>

            <li>
            Designed and delivered a real-time price action analysis engine for an external client, implementing a rule-based, bar-by-bar market commentary system that builds intraday context (e.g., 10:50 AM structure) using live market data from a broker API.
            </li>

            <li>
            Built a full-stack AI-powered Gmail assistant using React (Vite) and FastAPI, integrating Google OAuth 2.0, Gmail API (send/read/reply), and Cohere LLM to enable context-aware email drafting, inbox filtering, and assistant-driven UI control.
            </li>

            <li>
            Designed a structured AI-to-UI action architecture where backend LLM responses dynamically control frontend state (compose, reply, filter, draft injection), demonstrating clean separation of concerns and production-style AI orchestration.
            </li>

          </ul>
        </div>


        {/* BMS */}

        <div className="border border-gray-700 rounded-xl p-6 shadow-lg">

          <h3 className="font-semibold">Senior Data & AI Engineer</h3>

          <p className="text-gray-400 text-sm mb-3">
            Bristol Myers Squibb • Jul-29-2024 to Aug-11-2025
          </p>

          <ul className="text-gray-400 space-y-2 list-disc pl-4">

            <li>
            Built multi-step agentic AI workflows using Amazon Bedrock and AWS Lambda, enabling conversational pipeline specification with review-driven automated deployment.
            </li>

            <li>
            Developed agentic AI pipeline automation system on Amazon Bedrock, enabling chatbot-driven ingestion specs and Git-triggered workflows to auto-provision API, DB, and S3 pipelines via Lambda, Glue, or EKS.
            </li>

            <li>
            Designed and built a highly powerful, generic, configuration-driven REST API ingestion basekit on AWS for a hub-spoke data platform through Service Catalogue (CloudFormation stacks generated via CDK), enabling multiple vendor teams to readily deploy API Ingestion Pipelines without custom code.
            </li>

            <li>
            Enabled the basekit with rich, configuration-driven capabilities including flexible endpoint definitions, pluggable authentication (NoAuth, Basic, Bearer, OAuth2), dynamic secret injection, support for multiple payload and output formats, FULL and INCREMENTAL ingestion with DynamoDB-based state tracking, configurable pagination, retries, proxy handling, and advanced nested or conditional API processing.
            </li>

            <li>
            Delivered the complete production-ready solution end-to-end, including architecture, configuration model, implementation, and documentation, under aggressive timelines.
            </li>

            <li>
            Extended the AWS-delivered DB-bulk ingestion basekit to support a new Redshift and snowflake source by reverse-engineering non-standardized vendor code and implementing enhancements independently, delivering the capability within a day for new vendor use case.
            </li>

          </ul>

        </div>


        {/* CAPGEMINI */}

        <div className="border border-gray-700 rounded-xl p-6 shadow-lg">

          <h3 className="font-semibold">Insights and Data Consultant</h3>

          <p className="text-gray-400 text-sm mb-4">
            Capgemini • Mar-04-2022 to Jun-26-2024
          </p>


          <h4 className="font-medium mb-2">Project: COX</h4>

          <ul className="text-gray-400 space-y-2 list-disc pl-4 mb-6">

            <li>
            Developed a critical data pipeline to get Cox billing data from 3rd party vendor, Neustar’s SFTP Server. Loading 18 Different CSV objects on daily basis into COX AWS External S3 Layer using Custom Python Script.
            </li>

            <li>
            Leveraged Glue to load data into multiple stages from External to Landing, Raw and Curated and used Airflow Dags for pipe-out the data to Snowflake, ensuring seamless integration into Cox BI Eco System.
            </li>

            <li>
            Developed a Lambda Application for automated job metrics extraction, reducing weekly operations team effort by 5 hours. Enabled real-time monitoring via dynamic Power BI Dashboards, enhancing decision making.
            </li>

            <li>
            Migrated multiple ingestion jobs from AWS Glue to Lambda architecture, significantly reducing operational costs and ensuring compliance with EDE framework.
            </li>

            <li>
            Consolidated diverse source API lambda jobs into a unified structure, aligning with EDE standards. Improved system coherence, configurability, and maintenance efficiency, resulting in reduced costs.
            </li>

          </ul>


          <h4 className="font-medium mb-2">Project: Lowe’s India</h4>

          <ul className="text-gray-400 space-y-2 list-disc pl-4">

            <li>
            Developed a natural language search API for a sales dashboard using FastAPI and NLP-based intent matching, allowing users to query sales performance, rankings, and department insights across stores and regions.
            </li>

            <li>
            Developed an ETL Pipeline to extract and add pdf documents content to payload of the data science algorithm to reduce Data Quality Algo’s latency by 60%.
            </li>

            <li>
            Developed a data fetch class for a ML model to extract the data from 7 different APIs and built a module to collect the output from ML model and ingest to hive.
            </li>

            <li>
            Designed and Developed the ETL pipelines to ingest search engine data from hive to druid on daily basis in CDC mode.
            </li>

            <li>
            Orchestrated Airflow-based data pipelines, ensuring smooth operations, dependencies, and schedule management for diverse data processes.
            </li>

            <li>
            Migrated 4 NLP product’s data engineering pipelines from on-premises to Kubeflow, leading to substantial cost reduction, faster execution times, and improved scalability.
            </li>

          </ul>

        </div>


        {/* TCS */}

        <div className="border border-gray-700 rounded-xl p-6 shadow-lg">

          <h3 className="font-semibold">Systems Engineer</h3>

          <p className="text-gray-400 text-sm mb-3">
            Tata Consultancy Services • Jun-03-2019 to Mar-01-2022
          </p>

          <p className="text-gray-400 text-sm mb-2">
            Client: Nike
          </p>

          <ul className="text-gray-400 space-y-2 list-disc pl-4">

            <li>
            Enhanced, maintained, supported 50+ production data pipelines processing large scale sales, inventory and traffic data from global Nike retail stores.
            </li>

            <li>
            Firefighting to debug, fix the failed data pipeline jobs to ensure business data is available to clients at right ETAs and provided 24/7 support.
            </li>

            <li>
            Assisted business users in data discrepancy issues by back tracing the different layers of data storage, finding out the right reason for missing/invalid data and fixing the issue.
            </li>

            <li>
            Delivered technical training on Python, Spark, and Airflow to multiple engineering teams, strengthening platform adoption and reducing operational overhead.
            </li>

          </ul>

        </div>

      </div>


      {/* EDUCATION */}

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Education
      </h2>

      <div className="max-w-6xl mx-auto">

        <div className="border border-gray-700 rounded-xl p-6 shadow-lg">

          <h3 className="font-semibold">
            Bachelor of Computer Science and Engineering
          </h3>

          <p className="text-gray-400">
            PSCMR College of Engineering and Technology, Vijayawada
          </p>

          <p className="text-gray-500 mt-1">
            Score: 82%
          </p>

        </div>

      </div>

    </div>
  )
}