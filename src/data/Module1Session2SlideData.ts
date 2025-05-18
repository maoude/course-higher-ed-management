// src/data/Module1Session2SlideData.ts
export interface Slide { // Re-declaring interface for clarity, or import from a shared types file
  id: string;
  title: string;
  subtitle?: string;
  content: string; // HTML content for the slide
}

export const module1Session2Slides: Slide[] = [
  {
    id: "s2-slide1",
    title: "Organizing for Success: Theories, Players, and Challenges",
    subtitle: "Module 1, Session 2",
    content: "<h3>Managing Institutional Higher Education</h3>"
  },
  {
    id: "s2-slide2",
    title: "Session Overview",
    content: `
      <h3>Session Overview</h3>
      <ul>
        <li>Introduction to Organizational Theory in Higher Education</li>
        <li>The Academic Profession: Roles, Responsibilities, and Evolution</li>
        <li>Key Internal and External Stakeholders</li>
        <li>Environmental Factors Influencing Higher Education Management</li>
        <li>Introduction to Case Study 1: "Understanding Institutional Identity and Mission"</li>
      </ul>
    `
  },
  {
    id: "s2-slide3",
    title: "Higher Education's Unique Organizational Context",
    content: `
      <h3>Higher Education's Unique Organizational Context</h3>
      <ul>
        <li><strong>Ambiguous and Contested Goals</strong>: Multiple, competing missions</li>
        <li><strong>Professional Autonomy</strong>: Faculty independence in core activities</li>
        <li><strong>Shared Governance</strong>: Distributed decision-making authority</li>
        <li><strong>Loose Coupling</strong>: Independent units with limited coordination</li>
        <li><strong>Institutional Status and Prestige</strong>: Competition based on reputation</li>
        <li><strong>External Constraints</strong>: Government, accreditors, public expectations</li>
      </ul>
    `
  },
  {
    id: "s2-slide4",
    title: "Bureaucratic Theory in Higher Education",
    content: `
      <h3>Bureaucratic Theory in Higher Education</h3>
      <ul>
        <li><strong>Key Elements</strong>:
          <ul>
            <li>Formal structures and hierarchies</li>
            <li>Written rules and procedures</li>
            <li>Specialization and division of labor</li>
            <li>Imersonality and standardization</li>
          </ul>
        </li>
        <li><strong>Application in Higher Education</strong>:
          <ul>
            <li>Administrative hierarchies and reporting</li>
            <li>Formal policies and procedures</li>
            <li>Standardized processes (admissions, registration)</li>
            <li>Position-based authority</li>
          </ul>
        </li>
        <li><strong>Limitations</strong>: Clashes with academic values and professional autonomy</li>
      </ul>
    `
  },
  {
    id: "s2-slide5",
    title: "Collegial Model",
    content: `
      <h3>Collegial Model</h3>
      <ul>
        <li><strong>Key Elements</strong>:
          <ul>
            <li>Community of scholars</li>
            <li>Consensus-based decision-making</li>
            <li>Shared academic values</li>
            <li>Peer review and collective responsibility</li>
            <li>Leadership as "first among equals"</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Aligns with academic freedom, faculty autonomy</li>
        <li><strong>Challenges</strong>:
          <ul>
            <li>Slow and inefficient response to external pressures</li>
            <li>May privilege faculty interests over others</li>
            <li>Assumes consensus is possible despite diversity</li>
            <li>Struggles with financial and market pressures</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide6",
    title: "Political Systems Model",
    content: `
      <h3>Political Systems Model</h3>
      <ul>
        <li><strong>Key Elements</strong>:
          <ul>
            <li>Conflict as normal state</li>
            <li>Coalitions and interest groups</li>
            <li>Power and influence as central</li>
            <li>Negotiation and bargaining</li>
            <li>Resource allocation as political</li>
          </ul>
        </li>
        <li><strong>Applications</strong>:
          <ul>
            <li>Budget allocation processes</li>
            <li>Conflicts between priorities</li>
            <li>Resistance to change initiatives</li>
            <li>Importance of constituency support</li>
            <li>Informal influence networks</li>
          </ul>
        </li>
        <li><strong>Caution</strong>: Can undermine trust and collaboration if overemphasized</li>
      </ul>
    `
  },
  {
    id: "s2-slide7",
    title: "Organized Anarchy and Garbage Can Model",
    content: `
      <h3>Organized Anarchy Model</h3>
      <ul>
        <li><strong>Key Elements</strong> (Cohen, March, & Olsen):
          <ul>
            <li>Problematic preferences (unclear goals)</li>
            <li>Unclear technology (uncertain means-ends)</li>
            <li>Fluid participation in decisions</li>
          </ul>
        </li>
        <li><strong>Garbage Can Model</strong>:
          <ul>
            <li>Random confluence of problems, solutions, participants</li>
            <li>Solutions may precede problem definition</li>
            <li>Timing and attention as crucial resources</li>
          </ul>
        </li>
        <li><strong>Implications</strong>:
          <ul>
            <li>Decision processes often chaotic</li>
            <li>Solutions adopted based on availability</li>
            <li>Problems may remain unresolved despite discussion</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide8",
    title: "Institutional Theory",
    content: `
      <h3>Institutional Theory</h3>
      <ul>
        <li><strong>Key Elements</strong>:
          <ul>
            <li>Isomorphism (organizations becoming similar)</li>
            <li>Ceremonial adoption of practices for legitimacy</li>
            <li>Influence of professional norms</li>
            <li>Decoupling of structures from practices</li>
            <li>Institutional myths and rituals</li>
          </ul>
        </li>
        <li><strong>Applications in Higher Education</strong>:
          <ul>
            <li>Imitation of prestigious institutions</li>
            <li>Similar strategic plans and mission statements</li>
            <li>Persistence of traditional structures</li>
            <li>Importance of accreditation and rankings</li>
            <li>Ceremonial aspects of governance</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide9",
    title: "Applying Multiple Theoretical Perspectives",
    content: `
      <h3>Applying Multiple Theoretical Perspectives</h3>
      <ul>
        <li><strong>Hybrid Approaches</strong>: Most institutions combine elements of multiple models</li>
        <li><strong>Contextual Factors</strong>:
          <ul>
            <li>Institutional type and mission</li>
            <li>Governance structure (public vs. private)</li>
            <li>Size and complexity</li>
            <li>History and traditions</li>
            <li>External environment</li>
          </ul>
        </li>
        <li><strong>Strategic Implications</strong>:
          <ul>
            <li>Change must address formal and informal elements</li>
            <li>Different strategies for different domains</li>
            <li>Legitimacy as important as rational planning</li>
            <li>Timing and opportunity windows crucial</li>
            <li>Multiple stakeholder perspectives needed</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide10",
    title: "The Academic Profession: Traditional Roles",
    content: `
      <h3>The Academic Profession: Traditional Roles</h3>
      <ul>
        <li><strong>Teaching</strong>:
          <ul>
            <li>Course design and delivery</li>
            <li>Student assessment</li>
            <li>Academic advising</li>
            <li>Curriculum development</li>
          </ul>
        </li>
        <li><strong>Research and Scholarship</strong>:
          <ul>
            <li>Basic and applied research</li>
            <li>Publication and dissemination</li>
            <li>Grant acquisition</li>
            <li>Creative activities</li>
          </ul>
        </li>
        <li><strong>Service</strong>:
          <ul>
            <li>Institutional governance</li>
            <li>Department administration</li>
            <li>Professional associations</li>
            <li>Community engagement</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide11",
    title: "Faculty Career Structure",
    content: `
      <h3>Faculty Career Structure</h3>
      <ul>
        <li><strong>Assistant Professor</strong>:
          <ul>
            <li>Entry-level tenure-track</li>
            <li>6-7 year probationary period</li>
            <li>Demonstration of excellence required</li>
          </ul>
        </li>
        <li><strong>Associate Professor</strong>:
          <ul>
            <li>Mid-career rank</li>
            <li>Usually accompanied by tenure</li>
            <li>Demonstrated achievement required</li>
          </ul>
        </li>
        <li><strong>Professor</strong>:
          <ul>
            <li>Senior rank</li>
            <li>National/international recognition</li>
            <li>Sustained excellence and impact</li>
          </ul>
        </li>
        <li><strong>Tenure</strong>:
          <ul>
            <li>Academic freedom protection</li>
            <li>Employment security</li>
            <li>Long-term institutional commitment</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide12",
    title: "The Changing Academic Workforce",
    content: `
      <h3>The Changing Academic Workforce</h3>
      <ul>
        <li><strong>Growth of Contingent Faculty</strong>:
          <ul>
            <li>Full-time term-limited positions</li>
            <li>Part-time adjunct faculty</li>
            <li>Graduate teaching assistants</li>
            <li>Two-tier system implications</li>
          </ul>
        </li>
        <li><strong>Specialization of Faculty Roles</strong>:
          <ul>
            <li>Teaching-intensive faculty</li>
            <li>Research faculty</li>
            <li>Clinical faculty</li>
            <li>Practice faculty</li>
            <li>Public engagement professors</li>
          </ul>
        </li>
        <li><strong>Professionalization of Administration</strong>:
          <ul>
            <li>Full-time department chairs and deans</li>
            <li>Professional program directors</li>
            <li>Specialized administrative roles</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide13",
    title: "Contemporary Faculty Challenges",
    content: `
      <h3>Contemporary Faculty Challenges</h3>
      <ul>
        <li><strong>Expanding Expectations</strong>:
          <ul>
            <li>New teaching technologies</li>
            <li>Student success focus</li>
            <li>Interdisciplinary collaboration</li>
            <li>Practical impact pressure</li>
            <li>Assessment requirements</li>
            <li>Revenue generation</li>
          </ul>
        </li>
        <li><strong>Work-Life Balance</strong>:
          <ul>
            <li>Changing generational expectations</li>
            <li>Dual-career couples</li>
            <li>Mental health concerns</li>
          </ul>
        </li>
        <li><strong>Demographic Shifts</strong>:
          <ul>
            <li>Gender representation improving</li>
            <li>Racial/ethnic diversity lags</li>
            <li>International faculty increasing</li>
          </ul>
        </li>
        <li><strong>Political and Public Scrutiny</strong>:
          <ul>
            <li>Academic freedom controversies</li>
            <li>Questioning of tenure</li>
            <li>Return on investment demands</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide14",
    title: "Internal Stakeholders",
    content: `
      <h3>Internal Stakeholders</h3>
      <ul>
        <li><strong>Students</strong>:
          <ul>
            <li>Traditional and non-traditional</li>
            <li>Undergraduate and graduate</li>
            <li>Domestic and international</li>
          </ul>
        </li>
        <li><strong>Faculty</strong>:
          <ul>
            <li>Tenure-track and contingent</li>
            <li>By discipline and rank</li>
          </ul>
        </li>
        <li><strong>Staff</strong>:
          <ul>
            <li>Administrative and support</li>
            <li>Technical and professional</li>
            <li>Facilities and operations</li>
          </ul>
        </li>
        <li><strong>Administrators</strong>:
          <ul>
            <li>Executive leadership</li>
            <li>Deans and department chairs</li>
            <li>Program directors</li>
          </ul>
        </li>
        <li><strong>Governing Boards</strong>:
          <ul>
            <li>Trustees/regents</li>
            <li>Fiduciary responsibility</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide15",
    title: "External Stakeholders",
    content: `
      <h3>External Stakeholders</h3>
      <ul>
        <li><strong>Government Entities</strong>:
          <ul>
            <li>Federal: Financial aid, research funding, regulation</li>
            <li>State: Primary funders and regulators of public institutions</li>
            <li>Local: Economic development partners</li>
          </ul>
        </li>
        <li><strong>Accreditors</strong>:
          <ul>
            <li>Regional accrediting bodies</li>
            <li>Specialized program accreditors</li>
          </ul>
        </li>
        <li><strong>Employers and Industry</strong>:
          <ul>
            <li>Graduate employers</li>
            <li>Research partners</li>
            <li>Professional associations</li>
          </ul>
        </li>
        <li><strong>Alumni and Donors</strong>:
          <ul>
            <li>Graduates with ongoing connections</li>
            <li>Individual and institutional donors</li>
          </ul>
        </li>
        <li><strong>Community and Public</strong>:
          <ul>
            <li>Local communities</li>
            <li>Media</li>
            <li>General public</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide16",
    title: "Environmental Factors",
    content: `
      <h3>Environmental Factors</h3>
      <ul>
        <li><strong>Demographic Trends</strong>:
          <ul>
            <li>Declining traditional college-age population</li>
            <li>Growing diversity</li>
            <li>Geographic shifts</li>
            <li>Aging workforce</li>
          </ul>
        </li>
        <li><strong>Economic Factors</strong>:
          <ul>
            <li>State funding constraints</li>
            <li>Rising costs and affordability concerns</li>
            <li>Changing labor market demands</li>
            <li>Economic cycles</li>
          </ul>
        </li>
        <li><strong>Technological Change</strong>:
          <ul>
            <li>Online and hybrid learning</li>
            <li>Digital tools and analytics</li>
            <li>Automation affecting workforce needs</li>
          </ul>
        </li>
        <li><strong>Political and Policy Environment</strong>:
          <ul>
            <li>Partisan polarization</li>
            <li>Changing regulations</li>
            <li>Value questioning</li>
            <li>International competition</li>
          </ul>
        </li>
        <li><strong>Social and Cultural Shifts</strong>:
          <ul>
            <li>Changing student expectations</li>
            <li>Diversity, equity, and inclusion emphasis</li>
            <li>Mental health concerns</li>
            <li>Work-life balance expectations</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide17",
    title: "Stakeholder Management Strategies",
    content: `
      <h3>Stakeholder Management Strategies</h3>
      <ul>
        <li>Stakeholder Mapping: Identifying interests and influence</li>
        <li>Inclusive Governance: Appropriate voice in decisions</li>
        <li>Strategic Communication: Tailored yet consistent messaging</li>
        <li>Relationship Building: Ongoing engagement</li>
        <li>Interest Alignment: Finding shared priorities</li>
        <li>Expectation Management: Clear communication of possibilities</li>
        <li>Transparent Decision Processes: Explaining factors and input</li>
      </ul>
    `
  },
  {
    id: "s2-slide18",
    title: "Case Study 1 Overview",
    content: `
      <h3>Case Study 1: Understanding Institutional Identity and Mission</h3>
      <ul>
        <li><strong>Midvale State University</strong>:
          <ul>
            <li>Founded 1889 as normal school</li>
            <li>Evolved to comprehensive regional university</li>
            <li>15,000 students</li>
            <li>Mission drift and identity confusion</li>
          </ul>
        </li>
        <li><strong>Case Elements</strong>:
          <ul>
            <li>Historical development</li>
            <li>Current institutional profile</li>
            <li>Mission and values statements</li>
            <li>Organizational characteristics</li>
            <li>Challenge: potential doctoral program expansion</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide19",
    title: "Key Dilemmas in the Case",
    content: `
      <h3>Key Dilemmas in the Case</h3>
      <ul>
        <li><strong>Mission Clarity vs. Comprehensiveness</strong>:
          <ul>
            <li>Historical teaching mission vs. research aspirations</li>
          </ul>
        </li>
        <li><strong>Faculty Role Expectations</strong>:
          <ul>
            <li>Teaching, research, service balance</li>
          </ul>
        </li>
        <li><strong>Resource Allocation</strong>:
          <ul>
            <li>Undergraduate vs. graduate/research initiatives</li>
          </ul>
        </li>
        <li><strong>Stakeholder Alignment</strong>:
          <ul>
            <li>Divergent expectations from various constituencies</li>
          </ul>
        </li>
        <li><strong>Organizational Identity</strong>:
          <ul>
            <li>What kind of institution should Midvale aspire to be?</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide20",
    title: "Analytical Approach for the Case",
    content: `
      <h3>Analytical Approach for the Case</h3>
      <ol>
        <li>Apply organizational theories to explain structures and behaviors</li>
        <li>Analyze faculty roles and expectations</li>
        <li>Identify key stakeholders and their interests</li>
        <li>Conduct SWOT analysis</li>
        <li>Articulate core identity/mission dilemma</li>
        <li>Propose strategic considerations</li>
      </ol>
    `
  },
  {
    id: "s2-slide21",
    title: "Connection to Module Concepts",
    content: `
      <h3>Connection to Module Concepts</h3>
      <ul>
        <li><strong>Historical Context</strong>: How Midvale's evolution reflects broader patterns</li>
        <li><strong>Institutional Types</strong>: Where Midvale fits in the landscape</li>
        <li><strong>Organizational Theories</strong>: Multiple lenses for understanding governance and culture</li>
        <li><strong>Faculty Roles</strong>: How changing expectations reflect institutional priorities</li>
        <li><strong>Stakeholder Influences</strong>: How various actors shape options and constraints</li>
      </ul>
    `
  },
  {
    id: "s2-slide22",
    title: "Case Study Process",
    content: `
      <h3>Case Study Process</h3>
      <ul>
        <li>Complete case study document provided after session</li>
        <li>Analysis due end of week (before Module 2)</li>
        <li>Target length: 1000-1500 words</li>
        <li>Demonstrate understanding of Module 1 concepts</li>
        <li>Provide thoughtful, evidence-based recommendations</li>
        <li>Detailed rubric will assess:
          <ul>
            <li>Application of concepts</li>
            <li>Analytical depth</li>
            <li>Strategic thinking</li>
            <li>Professional communication</li>
            <li>Evidence-based reasoning</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "s2-slide23",
    title: "Key Terms and Concepts",
    content: `
      <h3>Key Terms and Concepts</h3>
      <ul>
        <li>Bureaucracy</li>
        <li>Collegial governance</li>
        <li>Political systems</li>
        <li>Organized anarchy</li>
        <li>Institutional theory</li>
        <li>Shared governance</li>
        <li>Tenure</li>
        <li>Faculty roles</li>
        <li>Contingent faculty</li>
        <li>Stakeholder management</li>
        <li>Mission drift</li>
        <li>Institutional identity</li>
        <li>Professional autonomy</li>
        <li>Loose coupling</li>
        <li>Isomorphism</li>
      </ul>
    `
  },
  {
    id: "s2-slide24",
    title: "References",
    content: `
      <h3>References</h3>
      <ul>
        <li>Baldridge, J. V. (1971). <em>Power and conflict in the university</em>.</li>
        <li>Bergquist, W. H., & Pawlak, K. (2008). <em>Engaging the six cultures of the academy</em>.</li>
        <li>Birnbaum, R. (1988). <em>How colleges work</em>.</li>
        <li>Cohen, M. D., March, J. G., & Olsen, J. P. (1972). "A garbage can model of organizational choice."</li>
        <li>Finkelstein, M. J., Conley, V. M., & Schuster, J. H. (2016). <em>The faculty factor</em>.</li>
        <li>Kezar, A., & Holcombe, E. (2017). <em>Shared leadership in higher education</em>.</li>
        <li>Manning, K. (2017). <em>Organizational theory in higher education</em>.</li>
        <li>Tierney, W. G. (2008). <em>The impact of culture on organizational decision making</em>.</li>
        <li>Weick, K. E. (1976). "Educational organizations as loosely coupled systems."</li>
      </ul>
    `
  },
  {
    id: "s2-slide25",
    title: "Next Session Preview",
    content: `
      <h3>Next Session</h3>
      <h2>Module 2, Session 1: Governance Models, Boards, and Leadership Roles</h2>
      <ul>
        <li>Theories and Models of Higher Education Governance</li>
        <li>Governing Boards: Role, responsibilities, and composition</li>
        <li>The University Presidency: Leadership roles and challenges</li>
        <li>Faculty Governance: Senates, committees, and shared decision-making</li>
        <li>Academic Freedom and Tenure: Foundations and contemporary issues</li>
      </ul>
    `
  }
];
