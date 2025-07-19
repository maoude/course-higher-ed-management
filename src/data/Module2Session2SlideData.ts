// src/data/Module2Session2SlideData.ts
export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: string; // HTML content for the slide
}

export const module2Session2Slides: Slide[] = [
  {
    id: "m2s2-slide1",
    title: "Stakeholder Influence, Accountability, and Case Introduction",
    subtitle: "Module 2, Session 2",
    content: "<h3>Managing Institutional Higher Education</h3>"
  },
  {
    id: "m2s2-slide2",
    title: "Session Overview",
    content: `
      <h3>Session Overview</h3>
      <ul>
        <li>Student Involvement in Governance: Roles, Impact, and Limitations</li>
        <li>External Influences: Accreditation, Government, Donors, Alumni</li>
        <li>Accountability in Higher Education: To Whom and for What?</li>
        <li>Introduction to Case Study 2: "Navigating a Governance Crisis"</li>
      </ul>
    `
  },
  {
    id: "m2s2-slide3",
    title: "Evolution of Student Governance Participation",
    content: `
      <h3>Evolution of Student Governance Participation</h3>
      <ul>
        <li><strong>Early American Colleges</strong>: Virtually no formal role, in loco parentis doctrine</li>
        <li><strong>Early to Mid-20th Century</strong>: Student government associations emerge, limited to student activities</li>
        <li><strong>1960s-1970s Transformation</strong>:
          <ul>
            <li>Civil rights and anti-war activism</li>
            <li>Creation of student positions on committees</li>
            <li>Student representation on some boards</li>
            <li>Development of student rights statements</li>
          </ul>
        </li>
        <li><strong>Contemporary Context</strong>: Varied formal representation across institutions</li>
      </ul>
    `
  },
  {
    id: "m2s2-slide4",
    title: "Current Models of Student Governance",
    content: `
      <h3>Student Governance Models</h3>
      <ul>
        <li><strong>Student Government Associations (SGAs)</strong>:
          <ul>
            <li>Representing student interests</li>
            <li>Allocating student activity fees</li>
            <li>Organizing campus events</li>
            <li>Appointing representatives to committees</li>
          </ul>
        </li>
        <li><strong>Board of Trustees/Regents Representation</strong>:
          <ul>
            <li>Full voting or advisory capacity</li>
            <li>Various selection methods</li>
            <li>Typically shorter terms (1-2 years)</li>
          </ul>
        </li>
        <li><strong>Committee Representation</strong>:
          <ul>
            <li>Academic policy committees</li>
            <li>Budget advisory committees</li>
            <li>Strategic planning groups</li>
            <li>Search committees</li>
          </ul>
        </li>
        <li><strong>Consultation Mechanisms</strong>:
          <ul>
            <li>Town halls, advisory councils</li>
            <li>Surveys and focus groups</li>
            <li>Regular leadership meetings</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide5",
    title: "Impact of Student Participation",
    content: `
      <h3>Student Governance Effectiveness</h3>
      <ul>
        <li><strong>Positive Impacts</strong>:
          <ul>
            <li>Student perspective in decisions</li>
            <li>Improved policy implementation</li>
            <li>Leadership development</li>
            <li>Enhanced communication</li>
            <li>Early warning of concerns</li>
          </ul>
        </li>
        <li><strong>Challenges and Limitations</strong>:
          <ul>
            <li>Short tenure limits knowledge</li>
            <li>Academic demands constrain time</li>
            <li>Power imbalances</li>
            <li>Potential disconnect with broader student body</li>
            <li>Focus on immediate vs. long-term issues</li>
          </ul>
        </li>
        <li><strong>Effectiveness Factors</strong>:
          <ul>
            <li>Clear roles and authority</li>
            <li>Training and orientation</li>
            <li>Information access</li>
            <li>Meaningful involvement</li>
            <li>Visible impact of input</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide6",
    title: "Contemporary Student Governance Issues",
    content: `
      <h3>Current Student Governance Issues</h3>
      <ul>
        <li><strong>Diversity and Representation</strong>:
          <ul>
            <li>Representing diverse populations</li>
            <li>Addressing participation barriers</li>
            <li>Balancing traditional/non-traditional interests</li>
            <li>Graduate/professional student inclusion</li>
          </ul>
        </li>
        <li><strong>Professionalization</strong>:
          <ul>
            <li>Complex operations</li>
            <li>Increased responsibilities</li>
            <li>Paid positions</li>
            <li>Sophisticated advocacy</li>
          </ul>
        </li>
        <li><strong>Digital Governance</strong>:
          <ul>
            <li>Virtual participation options</li>
            <li>Social media as voice channel</li>
            <li>Online voting and feedback</li>
            <li>Digital accessibility</li>
          </ul>
        </li>
        <li><strong>Activism and Governance</strong>:
          <ul>
            <li>Relationship between formal governance and protest</li>
            <li>Institutional responses to movements</li>
            <li>Creating responsive systems</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide7",
    title: "Accreditation Influence",
    content: `
      <h3>Accreditation Bodies and Quality Assurance</h3>
      <ul>
        <li><strong>Types of Accreditation</strong>:
          <ul>
            <li>Regional (institutional)</li>
            <li>National (specific institution types)</li>
            <li>Specialized/Programmatic (specific programs)</li>
          </ul>
        </li>
        <li><strong>Governance Requirements</strong>:
          <ul>
            <li>Authority delineation</li>
            <li>Effective processes</li>
            <li>Stakeholder involvement</li>
            <li>Regular evaluation</li>
            <li>Sufficient autonomy</li>
            <li>Academic freedom policies</li>
          </ul>
        </li>
        <li><strong>Accreditation Processes</strong>:
          <ul>
            <li>Self-study engagement</li>
            <li>Site visit examination</li>
            <li>Governance recommendations</li>
            <li>Monitoring and follow-up</li>
          </ul>
        </li>
        <li><strong>Contemporary Trends</strong>:
          <ul>
            <li>Increased federal oversight</li>
            <li>Greater outcomes emphasis</li>
            <li>More prescriptive standards</li>
            <li>Public disclosure requirements</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide8",
    title: "State and System Governance",
    content: `
      <h3>State and System Influence</h3>
      <ul>
        <li><strong>State Governance Models</strong>:
          <ul>
            <li>Consolidated Governing Boards</li>
            <li>Segmented Systems</li>
            <li>Regulatory Coordinating Boards</li>
            <li>Advisory Coordinating Boards</li>
          </ul>
        </li>
        <li><strong>System Governance Impact</strong>:
          <ul>
            <li>System-level policy constraints</li>
            <li>Resource allocation processes</li>
            <li>Shared services</li>
            <li>Approval requirements</li>
            <li>System leadership as intermediary</li>
          </ul>
        </li>
        <li><strong>State Legislative Influence</strong>:
          <ul>
            <li>Budget appropriations</li>
            <li>Performance funding</li>
            <li>Board composition requirements</li>
            <li>Policy mandates</li>
            <li>Capital project approval</li>
          </ul>
        </li>
        <li><strong>State Executive Branch</strong>:
          <ul>
            <li>Board appointments</li>
            <li>Budget recommendations</li>
            <li>Executive orders</li>
            <li>Regulatory oversight</li>
            <li>State agency policies</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide9",
    title: "Federal Government Influence",
    content: `
      <h3>Federal Government Influence</h3>
      <ul>
        <li><strong>Financial Leverage</strong>:
          <ul>
            <li>Financial aid program requirements</li>
            <li>Research funding compliance</li>
            <li>Grant program specifications</li>
            <li>Tax policy impacts</li>
          </ul>
        </li>
        <li><strong>Regulatory Requirements</strong>:
          <ul>
            <li>Title IX and OCR enforcement</li>
            <li>ADA compliance</li>
            <li>Research regulations</li>
            <li>Financial responsibility standards</li>
            <li>Consumer information requirements</li>
            <li>Clery Act reporting</li>
          </ul>
        </li>
        <li><strong>Accountability Initiatives</strong>:
          <ul>
            <li>College Scorecard</li>
            <li>Gainful employment regulations</li>
            <li>State authorization requirements</li>
            <li>Accreditation recognition</li>
          </ul>
        </li>
        <li><strong>Legal Framework</strong>:
          <ul>
            <li>Supreme Court decisions</li>
            <li>Department of Education interpretations</li>
            <li>Congressional oversight</li>
            <li>Federal court rulings</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide10",
    title: "Donor and Philanthropic Influence",
    content: `
      <h3>Donor and Philanthropic Influence</h3>
      <ul>
        <li><strong>Types of Donor Influence</strong>:
          <ul>
            <li>Major gifts (capital, endowed positions)</li>
            <li>Foundation support (strategic initiatives)</li>
            <li>Annual giving (operational support)</li>
            <li>Corporate partnerships (research, workforce)</li>
          </ul>
        </li>
        <li><strong>Governance Implications</strong>:
          <ul>
            <li>Gift agreements with requirements</li>
            <li>Donor representation on boards/committees</li>
            <li>Naming rights considerations</li>
            <li>Investment policies</li>
            <li>Advancement priorities</li>
            <li>Potential mission drift</li>
          </ul>
        </li>
        <li><strong>Governance Challenges</strong>:
          <ul>
            <li>Balancing donor wishes with academic freedom</li>
            <li>Managing conflicts of interest</li>
            <li>Ensuring transparency</li>
            <li>Maintaining institutional autonomy</li>
            <li>Addressing controversial donors</li>
            <li>Aligning advancement with priorities</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide11",
    title: "Alumni Influence",
    content: `
      <h3>Alumni Influence</h3>
      <ul>
        <li><strong>Formal Governance Roles</strong>:
          <ul>
            <li>Board representation</li>
            <li>Alumni association leadership</li>
            <li>Advisory councils</li>
            <li>Presidential search participation</li>
            <li>Advancement campaign leadership</li>
          </ul>
        </li>
        <li><strong>Informal Influence Channels</strong>:
          <ul>
            <li>Political advocacy</li>
            <li>Social media commentary</li>
            <li>Mentoring and career support</li>
            <li>Hiring practices</li>
            <li>Legacy admissions</li>
            <li>Campus events</li>
          </ul>
        </li>
        <li><strong>Governance Challenges</strong>:
          <ul>
            <li>Balancing tradition with change</li>
            <li>Managing divergent generational interests</li>
            <li>Addressing concerns while maintaining direction</li>
            <li>Leveraging expertise without undue influence</li>
            <li>Communication about controversial decisions</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide12",
    title: "Political Context",
    content: `
      <h3>Navigating Political Contexts</h3>
      <ul>
        <li><strong>Political Polarization</strong>:
          <ul>
            <li>Partisan divides on higher education</li>
            <li>Ideological scrutiny of curriculum</li>
            <li>Culture war issues</li>
            <li>Declining bipartisan support</li>
            <li>Regional political variations</li>
          </ul>
        </li>
        <li><strong>Public Perception Challenges</strong>:
          <ul>
            <li>Affordability concerns</li>
            <li>Workforce relevance questions</li>
            <li>Efficiency skepticism</li>
            <li>Declining trust in expertise</li>
            <li>Controversy-focused media coverage</li>
          </ul>
        </li>
        <li><strong>Political Engagement Strategies</strong>:
          <ul>
            <li>Government relations offices</li>
            <li>Coalition-building</li>
            <li>Data-driven impact demonstration</li>
            <li>Strategic communication</li>
            <li>Bipartisan engagement</li>
            <li>Community service emphasis</li>
          </ul>
        </li>
        <li><strong>Governance Implications</strong>:
          <ul>
            <li>Political board appointments</li>
            <li>Policy pressure</li>
            <li>Resource allocation impacts</li>
            <li>Strategic planning considerations</li>
            <li>Crisis management needs</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide13",
    title: "Balancing External Influences",
    content: `
      <h3>Managing Multiple External Stakeholders</h3>
      <ul>
        <li><strong>Competing Demands</strong>:
          <ul>
            <li>State efficiency vs. accreditor quality requirements</li>
            <li>Donor priorities vs. faculty-driven planning</li>
            <li>Political pressures vs. institutional autonomy</li>
            <li>Alumni tradition vs. innovation needs</li>
            <li>Federal compliance vs. administrative simplification</li>
          </ul>
        </li>
        <li><strong>Strategic Approaches</strong>:
          <ul>
            <li>Stakeholder mapping and prioritization</li>
            <li>Proactive communication</li>
            <li>Clear influence boundaries</li>
            <li>Transparent decision processes</li>
            <li>Consistent mission focus</li>
            <li>Diversified resource base</li>
          </ul>
        </li>
        <li><strong>Governance Structures</strong>:
          <ul>
            <li>Advisory groups connecting stakeholders</li>
            <li>External relations committees</li>
            <li>Coordinating administrative offices</li>
            <li>Faculty involvement in partnerships</li>
            <li>Regular impact assessment</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide14",
    title: "Evolving Accountability Landscape",
    content: `
      <h3>The Evolving Accountability Landscape</h3>
      <ul>
        <li><strong>Historical Context</strong>:
          <ul>
            <li>Peer review and professional norms</li>
            <li>Limited external oversight</li>
            <li>Trust-based social contract</li>
            <li>Self-regulated academic quality</li>
            <li>Minimal reporting requirements</li>
          </ul>
        </li>
        <li><strong>Shift to Contemporary Accountability</strong>:
          <ul>
            <li>Growing public investment and scrutiny</li>
            <li>Consumer protection concerns</li>
            <li>Assessment movement</li>
            <li>Performance funding initiatives</li>
            <li>Federal regulation and disclosure</li>
            <li>Market accountability through rankings</li>
            <li>Social media enabling public scrutiny</li>
          </ul>
        </li>
        <li><strong>Current Environment</strong>:
          <ul>
            <li>Multiple, sometimes conflicting demands</li>
            <li>Quantitative metrics emphasis</li>
            <li>Greater transparency expectations</li>
            <li>Outcomes focus</li>
            <li>Self-regulation skepticism</li>
            <li>Sophisticated data capabilities</li>
            <li>Growing compliance burden</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide15",
    title: "Multiple Accountability Relationships",
    content: `
      <h3>Accountability to Multiple Stakeholders</h3>
      <ul>
        <li><strong>Government Accountability</strong>:
          <ul>
            <li>Federal: Compliance, financial aid, research integrity</li>
            <li>State: Efficient use of funds, workforce needs</li>
            <li>Local: Community impact, partnerships</li>
          </ul>
        </li>
        <li><strong>Market Accountability</strong>:
          <ul>
            <li>Students/Families: Quality, outcomes, value</li>
            <li>Employers: Graduate preparation, skills</li>
            <li>Donors: Gift stewardship, impact</li>
          </ul>
        </li>
        <li><strong>Professional Accountability</strong>:
          <ul>
            <li>Accreditors: Quality, stability, mission</li>
            <li>Disciplinary Associations: Program standards</li>
            <li>Higher Education Associations: Best practices</li>
          </ul>
        </li>
        <li><strong>Public Accountability</strong>:
          <ul>
            <li>Media: Transparency, ethical conduct</li>
            <li>Community Partners: Engagement, accessibility</li>
            <li>General Public: Tax advantage justification</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide16",
    title: "Domains of Accountability",
    content: `
      <h3>Accountability Domains</h3>
      <ul>
        <li><strong>Financial Accountability</strong>:
          <ul>
            <li>Resource stewardship</li>
            <li>Accurate reporting</li>
            <li>Internal controls</li>
            <li>Sustainable models</li>
            <li>Efficient operations</li>
            <li>Funding restriction compliance</li>
          </ul>
        </li>
        <li><strong>Educational Accountability</strong>:
          <ul>
            <li>Learning outcomes</li>
            <li>Completion rates</li>
            <li>Post-graduation outcomes</li>
            <li>Educational quality</li>
            <li>Curricular relevance</li>
            <li>Faculty qualifications</li>
          </ul>
        </li>
        <li><strong>Mission Accountability</strong>:
          <ul>
            <li>Activity-mission alignment</li>
            <li>Service to intended populations</li>
            <li>Distinctive contribution</li>
            <li>Public purpose fulfillment</li>
            <li>Core value preservation</li>
            <li>Strategic goal achievement</li>
          </ul>
        </li>
        <li><strong>Ethical and Legal Accountability</strong>:
          <ul>
            <li>Operational integrity</li>
            <li>Fair treatment</li>
            <li>Responsible citizenship</li>
            <li>Ethical practices</li>
            <li>Compliance with laws</li>
            <li>Due process</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide17",
    title: "Accountability Mechanisms",
    content: `
      <h3>Accountability Mechanisms</h3>
      <ul>
        <li><strong>External Review Processes</strong>:
          <ul>
            <li>Accreditation</li>
            <li>Government audits</li>
            <li>Program evaluations</li>
            <li>Financial audits</li>
            <li>Specialized reviews</li>
          </ul>
        </li>
        <li><strong>Internal Assessment</strong>:
          <ul>
            <li>Institutional effectiveness programs</li>
            <li>Learning outcomes assessment</li>
            <li>Program review</li>
            <li>Administrative unit review</li>
            <li>Performance evaluation</li>
            <li>Internal audit</li>
          </ul>
        </li>
        <li><strong>Transparency and Disclosure</strong>:
          <ul>
            <li>Required reporting</li>
            <li>Voluntary data initiatives</li>
            <li>Public dashboards</li>
            <li>Annual reports</li>
            <li>Consumer information</li>
            <li>Open meetings</li>
          </ul>
        </li>
        <li><strong>Stakeholder Engagement</strong>:
          <ul>
            <li>Advisory boards</li>
            <li>Employer feedback</li>
            <li>Alumni surveys</li>
            <li>Community forums</li>
            <li>Student satisfaction assessment</li>
            <li>Climate surveys</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide18",
    title: "Transparency and Ethics",
    content: `
      <h3>Transparency and Ethical Considerations</h3>
      <ul>
        <li><strong>Benefits of Transparency</strong>:
          <ul>
            <li>Builds stakeholder trust</li>
            <li>Enables informed decisions</li>
            <li>Reduces speculation</li>
            <li>Creates improvement incentives</li>
            <li>Demonstrates public service commitment</li>
            <li>Supports shared governance</li>
          </ul>
        </li>
        <li><strong>Legitimate Limits</strong>:
          <ul>
            <li>Personnel privacy</li>
            <li>Student privacy (FERPA)</li>
            <li>Confidential donor arrangements</li>
            <li>Proprietary partnership information</li>
            <li>Legal strategy</li>
            <li>Early-stage planning</li>
          </ul>
        </li>
        <li><strong>Ethical Principles</strong>:
          <ul>
            <li>Proactive important disclosure</li>
            <li>Accessible complex data presentation</li>
            <li>Context for statistics</li>
            <li>Limitation acknowledgment</li>
            <li>Consistent standards</li>
            <li>Appropriate timing</li>
          </ul>
        </li>
        <li><strong>Governance Implications</strong>:
          <ul>
            <li>Clear information policies</li>
            <li>Regular disclosure review</li>
            <li>Privacy training</li>
            <li>Stakeholder education</li>
            <li>Deliberation-transparency balance</li>
            <li>Attention to disclosure consequences</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide19",
    title: "Balancing Accountability and Autonomy",
    content: `
      <h3>Accountability and Autonomy Balance</h3>
      <ul>
        <li><strong>The Case for Autonomy</strong>:
          <ul>
            <li>Academic freedom protection</li>
            <li>Innovation through independence</li>
            <li>Professional expertise for complex judgments</li>
            <li>Long-term mission vs. short-term metrics</li>
            <li>Diverse missions requiring contextual evaluation</li>
            <li>Resource diversion from compliance</li>
          </ul>
        </li>
        <li><strong>The Case for Accountability</strong>:
          <ul>
            <li>Public resource oversight</li>
            <li>Student interest protection</li>
            <li>External quality validation</li>
            <li>Self-regulation limitations</li>
            <li>Societal needs shaping priorities</li>
            <li>Improvement through feedback</li>
          </ul>
        </li>
        <li><strong>Governance Approaches</strong>:
          <ul>
            <li>Principle-based accountability</li>
            <li>Mission-centered evaluation</li>
            <li>Peer-based review</li>
            <li>Streamlined reporting</li>
            <li>Outcomes focus</li>
            <li>Differentiated accountability</li>
            <li>Stakeholder engagement in design</li>
          </ul>
        </li>
        <li><strong>Institutional Strategies</strong>:
          <ul>
            <li>Proactive self-assessment</li>
            <li>Strategic outcome communication</li>
            <li>Policymaker engagement</li>
            <li>Peer collaboration on measures</li>
            <li>Data capacity investment</li>
            <li>Accountability-governance integration</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide20",
    title: "Contemporary Accountability Challenges",
    content: `
      <h3>Emerging Accountability Issues</h3>
      <ul>
        <li><strong>Data Privacy and Security</strong>:
          <ul>
            <li>Student data protection</li>
            <li>Ethical predictive analytics</li>
            <li>Sensitive information sharing</li>
            <li>International regulations</li>
            <li>Cybersecurity threats</li>
          </ul>
        </li>
        <li><strong>Equity-Focused Accountability</strong>:
          <ul>
            <li>Disaggregated outcomes data</li>
            <li>Opportunity gap attention</li>
            <li>Inclusive excellence frameworks</li>
            <li>Community impact</li>
            <li>Representation in leadership</li>
          </ul>
        </li>
        <li><strong>Non-Traditional Education</strong>:
          <ul>
            <li>Online/hybrid delivery</li>
            <li>Alternative credentials</li>
            <li>Competency-based approaches</li>
            <li>Public-private partnerships</li>
            <li>Corporate providers</li>
          </ul>
        </li>
        <li><strong>Holistic Outcomes</strong>:
          <ul>
            <li>Beyond employment metrics</li>
            <li>Civic engagement</li>
            <li>Well-being and development</li>
            <li>Social mobility</li>
            <li>Long-term impacts</li>
          </ul>
        </li>
        <li><strong>Trust and Legitimacy</strong>:
          <ul>
            <li>Declining public confidence</li>
            <li>Political polarization effects</li>
            <li>Social media amplification</li>
            <li>Accessibility-excellence balance</li>
            <li>Value proposition demonstration</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide21",
    title: "Case Study 2 Overview",
    content: `
      <h3>Case Study 2: Navigating a Governance Crisis</h3>
      <ul>
        <li><strong>Veridian University</strong>:
          <ul>
            <li>Mid-sized public university</li>
            <li>Board makes controversial decision without consultation</li>
            <li>Faculty vote of no confidence</li>
            <li>Student protests</li>
            <li>Negative media coverage</li>
            <li>Threatened reputation and stability</li>
          </ul>
        </li>
        <li><strong>Case Elements</strong>:
          <ul>
            <li>University background and governance structure</li>
            <li>Controversial decision details</li>
            <li>Stakeholder reactions</li>
            <li>Current crisis state</li>
            <li>Key figure perspectives</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide22",
    title: "Key Dilemmas in the Case",
    content: `
      <h3>Key Case Dilemmas</h3>
      <ul>
        <li><strong>Governance Process Failures</strong>:
          <ul>
            <li>What breakdowns contributed to crisis?</li>
            <li>How could they have been prevented?</li>
          </ul>
        </li>
        <li><strong>Stakeholder Management</strong>:
          <ul>
            <li>How to engage different perspectives?</li>
            <li>Balancing competing interests?</li>
          </ul>
        </li>
        <li><strong>Communication and Transparency</strong>:
          <ul>
            <li>What information to share?</li>
            <li>With whom, when, and how?</li>
          </ul>
        </li>
        <li><strong>Leadership Responsibilities</strong>:
          <ul>
            <li>Appropriate board, president, faculty roles?</li>
            <li>Who should take what actions?</li>
          </ul>
        </li>
        <li><strong>Short-term vs. Long-term Solutions</strong>:
          <ul>
            <li>Immediate crisis management?</li>
            <li>Structural governance reforms?</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide23",
    title: "Analytical Approach",
    content: `
      <h3>Case Analysis Approach</h3>
      <ol>
        <li>Identify specific governance issues contributing to crisis</li>
        <li>Analyze roles and interests of key stakeholders</li>
        <li>Evaluate ethical implications of decisions and responses</li>
        <li>Propose short-term actions for immediate crisis</li>
        <li>Recommend long-term governance reforms</li>
      </ol>
    `
  },
  {
    id: "m2s2-slide24",
    title: "Connection to Module Concepts",
    content: `
      <h3>Connection to Module Concepts</h3>
      <ul>
        <li><strong>Governance Models</strong>: How different models might have prevented/mitigated crisis</li>
        <li><strong>Board-President-Faculty Relationships</strong>: How key relationship dynamics contributed or could help resolve</li>
        <li><strong>Student Involvement</strong>: Appropriate student roles in addressing crisis</li>
        <li><strong>External Stakeholder Influence</strong>: How external constituencies affect situation and engagement strategies</li>
        <li><strong>Accountability and Transparency</strong>: Information sharing approaches and trust rebuilding</li>
        <li><strong>Academic Freedom and Shared Governance</strong>: Tensions between board authority and academic self-governance</li>
      </ul>
    `
  },
  {
    id: "m2s2-slide25",
    title: "Case Study Process",
    content: `
      <h3>Case Study Process</h3>
      <ul>
        <li>Complete case document provided after session</li>
        <li>Analysis due end of week (before Module 3)</li>
        <li>Target length: 1200-1800 words</li>
        <li>Demonstrate Module 2 concept understanding</li>
        <li>Provide thoughtful, evidence-based recommendations</li>
        <li>Rubric will assess:
          <ul>
            <li>Governance issue identification</li>
            <li>Stakeholder analysis</li>
            <li>Ethical reasoning</li>
            <li>Practical short-term recommendations</li>
            <li>Strategic long-term recommendations</li>
            <li>Professional communication</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "m2s2-slide26",
    title: "Key Themes",
    content: `
      <h3>Key Session Themes</h3>
      <ul>
        <li><strong>Stakeholder Complexity</strong>: Multiple stakeholders with different, sometimes conflicting expectations require sophisticated governance approaches</li>
        <li><strong>Balancing Influences</strong>: External pressures must be balanced with core academic values and institutional autonomy</li>
        <li><strong>Accountability Dimensions</strong>: Financial, educational, mission, ethical, and legal accountability domains require integrated oversight</li>
        <li><strong>Transparency and Trust</strong>: Thoughtful communication, consistent values, and demonstrated integrity build essential stakeholder trust</li>
        <li><strong>Crisis Preparedness</strong>: Effective governance includes mechanisms for preventing, identifying, and addressing potential crises</li>
      </ul>
    `
  },
  {
    id: "m2s2-slide27",
    title: "Key Terms and Concepts",
    content: `
      <h3>Key Terms and Concepts</h3>
      <ul>
        <li>Student governance</li>
        <li>Accreditation requirements</li>
        <li>State governance models</li>
        <li>System governance</li>
        <li>Federal regulatory compliance</li>
        <li>Donor influence</li>
        <li>Alumni engagement</li>
        <li>Political context</li>
        <li>Accountability relationships</li>
        <li>Transparency</li>
        <li>Institutional autonomy</li>
        <li>Stakeholder management</li>
        <li>Governance crisis</li>
        <li>External influence</li>
        <li>Ethical governance</li>
      </ul>
    `
  },
  {
    id: "m2s2-slide28",
    title: "References",
    content: `
      <h3>References</h3>
      <ul>
        <li>Association of Governing Boards. (2017). AGB board of directors' statement on governing board accountability.</li>
        <li>Bahls, S. C. (2014). Shared governance in times of change: A practical guide for universities and colleges.</li>
        <li>Bok, D. (2013). Higher education in America.</li>
        <li>Burke, J. C. (2005). Achieving accountability in higher education: Balancing public, academic, and market demands.</li>
        <li>Eckel, P. D., & Kezar, A. J. (2016). The intersecting authority of boards, presidents, and faculty.</li>
        <li>Ewell, P. T. (2009). Assessment, accountability, and improvement: Revisiting the tension.</li>
        <li>Kelchen, R. (2018). Higher education accountability.</li>
        <li>Kezar, A. (2005). Consequences of radical change in governance: A grounded theory approach.</li>
        <li>May, W. P. (2010). The board's role in crisis management.</li>
        <li>Mortimer, K. P., & Sathre, C. O. (2007). The art and politics of academic governance.</li>
      </ul>
    `
  },
  {
    id: "m2s2-slide29",
    title: "Next Session Preview",
    content: `
      <h3>Next Session</h3>
      <h2>Module 3, Session 1: Foundations of Strategic Planning & Environmental Analysis</h2>
      <ul>
        <li>The Rationale for Strategic Planning in Higher Education</li>
        <li>The Strategic Planning Cycle: Models and Frameworks</li>
        <li>Mission, Vision, and Values: The Foundation of Planning</li>
        <li>Environmental Scanning: External Trends and Forces</li>
        <li>Internal Assessment: Institutional Strengths and Weaknesses</li>
      </ul>
    `
  }
];
