import dorLogo from "../images/dor_logo.png"
import lamLogo from "../images/lam_research_logo.jpg"

export const jobs = [
  {
    title: "Software Engineer",
    logo: lamLogo,
    company: "Lam Research",
    start: "2022",
    end: "Current",
    description: [
      {
        highlight: 'Feature Implementation & Full-Stack Development',
        detail: 'Developed and implemented new features for an internal software platform supporting test automation in manufacturing. Created both APIs (Python/Django) and front-end components (React) for seamless functionality.'
      },
      {
        highlight: 'Code Quality & Maintainability',
        detail: 'Spearheaded efforts to refactor the codebase, improving maintainability by identifying and removing repeated code, creating reusable components, and simplifying complex logic. This effort improved codebase efficiency and long-term scalability.'
      },
      {
        highlight: 'Test Coverage & CI/CD Integration',
        detail: 'Increased test coverage from near zero to 80% by writing comprehensive tests for all existing code. Integrated tests into the CI/CD pipeline, preventing faulty code from being deployed and ensuring smoother releases.'
      },
      {
        highlight: 'Security & File Management System',
        detail: 'Designed and implemented a file-explorer-like interface within the application for managing Azure Blob storage files. Introduced a custom access control layer to restrict unauthorized file modifications, preventing costly manufacturing downtime caused by missing or altered files. APIs implemented in Python with FastAPI and SQLAlchemy ORM.'
      },
      {
        highlight: 'Authentication & Authorization',
        detail: `Integrated Azure authentication into the application's front end, ensuring secure access and enabling users to interact with the application via a unified, streamlined client for API requests.`
      },
      {
        highlight: 'Leadership During Transition',
        detail: `Played a key role during the transfer of application ownership to an India-based development team. Provided knowledge transfer to senior members of the team, and mentorship and technical guidance to junior developers. Reviewed all pull requests, ensuring adherence to code quality and testing standards.`
      },
      {
        highlight: 'Legacy Systems Transition',
        detail: `Supported global systems transition by converting test automation scenarios from the legacy system, including translating test scripts from a low-level, proprietary scripting language into Python. Developed and maintained Python modules encapsulating common test patterns, promoting reliability, stability, and global consistency.`
      },
    ]
    
  },
  {
    title: "Audit Program Support Specialist",
    logo: dorLogo,
    company: "State of Washington, Department of Revenue",
    start: "2017",
    end: "2021",
    description: [
      {detail: "I represented the Audit Division in DOR's legacy systems replacement project as a subject matter expert. I was responsible for the full life cycle of a feature request, including gathering requirements from stakeholders, submitting a written technical request, advocating for the request in interdivisional committees, working with internal and external developers, designing and carrying out testing, providing staff training and periodically reporting to Division management."},
      {detail: "I was responsible for development and maintenance of internal Audit 2000 software, based in Microsoft Excel, used by staff in conducting excise tax audits. This included delivering two weeks of onboarding training to all new staff. I was also responsible for internal performance reporting, which included development and maintenance of related internal databases and software, primarily in Microsoft Access."},
      {detail: "I was an expert advisor to field staff conducting excise tax audits. I provided end to end guidance and assistance related to audit planning, obtaining and working with large or complex data sets, and statistical sampling.\n I delivered two weeks of onboarding training to all new staff, as well as periodic onsite training in random sampling and other data management tools and strategies to more experienced staff."},
      {detail: "I worked with Microsoft Visual Basic for Applications, and SQL."}
    ]
  },
  {
    title: "Field Audit Manager",
    logo: dorLogo,
    company: "State of Washington, Department of Revenue",
    start: "2015",
    end: "2017",
    description: [
      {detail: "First line supervisor of a professional audit staff located in Vancouver, Washington and covering the territory of Southwest Washington and the State of Oregon."},
      {detail: "With expert knowledge of tax administration, audit policies and procedures, excise tax rules and laws and taxpayer rights: "},
      {detail: "- Plan and develop methods and programs, make assignments, and direct the activities of personnel involved in auditing activities,"},
      {detail: "- Recommend strategies and policies for implementing audit operations to the Audit Management Team,"},
      {detail: "- Conduct taxpayer conferences to resolve difficult and sensitive disputed tax issues as first step in the appeals process "},
      {detail: "During this time frame I was Chair of the Audit Division Recognition Committee, as well as a member of several ad hoc committees addressing emergent issues in policies, procedures, and operations of the division."},
    ]
  },
  {
    title: "Field Auditor",
    logo: dorLogo,
    company: "State of Washington, Department of Revenue",
    start: "2009",
    end: "2015",
    description: [
      {detail: "Independently plan, coordinate and conduct moderate to extensive audits and investigations, including:"},
      {detail: "- Evaluate business activities and records to determine if taxpayers are in compliance with applicable tax laws and have correctly reported their tax liability"},
      {detail: "- Assess audit risk by evaluating systems, procedures, and controls"},
      {detail: "- Lead team audits, acting as auditor-in-charge providing guidance, overview, direction and leadership to all involved staff"},
      {detail: "- Training and development of new hires and junior staff "},
      {detail: "During this time frame I served on or led several committees, including New Business Outreach, Combined Fund Drive, New Auditor Training, Team Building, and Sales Suppression."},
    ]
  },
  {
    title: "Accounting Manager",
    company: "Owens Davies, PS",
    start: "2007",
    end: "2009",
    description:
      "I was responsible for the in house full cycle accounting functions of a small-to-medium sized law firm, including payroll with ADP, collections, 1099 preparation, and IOLTA compliance. I improved existing operations and procedures through independently learning the features of Juris software which had previously been underutilized.",
  },
  {
    title: "Staff Accountant",
    company: "Ternberg & Coombs CPA",
    start: "2005",
    end: "2007",
    description:
      "As a staff accountant my primary responsibility consisted of providing full cycle accounting services to a large Portland-based office supply and furniture supplier.",
  },
]
