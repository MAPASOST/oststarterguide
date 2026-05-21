/**
 * Content data for the OST Starter Guide.
 *
 * Sources:
 *  - CTNCY After School Program Toolkit (CT Network for Children and Youth)
 *  - Pathways to Developing Afterschool Programs in Rural Areas
 *    (TN Afterschool Network / Mott Foundation / United Way)
 *  - Beyond the Bell: A Toolkit for Creating Effective Afterschool and
 *    Expanded Learning Programs, 4th ed. (American Institutes for Research, 2014)
 *
 * SCHEMA
 * ──────
 * Phase  { id, label, tagline, colorKey, icon, sections[], progressCheck? }
 * Section { id, title, intro, blocks[] }
 * Block   — checklist | list | resource  (see types below)
 *
 * Block types used here
 *   checklist → { heading, items: string[] }
 *   list      → { heading, items: string[] }
 *   resource  → { heading, links: { label, href, note? }[] }
 */

export const phases = [
  /* ════════════════════════════════════════════════════════════
     LEARN
     ════════════════════════════════════════════════════════════ */
  {
    id: 'learn',
    label: 'Learn',
    tagline: 'Know the basics before you start programming',
    colorKey: 'blue',
    icon: '🎓',
    progressCheck: {
      title: 'Phase Milestones',
      items: [
        'Hosted a listening session or focus group with community members',
        'Completed a written needs assessment',
        'Met with at least two potential partner organizations',
        'Drafted a mission and values statement',
      ],
    },
    sections: [

      /* ── 1. Community Outreach & Needs Assessment ────────── */
      {
        id: 'community-outreach',
        title: 'Community Outreach & Needs Assessment',
        intro:
          'Research allows you to understand the needs of your community and ensure your program is responsive to those needs. The data you collect through outreach forms the foundation of a needs assessment — a collection of information showing both assets and gaps in community services that grant funders commonly require. Start with an asset map to identify existing strengths, then layer in a needs assessment to surface the gaps your program can fill.',
        blocks: [
          {
            type: 'needsAssessment',
          },
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Create and distribute surveys to parents, youth, and community members through schools and local spaces',
              'Host listening sessions, focus groups, or one-on-one conversations with families, school staff, and business leaders',
              'Conduct an asset map with your advisory group, families, or youth to identify community strengths, resources, and potential partners',
              'Reach out to schools, churches, community centers, and nonprofits to identify what programs already exist and what gaps remain',
              'Document which existing programs offer transportation, meals, financial aid, and other supports',
              'Gather both quantitative data (attendance, demographics, academic performance) and qualitative data (stories, observations, narratives)',
              'Compile findings into a clear needs assessment showing community need, data sources, and areas for your program to address',
              'Conduct a market analysis to gauge community interest in supporting and participating in a new program',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What programs already exist in my community, and what gaps remain unmet?',
              'What are the areas of highest need — academic, social-emotional, physical, or economic?',
              'What do families, youth, school staff, and business leaders want from an afterschool program?',
              'Are families going without child care while parents work, or are older siblings caring for younger children on a regular basis?',
              'What are the existing community assets — spaces, organizations, relationships — I can build on rather than duplicate?',
              'Is there community openness and enough interest to support a new program, or would it make more sense to strengthen an existing one?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CTNCY Community Outreach & Partnerships Guide',
                href: 'https://www.ctncy.org',
                note: 'Step-by-step guide to conducting outreach and building partnerships',
              },
              {
                label: 'CTNCY Needs Assessment Template',
                href: 'https://www.ctncy.org',
                note: 'Structured template mapping audience, area of need, and data sources',
              },
              {
                label: 'Beyond the Bell — Asset Mapping (Tool 34) & Needs Assessment (Tool 35)',
                href: 'https://www.beyondthebell.org',
                note: 'Printable tools for conducting community asset mapping and needs assessments',
              },
              {
                label: 'Afterschool Alliance — America After 3PM',
                href: 'https://afterschoolalliance.org/AA3PM/',
                note: 'National data on afterschool need, demand, and access by state',
              },
            ],
          },
        ],
      },

      /* ── 2. Partnerships ─────────────────────────────────── */
      {
        id: 'partnerships',
        title: 'Partnerships',
        intro:
          'Partnering with schools and community-based organizations helps you build infrastructure, leverage existing resources, and plan for your program\'s longevity. Strong partnerships provide structure, a diverse network, shared funding opportunities, professional knowledge, and cultural relevance. Whether you collaborate with a library, a faith center, a school, or a local nonprofit, the right partners amplify your mission — and all formal partnerships should be documented in a Memorandum of Understanding.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Identify existing programs and organizations in your community that serve similar populations',
              'Evaluate whether strengthening an existing program makes more sense than starting a new one',
              'Distinguish between partners (shared goals and resources), vendors (contracted goods or services), and funders (financial support)',
              'Document all partnership agreements in a Memorandum of Understanding (MOU) that defines roles, responsibilities, and expectations',
              'For school partners specifically: meet with the principal, learn the school improvement plan, and identify where your program supports shared goals',
              'Establish a regular communication rhythm with school-day staff — memos, informational breakfasts, bulletin board updates, and joint meetings',
              'Negotiate data-sharing agreements with school partners to access grades, attendance, and behavior data for program planning',
              'Keep a running list of all contacts and track the status of each relationship as it develops',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Which community organizations or schools would be best positioned to partner with us, and what does each party gain?',
              'What does each potential partner have to lose or gain — and are those gains long-term or short-term?',
              'Are there any fundamental conflicts — political, religious, or values-based — that should be addressed upfront?',
              'How will we align our programming with the school day without simply replicating what happens in classrooms?',
              'Do school-day teachers and staff understand what our program does and how it supports their work?',
              'How will we set up formal agreements that protect both parties and clarify exactly who is responsible for what?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CTNCY MOU Template',
                href: 'https://www.ctncy.org',
                note: 'Sample Memorandum of Understanding for formalizing partnerships',
              },
              {
                label: 'Beyond the Bell — Partnership Planning Worksheet (Tool 2)',
                href: 'https://www.beyondthebell.org',
                note: 'Tool for mapping roles, responsibilities, and goals with each partner',
              },
              {
                label: 'Beyond the Bell — Data-Sharing Agreements With School Partners (Tool 54)',
                href: 'https://www.beyondthebell.org',
                note: 'Template for formalizing data access agreements with school districts',
              },
              {
                label: 'CTNCY Afterschool Map & Database',
                href: 'https://www.ctncy.org',
                note: 'Self-reported map of afterschool programs with contact information',
              },
            ],
          },
        ],
      },

      /* ── 3. Mission & Vision ─────────────────────────────── */
      {
        id: 'mission-vision',
        title: 'Mission & Vision',
        intro:
          'Before you can communicate your program\'s value to partners, funders, or families, you need a clear vision and mission. A vision is your aspirational "big picture" — what the program will ultimately accomplish for youth and community. A mission defines your purpose and the goals you will pursue to achieve it. Both should be rooted in your completed needs assessment and asset map, and agreed upon by your full team before programming begins.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Use your needs assessment and asset map findings to inform your visioning process',
              'Facilitate a visioning session with staff, advisory board members, and key stakeholders to draft a shared vision',
              'Draft a mission statement that defines who you serve, what you do, and why it matters',
              'Draft a vision statement that describes the future your program is working toward',
              'Develop SMART outcomes (Specific, Measurable, Achievable, Relevant, Time-Specific) tied to your goals',
              'Create a theory of change that describes how your planned activities will lead to intended outcomes',
              'Translate your vision and goals into a logic model showing inputs, activities, and expected outcomes',
              'Share drafts with youth, families, and community members for feedback before finalizing',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Who are we here to serve, and why does this community specifically need our program?',
              'What can we offer that is not already available in our area?',
              'What specific, measurable outcomes do we want to see in the youth we serve — and when?',
              'How will we describe the pathway from our activities to those outcomes (our theory of change)?',
              'Does our vision reflect the assets, cultures, and aspirations of the community we serve?',
              'Are the people who will run the program involved in creating the vision, or was it written by someone else?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CTNCY Mission & Vision Worksheet',
                href: 'https://www.ctncy.org',
                note: 'Step-by-step worksheet for writing your mission and vision',
              },
              {
                label: 'Beyond the Bell — Visioning Worksheet (Tool 36), Goal Setting (Tool 37), SMART Outcomes (Tool 38), Theory of Change (Tool 39), Logic Model (Tool 40)',
                href: 'https://www.beyondthebell.org',
                note: 'A suite of planning tools for translating vision into measurable goals and program design',
              },
              {
                label: 'Forum for Youth Investment — Youth Program Quality',
                href: 'https://forumfyi.org',
                note: 'Research and frameworks connecting program mission to youth outcomes',
              },
            ],
          },
        ],
      },

      /* ── 4. Funding ──────────────────────────────────────── */
      {
        id: 'funding',
        title: 'Funding',
        intro:
          'Successful afterschool programs rely on a "braided" approach that weaves together multiple funding sources — public grants, fee-for-service revenue, local business sponsorships, foundation grants, and individual donations. The process of securing funding should begin early. Before making any ask, be clear about how much you need, exactly what it will fund, and how you will demonstrate results to supporters. Plan your revenue and expenses at least two to three years out to identify potential shortfalls before they become crises.',
        blocks: [
          {
            type: 'fundingExplorer',
          },
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Map your full operating costs: rent, utilities, staff wages and benefits, supplies, transportation, professional development, and evaluation',
              'Build a detailed budget for the current year and an overview budget for at least two additional years',
              'Identify public grant opportunities at the local, state, and federal levels (e.g., 21st CCLC, Title I, state child care funding)',
              'Identify private funding: local foundations, corporate sponsors, and individual donors',
              'Evaluate a fee-for-service model with flexible options (daily, weekly, monthly) and discount structures for siblings, referrals, and hardship cases',
              'Conduct a market analysis to gauge community willingness to financially support the program',
              'Consider a fiscal sponsor with 501(c)(3) status to manage finances and access grants in the early stages',
              'Designate someone to grant writing and seek training if needed; build in a 10% line item for evaluation costs',
              'Develop a 3–5 year financial sustainability plan distinguishing renewable from time-limited funding',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What are our core operating costs, and which are fixed versus variable?',
              'Which funding sources are renewable year to year, and which are one-time or expiring?',
              'Are we asking for monetary support, in-kind donations, or both — and are we clear on what donors will receive in return?',
              'What is the expected return on investment for our funders and donors, and how will we measure and report it?',
              'Would a fiscal sponsorship arrangement help us access grant funding faster and reduce administrative burden?',
              'If our primary grant expires, do we have a plan to replace that revenue?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: '21st Century Community Learning Centers (21st CCLC)',
                href: 'https://www.afterschoolalliance.org/21stCLC.cfm',
                note: 'The primary federal funding stream for afterschool programs',
              },
              {
                label: 'You for Youth (Y4Y) — Fiscal Management Planning Checklist',
                href: 'https://y4y.ed.gov',
                note: 'Federal resource with fiscal management tools for afterschool programs',
              },
              {
                label: 'Beyond the Bell — Grant-Writing Tips (Tool 16), Budget Worksheet (Tool 17), In-Kind Contributions (Tool 18), Market Analysis (Tool 15)',
                href: 'https://www.beyondthebell.org',
                note: 'Practical tools for building budgets, applying for grants, and calculating in-kind support',
              },
              {
                label: 'Afterschool Alliance — Grant Finder',
                href: 'https://afterschoolalliance.org',
                note: 'Searchable database of funding opportunities for afterschool programs',
              },
            ],
          },
        ],
      },

      /* ── 5. Licensing ────────────────────────────────────── */
      {
        id: 'licensing',
        title: 'Licensing',
        intro:
          'In most cases, child care programs — including afterschool programs — require state licensing before opening. Licensing exists to promote the health, safety, and welfare of children, and requirements vary by state. It is essential to contact your state licensing office early in planning and complete your application before your first day of programming. There are limited exemptions, and assuming your program qualifies is a common and costly mistake — always confirm directly with your state agency.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Contact your state\'s child care licensing office early in the planning process — do not wait until you are close to opening',
              'Review the full list of possible licensing exemptions to determine whether your program qualifies',
              'Complete and submit your licensing application before opening',
              'Ensure your facility meets all health, safety, and building code requirements tied to your license type',
              'Confirm staff-to-child ratio requirements and plan your staffing accordingly',
              'Review license renewal timelines and establish a calendar for ongoing compliance',
              'Check whether funders, school partners, or your state quality initiative require any additional certifications or accreditation alongside basic licensing',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Does our program model require licensing, or do we qualify for a specific exemption?',
              'Who is the state agency responsible for licensing afterschool and child care programs in our state?',
              'What are the specific staff-to-child ratio, background check, and facility requirements tied to our license?',
              'Are there additional quality recognition programs — such as a Quality Rating and Improvement System (QRIS) — we should pursue alongside basic licensing?',
              'How will we stay current with changing licensing regulations over time?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CT Office of Early Childhood — Division of Licensing',
                href: 'https://portal.ct.gov/OEC/Licensing',
                note: 'CT agency overseeing licensing for child care centers and youth programs',
              },
              {
                label: 'Child Care Aware of America — State Licensing Database',
                href: 'https://www.childcareaware.org/providers/state-licensing-regulations/',
                note: 'Find licensing requirements for all 50 states',
              },
              {
                label: 'National AfterSchool Association — Accreditation',
                href: 'https://naaweb.org',
                note: 'Voluntary quality accreditation for afterschool programs nationwide',
              },
            ],
          },
        ],
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════
     PLAN
     ════════════════════════════════════════════════════════════ */
  {
    id: 'plan',
    label: 'Plan',
    tagline: 'Develop your program design and practices',
    colorKey: 'teal',
    icon: '📋',
    progressCheck: {
      title: 'Phase Milestones',
      items: [
        'Program design and daily schedule determined',
        'Key staff identified and background checks completed',
        'Safe, licensed location secured',
        'Policies and procedures handbook written',
        'Recruitment strategy developed',
        'Evaluation plan established',
      ],
    },
    sections: [

      /* ── 1. Program Design & Schedule ────────────────────── */
      {
        id: 'program-design',
        title: 'Program Design & Schedule',
        intro:
          'Your daily structure and schedule are the skeleton of your program. High-quality programs ground their design in a youth development approach — building on young people\'s strengths, creating a safe and relevant environment, and offering opportunities for choice, leadership, and skill-building. Before deciding on a schedule model, revisit your vision and the needs your assessment revealed. A consistent schedule builds trust with families, school staff, and youth.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Choose a schedule model that matches family need: traditional (dismissal to 5–6 PM), extended hours (to 7–9 PM), school\'s-out/break-specific, before-and-after care, or drop-in',
              'Determine the age range(s) you will serve and plan age-appropriate spaces, activities, and supervision ratios for each group',
              'Build a daily schedule that balances structured activities with unstructured flex time and accounts for the school-to-afterschool transition',
              'Plan for the four transition needs when youth arrive from school: physical activity (laps), food and drink (snacks), social time (raps), and quiet rest (naps)',
              'Apply a youth development framework (e.g., Search Institute\'s 40 Developmental Assets or the 5 C\'s) to ground design decisions',
              'For teens: incorporate mentoring opportunities, college/graduation readiness, and options that give older youth a distinct, respected role',
              'Post schedules visibly in the program space, share them with families at enrollment, and update them online when changes occur',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What hours do families in our community most need coverage, and can we realistically staff and fund those hours?',
              'How will we structure the day to support youth who need movement, quiet time, social connection, and academic support after school?',
              'How does our schedule model reflect what we learned in our community needs assessment?',
              'How will our design support the transition from a structured school day to an afterschool environment with different expectations?',
              'Are we designing for all youth — including those with disabilities, language differences, or non-standard schedules — or only for the "average" participant?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Program Plan Template (Tool 41) & Program Schedule (Tool 13)',
                href: 'https://www.beyondthebell.org',
                note: 'Templates for creating a program plan and daily/weekly schedule',
              },
              {
                label: 'Search Institute — 40 Developmental Assets',
                href: 'https://www.search-institute.org',
                note: 'Research-based framework of internal and external assets that support positive youth development',
              },
              {
                label: 'Forum for Youth Investment — Weikart Center for Youth Program Quality',
                href: 'https://forumfyi.org',
                note: 'Quality frameworks and tools for designing and improving youth programs',
              },
              {
                label: 'CT Afterschool Quality Standards — Core Area 4: Activities & Programming',
                href: 'https://www.ctncy.org',
                note: 'Research-based benchmarks for youth-centered program design',
              },
            ],
          },
        ],
      },

      /* ── 2. Curriculum & Activities ──────────────────────── */
      {
        id: 'curriculum-activities',
        title: 'Curriculum & Activities',
        intro:
          'A high-quality afterschool program offers diverse, age-appropriate, and accessible activities that reflect the interests and cultures of the youth it serves. The most effective programs use the SAFE approach — activities that are Sequenced, Active, Focused, and Explicit — to build skills deliberately. Balance matters too: a strong activity mix includes academic enrichment, creative arts, physical and recreational activity, service learning, and social-emotional skill building. Authentic youth voice in choosing activities drives engagement and builds belonging.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Administer a youth interest survey before the program begins and use results to shape the activity lineup',
              'Design activities using the SAFE framework: Sequenced (connected steps), Active (hands-on), Focused (clear skill target), Explicit (name what\'s being learned)',
              'Balance academic enrichment with creative arts, physical activity, service learning, and social-emotional learning across the week',
              'Choose curricula that include hands-on activities, SEL competencies, easily available materials, and age-appropriate, inclusive design',
              'Practice new activities with staff before introducing them to youth',
              'Align some programming with school-day learning standards without replicating the classroom environment',
              'Build in regular check-ins or circle time for youth to share feedback on what\'s working and what they want next',
              'After completing a curriculum block, survey youth on their experience and interests to guide future planning',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What are the interests, cultures, and backgrounds of the youth we serve — and how are they reflected in our activity choices?',
              'Are our activities inclusive of youth with varying physical, cognitive, and social-emotional abilities?',
              'How do we give youth real power to influence what they learn and do — not just the appearance of choice?',
              'Are we connecting some programming to what youth are working on in school, without making afterschool feel like more school?',
              'How will we evaluate whether a curriculum is working, and what will we do when it isn\'t?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Intentional Activities (Tool 73), Activity Planner (Tool 71), Youth Preference Survey (Tool 72)',
                href: 'https://www.beyondthebell.org',
                note: 'Tools for designing youth-centered, skill-building activities aligned to program goals',
              },
              {
                label: 'CASEL — Social-Emotional Learning Frameworks',
                href: 'https://casel.org',
                note: 'Evidence-based SEL competencies and curricula for youth programs',
              },
              {
                label: 'Mizzen by Mott — Curriculum Finder',
                href: 'https://mizzeneducation.com',
                note: 'Searchable library of high-quality, vetted afterschool curricula',
              },
              {
                label: 'BOOST Collaborative',
                href: 'https://www.boostconference.org',
                note: 'Professional resources, curriculum ideas, and national conference for OST educators',
              },
            ],
          },
        ],
      },

      /* ── 3. Policies & Procedures ────────────────────────── */
      {
        id: 'policies-procedures',
        title: 'Policies & Procedures',
        intro:
          'Written policies and procedures are the backbone of a safe, consistent, and legally compliant afterschool program. Policies are the rules under which your program operates; procedures are how you put those rules into action. Having too many rules can hinder operations, so aim for a balance: enough structure to provide clear guidance, enough flexibility for local leaders and staff to respond to real situations. All policies must be in place before you open, shared with staff and families, and reviewed at least annually.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Develop medical policies: dispensing medication, asthma, head lice, handwashing, illness, and injury',
              'Develop safety policies: emergency procedures, transportation, youth arrival and departure, visitor sign-in/out, internet use, and secure data management',
              'Develop behavioral policies: positive guidance, behavior guidelines created with youth input, child abuse and neglect reporting, and follow-up for late or absent youth',
              'Develop administrative policies: staff and volunteer screening, background checks, enrollment and termination, confidentiality, and inventory tracking',
              'Document all policies in writing, distribute them to staff and families, and post behavior guidelines in the program space',
              'Review all funder and partner contracts for required policy deliverables',
              'Establish documentation practices: attendance sheets, sign-out forms, activity plans, assessment records, and youth portfolios',
              'Create a review schedule to update all policies at least annually',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Have all required policies been documented and reviewed by appropriate legal, licensing, and organizational stakeholders?',
              'Do our policies comply with state licensing requirements and funder expectations?',
              'Do our behavior guidelines reflect a strengths-based approach — and were youth involved in creating them?',
              'How will we communicate policies to staff, families, and volunteers, and confirm their understanding?',
              'What documentation practices will help us track what\'s happening in the program and demonstrate quality to funders and partners?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Procedure Checklist (Tool 5), Sample Policies Table of Contents (Tool 6), Making Rules as a Team (Tool 12)',
                href: 'https://www.beyondthebell.org',
                note: 'Templates for building comprehensive, youth-centered policies and procedures',
              },
              {
                label: 'CTNCY Program Policy Review Checklist',
                href: 'https://www.ctncy.org',
                note: 'Comprehensive checklist covering medical, safety, behavioral, and administrative policies',
              },
              {
                label: 'You for Youth (Y4Y) — Policies & Procedures Templates',
                href: 'https://y4y.ed.gov',
                note: 'Customizable policy templates for afterschool programs',
              },
            ],
          },
        ],
      },

      /* ── 4. Staffing & Background Checks ─────────────────── */
      {
        id: 'staffing',
        title: 'Staffing & Background Checks',
        intro:
          'Your program\'s quality rises and falls with the people in the room every day. A mixed staffing model — combining qualified program staff, content-area vendors or teaching artists, strong youth workers, and a skilled program leader — creates the richest environment for youth. All adults, including volunteers and interns, must complete a comprehensive background check before working with youth. Staff turnover is one of the biggest challenges in the field; investing in people from day one is the single most effective strategy for keeping a great team.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Write detailed job descriptions for every position, including volunteers, that outline daily tasks, reporting structures, and required qualifications',
              'Post job listings widely: local media, college of education job boards, your program website, social media, and the site where the program will take place',
              'Complete a comprehensive background check through your state\'s system for every adult before they work with youth — including volunteers and vendors',
              'Use structured interviews with consistent questions for all candidates; include other staff and, when possible, youth in the process',
              'Determine a staff-to-youth ratio that meets licensing requirements and is appropriate for each age group',
              'Research salary ranges and benefits standards for your region and build them into the budget from the start — comparable wages for similar roles are essential',
              'Develop a staff orientation curriculum that covers program philosophy, behavior management, mandated reporter training, and policies and procedures',
              'Create a plan for regular staff meetings, booster trainings, one-on-one reflection conversations, and career development support',
              'Plan how volunteers and external program providers will be recruited, onboarded, and supervised alongside paid staff',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What mix of qualifications, experience, and personal qualities are we looking for — and how do we balance all three?',
              'Are we recruiting from within the community we serve? Local staff bring trust, context, and connections that outside hires often lack.',
              'How will we ensure all adults complete background checks before having contact with youth — including last-minute subs and volunteers?',
              'Are our wages and benefits competitive enough to attract and retain quality staff, even when we can\'t pay top dollar?',
              'What non-monetary investments — autonomy, recognition, career growth, team culture — can help offset limited compensation?',
              'How will we manage staff turnover in a way that protects consistency for youth and families?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Job Descriptions (Tools 19–20), Interview Questions (Tool 22), Candidate Questionnaire (Tool 21), Staff Satisfaction Survey (Tool 27)',
                href: 'https://www.beyondthebell.org',
                note: 'A full suite of hiring and retention tools from recruiting through recognition',
              },
              {
                label: 'CT Background Check Information System (BCIS)',
                href: 'https://portal.ct.gov/OEC/Background-Checks/Background-Checks',
                note: 'CT\'s system for completing background checks for child care providers',
              },
              {
                label: 'CT Afterschool Quality Standards — Core Area 3: Administration & Staffing',
                href: 'https://www.ctncy.org',
                note: 'Benchmarks for ethical and effective staffing practices',
              },
              {
                label: 'Indeed — How to Build Pay Grades and Salary Ranges',
                href: 'https://www.indeed.com/hire/c/info/salary-ranges',
                note: 'Practical guide to creating equitable compensation structures',
              },
            ],
          },
        ],
      },

      /* ── 5. Space & Environment ──────────────────────────── */
      {
        id: 'space-environment',
        title: 'Space & Environment',
        intro:
          'Your indoor and outdoor environment sends a message to every young person who walks through the door about whether they belong, whether they are safe, and whether this place was designed with them in mind. A quality environment supports all program activities, meets all health and safety requirements, and is inclusive of youth with a wide range of physical, cognitive, and social-emotional needs. If you are sharing or renting space, get the terms in writing before you begin.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Verify the space meets all federal, state, and local health, safety, and building code requirements',
              'Confirm ADA compliance and wheelchair accessibility for youth, families, and staff',
              'Create a calm, low-stimulation space for youth who are overwhelmed or need sensory breaks',
              'Designate distinct high-energy and low-energy zones to support different activity types simultaneously',
              'Provide neurodiversity accommodations: earplugs, alternative seating, soft lighting, written and verbal instructions, and minimized visual clutter',
              'Let youth put a physical stamp on the space — hang their artwork, post photos of program activities, or have them help design an area',
              'If renting or sharing space, draft a written agreement defining usage days and times, off-limits areas, damage protocols, and compensation',
              'Consider renting on a trial basis before committing to a long-term lease or purchase',
              'Identify whether furniture, equipment, and technology are included in any space agreement, and plan for gaps',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Is the space suitable for the age groups we serve — with appropriate areas for movement, eating, homework, and quiet reflection?',
              'Does the space meet ADA requirements and provide genuine access for youth and families with disabilities?',
              'Are there external regulations from the building owner or a partner organization that restrict how we can use the space?',
              'If we are sharing space with a school or another organization, are the terms of that relationship clearly documented and agreed upon?',
              'How will we adapt the space as our program grows, and what is the plan if we need to move?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'ACT Now — Neurodiversity in OST Toolkit',
                href: 'https://ilactnow.org',
                note: 'Strategies for fostering inclusion and practical accommodation approaches',
              },
              {
                label: 'Beyond the Bell — Tips for Allocating Space and Resources (Chapter 3)',
                href: 'https://www.beyondthebell.org',
                note: 'Guidance on sharing space with schools and community organizations',
              },
              {
                label: 'ADA National Network — Accessibility in Youth Programs',
                href: 'https://adata.org',
                note: 'Guidance on ADA compliance for youth-serving organizations',
              },
            ],
          },
        ],
      },

      /* ── 6. Safety, Health & Nutrition ───────────────────── */
      {
        id: 'safety-health-nutrition',
        title: 'Safety, Health & Nutrition',
        intro:
          'Establishing systems for safety, health, and nutrition before your first day is non-negotiable. Youth need to feel physically and emotionally safe to learn and thrive — and a warm, welcoming environment that fosters genuine belonging is the most effective behavior prevention strategy you have. Equally important: many youth arriving from school are hungry, and providing meals or snacks not only improves program quality but significantly lowers the barrier to participation for families experiencing food insecurity.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Develop emergency procedures for harm, violence, medical emergencies, fire, and other crises',
              'Ensure all staff are trained in first aid, CPR, and mental health first aid before opening',
              'Establish a zero-tolerance policy for bullying and aggression, and develop conflict resolution strategies with youth input',
              'Create health protocols for common situations: illness, injury, dispensing medication, head lice, and handwashing',
              'Greet every youth by name at the door, every day — relationships are the foundation of a safe environment',
              'Assess the dietary needs, allergies, and cultural food preferences of the youth you serve',
              'Plan for snacks and meals at every session — determine whether you qualify for federal nutrition reimbursement programs',
              'Establish clear pick-up and drop-off procedures and a written protocol for late or unauthorized pick-up',
              'Conduct regular safety drills and walkthroughs with staff and youth',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'How will we respond in a case of physical harm, violence, or a mental health crisis?',
              'Are all staff trained in first aid, CPR, and mental health first aid — and how will we keep certifications current?',
              'Have we co-created clear, strengths-based behavior guidelines with youth so everyone understands and owns the community norms?',
              'What are the dietary needs, allergies, and cultural food preferences of the youth in our program?',
              'Does our program qualify for the USDA Child and Adult Care Food Program (CACFP) or state afterschool snack reimbursement?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'USDA — Child and Adult Care Food Program (CACFP)',
                href: 'https://www.fns.usda.gov/cacfp/afterschool-care-programs',
                note: 'Federal reimbursement for meals and snacks served in eligible afterschool programs',
              },
              {
                label: 'Beyond the Bell — Youth Development Checklist (Tool 63), Decision Wheel (Tool 65), Activity Ideas for Welcoming Environment (Tool 66)',
                href: 'https://www.beyondthebell.org',
                note: 'Tools for building a physically and emotionally safe program environment',
              },
              {
                label: 'Mental Health First Aid',
                href: 'https://www.mentalhealthfirstaid.org',
                note: 'Training programs for staff supporting youth mental health',
              },
              {
                label: 'StopBullying.gov — Community Action Planning',
                href: 'https://www.stopbullying.gov',
                note: 'Resources for building a bullying-free program environment',
              },
            ],
          },
        ],
      },

      /* ── 7. Transportation ───────────────────────────────── */
      {
        id: 'transportation',
        title: 'Transportation',
        intro:
          'Transportation is one of the most significant barriers to afterschool participation in urban, suburban, and rural communities alike. Solving it — even partially — can dramatically expand who your program reaches. Whatever options you choose, safety comes first: verify licensure, current background checks, and required safety equipment for all drivers. And always have a clear written plan for late pick-up and unexpected dismissal changes.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Map the distance between school(s) and your program site and assess whether youth can walk safely, potentially with a staff-escorted "walking bus"',
              'Explore school bus coordination with the local school district',
              'Investigate public transit subsidies from the city, state, or a community partner',
              'Assess whether a program vehicle is feasible — explore vehicle donations from local businesses or sharing arrangements with other community organizations',
              'Organize a family carpooling network as a low-cost supplemental option',
              'Verify all drivers have valid licenses, current background checks, and required safety equipment (e.g., car seats where applicable)',
              'Establish a written protocol for late pick-up, including how long youth will be supervised and how families will be notified',
              'For field trips: create a formal field trip plan, send permission slips in advance, and communicate details to school staff',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Do youth have a safe, reliable way to get from school to our program?',
              'How will youth get home safely — especially for extended or evening hours?',
              'What is our plan when a family is late for pick-up or a transportation arrangement falls through?',
              'Can we partner with the school district, city government, or another organization to share transportation costs?',
              'Are all transportation arrangements properly documented, insured, and compliant with state regulations?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Field Trip Planning Template (Tool 51), Field Trip Permission Form (Tool 52)',
                href: 'https://www.beyondthebell.org',
                note: 'Templates for planning and documenting field trips with school and family communication',
              },
              {
                label: 'Safe Routes to School National Partnership',
                href: 'https://saferoutespartnership.org',
                note: 'Resources for planning safe walking and biking routes for youth',
              },
              {
                label: 'NHTSA — School Bus Safety',
                href: 'https://www.nhtsa.gov/road-safety/school-bus-safety',
                note: 'Federal safety standards and guidance for school transportation',
              },
            ],
          },
        ],
      },

      /* ── 8. Recruitment ──────────────────────────────────── */
      {
        id: 'recruitment',
        title: 'Recruitment',
        intro:
          'Getting enough youth to register requires a culturally responsive recruitment strategy that meets families where they are and makes enrollment as easy as possible. Recruitment is not a one-time event — it is an ongoing part of the program year, and your approach should evolve based on who does and doesn\'t show up and why. Once youth enroll, a clear and welcoming enrollment process sets the tone for everything that follows.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Identify the communication channels families use most — text, social media, flyers, in-person — and meet them there',
              'Find trusted community messengers — teachers, faith leaders, coaches, local business owners — who can help spread the word',
              'Make registration as simple as possible; offer both paper and digital options, and provide assistance for families who need it',
              'Create a clear enrollment form that captures family contact information, health/allergy needs, and signed permissions at intake',
              'At enrollment, give families a clear information sheet covering program start date, schedule, attendance expectations, and costs',
              'Make enrollment materials available in the languages commonly spoken in your community',
              'Host community events in your program space so families can see the environment before committing',
              'Partner with schools to reach youth through classroom visits, in-school events, and materials sent home',
              'Clearly communicate program costs, scholarship availability, and payment options in all materials — don\'t let cost be a silent barrier',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What communication channels are families most comfortable with — and are we reaching them there?',
              'Who are the trusted messengers in our community whose endorsement would carry real weight with families?',
              'Is our registration process accessible to families with language barriers, limited technology access, or very busy schedules?',
              'How will we reach families who are most in need of our program but least likely to hear about it organically?',
              'Do our enrollment materials and forms clearly explain what families can expect — and do they feel welcoming rather than bureaucratic?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Sample Enrollment Form (Tool 8), Enrollment Confirmation to Family (Tool 9), Consent to Share Information (Tool 10)',
                href: 'https://www.beyondthebell.org',
                note: 'Templates for enrollment, family communication, and data consent',
              },
              {
                label: 'Beyond the Bell — Tips for Developing Outreach & Marketing Materials (Tool 7)',
                href: 'https://www.beyondthebell.org',
                note: 'Practical guidance for designing recruitment materials for multiple audiences',
              },
              {
                label: 'Summer Learning Recruitment Toolkit',
                href: 'https://www.summerlearning.org',
                note: 'Templates and messaging strategies for recruiting youth and families',
              },
            ],
          },
        ],
      },

      /* ── 9. Family Engagement ────────────────────────────── */
      {
        id: 'family-engagement',
        title: 'Family Engagement',
        intro:
          'Partnerships with families are not a nice-to-have — they are essential. Engaged families are your best advocates, your most reliable source of honest feedback, and a critical factor in whether youth stay in your program long enough to benefit from it. Building trust takes time and consistency. Design engagement strategies that are accessible, culturally affirming, and genuinely inclusive of diverse family structures — and give families real power, not just the opportunity to be informed.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Create a written family engagement plan mapping how you will build relationships, involve families in programming, and include them in decision-making',
              'Establish regular, two-way communication from day one: newsletters, texts, phone calls, or whatever channels families prefer',
              'Greet families during drop-off and pick-up — brief daily contact builds relationships over time',
              'Host family events that are welcoming, accessible, and culturally relevant: dinners, cultural celebrations, youth performances, enrichment nights',
              'Offer open drop-in hours so families can visit and observe the program without a formal appointment',
              'Create a family advisory group or include family representatives on your advisory board with genuine decision-making roles',
              'Survey families regularly and demonstrate that their feedback leads to visible changes',
              'Where possible, offer wraparound supports at family events: adult education, college/career readiness, flexible childcare',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'How will we build authentic, trusting relationships with families — not just notify them of program activities?',
              'What does it actually take for families in our community to participate in events — and are we removing those barriers?',
              'How will we create opportunities for families to be heard and to genuinely influence program decisions?',
              'Are our engagement strategies inclusive of families with language barriers, non-traditional schedules, or limited transportation?',
              'What happens when a family is dissatisfied or disengaged — how do we notice, respond, and repair the relationship?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Family Engagement Survey (Tool 55), Introductory Communication With Families (Tool 57)',
                href: 'https://www.beyondthebell.org',
                note: 'Tools for gauging family interests and communicating with families from day one',
              },
              {
                label: 'ACT Now — Family Engagement Toolkit',
                href: 'https://ilactnow.org',
                note: 'Strategies and templates for developing a robust family engagement plan',
              },
              {
                label: 'CT Afterschool Quality Standards — Core Area 2: Family & Community Partnerships',
                href: 'https://www.ctncy.org',
                note: 'Quality benchmarks for centering families and communities in afterschool',
              },
            ],
          },
        ],
      },

      /* ── 10. Data & Evaluation ───────────────────────────── */
      {
        id: 'data-evaluation',
        title: 'Data & Evaluation',
        intro:
          'Evaluation is not the same as data collection. Data collection gathers information; evaluation uses that information to answer the question, "What is and isn\'t working — and why?" There are two types of evaluation to plan for: formative (ongoing, used to improve the program in real time) and summative (end-of-year, used to assess impact). Start simple, evaluate a few things well, and build from there. A strong culture of data discussion — with staff, youth, families, and partners — turns findings into action.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Identify 3–5 core outcomes you will track, tied directly to your program goals and theory of change',
              'Choose evaluation tools aligned to your outcomes that are feasible for your staff to administer — use existing validated tools rather than creating new ones',
              'Establish an attendance tracking system and demographic data collection process before your first day',
              'Implement regular program quality observations using a structured observation tool',
              'Distribute simple surveys to youth, families, and staff 2–3 times per year to monitor satisfaction and gather feedback',
              'Set up a data review schedule (monthly or quarterly) and assign clear responsibility for data entry, analysis, and reporting',
              'Establish a feedback loop: share findings with youth, families, staff, and advisory board members, and document what you will change in response',
              'Allocate at least 10% of your budget to evaluation — and if you pursue an external evaluator, select them early and involve them in planning from the start',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What outcomes matter most to the youth, families, and funders we serve — and are they the outcomes we\'re actually measuring?',
              'Are we doing formative evaluation (to improve) and summative evaluation (to assess impact), or only one of the two?',
              'Who on our team has enough evaluation experience to make sense of the data we collect?',
              'How will we share findings with youth, families, funders, and partners in a way that is transparent and accessible?',
              'How will we close the loop — turning data insights into program improvements that youth and families can actually see?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Evaluation Purpose Worksheet (Tool 83), Indicators for Program Goals (Tool 84), Program Observation Tools (Tool 85), Data Discussions (Tool 91)',
                href: 'https://www.beyondthebell.org',
                note: 'A complete evaluation planning toolkit from setting questions to using findings',
              },
              {
                label: 'CTNCY — CT Quality Program Self-Assessment (CTQSAT)',
                href: 'https://www.ctncy.org',
                note: 'CT\'s annual quality self-assessment tool with coaching support and action planning',
              },
              {
                label: 'You for Youth (Y4Y) — Data Collection & Evaluation Tools',
                href: 'https://y4y.ed.gov',
                note: 'Federal tools for tracking outcomes and continuous improvement',
              },
            ],
          },
        ],
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════
     GROW
     ════════════════════════════════════════════════════════════ */
  {
    id: 'grow',
    label: 'Grow',
    tagline: 'Take your program to the next level',
    colorKey: 'green',
    icon: '🌱',
    sections: [

      /* ── 1. Professional Development ─────────────────────── */
      {
        id: 'professional-development',
        title: 'Professional Development',
        intro:
          'No staff member will arrive with every skill your program needs — and that\'s expected. What matters is building a culture of continuous learning. A strong professional development program includes staff orientation at the start of each year, periodic booster sessions, topical trainings on specific skills, and external opportunities like conferences and courses. Choosing the right topics is as important as offering opportunities: survey staff at least once per year to find out what they most need to grow.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Deliver a staff orientation at the start of each program year covering program philosophy, behavior management, mandated reporter training, and policies and procedures',
              'Survey staff annually using a professional development survey to identify skill gaps and learning priorities',
              'Create individual professional development plans with clear goals and timelines for each staff member',
              'Offer at least monthly professional development opportunities, including booster sessions, topical trainings, and peer learning',
              'Build in regular one-on-one reflection conversations and self-assessment opportunities for staff to identify their own growth areas',
              'Connect staff to external PD: conferences, local workshops, online courses, and college classes where feasible',
              'Partner with other programs to share PD costs or co-facilitate joint training sessions',
              'Publicly recognize staff growth and achievement: newsletters, "staff of the month," end-of-year celebrations',
              'Maintain accurate and organized employee records for legal compliance, payroll, and performance tracking',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What specific skills do team members most need right now — and what learning format works best for them?',
              'Are we offering salary and benefits that reflect the value of our staff\'s work, and how do we compare to the local market?',
              'How will we apply professional learning back in the program — not just attend trainings and move on?',
              'What non-monetary investments — autonomy, career advancement, peer learning, recognition — can help us retain staff we can\'t fully compensate?',
              'Are we training staff in data-driven decision-making, so they can use program information to improve their own practice?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Professional Development Plan (Tool 23), Staff Training Survey (Tool 24), Self-Assessment of Effective Qualities (Tool 26)',
                href: 'https://www.beyondthebell.org',
                note: 'Planning and self-assessment tools to guide individual and organizational PD',
              },
              {
                label: 'CTNCY Training & Professional Development',
                href: 'https://www.ctncy.org',
                note: 'Conferences, workshops, and technical assistance for CT afterschool professionals',
              },
              {
                label: 'National AfterSchool Association (NAA)',
                href: 'https://naaweb.org',
                note: 'Professional standards, credentialing, and national conference for OST practitioners',
              },
              {
                label: 'BOOST Collaborative',
                href: 'https://www.boostconference.org',
                note: 'Annual conference and year-round professional community for OST educators',
              },
              {
                label: 'ACT Now — Professional Development Planning Tool',
                href: 'https://ilactnow.org',
                note: 'Helps staff track professional goals and career progress over time',
              },
            ],
          },
        ],
      },

      /* ── 2. Strategic Planning ───────────────────────────── */
      {
        id: 'strategic-planning',
        title: 'Strategic Planning',
        intro:
          'Strategic planning is how organizations set direction, allocate resources intentionally, and stay agile when circumstances change. According to evaluation experts, strategic plans are "ways of thinking, acting, and pivoting over time in a desired direction." A strong plan is built collaboratively, grounded in your mission and evaluation data, informed by a clear-eyed SWOT analysis, and revisited regularly. Think of it as a living tool — not a document you finalize and file.',
        blocks: [
          {
            type: 'planningTimeline',
          },
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) with a diverse group of collaborators',
              'Engage program staff, families, community partners, and youth in the planning process — not just leadership',
              'Use your program quality self-assessment (e.g., CTQSAT) and evaluation data as key inputs to planning',
              'Develop a multi-year plan (3–5 years) that addresses financial sustainability, programmatic growth, and staffing',
              'Build a theory of change and logic model that connects your planned activities to intended outcomes',
              'Keep expansion plans realistic and grounded in current budget and participation data — internal growth first',
              'Establish a regular review cycle (at minimum annually) to assess progress, surface new challenges, and adjust the plan',
              'Continue marketing and communication long after the program opens — visibility is part of sustainability',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What do we want to achieve as an organization in the next three to five years — and why?',
              'What are our genuine strengths, and what gaps or weaknesses could stall our progress?',
              'What external opportunities — funding trends, policy shifts, new partnerships — are we not yet taking advantage of?',
              'What threats — expiring grants, staff turnover, policy changes, competition — could affect our work?',
              'Who needs to be at the planning table for our strategic plan to truly reflect the community we serve?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Theory of Change (Tool 39), Logic Model (Tool 40), "Big Picture" Meeting Agenda (Tool 95), Continuous Improvement Reflection Tool (Tool 96)',
                href: 'https://www.beyondthebell.org',
                note: 'Tools for strategic program planning and using evaluation findings to improve',
              },
              {
                label: 'CTNCY — CT Quality Program Self-Assessment (CTQSAT)',
                href: 'https://www.ctncy.org',
                note: 'Use CTQSAT findings as data inputs to your strategic planning process',
              },
              {
                label: 'PIE NET — Strategic Planning for Nonprofits',
                href: 'https://www.pieorg.org',
                note: 'Frameworks and guidance for afterschool and youth-serving organizations',
              },
            ],
          },
        ],
      },

      /* ── 3. Advocacy ─────────────────────────────────────── */
      {
        id: 'advocacy',
        title: 'Advocacy',
        intro:
          'Afterschool programs are shaped by policy and funding decisions made at local, state, and federal levels. Advocacy means making sure the people who make those decisions understand what afterschool programs do, who they serve, and why sustained public investment matters. Effective advocacy uses both data — from your program and from national research — and stories: the human experiences that make the numbers real. Every program leader has a story worth telling, and every story is a form of advocacy.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Learn the names of your local, state, and federal elected representatives and identify which committees they serve on',
              'Invite elected officials to visit your program and meet the youth and families you serve — in-person visits are the most powerful advocacy tool',
              'Collect compelling stories — with permission — from youth, families, and staff that illustrate your program\'s impact',
              'Use data from your own program alongside national sources (America After 3PM, Afterschool Alliance) to quantify community need and program results',
              'Develop a communication strategy that includes multiple formats and audiences: policymakers, media, community members, and funders',
              'Connect with your state afterschool network to participate in coordinated advocacy days, letter-writing campaigns, and legislative visits',
              'Participate in Lights On Afterschool — the national annual advocacy event — to demonstrate community support',
              'Train youth and families to share their own advocacy stories: they are often the most persuasive voices in the room',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'How are current state and federal policy decisions affecting our funding, staffing, or operations?',
              'Who are our champions in local and state government — and what do they need to hear from us to act on our behalf?',
              'What data and stories best illustrate the impact of our program on youth, families, and the broader community?',
              'How can we connect our program\'s work to policy priorities our legislators already care about — education, public safety, workforce development?',
              'How can we support youth and families as advocates, not just subjects of our advocacy?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Afterschool Alliance — Lights On Afterschool',
                href: 'https://afterschoolalliance.org/loa.cfm',
                note: 'National annual event and year-round advocacy toolkit',
              },
              {
                label: 'National AfterSchool Association — Advocacy Center',
                href: 'https://naaweb.org/advocacy',
                note: 'Tools for writing letters, making calls, and connecting with legislators',
              },
              {
                label: 'Beyond the Bell — Communication Strategy (Tool 28), Community Communication Survey (Tool 29), Sample News Release (Tool 32)',
                href: 'https://www.beyondthebell.org',
                note: 'Tools for developing a communications strategy and working with media',
              },
              {
                label: 'CTNCY — State Advocacy Resources',
                href: 'https://www.ctncy.org',
                note: 'CT-specific advocacy tools, legislative contacts, and coalition campaigns',
              },
            ],
          },
        ],
      },

      /* ── 4. Shared Leadership ────────────────────────────── */
      {
        id: 'shared-leadership',
        title: 'Shared Leadership',
        intro:
          'Shared leadership means distributing decision-making across a wide circle of collaborators — program staff, community members, families, and youth. It is not just good governance; it is how you ensure your program genuinely reflects and serves the community it was built for. An advisory board is one of the most practical tools for institutionalizing shared leadership, bringing diverse perspectives to the table without the legal and financial obligations of a board of directors. The key is treating advisory board members — especially youth — as full, valued participants, not token representatives.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Use a formal process (e.g., Beyond the Bell Tool 1) to define the purpose, structure, and membership of your advisory board before recruiting',
              'Recruit advisory board members who represent diverse stakeholder groups: program staff, families, youth, school administrators, community partners, funders, and local government',
              'Write personal, specific invitations to each member that explain why their particular perspective matters',
              'Keep the advisory board manageable in size (generally 10–18 members) and establish a clear meeting cadence',
              'For youth members: hold meetings at times they can attend, give them specific roles, allow full votes, and prepare them for adult meeting norms',
              'Create an agenda with clear goals for every meeting; distribute minutes and action items afterward',
              'Build in regular youth voice opportunities outside the advisory board: youth surveys, co-design sessions, youth councils',
              'Document and visibly act on advisory board feedback — show members that their input leads to real changes',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Who has been a close collaborator to our organization — and whose voice is still missing from our decision-making table?',
              'How and when do we genuinely incorporate feedback from youth in programming and operational decisions — not just satisfy a requirement?',
              'Are we preparing youth members to participate meaningfully in adult-dominated spaces, or setting them up to be tokenized?',
              'What structures do we have in place to ensure families and community members actually influence our direction?',
              'Are we treating shared leadership as a genuine organizational commitment, or as a formality to satisfy funders?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Beyond the Bell — Defining Advisory Board Purpose (Tool 1), Partnership Planning Worksheet (Tool 2), Advisory Board Agenda Template (Tool 4)',
                href: 'https://www.beyondthebell.org',
                note: 'Step-by-step tools for designing, recruiting, and running an effective advisory board',
              },
              {
                label: 'Afterschool Alliance — Incorporating Youth Voice',
                href: 'https://afterschoolalliance.org',
                note: 'Guidance on centering youth voice in advisory boards and program decisions',
              },
              {
                label: 'ACT Now — Advisory Board Worksheet & Creating an Engaging Environment Tool',
                href: 'https://ilactnow.org',
                note: 'Templates for building and facilitating an effective advisory board',
              },
              {
                label: 'CTNCY — Drive to Quality Pledge & Program Map',
                href: 'https://www.ctncy.org',
                note: 'Join the CT afterschool coalition and add your program to the statewide map',
              },
            ],
          },
        ],
      },
    ],
  },
]

/** Flat lookup: phase id → phase object */
export const phaseById = Object.fromEntries(phases.map((p) => [p.id, p]))

/** Flat lookup: section id → { phase, section } */
export const sectionById = Object.fromEntries(
  phases.flatMap((phase) =>
    phase.sections.map((section) => [section.id, { phase, section }])
  )
)
