'use client';

import { useState } from 'react';

export default function Home() {
  const [showScoringModal, setShowScoringModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold">Three Trees Growth Generator</h1>
          <p className="text-slate-400 mt-1">RFP V2 - Lightning Speed Execution</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Monthly Revenue" 
            value="$45k" 
            target="$83k" 
            label="Current"
          />
          <StatCard 
            title="Universities" 
            value="2" 
            label="HOT Opportunities"
            color="orange"
          />
          <StatCard 
            title="Counties Ready" 
            value="6" 
            label="For Entry"
            color="green"
          />
          <StatCard 
            title="Annual Potential" 
            value="$808k" 
            label="From Counties"
            color="blue"
          />
        </div>

        {/* Scoring Info Button */}
        <div className="mb-6">
          <button 
            onClick={() => setShowScoringModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How Scoring Works
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Today's Priority Actions</h2>
          <div className="space-y-3">
            <ActionItem 
              priority="HOT"
              type="University"
              target="CUNY System"
              action="Send outreach via Layana"
              score={92}
              draftSubject="Student Success Programs - 93.4% Success Rate"
              draftBody={`Dear [Name],

I hope this message finds you well. I'm reaching out from Three Trees Center for Change, where we've developed an evidence-based approach to student conduct and development that might align with CUNY's goals.

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
amine@ttcfc.org`}
            />
            <ActionItem 
              priority="HOT"
              type="University"
              target="UC System"
              action="Send outreach via Angela"
              score={92}
              draftSubject="Student Success Programs - 93.4% Success Rate"
              draftBody={`Dear [Name],

I hope this message finds you well. I'm reaching out from Three Trees Center for Change, where we've developed an evidence-based approach to student conduct and development that might align with University of California's goals.

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
amine@ttcfc.org`}
            />
            <ActionItem 
              priority="HIGH"
              type="Court"
              target="Orange County, CA"
              action="Call 714-569-2100"
              score={85}
              draftSubject="Approved Online Provider - Three Trees Center for Change"
              draftBody={`Dear [Title] [Name],

I'm writing to introduce Three Trees Center for Change as an approved provider for court-mandated programs in Orange County.

We offer online, evidence-based programs for:
- Anger Management
- Domestic Violence Intervention
- Substance Abuse Education
- Positive Parenting

Our approach uses Cognitive Behavioral Inquiry (CBI) with a 93.4% success rate in reducing repeat incidents.

We are preparing our registration with CDCR and expect to file within 2 weeks.

I'd welcome the opportunity to walk you through our programs and discuss how we can support Orange County's clients.

Available for a brief call this week or next?

Best,
Amine Feliachi
President
Three Trees Center for Change
amine@ttcfc.org
(803) 207-0558`}
            />
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NavCard 
            href="/universities"
            title="Universities"
            description="5 targets scored and ranked. View HOT opportunities and warm connections."
            count="5"
          />
          <NavCard 
            href="/courts"
            title="Court Expansion"
            description="6 counties ready for entry. CA and NY compliance mapped."
            count="6"
          />
          <NavCard 
            href="/outreach"
            title="Outreach Drafts"
            description="Pre-written emails ready for your approval and send."
            count="5"
          />
        </div>
      </main>

      {/* Scoring Modal */}
      {showScoringModal && (
        <ScoringModal onClose={() => setShowScoringModal(false)} />
      )}
    </div>
  );
}

function StatCard({ title, value, target, label, color = "slate" }: { 
  title: string; 
  value: string; 
  target?: string;
  label: string;
  color?: "slate" | "orange" | "green" | "blue";
}) {
  const colorClasses = {
    slate: "bg-slate-100 text-slate-800",
    orange: "bg-orange-100 text-orange-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800"
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm font-medium text-slate-500 uppercase">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        {target && (
          <span className="ml-2 text-sm text-slate-500">/ {target} target</span>
        )}
      </div>
      <span className={`inline-flex mt-2 px-2 py-1 text-xs font-medium rounded-full ${colorClasses[color]}`}>
        {label}
      </span>
    </div>
  );
}

