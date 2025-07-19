// src/data/Module2Session1SlideData.ts
export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: string; // HTML content for the slide
}

export const module2Session1Slides: Slide[] = [
  {
    id: "m2s1-slide1",
    title: "Governance Models, Boards, and Leadership Roles",
    subtitle: "Module 2, Session 1",
    content: "<h3>Managing Institutional Higher Education</h3>"
  },
  {
    id: "m2s1-slide2",
    title: "Session Overview",
    content: `
      <h3>Session Overview</h3>
      <ul>
        <li>Theories and Models of Higher Education Governance</li>
        <li>Governing Boards: Role, Responsibilities, and Composition</li>
        <li>The University Presidency: Leadership Roles and Challenges</li>
        <li>Faculty Governance: Senates, Committees, and Shared Decision-Making</li>
        <li>Academic Freedom and Tenure: Foundations and Contemporary Issues</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide3",
    title: "Evolution of Governance Models",
    content: `
      <h3>Evolution of Higher Education Governance</h3>
      <ul>
        <li><strong>Early American Colleges</strong>: Lay trustee model with limited faculty authority</li>
        <li><strong>Late 19th/Early 20th Century</strong>: Growing faculty professionalization</li>
        <li><strong>1915 AAUP Declaration</strong>: Articulated vision of shared governance</li>
        <li><strong>Post-WWII Expansion</strong>: Increased complexity and administration</li>
        <li><strong>1966 Statement on Government</strong>: Codified shared governance principles</li>
        <li><strong>Recent Decades</strong>: Tension between traditional models and corporate approaches</li>
        <li><strong>Contemporary Context</strong>: Multiple models operating simultaneously</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide4",
    title: "Shared Governance Model",
    content: `
      <h3>Shared Governance Model</h3>
      <ul>
        <li><strong>Key Principles</strong>:
          <ul>
            <li>Distributed decision-making authority</li>
            <li>Faculty expertise in academic matters</li>
            <li>Consultation and collaboration</li>
            <li>Consensus-building processes</li>
          </ul>
        </li>
        <li><strong>Domains of Authority</strong>:
          <ul>
            <li>Faculty: Curriculum, standards, faculty status</li>
            <li>Administration: Operations, implementation</li>
            <li>Board: Mission, strategy, finances</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Diverse perspectives, broad ownership, academic values</li>
        <li><strong>Challenges</strong>: Process-heavy, slow response, time-intensive</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide5",
    title: "Managerialism/Corporate Model",
    content: `
      <h3>Managerialism/Corporate Model</h3>
      <ul>
        <li><strong>Key Principles</strong>:
          <ul>
            <li>Centralized decision-making</li>
            <li>Clear hierarchical relationships</li>
            <li>Efficiency and accountability focus</li>
            <li>Market responsiveness</li>
          </ul>
        </li>
        <li><strong>Governance Characteristics</strong>:
          <ul>
            <li>Strong executive authority</li>
            <li>Oversight-focused boards</li>
            <li>Limited faculty role</li>
            <li>Professional administrators</li>
            <li>Performance metrics</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Rapid decisions, clear accountability, efficiency</li>
        <li><strong>Challenges</strong>: Faculty marginalization, resistance, cultural clash</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide6",
    title: "Political Model",
    content: `
      <h3>Political Model</h3>
      <ul>
        <li><strong>Key Principles</strong>:
          <ul>
            <li>Competing interest groups</li>
            <li>Power dynamics and coalitions</li>
            <li>Negotiation and compromise</li>
            <li>Resource allocation as political</li>
            <li>Conflict as normal</li>
          </ul>
        </li>
        <li><strong>Governance Characteristics</strong>:
          <ul>
            <li>Multiple power centers</li>
            <li>Shifting alliances</li>
            <li>Informal influence networks</li>
            <li>Bargaining and trade-offs</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Recognizes competing interests, explains behaviors</li>
        <li><strong>Challenges</strong>: Normalizes conflict, can undermine trust</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide7",
    title: "Bureaucratic Model",
    content: `
      <h3>Bureaucratic Model</h3>
      <ul>
        <li><strong>Key Principles</strong>:
          <ul>
            <li>Formal authority hierarchies</li>
            <li>Written policies and procedures</li>
            <li>Specialization and division of labor</li>
            <li>Standardization and consistency</li>
            <li>Rule-governed decisions</li>
          </ul>
        </li>
        <li><strong>Governance Characteristics</strong>:
          <ul>
            <li>Detailed organizational charts</li>
            <li>Extensive policy manuals</li>
            <li>Formal committees</li>
            <li>Standardized processes</li>
            <li>Clear delegation</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Clarity, consistency, coordination</li>
        <li><strong>Challenges</strong>: Rigidity, excessive paperwork, adaptation difficulties</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide8",
    title: "Hybrid Governance Approaches",
    content: `
      <h3>Hybrid Governance Approaches</h3>
      <ul>
        <li><strong>By Domain</strong>:
          <ul>
            <li>Academic: Shared governance</li>
            <li>Administrative: Managerial</li>
            <li>Resource allocation: Political</li>
            <li>Compliance: Bureaucratic</li>
          </ul>
        </li>
        <li><strong>By Level</strong>:
          <ul>
            <li>Department: Collegial</li>
            <li>School/College: Political</li>
            <li>Institution: Managerial</li>
            <li>System: Bureaucratic</li>
          </ul>
        </li>
        <li><strong>By Situation</strong>:
          <ul>
            <li>Routine decisions: Established procedures</li>
            <li>Crisis: Centralized approaches</li>
            <li>Strategic initiatives: Collaborative</li>
            <li>External mandates: Compliance-oriented</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide9",
    title: "Contemporary Governance Tensions",
    content: `
      <h3>Contemporary Governance Tensions</h3>
      <ul>
        <li><strong>Efficiency vs. Inclusivity</strong>:
          <ul>
            <li>Timely decisions vs. broad consultation</li>
            <li>Streamlined processes vs. thorough deliberation</li>
          </ul>
        </li>
        <li><strong>Expertise vs. Representation</strong>:
          <ul>
            <li>Professional judgment vs. stakeholder interests</li>
            <li>Specialized knowledge vs. diverse perspectives</li>
          </ul>
        </li>
        <li><strong>Internal vs. External Orientation</strong>:
          <ul>
            <li>Academic values vs. market demands</li>
            <li>Institutional autonomy vs. public accountability</li>
          </ul>
        </li>
        <li><strong>Centralization vs. Decentralization</strong>:
          <ul>
            <li>Institutional coherence vs. unit autonomy</li>
            <li>Standardized policies vs. contextual flexibility</li>
          </ul>
        </li>
        <li><strong>Tradition vs. Change</strong>:
          <ul>
            <li>Core values vs. adaptation</li>
            <li>Established processes vs. new approaches</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide10",
    title: "Governing Boards: Legal Authority",
    content: `
      <h3>Governing Boards: Legal Authority</h3>
      <ul>
        <li><strong>Legal Foundations</strong>:
          <ul>
            <li>State constitutions/statutes (public)</li>
            <li>Charter documents (private)</li>
            <li>IRS requirements</li>
            <li>Accreditation standards</li>
          </ul>
        </li>
        <li><strong>Fiduciary Responsibilities</strong>:
          <ul>
            <li><strong>Duty of Care</strong>: Reasonable diligence</li>
            <li><strong>Duty of Loyalty</strong>: Institutional best interest</li>
            <li><strong>Duty of Obedience</strong>: Mission alignment and legal compliance</li>
          </ul>
        </li>
        <li>Ultimate legal authority for institutional oversight</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide11",
    title: "Core Board Functions",
    content: `
      <h3>Core Board Functions</h3>
      <ul>
        <li><strong>Policy Development and Oversight</strong>:
          <ul>
            <li>Establish broad institutional policies</li>
            <li>Monitor implementation and effectiveness</li>
          </ul>
        </li>
        <li><strong>Strategic Direction</strong>:
          <ul>
            <li>Approve mission and vision</li>
            <li>Ensure alignment between plans and resources</li>
          </ul>
        </li>
        <li><strong>Financial Stewardship</strong>:
          <ul>
            <li>Approve budgets and major financial decisions</li>
            <li>Ensure sustainability and manage risk</li>
          </ul>
        </li>
        <li><strong>Presidential Selection/Evaluation</strong>:
          <ul>
            <li>Hire and evaluate president/chancellor</li>
            <li>Plan for succession</li>
          </ul>
        </li>
        <li><strong>Institutional Advocacy</strong>:
          <ul>
            <li>External representation</li>
            <li>Fundraising support</li>
          </ul>
        </li>
        <li><strong>Self-Governance</strong>:
          <ul>
            <li>Board structures and processes</li>
            <li>Performance evaluation</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide12",
    title: "Board Composition and Structure",
    content: `
      <h3>Board Composition and Structure</h3>
      <ul>
        <li><strong>Public Institution Boards</strong>:
          <ul>
            <li>Appointed or elected</li>
            <li>Political considerations</li>
            <li>Geographic representation</li>
            <li>May include student/faculty representatives</li>
          </ul>
        </li>
        <li><strong>Private Institution Boards</strong>:
          <ul>
            <li>Self-perpetuating</li>
            <li>Donors and alumni</li>
            <li>Industry/professional leaders</li>
            <li>Personal giving expectations</li>
          </ul>
        </li>
        <li><strong>Board Leadership</strong>:
          <ul>
            <li>Board chair/president</li>
            <li>Vice chair</li>
            <li>Committee chairs</li>
          </ul>
        </li>
        <li><strong>Committee Structure</strong>:
          <ul>
            <li>Executive, Finance, Academic Affairs</li>
            <li>Audit/Compliance, Governance</li>
            <li>Advancement, others as needed</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide13",
    title: "Contemporary Board Issues",
    content: `
      <h3>Contemporary Board Issues</h3>
      <ul>
        <li><strong>Professionalization of Board Work</strong>:
          <ul>
            <li>Structured orientation and training</li>
            <li>Performance metrics</li>
            <li>Governance consultants</li>
          </ul>
        </li>
        <li><strong>Diversity, Equity, and Inclusion</strong>:
          <ul>
            <li>Diverse composition</li>
            <li>Inclusive practices</li>
            <li>Equity considerations</li>
          </ul>
        </li>
        <li><strong>Political Polarization</strong>:
          <ul>
            <li>Politicization of public boards</li>
            <li>Partisan appointments</li>
            <li>Divisive issues</li>
          </ul>
        </li>
        <li><strong>Stakeholder Representation</strong>:
          <ul>
            <li>Faculty/staff/student membership debates</li>
            <li>Input mechanisms</li>
            <li>Balancing representation with fiduciary focus</li>
          </ul>
        </li>
        <li><strong>Crisis Governance</strong>:
          <ul>
            <li>Emergency powers</li>
            <li>Balance between action and process</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide14",
    title: "The Evolving Presidential Role",
    content: `
      <h3>The Evolving Presidential Role</h3>
      <ul>
        <li><strong>Historical Evolution</strong>:
          <ul>
            <li>Scholar-leaders → Administrative leaders</li>
            <li>Internal focus → External focus</li>
            <li>Academic peers → Professional executives</li>
          </ul>
        </li>
        <li><strong>Contemporary Presidential Profile</strong>:
          <ul>
            <li>Diverse backgrounds</li>
            <li>Shorter tenures (6-7 years)</li>
            <li>Increasing demographic diversity</li>
            <li>Growing compensation</li>
          </ul>
        </li>
        <li><strong>Changing Expectations</strong>:
          <ul>
            <li>"First among equals" → CEO</li>
            <li>Internal academic leader → External representative</li>
            <li>Collegial persuader → Strategic change agent</li>
            <li>Mission guardian → Entrepreneurial innovator</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide15",
    title: "Presidential Responsibilities",
    content: `
      <h3>Presidential Responsibilities</h3>
      <ul>
        <li><strong>Institutional Leadership</strong>:
          <ul>
            <li>Vision articulation</li>
            <li>Team building</li>
            <li>Culture fostering</li>
            <li>Change management</li>
          </ul>
        </li>
        <li><strong>External Relations</strong>:
          <ul>
            <li>Fundraising</li>
            <li>Government relations</li>
            <li>Community engagement</li>
            <li>Crisis communication</li>
          </ul>
        </li>
        <li><strong>Internal Management</strong>:
          <ul>
            <li>Resource allocation</li>
            <li>Policy implementation</li>
            <li>Performance evaluation</li>
            <li>Conflict resolution</li>
          </ul>
        </li>
        <li><strong>Academic Leadership</strong>:
          <ul>
            <li>Academic quality</li>
            <li>Faculty development</li>
            <li>Innovation support</li>
            <li>Student success</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide16",
    title: "Presidential Authority",
    content: `
      <h3>Presidential Authority</h3>
      <ul>
        <li><strong>Appointment Authority</strong>:
          <ul>
            <li>Senior administrators</li>
            <li>Faculty recommendations</li>
            <li>Leadership team building</li>
          </ul>
        </li>
        <li><strong>Resource Authority</strong>:
          <ul>
            <li>Budget development</li>
            <li>Resource allocation</li>
            <li>Process establishment</li>
          </ul>
        </li>
        <li><strong>Policy Authority</strong>:
          <ul>
            <li>Board policy implementation</li>
            <li>Administrative policy development</li>
            <li>Academic policy recommendations</li>
          </ul>
        </li>
        <li><strong>Representational Authority</strong>:
          <ul>
            <li>External institutional voice</li>
            <li>Board-campus intermediary</li>
            <li>Decision communication</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide17",
    title: "Presidential Leadership Challenges",
    content: `
      <h3>Presidential Leadership Challenges</h3>
      <ul>
        <li><strong>Multiple Constituencies</strong>:
          <ul>
            <li>Board, faculty, students, staff</li>
            <li>Alumni, donors, government</li>
            <li>Community, media</li>
          </ul>
        </li>
        <li><strong>Competing Values</strong>:
          <ul>
            <li>Excellence vs. accessibility</li>
            <li>Tradition vs. innovation</li>
            <li>Autonomy vs. accountability</li>
          </ul>
        </li>
        <li><strong>Resource Constraints</strong>:
          <ul>
            <li>Declining public funding</li>
            <li>Affordability concerns</li>
            <li>Rising costs</li>
            <li>Infrastructure needs</li>
          </ul>
        </li>
        <li><strong>Governance Tensions</strong>:
          <ul>
            <li>Shared governance vs. decisive action</li>
            <li>Oversight vs. micromanagement</li>
            <li>Academic authority vs. financial reality</li>
          </ul>
        </li>
        <li><strong>External Pressures</strong>:
          <ul>
            <li>Political scrutiny</li>
            <li>Market competition</li>
            <li>Demographic changes</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide18",
    title: "Presidential Leadership Strategies",
    content: `
      <h3>Presidential Leadership Strategies</h3>
      <ul>
        <li><strong>Building Shared Vision</strong>:
          <ul>
            <li>Stakeholder engagement</li>
            <li>Connection to values</li>
            <li>Consistent communication</li>
          </ul>
        </li>
        <li><strong>Developing Effective Teams</strong>:
          <ul>
            <li>Talented recruitment</li>
            <li>Trust building</li>
            <li>Appropriate delegation</li>
          </ul>
        </li>
        <li><strong>Managing Change</strong>:
          <ul>
            <li>Creating urgency without panic</li>
            <li>Building coalitions</li>
            <li>Addressing resistance</li>
          </ul>
        </li>
        <li><strong>Balancing Consultation and Decision</strong>:
          <ul>
            <li>Appropriate consultation levels</li>
            <li>Process transparency</li>
            <li>Decision rationale</li>
          </ul>
        </li>
        <li><strong>Cultivating Board Relationships</strong>:
          <ul>
            <li>Regular communication</li>
            <li>Thorough information</li>
            <li>Expectation management</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide19",
    title: "Faculty Governance Rationale",
    content: `
      <h3>Faculty Governance Rationale</h3>
      <ul>
        <li><strong>Professional Expertise</strong>:
          <ul>
            <li>Specialized disciplinary knowledge</li>
            <li>Academic decisions require expertise</li>
            <li>Quality through peer review</li>
            <li>Professional judgment</li>
          </ul>
        </li>
        <li><strong>Academic Freedom</strong>:
          <ul>
            <li>Protection for intellectual inquiry</li>
            <li>Balance to administrative power</li>
            <li>Support for individual freedom</li>
          </ul>
        </li>
        <li><strong>Institutional Commitment</strong>:
          <ul>
            <li>Faculty investment</li>
            <li>Institutional memory</li>
            <li>Career alignment</li>
            <li>Mutual accountability</li>
          </ul>
        </li>
        <li><strong>Educational Quality</strong>:
          <ul>
            <li>Proximity to teaching/learning</li>
            <li>Disciplinary knowledge for curriculum</li>
            <li>Faculty engagement in assessment</li>
            <li>Academic standards maintenance</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide20",
    title: "Faculty Governance Structures",
    content: `
      <h3>Faculty Governance Structures</h3>
      <ul>
        <li><strong>Faculty Senates/Councils</strong>:
          <ul>
            <li>Institution-wide representative bodies</li>
            <li>Elected membership</li>
            <li>Elected leadership</li>
            <li>Formal procedures</li>
            <li>Advisory or decision-making authority</li>
          </ul>
        </li>
        <li><strong>Standing Committees</strong>:
          <ul>
            <li>Domain-specific focus</li>
            <li>Reporting relationships</li>
            <li>Mixed membership</li>
            <li>Policy development and oversight</li>
          </ul>
        </li>
        <li><strong>Department/Program Governance</strong>:
          <ul>
            <li>Unit-level decisions</li>
            <li>Curriculum development</li>
            <li>Personnel recommendations</li>
            <li>Resource allocation</li>
          </ul>
        </li>
        <li><strong>School/College Governance</strong>:
          <ul>
            <li>Dean's advisory councils</li>
            <li>Promotion and tenure committees</li>
            <li>Curriculum committees</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide21",
    title: "Faculty Unions and Collective Bargaining",
    content: `
      <h3>Faculty Unions and Collective Bargaining</h3>
      <ul>
        <li><strong>Historical Development</strong>:
          <ul>
            <li>Began 1960s-1970s</li>
            <li>Initially at community colleges, regional universities</li>
            <li>Now at ~30% of institutions</li>
            <li>Recent growth among contingent faculty</li>
          </ul>
        </li>
        <li><strong>Legal Framework</strong>:
          <ul>
            <li>State laws for public institutions</li>
            <li>Yeshiva decision impact on private institutions</li>
            <li>Graduate student unionization</li>
            <li>Right-to-work laws</li>
          </ul>
        </li>
        <li><strong>Typical Contract Elements</strong>:
          <ul>
            <li>Compensation and benefits</li>
            <li>Workload definitions</li>
            <li>Evaluation procedures</li>
            <li>Grievance processes</li>
          </ul>
        </li>
        <li><strong>Relationship to Shared Governance</strong>:
          <ul>
            <li>Complementary or competing</li>
            <li>Formalization of practices</li>
            <li>Legal enforceability</li>
            <li>Administrative flexibility impact</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide22",
    title: "Shared Governance in Practice",
    content: `
      <h3>Shared Governance in Practice</h3>
      <ul>
        <li><strong>Academic Affairs</strong>:
          <ul>
            <li>Curriculum (primary faculty authority)</li>
            <li>Academic policies (strong faculty role)</li>
            <li>Teaching methods (faculty discretion)</li>
            <li>Program evaluation (collaborative)</li>
          </ul>
        </li>
        <li><strong>Faculty Affairs</strong>:
          <ul>
            <li>Hiring criteria (strong faculty role)</li>
            <li>Promotion/tenure standards (primary faculty authority)</li>
            <li>Evaluation methods (collaborative)</li>
            <li>Workload policies (negotiated)</li>
          </ul>
        </li>
        <li><strong>Resource Allocation</strong>:
          <ul>
            <li>Budget models (administrative with consultation)</li>
            <li>Space allocation (administrative with input)</li>
            <li>Technology investments (collaborative)</li>
            <li>Faculty positions (collaborative)</li>
          </ul>
        </li>
        <li><strong>Institutional Planning</strong>:
          <ul>
            <li>Mission/vision (board with broad input)</li>
            <li>Strategic priorities (collaborative)</li>
            <li>Facilities planning (administrative with input)</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide23",
    title: "Faculty Governance Challenges",
    content: `
      <h3>Faculty Governance Challenges</h3>
      <ul>
        <li><strong>Changing Faculty Composition</strong>:
          <ul>
            <li>Declining tenure-track proportion</li>
            <li>Limited contingent faculty participation</li>
            <li>Varying institutional commitment</li>
            <li>Different interests across types</li>
          </ul>
        </li>
        <li><strong>Time Pressures and Workload</strong>:
          <ul>
            <li>Increasing demands</li>
            <li>Undervalued service</li>
            <li>Competing priorities</li>
            <li>Process inefficiencies</li>
          </ul>
        </li>
        <li><strong>Governance Capacity</strong>:
          <ul>
            <li>Limited preparation</li>
            <li>Uneven work distribution</li>
            <li>Insufficient support</li>
            <li>Inadequate information</li>
          </ul>
        </li>
        <li><strong>Scope and Speed of Change</strong>:
          <ul>
            <li>Accelerating external changes</li>
            <li>Pressure for rapid response</li>
            <li>Cross-boundary issues</li>
            <li>Technical complexity</li>
          </ul>
        </li>
        <li><strong>Governance-Administration Relations</strong>:
          <ul>
            <li>Varying commitment to principles</li>
            <li>Consultation perception gaps</li>
            <li>Trust deficits</li>
            <li>Boundary disagreements</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide24",
    title: "Academic Freedom Foundations",
    content: `
      <h3>Academic Freedom Foundations</h3>
      <ul>
        <li><strong>Conceptual Elements</strong>:
          <ul>
            <li>Freedom of inquiry and research</li>
            <li>Freedom of teaching</li>
            <li>Freedom of expression</li>
            <li>Protection from censorship</li>
            <li>Extramural utterance protection</li>
          </ul>
        </li>
        <li><strong>Historical Development</strong>:
          <ul>
            <li>Medieval university autonomy</li>
            <li>German Lehrfreiheit and Lernfreiheit</li>
            <li>1915 AAUP Declaration</li>
            <li>1940 Statement of Principles</li>
            <li>Court cases defining boundaries</li>
          </ul>
        </li>
        <li><strong>Rationale</strong>:
          <ul>
            <li>Knowledge advancement requires freedom</li>
            <li>Truth-seeking needs protection</li>
            <li>Society benefits from unfettered expertise</li>
            <li>Universities as open discourse spaces</li>
            <li>Protection from non-expert interference</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide25",
    title: "Tenure: Purpose and Process",
    content: `
      <h3>Tenure: Purpose and Process</h3>
      <ul>
        <li><strong>Purpose and Rationale</strong>:
          <ul>
            <li>Academic freedom protection</li>
            <li>Long-term research enablement</li>
            <li>Due process protections</li>
            <li>Talent attraction</li>
            <li>Institutional commitment</li>
          </ul>
        </li>
        <li><strong>Typical Process</strong>:
          <ul>
            <li>6-7 year probationary period</li>
            <li>Annual reviews</li>
            <li>Comprehensive dossier</li>
            <li>Multiple review levels</li>
            <li>External evaluation</li>
            <li>Board decision</li>
          </ul>
        </li>
        <li><strong>Standards and Criteria</strong>:
          <ul>
            <li>Research/scholarship excellence</li>
            <li>Teaching effectiveness</li>
            <li>Appropriate service</li>
            <li>Collegiality (controversial)</li>
            <li>Continued productivity potential</li>
            <li>Institutional alignment</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide26",
    title: "Contemporary Academic Freedom Challenges",
    content: `
      <h3>Contemporary Academic Freedom Challenges</h3>
      <ul>
        <li><strong>Political Polarization</strong>:
          <ul>
            <li>Partisan scrutiny</li>
            <li>Legislative intervention</li>
            <li>Pressure campaigns</li>
            <li>Political conflation</li>
          </ul>
        </li>
        <li><strong>Social Media and Public Engagement</strong>:
          <ul>
            <li>Blurred boundaries</li>
            <li>Viral amplification</li>
            <li>Reputation concerns</li>
            <li>Harassment and threats</li>
          </ul>
        </li>
        <li><strong>Donor Influence</strong>:
          <ul>
            <li>Gift strings</li>
            <li>External funding</li>
            <li>Chilling effects</li>
            <li>Governance questions</li>
          </ul>
        </li>
        <li><strong>Corporate Partnerships</strong>:
          <ul>
            <li>Funding restrictions</li>
            <li>Intellectual property issues</li>
            <li>Publication limitations</li>
            <li>Research bias potential</li>
          </ul>
        </li>
        <li><strong>Student Demands</strong>:
          <ul>
            <li>Content warnings</li>
            <li>Speaker protests</li>
            <li>Classroom expression complaints</li>
            <li>Inclusion vs. inquiry tensions</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide27",
    title: "Academic Freedom and Governance",
    content: `
      <h3>Academic Freedom and Governance</h3>
      <ul>
        <li><strong>Governance as Protection</strong>:
          <ul>
            <li>Faculty participation protects freedom</li>
            <li>Collective voice balances power</li>
            <li>Peer review maintains standards</li>
            <li>Due process prevents arbitrary actions</li>
          </ul>
        </li>
        <li><strong>Governance Scope</strong>:
          <ul>
            <li>Freedom applies to governance participation</li>
            <li>Dissenting views protected</li>
            <li>Administrative criticism protected</li>
            <li>Compliance with collective decisions</li>
          </ul>
        </li>
        <li><strong>Institutional Autonomy</strong>:
          <ul>
            <li>Institutional vs. individual freedom</li>
            <li>External interference protection</li>
            <li>Public accountability tension</li>
            <li>Autonomy-responsiveness balance</li>
          </ul>
        </li>
        <li><strong>Policy Development</strong>:
          <ul>
            <li>Clear policies needed</li>
            <li>Due process procedures</li>
            <li>Rights/responsibilities education</li>
            <li>Regular policy review</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s1-slide28",
    title: "Key Governance Themes",
    content: `
      <h3>Key Governance Themes</h3>
      <ul>
        <li><strong>Governance Complexity</strong>: Multiple models, structures, and stakeholders operating simultaneously</li>
        <li><strong>Contextual Variation</strong>: Approaches vary by institutional type, history, and culture</li>
        <li><strong>Balancing Tensions</strong>: Competing values and interests require constant balancing</li>
        <li><strong>Relationship Foundations</strong>: Trust, respect, communication, and shared commitment essential</li>
        <li><strong>Adaptive Leadership</strong>: Leaders must adapt approach to different situations and stakeholder groups</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide29",
    title: "Key Terms and Concepts",
    content: `
      <h3>Key Terms and Concepts</h3>
      <ul>
        <li>Shared governance</li>
        <li>Corporate/managerial governance</li>
        <li>Political model</li>
        <li>Bureaucratic model</li>
        <li>Fiduciary responsibility</li>
        <li>Board of trustees/regents</li>
        <li>Faculty senate</li>
        <li>Collective bargaining</li>
        <li>Academic freedom</li>
        <li>Tenure</li>
        <li>Institutional autonomy</li>
        <li>Stakeholder representation</li>
        <li>Governance domains</li>
        <li>Presidential authority</li>
        <li>Faculty authority</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide30",
    title: "References",
    content: `
      <h3>References</h3>
      <ul>
        <li>American Association of University Professors. (1940). Statement of principles on academic freedom and tenure.</li>
        <li>Association of Governing Boards. (2010). Statement on board responsibility for institutional governance.</li>
        <li>Birnbaum, R. (1988). How colleges work: The cybernetics of academic organization and leadership.</li>
        <li>Bowen, W. G., & Tobin, E. M. (2015). Locus of authority: The evolution of faculty roles in the governance of higher education.</li>
        <li>Eckel, P. D., & Kezar, A. J. (2016). The intersecting authority of boards, presidents, and faculty: Toward shared leadership.</li>
        <li>Gerber, L. G. (2014). The rise and decline of faculty governance: Professionalization and the modern American university.</li>
        <li>Hendrickson, R. M., et al. (2013). Academic leadership and governance of higher education.</li>
        <li>Kezar, A. (2004). What is more important to effective governance: Relationships, trust, and leadership, or structures and formal processes?</li>
      </ul>
    `
  },
  {
    id: "m2s1-slide31",
    title: "Next Session Preview",
    content: `
      <h3>Next Session</h3>
      <h2>Module 2, Session 2: Stakeholder Influence, Accountability, and Case Introduction</h2>
      <ul>
        <li>Student Involvement in Governance</li>
        <li>External Influences: Accreditation, government, donors, alumni</li>
        <li>Accountability in Higher Education</li>
        <li>Introduction to Case Study 2: "Navigating a Governance Crisis"</li>
      </ul>
    `
  }
];