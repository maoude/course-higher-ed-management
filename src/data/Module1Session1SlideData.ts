// src/data/Module1Session1SlideData.ts
export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: string; // HTML content for the slide
}

export const module1Session1Slides: Slide[] = [
  {
    id: "title",
    title: "The Landscape and Legacy of Higher Education",
    subtitle: "Module 1, Session 1",
    content: "<h2>Managing Institutional Higher Education</h2><p><em>Exploring the foundations of university leadership and administration.</em></p>"
  },
  {
    id: "overview",
    title: "Session Overview",
    content: `
    <h3>Today's Focus:</h3>
    <ul>
        <li>Historical Perspectives on Higher Education</li>
        <li>The Evolving Role of Higher Education in Society</li>
        <li>The American Higher Education System: Structure, Scale, and Diversity</li>
        <li>Types of Institutions and Their Missions</li>
    </ul>
    `
  },
  {
    id: "historical-global",
    title: "Global Origins of Higher Education",
    content: `
    <h3>Key Milestones:</h3>
    <ul>
        <li><strong>Ancient Centers of Learning</strong>
            <ul>
                <li>Plato's Academy (387 BCE) - Greece: Philosophy, Mathematics</li>
                <li>Nalanda University (5th century CE) - India: Buddhist studies, various sciences</li>
                <li>Al-Qarawiyyin University (859 CE) - Morocco: Oldest continuously operating</li>
            </ul>
        </li>
        <li><strong>Medieval European Universities</strong>
            <ul>
                <li>University of Bologna (1088): Law</li>
                <li>University of Paris (c. 1150): Theology, Arts</li>
                <li>University of Oxford (c. 1096): Early English model</li>
            </ul>
        </li>
    </ul>
    <p>These early institutions laid groundwork for concepts like faculty governance and degree granting.</p>
    `
  },
  {
    id: "early-characteristics",
    title: "Early University Characteristics",
    content: `
    <h3>Defining Features:</h3>
    <ul>
        <li>Faculty governance structures (varying degrees)</li>
        <li>Degree-granting authority</li>
        <li>Limited academic freedom (often tied to religious doctrine)</li>
        <li>Latin as the common scholarly language</li>
        <li>Curriculum focused on clergy, medicine, law</li>
        <li>Guild-like structure for masters and students</li>
        <li>Access predominantly for elite males</li>
    </ul>
    `
  },
  {
    id: "american-colonial",
    title: "American Higher Education: Colonial Period (1636-1776)",
    content: `
    <h3>The New World Model:</h3>
    <ul>
        <li><strong>Harvard College (1636):</strong> First American college, primarily to train ministers.</li>
        <li>Other Colonial Colleges: William & Mary (1693), Yale (1701), Princeton (1746), etc. (Nine in total).</li>
        <li><strong>Key Characteristics</strong>:
            <ul>
                <li>Small, often religiously affiliated (Protestant denominations).</li>
                <li>Classical curriculum (Latin, Greek, rhetoric, moral philosophy).</li>
                <li>Served an elite student population.</li>
                <li>Adapted European models to colonial needs and values.</li>
            </ul>
        </li>
    </ul>
    `
  },
  {
    id: "19th-century",
    title: "19th Century Expansion in the U.S.",
    content: `
    <h3>Democratization & Diversification:</h3>
    <ul>
        <li><strong>Morrill Land-Grant Acts (1862, 1890):</strong>
            <ul>
                <li>Transformed American higher education by providing federal land to states.</li>
                <li>Established public universities with a focus on agriculture, mechanical arts (engineering), and military science, alongside classical studies.</li>
                <li>Aimed to democratize access beyond the elite.</li>
            </ul>
        </li>
        <li><strong>Rise of Women's Colleges:</strong>
            <ul>
                <li>Oberlin College (1833) became the first coeducational college.</li>
                <li>Dedicated women's colleges like Mount Holyoke (1837) and Vassar (1861) were founded.</li>
            </ul>
        </li>
        <li><strong>Historically Black Colleges and Universities (HBCUs):</strong>
            <ul>
                <li>Founded to provide education to African Americans during segregation (e.g., Cheyney University - 1837, Wilberforce University - 1856).</li>
            </ul>
        </li>
    </ul>
    `
  },
  {
    id: "20th-century",
    title: "20th Century Transformation in the U.S.",
    content: `
    <h3>Massification and Federal Involvement:</h3>
    <ul>
        <li><strong>GI Bill (Servicemen's Readjustment Act of 1944):</strong>
            <ul>
                <li>Massively expanded access for returning WWII veterans.</li>
                <li>Shifted college from an elite privilege to a middle-class expectation.</li>
            </ul>
        </li>
        <li><strong>Growth of Community Colleges:</strong>
            <ul>
                <li>Influenced by the 1947 Truman Commission Report ("Higher Education for American Democracy").</li>
                <li>Established a widespread network of accessible two-year colleges.</li>
            </ul>
        </li>
        <li><strong>Civil Rights Movement & Higher Education Act of 1965:</strong>
            <ul>
                <li>Increased federal financial aid (Pell Grants, student loans).</li>
                <li>Included anti-discrimination provisions, furthering access.</li>
            </ul>
        </li>
        <li><strong>Title IX of the Education Amendments of 1972:</strong>
            <ul>
                <li>Prohibited sex-based discrimination in federally funded education programs.</li>
                <li>Dramatically expanded women's participation in academics and athletics.</li>
            </ul>
        </li>
    </ul>
    `
  },
  // Add more slides based on SlideData.tsx content
  // For brevity, I'll add a few more key ones. You can fill in the rest.
  {
    id: "economic-contributions",
    title: "Economic Contributions of Higher Ed",
    content: `
    <h3>Key Economic Roles:</h3>
    <ul>
        <li><strong>Human Capital Development:</strong> Preparing a skilled workforce, the "college wage premium."</li>
        <li><strong>Research and Innovation:</strong> Driving new knowledge, technologies, patents, and startups.</li>
        <li><strong>Economic Mobility:</strong> Providing pathways for upward social and economic movement.</li>
    </ul>
    `
  },
  {
    id: "social-cultural",
    title: "Social and Cultural Contributions",
    content: `
    <h3>Societal Impact:</h3>
    <ul>
        <li><strong>Citizenship and Civic Engagement:</strong> Fostering informed citizens and democratic values.</li>
        <li><strong>Cultural Preservation and Advancement:</strong> Supporting arts, humanities, and cultural heritage.</li>
        <li><strong>Social Justice and Equity:</strong> Expanding opportunity and addressing inequities.</li>
    </ul>
    `
  },
  {
    id: "public-research-unis",
    title: "Focus: Public Research Universities",
    content: `
    <h3>Characteristics:</h3>
    <ul>
        <li>State-supported, comprehensive offerings, significant research.</li>
        <li>Mission: Teaching, Research, Public Service, Economic Development, Access.</li>
        <li>Examples: University of Michigan, UC Berkeley, UT Austin.</li>
    </ul>
    `
  },
  {
    id: "community-colleges-focus",
    title: "Focus: Community Colleges",
    content: `
    <h3>Characteristics:</h3>
    <ul>
        <li>Open access, lower cost, local focus, two-year degrees/certificates.</li>
        <li>Mission: Affordable Access, Transfer Prep, Career/Technical Ed, Workforce Dev.</li>
        <li>Examples: Miami Dade College, Northern Virginia CC.</li>
    </ul>
    `
  },
  {
    id: "conclusion",
    title: "Key Takeaways & Implications",
    content: `
    <h3>Management Implications:</h3>
    <ol>
        <li><strong>Historical Awareness:</strong> Balance tradition with adaptation.</li>
        <li><strong>Mission Clarity:</strong> Align strategies with institutional type and purpose.</li>
        <li><strong>Multiple Stakeholders:</strong> Navigate competing demands effectively.</li>
        <li><strong>Changing Context:</strong> Evolve while preserving core educational values.</li>
        <li><strong>Systemic Perspective:</strong> Understand the institution's role in the broader ecosystem.</li>
    </ol>
    `
  }
];
