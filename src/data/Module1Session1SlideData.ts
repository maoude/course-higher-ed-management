// src/data/Module1Session1SlideData.ts
export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: string; // HTML content for the slide
}

export const module1Session1Slides: Slide[] = [
  {
    id: "slide1",
    title: "The Landscape and Legacy of Higher Education",
    subtitle: "Module 1, Session 1",
    content: "<h3>Managing Institutional Higher Education</h3>"
  },
  {
    id: "slide2",
    title: "Session Overview",
    content: `
      <h3>Session Overview</h3>
      <ul>
        <li>Historical Perspectives on Higher Education</li>
        <li>The Evolving Role of Higher Education in Society</li>
        <li>The American Higher Education System: Structure, Scale, and Diversity</li>
        <li>Types of Institutions and Their Missions</li>
      </ul>
    `
  },
  {
    id: "slide3",
    title: "Global Origins of Higher Education",
    content: `
      <h3>Global Origins of Higher Education</h3>
      <ul>
        <li><strong>Ancient Centers of Learning</strong>
          <ul>
            <li>Plato's Academy (387 BCE) - Greece</li>
            <li>Nalanda University (5th century CE) - India</li>
            <li>Al-Qarawiyyin University (859 CE) - Morocco</li>
            <li>Imperial Academy (124 BCE) - China</li>
          </ul>
        </li>
        <li><strong>Medieval European Universities</strong>
          <ul>
            <li>University of Bologna (1088)</li>
            <li>University of Paris (c. 1150)</li>
            <li>University of Oxford (c. 1096)</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide4",
    title: "Early University Characteristics",
    content: `
      <h3>Early University Characteristics</h3>
      <ul>
        <li>Faculty governance structures</li>
        <li>Degree-granting authority</li>
        <li>Limited academic freedom</li>
        <li>Latin as common language</li>
        <li>Focus on clergy, medicine, law</li>
        <li>Guild-like structure</li>
        <li>Limited access (elite males)</li>
      </ul>
    `
  },
  {
    id: "slide5",
    title: "American Higher Education: Colonial Period (1636-1776)",
    content: `
      <h3>American Higher Education: Colonial Period (1636-1776)</h3>
      <ul>
        <li><strong>Harvard College (1636)</strong> - First American college</li>
        <li>Eight other colonial colleges established
          <ul>
            <li>William & Mary (1693)</li>
            <li>Yale (1701)</li>
            <li>Princeton (1746)</li>
          </ul>
        </li>
        <li><strong>Characteristics</strong>:
          <ul>
            <li>Small, religiously affiliated</li>
            <li>Classical education</li>
            <li>Elite student population</li>
            <li>European model adaptation</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide6",
    title: "19th Century Expansion",
    content: `
      <h3>19th Century Expansion</h3>
      <ul>
        <li><strong>Morrill Land-Grant Acts (1862, 1890)</strong>
          <ul>
            <li>Federal land to establish public universities</li>
            <li>Practical education focus</li>
            <li>Democratized access</li>
          </ul>
        </li>
        <li><strong>Women's Colleges</strong>
          <ul>
            <li>Oberlin College (1833) - First coeducational</li>
            <li>Mount Holyoke (1837), Vassar (1861)</li>
          </ul>
        </li>
        <li><strong>Historically Black Colleges and Universities</strong>
          <ul>
            <li>Cheyney University (1837)</li>
            <li>Wilberforce University (1856)</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide7",
    title: "20th Century Transformation",
    content: `
      <h3>20th Century Transformation</h3>
      <ul>
        <li><strong>GI Bill (1944)</strong>
          <ul>
            <li>Expanded access for veterans</li>
            <li>Middle-class expectation</li>
          </ul>
        </li>
        <li><strong>Community College Growth</strong>
          <ul>
            <li>1947 Truman Commission Report</li>
            <li>Two-year college network</li>
          </ul>
        </li>
        <li><strong>Civil Rights & Higher Education Act (1965)</strong>
          <ul>
            <li>Federal financial aid</li>
            <li>Anti-discrimination provisions</li>
          </ul>
        </li>
        <li><strong>Title IX (1972)</strong>
          <ul>
            <li>Prohibited sex-based discrimination</li>
            <li>Expanded women's participation</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide8",
    title: "21st Century Challenges",
    content: `
      <h3>21st Century Challenges</h3>
      <ul>
        <li>Globalization and technological change</li>
        <li>Rising costs and questions about value</li>
        <li>Demographic shifts and changing student populations</li>
        <li>Increasing competition and market pressures</li>
        <li>Debates about purpose and accountability</li>
      </ul>
    `
  },
  {
    id: "slide9",
    title: "Economic Contributions",
    content: `
      <h3>Economic Contributions</h3>
      <ul>
        <li><strong>Human Capital Development</strong>
          <ul>
            <li>Skilled workforce preparation</li>
            <li>"College wage premium"</li>
            <li>Reduced unemployment</li>
          </ul>
        </li>
        <li><strong>Research and Innovation</strong>
          <ul>
            <li>New knowledge and technologies</li>
            <li>Patents and startups</li>
            <li>Industry partnerships</li>
          </ul>
        </li>
        <li><strong>Economic Mobility</strong>
          <ul>
            <li>Pathways to middle/upper class</li>
            <li>First-generation opportunities</li>
            <li>Addressing economic inequality</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide10",
    title: "Social and Cultural Contributions",
    content: `
      <h3>Social and Cultural Contributions</h3>
      <ul>
        <li><strong>Citizenship and Civic Engagement</strong>
          <ul>
            <li>Developing informed citizens</li>
            <li>Democratic values</li>
            <li>Civil discourse forums</li>
          </ul>
        </li>
        <li><strong>Cultural Preservation and Advancement</strong>
          <ul>
            <li>Cultural heritage preservation</li>
            <li>Arts and humanities advancement</li>
            <li>Intercultural understanding</li>
          </ul>
        </li>
        <li><strong>Social Justice and Equity</strong>
          <ul>
            <li>Expanding opportunity</li>
            <li>Addressing historical inequities</li>
            <li>Promoting diversity and inclusion</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide11",
    title: "Evolving Societal Expectations",
    content: `
      <h3>Evolving Societal Expectations</h3>
      <ul>
        <li><strong>Traditional Expectations</strong>
          <ul>
            <li>Intellectual development</li>
            <li>Cultural knowledge transmission</li>
            <li>Professional preparation</li>
            <li>Knowledge advancement</li>
          </ul>
        </li>
        <li><strong>Emerging Expectations</strong>
          <ul>
            <li>Career readiness and employability</li>
            <li>Measurable ROI</li>
            <li>Social problem solutions</li>
            <li>Technological adaptation</li>
            <li>Efficiency and accountability</li>
            <li>Economic development</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide12",
    title: "Scale and Scope",
    content: `
      <h3>Scale and Scope</h3>
      <ul>
        <li><strong>By the Numbers</strong>
          <ul>
            <li>~4,000 degree-granting institutions</li>
            <li>19+ million students</li>
            <li>$650+ billion annual expenditures</li>
            <li>4+ million employees (1.5M faculty)</li>
          </ul>
        </li>
        <li><strong>Global Context</strong>
          <ul>
            <li>Largest, most diverse system globally</li>
            <li>Historically dominant in research</li>
            <li>Facing increasing global competition</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide13",
    title: "Structural Characteristics",
    content: `
      <h3>Structural Characteristics</h3>
      <ul>
        <li><strong>Decentralized Governance</strong>
          <ul>
            <li>No federal ministry with direct control</li>
            <li>State-level coordination for public institutions</li>
            <li>Institutional autonomy with shared governance</li>
            <li>Accreditation as quality assurance</li>
          </ul>
        </li>
        <li><strong>Mixed Funding Model</strong>
          <ul>
            <li>Public: state funds, tuition, grants</li>
            <li>Private: tuition, endowments, gifts</li>
            <li>Federal role: research funding, student aid</li>
          </ul>
        </li>
        <li><strong>Hierarchical Prestige System</strong>
          <ul>
            <li>Stratification by selectivity and resources</li>
            <li>Competition for students, faculty, resources</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide14",
    title: "Public Research Universities",
    content: `
      <h3>Public Research Universities</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>State-supported</li>
            <li>Comprehensive academic offerings</li>
            <li>Significant research enterprise</li>
            <li>Multiple schools and colleges</li>
            <li>Large enrollments</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Teaching across levels</li>
            <li>Research and knowledge creation</li>
            <li>Public service and outreach</li>
            <li>Economic development</li>
            <li>Access for state residents</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: University of Michigan, UC Berkeley, UT Austin</li>
      </ul>
    `
  },
  {
    id: "slide15",
    title: "Private Research Universities",
    content: `
      <h3>Private Research Universities</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>Independent, non-profit governance</li>
            <li>Substantial endowments</li>
            <li>Highly selective admissions</li>
            <li>Strong research emphasis</li>
            <li>Higher tuition, more financial aid</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Advanced research and scholarship</li>
            <li>Graduate/professional education</li>
            <li>Undergraduate liberal education</li>
            <li>Knowledge creation</li>
            <li>Leadership development</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: Harvard, Stanford, MIT, Duke</li>
      </ul>
    `
  },
  {
    id: "slide16",
    title: "Liberal Arts Colleges",
    content: `
      <h3>Liberal Arts Colleges</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>Small, undergraduate focus</li>
            <li>Arts and sciences emphasis</li>
            <li>Low student-faculty ratios</li>
            <li>Residential experience</li>
            <li>Primarily private</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Broad, interdisciplinary education</li>
            <li>Critical thinking development</li>
            <li>Close faculty-student interaction</li>
            <li>Graduate study preparation</li>
            <li>Whole-person development</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: Williams, Amherst, Swarthmore, Pomona</li>
      </ul>
    `
  },
  {
    id: "slide17",
    title: "Community Colleges",
    content: `
      <h3>Community Colleges</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>Open access admissions</li>
            <li>Lower tuition costs</li>
            <li>Local/regional focus</li>
            <li>Two-year degrees and certificates</li>
            <li>Diverse student populations</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Affordable access</li>
            <li>Transfer preparation</li>
            <li>Career/technical education</li>
            <li>Workforce development</li>
            <li>Community service</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: Miami Dade College, Northern Virginia CC</li>
      </ul>
    `
  },
  {
    id: "slide18",
    title: "For-Profit Institutions",
    content: `
      <h3>For-Profit Institutions</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>Investor-owned or publicly traded</li>
            <li>Market-driven programs</li>
            <li>Adult/non-traditional focus</li>
            <li>Online/flexible delivery</li>
            <li>Career-oriented curricula</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Accessible, flexible education</li>
            <li>Career preparation</li>
            <li>Serving non-traditional students</li>
            <li>Market responsiveness</li>
            <li>Investor returns</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: University of Phoenix, Strayer, DeVry</li>
      </ul>
    `
  },
  {
    id: "slide19",
    title: "Minority-Serving Institutions",
    content: `
      <h3>Minority-Serving Institutions</h3>
      <ul>
        <li><strong>Historically Black Colleges and Universities (HBCUs)</strong>
          <ul>
            <li>Founded pre-1964 during segregation</li>
            <li>Examples: Howard, Spelman, Morehouse</li>
          </ul>
        </li>
        <li><strong>Hispanic-Serving Institutions (HSIs)</strong>
          <ul>
            <li>25%+ Hispanic/Latino enrollment</li>
            <li>Examples: UT El Paso, FIU</li>
          </ul>
        </li>
        <li><strong>Tribal Colleges and Universities (TCUs)</strong>
          <ul>
            <li>Tribal government chartered</li>
            <li>Examples: Diné College, Salish Kootenai</li>
          </ul>
        </li>
        <li><strong>Asian American and Native American Pacific Islander-Serving Institutions (AANAPISIs)</strong>
          <ul>
            <li>Examples: University of Hawaii, CCSF</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide20",
    title: "MSI Missions and Challenges",
    content: `
      <h3>MSI Missions and Challenges</h3>
      <ul>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Culturally responsive education</li>
            <li>Serving underrepresented students</li>
            <li>Promoting diversity in professions</li>
            <li>Preserving cultural heritage</li>
            <li>Addressing unique population needs</li>
          </ul>
        </li>
        <li><strong>Management Challenges</strong>
          <ul>
            <li>Securing adequate funding</li>
            <li>Addressing historical inequities</li>
            <li>Balancing cultural and educational missions</li>
            <li>Navigating changing demographics</li>
            <li>Demonstrating distinctive value</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "slide21",
    title: "Implications for Management",
    content: `
      <h3>Implications for Management</h3>
      <ol>
        <li><strong>Historical Awareness</strong>: Tradition vs. adaptation</li>
        <li><strong>Mission Clarity</strong>: Alignment with institutional type</li>
        <li><strong>Multiple Stakeholders</strong>: Balancing competing demands</li>
        <li><strong>Changing Context</strong>: Evolving while preserving core values</li>
        <li><strong>Systemic Perspective</strong>: Understanding position in larger ecosystem</li>
      </ol>
    `
  },
  {
    id: "slide22",
    title: "Discussion Questions",
    content: `
      <h3>Discussion Questions</h3>
      <ol>
        <li>How have historical developments shaped current structures? What traditions deserve preservation or reconsideration?</li>
        <li>How do higher education's multiple roles create tensions? How should leaders prioritize?</li>
        <li>What management approaches might be effective for specific institutional types?</li>
        <li>How is higher education's role changing in the 21st century? What are the management implications?</li>
        <li>How did your institution's type, history, and mission shape your experience?</li>
      </ol>
    `
  },
  {
    id: "slide23",
    title: "Key Terms and Concepts",
    content: `
      <h3>Key Terms and Concepts</h3>
      <ul>
        <li>Land-grant institutions</li>
        <li>Liberal arts education</li>
        <li>Open access</li>
        <li>Shared governance</li>
        <li>Academic freedom</li>
        <li>Institutional mission</li>
        <li>Carnegie Classification</li>
        <li>Minority-Serving Institutions</li>
        <li>GI Bill</li>
        <li>Morrill Acts</li>
        <li>Higher Education Act</li>
        <li>Title IX</li>
        <li>Institutional autonomy</li>
        <li>Accreditation</li>
        <li>Public good vs. private benefit</li>
      </ul>
    `
  },
  {
    id: "slide24",
    title: "References",
    content: `
      <h3>References and Further Reading</h3>
      <ul>
        <li>Altbach, P. G., Gumport, P. J., & Berdahl, R. O. (Eds.). (2011). <em>American higher education in the twenty-first century</em>.</li>
        <li>Cohen, A. M., & Kisker, C. B. (2010). <em>The shaping of American higher education</em>.</li>
        <li>Delbanco, A. (2012). <em>College: What it was, is, and should be</em>.</li>
        <li>Kerr, C. (2001). <em>The uses of the university</em>.</li>
        <li>Thelin, J. R. (2011). <em>A history of American higher education</em>.</li>
        <li>Trow, M. (2007). <em>Reflections on the transition from elite to mass to universal access</em>.</li>
      </ul>
    `
  },
  {
    id: "slide25",
    title: "Next Session Preview",
    content: `
      <h3>Next Session</h3>
      <h2>Governance Structures and Decision-Making in Higher Education</h2>
      <ul>
        <li>Models of governance</li>
        <li>Roles and responsibilities</li>
        <li>Shared governance in practice</li>
        <li>External governance influences</li>
        <li>Current governance challenges</li>
      </ul>
    `
  }
];
