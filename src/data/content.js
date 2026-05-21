/**
 * Content data for the OST Starter Guide.
 * Sources: CTNCY After School Program Toolkit & Pathways to Developing
 * Afterschool Programs in Rural Areas (TN Afterschool Network / Mott Foundation)
 *
 * SCHEMA
 * ──────
 * Phase
 *   id          string   – "learn" | "plan" | "grow"
 *   label       string
 *   tagline     string
 *   colorKey    string   – "blue" | "teal" | "green"
 *   icon        string
 *   sections    Section[]
 *
 * Section
 *   id          string
 *   title       string
 *   intro       string   – short summary paragraph
 *   blocks      Block[]  – always: checklist, list ("Consider"), resource
 *
 * Block types used here
 *   checklist   → { heading, items: string[] }
 *   list        → { heading, items: string[] }
 *   resource    → { heading, links: { label, href, note? }[] }
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
    sections: [
      /* ── 1. Community Outreach & Needs Assessment ── */
      {
        id: 'community-outreach',
        title: 'Community Outreach & Needs Assessment',
        intro:
          'Research allows you to understand the needs of your community and ensure your program is responsive to those needs. By answering key questions first, you can identify gaps in existing services and make a lasting impact. The data you collect through community outreach forms the foundation of a needs assessment — a collection of information that shows both assets and gaps in community services, and that grant funders commonly require.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Create and distribute a survey to parents through schools and community spaces',
              'Host listening sessions, focus groups, or one-on-one conversations with families, youth, and community leaders',
              'Reach out to schools, churches, community centers, and local nonprofits to identify what programs already exist',
              'Document which existing programs offer transportation, meals, financial aid, or other supports',
              'Gather quantitative data (attendance, demographics, academic performance) and qualitative data (stories, observations, narratives)',
              'Compile findings into a needs assessment document that clearly shows community need and supporting data',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What programs already exist in my community, and what gaps remain?',
              'What are the areas of highest need — academic, social-emotional, physical, or economic?',
              'What do families, youth, school staff, and business leaders want from an afterschool program?',
              'Are families going without child care while parents work, or are older siblings caring for younger children?',
              'Is there a need for healthy meals, safe activities, or college- and career-readiness support?',
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
                label: 'Afterschool Alliance — America After 3PM',
                href: 'https://afterschoolalliance.org/AA3PM/',
                note: 'National data on afterschool need, demand, and access by state',
              },
            ],
          },
        ],
      },

      /* ── 2. Partnerships ── */
      {
        id: 'partnerships',
        title: 'Partnerships',
        intro:
          'Partnering with schools and community-based organizations helps you build infrastructure, leverage existing resources, and plan for your program\'s longevity. Strong partnerships provide structure, a diverse network, shared funding opportunities, professional knowledge, and cultural relevance. Whether you collaborate with a library, a faith center, or a local nonprofit, the right partners amplify your mission and extend your reach.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Identify existing programs and organizations in your community that serve similar populations',
              'Evaluate whether collaboration with an existing program makes more sense than starting a new one',
              'Distinguish between partners (shared goals), vendors (contracted services), and funders (financial support)',
              'Document all partnership agreements with a Memorandum of Understanding (MOU)',
              'Keep a running list of contacts and track the status of each relationship as it develops',
              'Maintain open, positive communication with all potential partners — even if a formal collaboration doesn\'t happen',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Which community organizations or schools would be best positioned to partner with us?',
              'What does each party have to gain or lose through collaboration?',
              'How involved does each potential partner intend to be, and what is a realistic contribution?',
              'Are there any fundamental conflicts — political, religious, or values-based — that should be addressed upfront?',
              'How will you set up a formal partnership agreement that clarifies roles and expectations?',
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
                label: 'CTNCY Afterschool Map & Database',
                href: 'https://www.ctncy.org',
                note: 'Self-reported map of afterschool programs with contact information',
              },
              {
                label: 'CT Afterschool Quality Standards — Core Area 2: Family & Community Partnerships',
                href: 'https://www.ctncy.org',
                note: 'Research-based benchmarks for partnership in high-quality afterschool',
              },
            ],
          },
        ],
      },

      /* ── 3. Mission & Vision ── */
      {
        id: 'mission-vision',
        title: 'Mission & Vision',
        intro:
          'Before you can communicate your program\'s value to partners, funders, or families, you need a clear and concise mission statement. Mission statements lay the foundation for your work, defining your program\'s purpose and goals. Vision statements are more aspirational — they describe the future you\'re working toward and the problems you aim to solve. Both should be rooted in your completed needs assessment and the community you intend to serve.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Review your completed needs assessment before drafting your mission and vision',
              'Draft a mission statement that defines who you serve, what you do, and why it matters',
              'Draft a vision statement that describes the change your program aims to create',
              'Share drafts with community members, potential partners, and youth for feedback',
              'Refine both statements until they are clear, concise, and memorable',
              'Use your mission as a guiding filter for all future programmatic and funding decisions',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Who are we here to serve, and why does this community specifically need our program?',
              'What can we offer the field that is not already available in our area?',
              'What are the specific goals and objectives of our program?',
              'What expertise, networks, and community assets can we draw on to meet these goals?',
              'How will we define and measure success for the youth and families we serve?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CTNCY Mission & Vision Worksheet',
                href: 'https://www.ctncy.org',
                note: 'Step-by-step worksheet to guide writing your mission and vision statements',
              },
              {
                label: 'Forum for Youth Investment — Youth Program Quality',
                href: 'https://forumfyi.org',
                note: 'Research and frameworks connecting program mission to outcomes',
              },
            ],
          },
        ],
      },

      /* ── 4. Funding ── */
      {
        id: 'funding',
        title: 'Funding',
        intro:
          'Successful afterschool programs rely on a "braided" approach that weaves together multiple funding sources — grants, fee-for-service revenue, local business sponsorships, and individual donations. The process of securing funding should begin early, and before making any ask, you must be clear about how much you need, what it will fund, and how you will demonstrate results to supporters.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Map your core operating costs: rent/utilities, staff wages, supplies, and program materials',
              'Identify public grant opportunities at the local, state, and federal levels (e.g., 21st CCLC, Title I)',
              'Explore private funding: local foundations, corporate sponsors, and individual donors',
              'Consider a fee-for-service model with flexible options (daily, weekly, monthly) and discount structures for siblings or hardship',
              'Evaluate whether a fiscal sponsor with 501(c)(3) status could help manage finances in the early stages',
              'Designate someone to grant writing — seek training if needed through nonprofits, community colleges, or online resources',
              'Develop a five-year financial sustainability plan that distinguishes renewable from time-limited funding',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What are our core operating costs, and which are fixed versus variable?',
              'Which funding sources are renewable year to year, and which will expire?',
              'Are we asking for monetary assistance or in-kind donations (space, equipment, food)?',
              'What is the expected return on investment for donors and funders — how will we measure and report it?',
              'Would a fiscal sponsorship arrangement save us time and help us access funding sooner?',
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
                label: 'Afterschool Alliance — Grant Finder',
                href: 'https://afterschoolalliance.org',
                note: 'Searchable database of funding opportunities for afterschool programs',
              },
              {
                label: 'You for Youth (Y4Y) — Fiscal Management Planning Checklist',
                href: 'https://y4y.ed.gov',
                note: 'Federal resource with fiscal management tools for 21st CCLC grantees and others',
              },
              {
                label: 'Grant Station & Grant Watch',
                href: 'https://grantstation.com',
                note: 'Searchable grant databases with funding opportunities for nonprofits',
              },
            ],
          },
        ],
      },

      /* ── 5. Licensing ── */
      {
        id: 'licensing',
        title: 'Licensing',
        intro:
          'In most cases, child care programs — including afterschool programs — require state licensing before opening. Licensing exists to promote the health, safety, and welfare of children. It is essential to connect with your state\'s licensing office early in the planning process and complete your application before your first day of programming. There are limited exemptions, so don\'t assume your program qualifies — confirm with your state agency.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Contact your state\'s child care licensing office early in the planning process — do not wait until you are close to opening',
              'Review the list of possible licensing exemptions to determine if your program qualifies',
              'Complete and submit your licensing application before opening',
              'Ensure your facility meets all health, safety, and building code requirements',
              'Review license renewal timelines and ongoing compliance requirements',
              'Check whether funders or school partners require any additional certifications or accreditation',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Does our program model require licensing, or do we qualify for an exemption?',
              'Who is the state agency responsible for licensing afterschool and child care programs in our state?',
              'What are the specific staff-to-child ratio, background check, and facility requirements tied to our license?',
              'Are there additional accreditation or quality recognition programs we should pursue alongside basic licensing?',
              'How will we stay current with changing regulations and licensing requirements over time?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CT Office of Early Childhood — Division of Licensing',
                href: 'https://portal.ct.gov/OEC/Licensing',
                note: 'CT agency overseeing licensing for child care centers, group homes, and youth programs',
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
    sections: [
      /* ── 1. Program Design & Schedule ── */
      {
        id: 'program-design',
        title: 'Program Design & Schedule',
        intro:
          'Establishing regular and reliable hours of operation is key to building community trust and a quality program. Your design decisions — age groups served, daily schedule model, balance of structured and unstructured time, and how you support the transition from the school day — shape every other aspect of programming. There is no one-size-fits-all model; the best design is the one that matches your community\'s needs.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Choose a schedule model that matches family need (traditional, extended hours, school\'s-out days, before-and-after, or drop-in)',
              'Determine the age range(s) you will serve and plan how age groups will be separated and supervised',
              'Build a daily schedule that balances structured activities with unstructured flex time',
              'Plan for the transition from the school day: offer options for physical activity (laps), snacks, social time (raps), and quiet rest (naps)',
              'Assign specific staff to each age group based on their experience and strengths',
              'For teens, incorporate opportunities for mentoring younger students, college/graduation readiness, and standardized test preparation',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What hours do families in our community need coverage — and can we realistically staff those hours?',
              'How will we structure the day to support youth who need physical activity, quiet time, or social connection after school?',
              'How will we separate and serve younger children and teens in a way that respects the needs of each group?',
              'Are we planning for school-out days, summer programming, or extended hours for working families?',
              'How many staff are needed to maintain a safe and appropriate staff-to-youth ratio throughout the day?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'WNET Thirteen Education — Program Design Resource',
                href: 'https://www.thirteen.org/edonline/onlineed/',
                note: 'Guidance for designing engaging, youth-centered afterschool programs',
              },
              {
                label: 'You for Youth (Y4Y) — Program Design Tools',
                href: 'https://y4y.ed.gov',
                note: 'Templates and planning resources for afterschool program structure',
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

      /* ── 2. Curriculum & Activities ── */
      {
        id: 'curriculum-activities',
        title: 'Curriculum & Activities',
        intro:
          'A high-quality afterschool program offers diverse, age-appropriate, and accessible curricula and activities that reflect the interests of the youth it serves. Authentic youth voice — giving young people real input into what they learn and do — drives engagement and builds belonging. Before rolling out any curriculum, practice activities with your staff so they can deliver them confidently.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Administer interest surveys to youth before the program begins and use results to shape programming',
              'Choose curricula that include hands-on activities, social-emotional learning, and easily available materials',
              'Ensure activities are age-appropriate, inclusive, and accessible to youth with varying needs and abilities',
              'Practice new activities with staff before introducing them to youth',
              'Establish regular check-ins or circle time to allow youth to share feedback on activities',
              'Allow youth to name a need in their community and build a service-learning project around it',
              'Gather feedback after each curriculum block to guide future planning',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What are the interests, cultures, and backgrounds of the youth we serve — and how are they reflected in our activities?',
              'How will we give youth real power to make decisions about activities, not just the appearance of choice?',
              'Are our activities inclusive of youth with varying physical, cognitive, and social-emotional abilities?',
              'How will we evaluate whether a curriculum is working and make adjustments based on youth feedback?',
              'Are we balancing academic support with enrichment, physical activity, and creative expression?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
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
                note: 'Professional resources, curriculum ideas, and a national conference for OST educators',
              },
              {
                label: 'Curiosity Machine — STEM Activities',
                href: 'https://www.curiositymachine.org',
                note: 'AI-mentored engineering design challenges for afterschool programs',
              },
            ],
          },
        ],
      },

      /* ── 3. Policies & Procedures ── */
      {
        id: 'policies-procedures',
        title: 'Policies & Procedures',
        intro:
          'Written policies and procedures are the backbone of a safe, consistent, and legally compliant afterschool program. These documents outline how your program operates day to day and in the long term — and they must be in place before you open. Funders and licensing agencies will often require specific written policies, so review your contracts and license conditions carefully.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Develop medical policies: dispensing medication, asthma, head lice, handwashing, illness, and injury',
              'Develop safety policies: emergency procedures, transportation, youth arrival and departure, visitor sign-in/out, and internet blocking',
              'Develop behavioral policies: positive guidance, child abuse and neglect reporting, and follow-up for late or absent youth',
              'Develop administrative policies: staff and volunteer screening, background checks, enrollment and termination, inventory tracking, and secure data management',
              'Review all funder and partner contracts for required policy deliverables',
              'Create a review schedule to update policies at least annually',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Have all required policies been documented and reviewed by relevant stakeholders?',
              'Do our policies comply with state licensing requirements and funder expectations?',
              'How will we communicate policies to staff, families, and volunteers — and confirm their understanding?',
              'How will we respond consistently and fairly when policies are violated?',
              'When did we last review our policies, and do they reflect current best practices and legal requirements?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CTNCY Program Policy Review Checklist',
                href: 'https://www.ctncy.org',
                note: 'Comprehensive checklist covering medical, safety, behavioral, and administrative policies',
              },
              {
                label: 'You for Youth (Y4Y) — Policies & Procedures Templates',
                href: 'https://y4y.ed.gov',
                note: 'Customizable policy templates for 21st CCLC and other afterschool programs',
              },
            ],
          },
        ],
      },

      /* ── 4. Staffing & Background Checks ── */
      {
        id: 'staffing',
        title: 'Staffing & Background Checks',
        intro:
          'Your program\'s quality depends on the people who show up every day. That begins with writing thorough job descriptions for every role, including volunteers, and completing comprehensive background checks for all adults who work with youth before they start. Staff turnover is one of the biggest challenges in the out-of-school time field — competitive wages, clear expectations, and ongoing training are the strongest tools for keeping great people.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Write detailed job descriptions for every position, including volunteers and interns, that outline daily tasks, reporting structures, and required qualifications',
              'Complete a comprehensive background check through your state\'s system for every adult before they work with youth',
              'Determine a staff-to-youth ratio that meets licensing requirements and is appropriate for your age groups',
              'Research salary ranges and benefits standards for your region and build them into your budget from the start',
              'Develop a staff orientation and onboarding curriculum before your first hire',
              'Create a plan for regular staff meetings, periodic trainings, and check-ins to address challenges and share successes',
              'Plan for how volunteers will be recruited, trained, and supervised alongside paid staff',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What positions do we need, and what qualifications should we require for each role?',
              'How will we ensure all adults complete background checks before having contact with youth?',
              'Are we offering wages and benefits competitive enough to attract and retain quality staff?',
              'What training will staff need to work effectively with each age group served?',
              'How will we manage staff turnover in a way that minimizes disruption to youth and families?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CT Background Check Information System (BCIS)',
                href: 'https://portal.ct.gov/OEC/Background-Checks/Background-Checks',
                note: 'CT\'s system for completing comprehensive background checks for child care providers',
              },
              {
                label: 'CTNCY Job Posting & Description Examples',
                href: 'https://www.ctncy.org',
                note: 'Sample job descriptions for common afterschool roles',
              },
              {
                label: 'Indeed — How to Build Pay Grades and Salary Ranges',
                href: 'https://www.indeed.com/hire/c/info/salary-ranges',
                note: 'Practical guide to creating equitable compensation structures',
              },
              {
                label: 'CT Afterschool Quality Standards — Core Area 3: Administration & Staffing',
                href: 'https://www.ctncy.org',
                note: 'Benchmarks for ethical and effective staffing practices',
              },
            ],
          },
        ],
      },

      /* ── 5. Space & Environment ── */
      {
        id: 'space-environment',
        title: 'Space & Environment',
        intro:
          'Your indoor and outdoor environment directly shapes how youth feel and behave in your program. It should support all programmatic activities, be physically and emotionally safe, comply with all legal requirements, and be inclusive of youth with a wide range of physical, cognitive, and social-emotional needs. Designing for the "average" youth is a mistake — there is no such thing. Design for the widest range of needs, and every young person benefits.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Verify the space meets all federal, state, and local health, safety, and building code requirements',
              'Confirm ADA compliance and wheelchair accessibility for youth, families, and staff',
              'Create a calm, low-stimulation space for youth who are overwhelmed or need sensory breaks',
              'Designate high-energy and low-energy zones to support different activity types',
              'Minimize visual clutter and provide options like earplugs, alternative seating, and soft lighting for neurodiverse youth',
              'If renting or sharing space, draft a written agreement that defines usage, expectations, off-limits areas, and damage protocols',
              'Rent before you buy: consider a trial period before committing to purchase or a long-term lease',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Is the space suitable for the age groups we serve, with appropriate room for movement, eating, and quiet work?',
              'Does the space meet ADA requirements and provide genuine access for youth and families with disabilities?',
              'Are there external regulations from the building owner or partner organization that we must follow?',
              'How will we adapt the space as our program grows and the number of participants increases?',
              'If sharing space with another organization, is our relationship with the space owner clearly documented?',
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
                label: 'ADA National Network — Accessibility in Youth Programs',
                href: 'https://adata.org',
                note: 'Guidance on ADA compliance for youth-serving organizations',
              },
              {
                label: 'CTNCY Training Services',
                href: 'https://www.ctncy.org',
                note: 'Professional development and technical assistance on environment design',
              },
            ],
          },
        ],
      },

      /* ── 6. Safety, Health & Nutrition ── */
      {
        id: 'safety-health-nutrition',
        title: 'Safety, Health & Nutrition',
        intro:
          'Establishing clear systems for safety, health, and nutrition before your first day of programming is non-negotiable. Youth need to feel physically and emotionally safe to learn and thrive. Many youth arriving from school will be hungry, and providing meals or snacks not only improves program quality but lowers the barrier for participation, especially for families experiencing food insecurity.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Develop and document emergency procedures for harm, violence, fire, and other crises',
              'Ensure all staff are trained in first aid, CPR, and mental health first aid before the program opens',
              'Create written health protocols for common situations: illness, injury, dispensing medication, head lice',
              'Assess the dietary needs and cultural food preferences of the youth in your community',
              'Plan for snacks and meals at every program session — identify whether you qualify for subsidized meal programs',
              'Establish clear pick-up and drop-off procedures and a protocol for late or unauthorized pick-up',
              'Conduct regular drills and safety walkthroughs with staff and youth',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'How will we respond in a case of physical harm, violence, or a mental health crisis?',
              'Are all staff trained in first aid, CPR, and mental health first aid — and how will we keep those certifications current?',
              'What are the dietary needs, allergies, and cultural food preferences of the youth in our program?',
              'Does our program qualify for the federal Afterschool Snack Program or Child and Adult Care Food Program (CACFP)?',
              'How will we create an environment where youth feel emotionally safe enough to take risks and be themselves?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'USDA — Afterschool Nutrition Programs (CACFP)',
                href: 'https://www.fns.usda.gov/cacfp/afterschool-care-programs',
                note: 'Federal reimbursement for meals and snacks served in eligible afterschool programs',
              },
              {
                label: 'CT Afterschool Snack Program',
                href: 'https://portal.ct.gov/SDE/Nutrition/Afterschool-Program',
                note: 'CT-specific guidance on funding meals in afterschool programs',
              },
              {
                label: 'Mental Health First Aid',
                href: 'https://www.mentalhealthfirstaid.org',
                note: 'Training programs for staff supporting youth mental health',
              },
              {
                label: 'CT Afterschool Quality Standards — Core Area 5: Safety, Health & Nutrition',
                href: 'https://www.ctncy.org',
                note: 'Benchmarks for health and safety practices in high-quality afterschool',
              },
            ],
          },
        ],
      },

      /* ── 7. Transportation ── */
      {
        id: 'transportation',
        title: 'Transportation',
        intro:
          'Transportation is one of the most significant barriers to afterschool participation in urban, suburban, and rural communities alike. Solving it — even partially — can dramatically expand who your program reaches. Whatever options you choose, safety must come first: verify licensure, background checks, and required safety equipment for all drivers and vehicles.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Map the distance between school(s) and your program site and assess whether youth can walk safely',
              'Explore school bus coordination with the local school district',
              'Investigate whether public transit subsidies are available through the city, state, or a community partner',
              'Assess whether a program vehicle is feasible — explore donations from local businesses or vehicle sharing with another organization',
              'Organize a family carpooling network as a low-cost supplemental option',
              'Verify that all drivers have valid licenses, current background checks, and required vehicle safety equipment',
              'Establish a written protocol for late pick-up and unexpected dismissal changes',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Do youth have a safe, reliable way to get from school to our program?',
              'How will youth get home safely at the end of the program day — especially for extended or evening hours?',
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

      /* ── 8. Recruitment ── */
      {
        id: 'recruitment',
        title: 'Recruitment',
        intro:
          'Getting enough youth to register for your program requires a culturally responsive recruitment strategy — one that meets families where they are, speaks their language, and makes enrollment easy. Recruitment is not a one-time event; it\'s an ongoing part of the program year, and the strategies you use should evolve based on feedback from your community.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Identify the communication channels families in your community use most (text, social media, flyers, in-person)',
              'Find trusted community messengers — teachers, faith leaders, coaches — who can help spread the word',
              'Make the registration process as simple and accessible as possible; offer paper and online options',
              'Host community events in your program space so families can see the environment before committing',
              'Partner with schools to reach youth through in-school events, classroom visits, or materials sent home',
              'Distribute marketing materials at local businesses, places of worship, health fairs, and community events',
              'Clearly communicate program costs, scholarship availability, and payment options in all materials',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What methods of communication are families most comfortable using — and are we meeting them there?',
              'Who are the trusted messengers in our community whose endorsement would carry real weight?',
              'Is our registration process accessible to families with limited English proficiency, limited technology access, or busy schedules?',
              'How will we reach families who are most in need of our program but least likely to hear about it?',
              'How will our recruitment strategy evolve based on who does and doesn\'t enroll in the first year?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Summer Learning Recruitment Toolkit',
                href: 'https://www.summerlearning.org',
                note: 'Templates and messaging strategies for recruiting youth and families',
              },
              {
                label: 'Afterschool Alliance — Outreach & Awareness Tools',
                href: 'https://afterschoolalliance.org',
                note: 'Resources for marketing and raising awareness of afterschool programs',
              },
            ],
          },
        ],
      },

      /* ── 9. Family Engagement ── */
      {
        id: 'family-engagement',
        title: 'Family Engagement',
        intro:
          'Partnerships with families and the wider community are not a nice-to-have — they are essential to a successful afterschool program. Building trust with families takes time and consistency, but the payoff is profound: engaged families are your best advocates, your most reliable source of feedback, and a critical factor in whether youth stay in your program. Design engagement strategies that are accessible, culturally affirming, and genuinely inclusive of diverse family structures.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Create a written family engagement plan that maps out how you will build relationships, involve families in programming, and include them in decision-making',
              'Establish regular, two-way communication with families (newsletters, texts, app, or phone calls) from day one',
              'Host family events that are welcoming, accessible, and culturally relevant (family dinners, cultural celebrations, enrichment nights)',
              'Offer open drop-in hours so families can visit and observe the program',
              'Involve families in advisory roles — they should have a genuine voice in how the program is designed and improved',
              'Provide wraparound supports where possible: adult education, college/career readiness information, flexible childcare during events',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'How will we build authentic, trusting relationships with families — not just notify them of program activities?',
              'What activities or events are fun, accessible, and meaningful for the specific families in our community?',
              'How will we create opportunities for families to be heard and to influence program decisions?',
              'Are our engagement strategies inclusive of families with language barriers, non-traditional schedules, or limited transportation?',
              'Who in our community can guide us in planning culturally responsive engagement activities?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'ACT Now — Family Engagement Toolkit',
                href: 'https://ilactnow.org',
                note: 'Strategies and templates for developing a robust family engagement plan',
              },
              {
                label: 'Harvard Family Research Project — Family Engagement in OST',
                href: 'https://www.hfrp.org',
                note: 'Research-based frameworks for engaging families in out-of-school time',
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

      /* ── 10. Data & Evaluation ── */
      {
        id: 'data-evaluation',
        title: 'Data & Evaluation',
        intro:
          'Continuous Quality Improvement (CQI) is the ongoing process of collecting data, reflecting on findings, and using what you learn to strengthen your program. It satisfies funders, builds credibility with partners, and — most importantly — ensures that youth are getting the best possible experience. Start with a few key metrics and build from there; trying to measure everything at once is a common mistake that leads to measuring nothing well.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Identify 3–5 core outcomes you will track (e.g., academic progress, attendance rate, youth satisfaction, family engagement)',
              'Select evaluation tools and assessments aligned with your outcomes and feasible for your staff to administer',
              'Review your state\'s quality standards and determine which benchmarks apply to your program',
              'Establish an attendance tracking system and demographic data collection process before day one',
              'Create a data review schedule (monthly, quarterly, annually) and assign responsibility for analysis',
              'Gather feedback from youth, families, staff, and partners using surveys, focus groups, and interviews',
              'Use data findings to create an action plan with concrete next steps for improvement',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What outcomes matter most to the youth, families, and funders we serve — and how will we measure them?',
              'Which quality standards framework applies to our program, and how does our current practice measure up?',
              'How will we collect and store data in a way that is secure, organized, and accessible to our team?',
              'How will we share findings with youth, families, funders, and partners in a way that is clear and honest?',
              'How will we close the loop — turning data insights into program improvements that youth and families can see?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CTNCY — CT Quality Program Self-Assessment (CTQSAT)',
                href: 'https://www.ctncy.org',
                note: 'CT\'s annual quality self-assessment tool with coaching support and action planning',
              },
              {
                label: 'Dimensions of Success (DoS) — STEM Program Evaluation',
                href: 'https://www.ctncy.org',
                note: 'CTNCY staff can conduct a DoS observation of your STEM programming',
              },
              {
                label: 'You for Youth (Y4Y) — Data Collection & Evaluation',
                href: 'https://y4y.ed.gov',
                note: 'Federal tools for tracking outcomes and continuous improvement',
              },
              {
                label: 'CT Afterschool Quality Standards — Core Area 8: Sustainability & Evaluation',
                href: 'https://www.ctncy.org',
                note: 'Benchmarks for data use and program sustainability in high-quality afterschool',
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
      /* ── 1. Professional Development ── */
      {
        id: 'professional-development',
        title: 'Professional Development',
        intro:
          'No staff member will arrive with every skill your program needs — and that\'s okay. What matters is building a culture of continuous learning. Investment in organization-wide professional development is one of the most proven methods for retaining quality staff, improving youth outcomes, and sustaining a strong program over time. Professional development is not a perk; it is a strategic necessity.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Administer a professional development survey to identify skill gaps and learning priorities across your team',
              'Create individual professional development plans for each staff member with clear goals and timelines',
              'Research salary and benefits standards for your region and ensure your compensation is competitive',
              'Maintain accurate and organized employee records for legal compliance, performance tracking, and payroll',
              'Connect staff with external training opportunities: conferences, online courses, and peer learning networks',
              'Celebrate growth: recognize staff who complete trainings, earn credentials, or demonstrate new skills',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What specific skills do team members most need to grow — and what types of learning work best for them?',
              'Are we offering salary and benefits that reflect the value of our staff\'s work and allow us to retain great people?',
              'How will we determine which professional development opportunities are high-quality and worth the investment?',
              'How will we apply professional learning back in the program — not just attend trainings and move on?',
              'How will we support staff who are working toward credentials or degrees alongside their work with us?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'CTNCY Training & Professional Development',
                href: 'https://www.ctncy.org',
                note: 'Conferences, workshops, and technical assistance for CT afterschool professionals',
              },
              {
                label: 'National AfterSchool Association (NAA)',
                href: 'https://naaweb.org',
                note: 'Professional standards, credentialing, and a national conference for OST practitioners',
              },
              {
                label: 'Afterschool Alliance — Professional Development Resources',
                href: 'https://afterschoolalliance.org',
                note: 'Tools and research to support afterschool workforce development',
              },
              {
                label: 'ACT Now — Professional Development Planning Tool',
                href: 'https://ilactnow.org',
                note: 'Helps individuals track their professional goals and progress over time',
              },
              {
                label: 'BOOST Collaborative',
                href: 'https://www.boostconference.org',
                note: 'Annual conference and year-round community for OST professionals',
              },
            ],
          },
        ],
      },

      /* ── 2. Strategic Planning ── */
      {
        id: 'strategic-planning',
        title: 'Strategic Planning',
        intro:
          'Strategic planning is how organizations prepare for long-term success — setting a direction, making decisions about where to invest energy and resources, and staying agile when circumstances change. A strong strategic plan is built collaboratively, grounded in your mission, informed by a clear-eyed assessment of strengths and gaps, and revisited regularly. Think of it not as a static document, but as a living way of thinking and acting.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) with a diverse group of collaborators',
              'Engage program staff, families, community partners, and youth in the planning process — not just leadership',
              'Develop a multi-year plan (3–5 years) that includes financial sustainability goals alongside programmatic ones',
              'Use your program quality self-assessment data as a planning input — let it surface priorities',
              'Keep expansion plans realistic and grounded in current budget and participation data',
              'Establish a regular review cycle (annually at minimum) to assess progress and adjust the plan',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'What do we want to achieve as an organization in the next three to five years — and why?',
              'What are our genuine strengths, and what gaps or weaknesses could stall our progress?',
              'What opportunities in our environment are we not yet taking advantage of?',
              'What external threats — funding changes, policy shifts, community needs — could affect our work?',
              'Who needs to be at the table for our strategic plan to reflect the full community we serve?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'PIE NET — Strategic Planning for Nonprofits',
                href: 'https://www.pieorg.org',
                note: 'Frameworks and guidance for afterschool and youth-serving organizations',
              },
              {
                label: 'CTNCY — CT Quality Program Self-Assessment (CTQSAT)',
                href: 'https://www.ctncy.org',
                note: 'Use CTQSAT findings as data inputs to your strategic planning process',
              },
              {
                label: 'Bridgespan Group — Strategic Planning Resources',
                href: 'https://www.bridgespan.org',
                note: 'Free tools and articles on nonprofit strategy for mission-driven organizations',
              },
            ],
          },
        ],
      },

      /* ── 3. Advocacy ── */
      {
        id: 'advocacy',
        title: 'Advocacy',
        intro:
          'Afterschool programs don\'t exist in a vacuum — they are shaped by the policies and funding decisions made at the local, state, and federal levels. Advocacy means making sure the people who make those decisions know what afterschool programs do, who they serve, and why public investment in them matters. Every program leader has a story worth telling, and every story is a form of advocacy.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Learn the names of your local, state, and federal elected representatives and know which committees they serve on',
              'Invite elected officials to visit your program and meet the youth and families you serve',
              'Collect and share compelling stories — with permission — from youth, families, and staff about your program\'s impact',
              'Use data from your program and national sources (America After 3PM, Afterschool Alliance) to make the case for funding',
              'Connect with your state afterschool network to participate in coordinated advocacy days and campaigns',
              'Participate in Lights On Afterschool — the national annual advocacy event led by the Afterschool Alliance',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'How are state and federal policy decisions currently affecting our funding, staffing, or operations?',
              'Who are our champions in local and state government — and how can we strengthen those relationships?',
              'What data and stories best illustrate the impact of our program on youth, families, and the community?',
              'How can we connect our program\'s work to broader policy goals around education, public safety, and workforce development?',
              'How can we include youth and families as advocates, not just subjects of our advocacy?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Afterschool Alliance — Lights On Afterschool',
                href: 'https://afterschoolalliance.org/loa.cfm',
                note: 'National annual event and year-round advocacy toolkit for afterschool programs',
              },
              {
                label: 'National AfterSchool Association — Advocacy Center',
                href: 'https://naaweb.org/advocacy',
                note: 'Tools for writing letters, making calls, and connecting with legislators',
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

      /* ── 4. Shared Leadership ── */
      {
        id: 'shared-leadership',
        title: 'Shared Leadership',
        intro:
          'Shared leadership means distributing decision-making across a wide circle of collaborators — program staff, community members, families, and youth. It is not just good governance; it is how you make sure your program genuinely reflects and serves the community it was built for. An advisory board is one of the most practical tools for institutionalizing shared leadership, bringing diverse perspectives to the table without the legal and financial obligations of a board of directors.',
        blocks: [
          {
            type: 'checklist',
            heading: 'Key action items',
            items: [
              'Establish an advisory board that includes program staff, families, youth, and community representatives',
              'Write personal, specific invitations to advisory board members that explain why their perspective matters',
              'Create a welcoming, inclusive culture on the advisory board — especially for youth members who may be new to formal meetings',
              'Establish regular advisory board meetings with clear agendas, roles, and follow-up on previous recommendations',
              'Build in regular opportunities for youth to provide input on program decisions — surveys, youth councils, co-design sessions',
              'Document and act on advisory board feedback; show members that their input leads to real changes',
            ],
          },
          {
            type: 'list',
            heading: 'Consider these questions',
            items: [
              'Who has been a close collaborator to our organization — and whose voice is still missing from our table?',
              'How and when do we genuinely incorporate feedback from youth in our programming and operational decisions?',
              'What structures do we have in place to ensure that families and community members influence our direction?',
              'How are we preparing youth members of advisory bodies to participate meaningfully in adult-dominated spaces?',
              'Are we treating shared leadership as a genuine commitment, or as a formality to satisfy funders?',
            ],
          },
          {
            type: 'resource',
            heading: 'Resources',
            links: [
              {
                label: 'Afterschool Alliance — Incorporating Youth Voice',
                href: 'https://afterschoolalliance.org',
                note: 'Guidance on centering youth voice in advisory boards and program decisions',
              },
              {
                label: 'ACT Now — Advisory Board Worksheet & Engagement Tool',
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
