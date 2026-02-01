// Three Trees Growth Targets Configuration
// Aligned with $1M annual gross goal

module.exports = {
  // PRIMARY TARGET: University Annual Contracts
  universities: {
    // Tier 1: High Value + Warm Connections
    tier1: [
      {
        name: "CUNY System",
        location: "New York City",
        students: 243000,
        warmConnection: "Layana Abu Touq",
        layanaRole: "Senior Program Manager/Director",
        decisionMakers: [
          { role: "System Title IX Coordinator", name: null, contacted: false },
          { role: "VP Student Affairs", name: null, contacted: false }
        ],
        targetContract: 350000,
        programs: ["AOD", "AcademicResilience", "ResponsibleRelationships"],
        entryStrategy: "Pilot at 1 campus via Layana intro, expand to system",
        status: "not-started"
      },
      {
        name: "University of California System",
        location: "California",
        students: 280000,
        warmConnection: "Angela Cline",
        angelaRole: "Facilitator, CA resident",
        decisionMakers: [
          { role: "Systemwide Student Conduct", name: null, contacted: false },
          { role: "Campus Conduct Directors", name: null, contacted: false }
        ],
        targetContract: 500000,
        programs: ["AOD", "ResponsibleRelationships"],
        entryStrategy: "Angela boots on ground for demos at 2-3 campuses",
        status: "not-started"
      }
    ],
    
    // Tier 2: High Value, No Warm Connection Yet
    tier2: [
      {
        name: "University of Michigan",
        location: "Ann Arbor, MI",
        students: 50000,
        decisionMakers: [
          { role: "Dean of Students", name: null, contacted: false },
          { role: "Title IX Coordinator", name: null, contacted: false }
        ],
        targetContract: 250000,
        programs: ["AOD", "AcademicResilience", "ResponsibleRelationships"],
        entryStrategy: "Cold outreach with USC/UNC Charlotte/Winthrop references",
        status: "not-started"
      },
      {
        name: "University of Texas at Austin",
        location: "Austin, TX",
        students: 51000,
        decisionMakers: [
          { role: "VP Student Affairs", name: null, contacted: false },
          { role: "Greek Life Conduct", name: null, contacted: false }
        ],
        targetContract: 200000,
        programs: ["AOD", "ResponsibleRelationships"],
        entryStrategy: "Greek life angle - high incident volume",
        status: "not-started"
      },
      {
        name: "Ohio State University",
        location: "Columbus, OH",
        students: 60000,
        decisionMakers: [
          { role: "Student Conduct Director", name: null, contacted: false },
          { role: "Title IX Coordinator", name: null, contacted: false }
        ],
        targetContract: 250000,
        programs: ["AOD", "ResponsibleRelationships"],
        entryStrategy: "Large Greek life, strong conduct program",
        status: "not-started"
      }
    ]
  },

  // PRIMARY TARGET: Court-Mandated State Expansion
  courtExpansion: {
    // Tier 1: Easy Entry + High Volume
    california: {
      stateRegistration: {
        agency: "CA Department of Corrections and Rehabilitation (CDCR)",
        timeline: "60-90 days",
        cost: 0,
        requirements: ["Business license", "Liability insurance $1M+", "Facilitator certifications"],
        status: "not-started",
        actionItems: [
          "File CDCR provider application",
          "Compile facilitator cert documentation",
          "Submit insurance certificates"
        ]
      },
      counties: [
        {
          name: "Orange County",
          difficulty: "easy",
          onlineApproved: true,
          contact: { dept: "Probation Alternative Programs", phone: "714-569-2100" },
          entryStrategy: "Angela intro + CDCR registration",
          volumeEstimate: "30-50 clients/month",
          status: "not-started"
        },
        {
          name: "San Diego County",
          difficulty: "easy", 
          onlineApproved: true,
          contact: { dept: "Court Services Division", phone: "619-550-5800" },
          entryStrategy: "Target first-time offender program (high volume)",
          volumeEstimate: "40-60 clients/month",
          status: "not-started"
        },
        {
          name: "Riverside County",
          difficulty: "easy",
          onlineApproved: true,
          contact: { dept: "Pretrial Services", phone: "951-955-2700" },
          entryStrategy: "Emphasize 93.4% success rate",
          volumeEstimate: "25-40 clients/month",
          status: "not-started"
        },
        {
          name: "Los Angeles County",
          difficulty: "hard",
          onlineApproved: "partial",
          contact: { dept: "LA County Probation", phone: null },
          entryStrategy: "Enter AFTER establishing in OC/SD/Riverside",
          volumeEstimate: "100+ clients/month",
          status: "not-started",
          blocker: "Separate 6+ month certification process"
        }
      ]
    },

    newYork: {
      stateRegistration: {
        agency: "NYS Office of Children and Family Services",
        timeline: "3-6 months",
        cost: 2000,
        requirements: ["Batterer intervention certification"],
        status: "not-started",
        actionItems: [
          "File NY state certification application",
          "Begin certification process (parallel to county entry)"
        ]
      },
      counties: [
        {
          name: "Westchester County",
          difficulty: "easy",
          onlineApproved: true,
          restrictions: "Anger management only (DV requires state cert)",
          contact: { dept: "Community Corrections", phone: "914-995-7800" },
          volumeEstimate: "15-25 clients/month",
          status: "not-started"
        },
        {
          name: "Nassau County (Long Island)",
          difficulty: "easy",
          onlineApproved: true,
          contact: { dept: "Probation Services", phone: "516-493-4500" },
          entryStrategy: "Court referral focus",
          volumeEstimate: "20-30 clients/month",
          status: "not-started"
        },
        {
          name: "Suffolk County (Long Island)",
          difficulty: "easy",
          onlineApproved: true,
          contact: { dept: "Probation Department", phone: "631-852-2400" },
          entryStrategy: "Train existing providers vs compete",
          volumeEstimate: "20-30 clients/month",
          status: "not-started"
        },
        {
          name: "NYC (5 Boroughs)",
          difficulty: "hard",
          onlineApproved: false,
          restrictions: "DV in-person required, anger management allowed",
          entryStrategy: "Anger management online + train local DV providers",
          volumeEstimate: "50+ clients/month (anger management only)",
          status: "not-started"
        }
      ]
    },

    // Border States (SC proximity advantage)
    borderStates: [
      { state: "Georgia", status: "research-needed", proximity: "high" },
      { state: "North Carolina", status: "research-needed", proximity: "high" },
      { state: "Tennessee", status: "research-needed", proximity: "medium" }
    ]
  },

  // SECONDARY: Government RFPs (High Alignment Only)
  governmentRfps: {
    // Only pursue if score 70+
    sources: [
      { name: "SAM.gov", url: "https://sam.gov", type: "federal" },
      { name: "Grants.gov", url: "https://grants.gov", type: "federal" },
      { name: "SC Procurement", url: "https://procurement.sc.gov", type: "state" }
    ],
    keywords: {
      mustHave: ["behavioral health", "substance abuse", "domestic violence", "anger management", "parenting"],
      niceToHave: ["cognitive behavioral", "online program", "psychoeducational", "court-mandated"],
      exclude: ["medical services", "inpatient", "residential", "medication"]
    }
  },

  // TERTIARY: Workplace Training (Woody joins June)
  workplaceTraining: {
    targetLaunch: "2026-07-01",
    leads: [
      { company: "James Hardie", connection: "Woody current employer", status: "pending-woody" }
    ],
    serviceLines: [
      "Leadership Development",
      "Conflict Management", 
      "Emotional Regulation Under Pressure",
      "DEI Training"
    ]
  }
};
