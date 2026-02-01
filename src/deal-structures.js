// Deal Structure Templates
// Based on Amine's new university partnership model

module.exports = {
  // PRIMARY: University Annual Contracts
  universityAnnual: {
    name: "University Unlimited Annual Partnership",
    description: "Unlimited student referrals across all programs for fixed annual fee",
    
    pricingTiers: [
      {
        tier: "Small",
        studentBody: "< 20000",
        annualFee: 250000,
        setupFee: 0,
        firstMonthFree: true,
        includes: [
          "AOD (Alcohol and Other Drugs)",
          "Academic Resilience",
          "Responsible Relationships",
          "Unlimited student enrollments",
          "Progress tracking and reporting",
          "Completion certificates",
          "24/7 course access"
        ]
      },
      {
        tier: "Medium",
        studentBody: "20000 - 40000",
        annualFee: 350000,
        setupFee: 0,
        firstMonthFree: true,
        includes: [
          "All Small tier features",
          "Priority support",
          "Custom reporting",
          "Quarterly review meetings"
        ]
      },
      {
        tier: "Large",
        studentBody: "> 40000",
        annualFee: 500000,
        setupFee: 0,
        firstMonthFree: true,
        includes: [
          "All Medium tier features",
          "Dedicated account manager",
          "Custom program development",
          "Onboarding and training for staff"
        ]
      }
    ],

    // Key terms
    contractLength: "12 months",
    renewal: "Automatic with 90-day notice to cancel",
    billing: "Quarterly in advance",
    guarantee: "First month free - if not satisfied, cancel with no obligation",
    
    // Success metrics to show
    valueProposition: [
      "93.4% success rate (non-repeated problem behaviors)",
      "Reduces conduct office workload",
      "Evidence-based CBI methodology",
      "Fully online, interactive courses",
      "Comprehensive progress tracking",
      "Title IX compliant"
    ]
  },

  // Court-Mandated (existing model, expand to new states)
  courtMandated: {
    name: "Court-Mandated Program",
    description: "Per-client enrollment for court-referred individuals",
    
    pricing: {
      enrollmentFee: 50,
      perClassFee: 35,
      fullProgramOption: true,
      slidingScale: true
    },
    
    // For new state/county entry
    entryStrategy: {
      phase1: "Register as approved provider",
      phase2: "Outreach to probation officers and court clerks",
      phase3: "Volume growth through referral relationships"
    }
  },

  // Workplace Training (launching June 2026 with Woody)
  workplaceTraining: {
    name: "Corporate Training Partnership",
    description: "Leadership and behavioral training for organizations",
    
    pricingModels: [
      {
        type: "Per-Employee",
        price: "500-1000 per employee",
        minEmployees: 10
      },
      {
        type: "Annual Retainer",
        price: "75000-150000",
        includes: "Unlimited training sessions"
      }
    ],
    
    services: [
      "Leadership Development",
      "Conflict Management",
      "Emotional Regulation Under Pressure",
      "DEI Training"
    ]
  },

  // Outreach email templates
  emailTemplates: {
    universityCold: {
      subject: "Student Success Programs - 93.4% Success Rate",
      body: `Dear [Name],

I hope this message finds you well. I'm reaching out from Three Trees Center for Change, where we've developed an evidence-based approach to student conduct and development that might align with [University Name]'s goals.

Our programs use Cognitive Behavioral Inquiry (CBI) to help students examine choices, understand patterns, and develop skills for better decision-making. We're already partnering with USC, UNC Charlotte, Winthrop, and University of Portland with a 93.4% measured success rate.

Our university package includes:
- Alcohol and Other Drug education
- Academic Resilience support  
- Responsible Relationships training
- Unlimited student referrals
- Comprehensive progress tracking

The model: $250k-500k annual contract (based on student body size), first month free to prove value.

Could we schedule 15 minutes for me to show you our AOD course demo? I think you'll see why our partner schools love working with us.

Best,
Amine Feliachi
Three Trees Center for Change
amine@ttcfc.org`
    },

    universityWarm: {
      subject: "Quick intro - Three Trees programs",
      body: `Dear [Name],

[Mutual connection] suggested I reach out to you about student conduct programs at [University Name].

We've built something that might save your team significant time while improving outcomes for students facing conduct issues.

The short version:
- 93.4% success rate (non-repeated behaviors)
- Fully online, interactive courses
- CBI methodology (cognitive/behavioral focus)
- Current partners: USC, UNC Charlotte, Winthrop, Portland

Our proposal: Annual unlimited contract, first month free, no setup fees.

Worth a 15-minute conversation?

Amine
Three Trees Center for Change`
    },

    countyCourtOutreach: {
      subject: "Approved Online Provider - Three Trees Center for Change",
      body: `Dear [Title] [Name],

I'm writing to introduce Three Trees Center for Change as an approved provider for court-mandated programs in [County Name].

We offer online, evidence-based programs for:
- Anger Management
- Domestic Violence Intervention
- Substance Abuse Education
- Positive Parenting

Our approach uses Cognitive Behavioral Inquiry (CBI) with a 93.4% success rate in reducing repeat incidents.

[If CDCR registered: We are registered with CA CDCR as an approved provider.]
[If not yet: We are completing registration with CDCR and expect approval within 60 days.]

I'd welcome the opportunity to walk you through our programs and discuss how we can support [County Name]'s clients.

Available for a brief call this week or next?

Best,
Amine Feliachi
President
Three Trees Center for Change
amine@ttcfc.org
(803) 207-0558`
    }
  }
};