function ActionItem({ priority, type, target, action, score, draftSubject, draftBody }: {
  priority: string;
  type: string;
  target: string;
  action: string;
  score: number;
  draftSubject: string;
  draftBody: string;
}) {
  const [showDraft, setShowDraft] = useState(false);
  const [copied, setCopied] = useState(false);

  const priorityColors: Record<string, string> = {
    HOT: "bg-red-100 text-red-800 border-red-200",
    HIGH: "bg-orange-100 text-orange-800 border-orange-200",
    MEDIUM: "bg-yellow-100 text-yellow-800 border-yellow-200"
  };

  const copyToClipboard = () => {
    const fullEmail = `Subject: ${draftSubject}\n\n${draftBody}`;
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
        <div className="flex items-center gap-4">
          <span className={`px-2 py-1 text-xs font-bold rounded border ${priorityColors[priority] || "bg-slate-100 text-slate-800"}`}>
            {priority}
          </span>
          <div>
            <p className="font-medium text-slate-900">{target}</p>
            <p className="text-sm text-slate-500">{action}</p>
          </div>
        </div>
        <div className="text-right flex items-center gap-3">
          <div>
            <span className="text-2xl font-bold text-slate-900">{score}</span>
            <p className="text-xs text-slate-500">score</p>
          </div>
          <button 
            onClick={() => setShowDraft(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
          >
            View Draft
          </button>
        </div>
      </div>

      {/* Draft Modal */}
      {showDraft && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Email Draft - {target}</h3>
                <button 
                  onClick={() => setShowDraft(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-slate-500">Subject:</p>
                <p className="font-medium">{draftSubject}</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-6">
                <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700">{draftBody}</pre>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded font-medium ${copied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
                <button 
                  onClick={() => setShowDraft(false)}
                  className="px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavCard({ href, title, description, count }: {
  href: string;
  title: string;
  description: string;
  count: string;
}) {
  return (
    <a href={href} className="block bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{description}</p>
        </div>
        <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
          {count}
        </span>
      </div>
      <div className="mt-4 flex items-center text-sm text-blue-600">
        View details
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}

function ScoringModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Scoring Algorithm</h2>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-slate-600 mb-6">
            Opportunities are scored 0-100 based on five weighted factors. Higher scores = higher priority for action.
          </p>

          <div className="space-y-6">
            <ScoringFactor 
              title="Revenue Potential" 
              points="0-30"
              description="Annual contract value based on student body size or client volume"
              breakdown={[
                "30 pts: $500k+ annual",
                "25 pts: $350k annual", 
                "20 pts: $250k annual",
                "15 pts: Under $250k"
              ]}
            />

            <ScoringFactor 
              title="CBI Alignment" 
              points="0-25"
              description="How well the opportunity fits our Cognitive Behavioral Inquiry methodology"
              breakdown={[
                "25 pts: Multiple program fit (AOD + Academic + Relationships)",
                "20 pts: Two program fit",
                "15 pts: Single program fit"
              ]}
            />

            <ScoringFactor 
              title="Entry Difficulty" 
              points="0-20"
              description="Barriers to entry - compliance, competition, online approval"
              breakdown={[
                "20 pts: Easy entry, online approved",
                "15 pts: Some barriers but manageable",
                "10 pts: Significant barriers"
              ]}
            />

            <ScoringFactor 
              title="Warm Connection" 
              points="0-15"
              description="Do we know someone who can intro us?"
              breakdown={[
                "15 pts: Direct warm connection (Layana, Angela)",
                "10 pts: Mutual contact",
                "0 pts: Cold outreach"
              ]}
            />

            <ScoringFactor 
              title="Speed to Close" 
              points="0-10"
              description="How quickly can we close this deal?"
              breakdown={[
                "10 pts: Immediate (this month)",
                "7 pts: 30-90 days",
                "5 pts: 90+ days"
              ]}
            />
          </div>

          <div className="mt-8 p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold mb-2">Priority Levels</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium text-red-600">80-100 (HOT):</span> Immediate action - send outreach today</p>
              <p><span className="font-medium text-orange-600">70-79 (WARM):</span> This week - research and prepare</p>
              <p><span className="font-medium text-blue-600">50-69 (COOL):</span> Queue for later</p>
              <p><span className="font-medium text-slate-600">Under 50 (COLD):</span> Monitor only</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoringFactor({ title, points, description, breakdown }: {
  title: string;
  points: string;
  description: string;
  breakdown: string[];
}) {
  return (
    <div className="border-b pb-4 last:border-0">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-sm font-medium text-blue-600">{points} points</span>
      </div>
      <p className="text-sm text-slate-600 mb-2">{description}</p>
      <ul className="text-sm text-slate-500 space-y-1">
        {breakdown.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
