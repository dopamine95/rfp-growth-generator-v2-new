export default function OutreachPage() {
  const drafts = [
    {
      id: 1,
      to: "[CUNY Decision Maker]",
      subject: "Student Success Programs - 93.4% Success Rate",
      type: "University - HOT",
      connection: "via Layana Abu Touq",
      preview: "Dear [Name], I hope this message finds you well. I'm reaching out from Three Trees Center for Change...",
      fullBody: `Dear [Name],

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
amine@ttcfc.org`
    },
    {
      id: 2,
      to: "[UC System Decision Maker]",
      subject: "Student Success Programs - 93.4% Success Rate", 
      type: "University - HOT",
      connection: "via Angela Cline",
      preview: "Dear [Name], I hope this message finds you well. I'm reaching out from Three Trees Center for Change...",
      fullBody: `Dear [Name],

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
amine@ttcfc.org`
    },
    {
      id: 3,
      to: "Orange County Probation",
      subject: "Approved Online Provider - Three Trees Center for Change",
      type: "Court - HIGH",
      connection: null,
      preview: "Dear [Title] [Name], I'm writing to introduce Three Trees Center for Change as an approved provider...",
      fullBody: `Dear [Title] [Name],

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
(803) 207-0558`
    },
    {
      id: 4,
      to: "San Diego County Court Services",
      subject: "Approved Online Provider - Three Trees Center for Change",
      type: "Court - HIGH",
      connection: null,
      preview: "Dear [Title] [Name], I'm writing to introduce Three Trees Center for Change...",
      fullBody: `Dear [Title] [Name],

I'm writing to introduce Three Trees Center for Change as an approved provider for court-mandated programs in San Diego County.

We offer online, evidence-based programs for:
- Anger Management
- Domestic Violence Intervention
- Substance Abuse Education
- Positive Parenting

Our approach uses Cognitive Behavioral Inquiry (CBI) with a 93.4% success rate in reducing repeat incidents.

We are preparing our registration with CDCR and expect to file within 2 weeks.

I'd welcome the opportunity to walk you through our programs and discuss how we can support San Diego County's clients.

Available for a brief call this week or next?

Best,
Amine Feliachi
President
Three Trees Center for Change
amine@ttcfc.org
(803) 207-0558`
    },
    {
      id: 5,
      to: "Riverside County Pretrial Services",
      subject: "Approved Online Provider - Three Trees Center for Change",
      type: "Court - HIGH",
      connection: null,
      preview: "Dear [Title] [Name], I'm writing to introduce Three Trees Center for Change...",
      fullBody: `Dear [Title] [Name],

I'm writing to introduce Three Trees Center for Change as an approved provider for court-mandated programs in Riverside County.

We offer online, evidence-based programs for:
- Anger Management
- Domestic Violence Intervention
- Substance Abuse Education
- Positive Parenting

Our approach uses Cognitive Behavioral Inquiry (CBI) with a 93.4% success rate in reducing repeat incidents.

We are preparing our registration with CDCR and expect to file within 2 weeks.

I'd welcome the opportunity to walk you through our programs and discuss how we can support Riverside County's clients.

Available for a brief call this week or next?

Best,
Amine Feliachi
President
Three Trees Center for Change
amine@ttcfc.org
(803) 207-0558`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <a href="/" className="text-slate-400 hover:text-white text-sm">← Back to Dashboard</a>
          <h1 className="text-2xl font-bold mt-2">Outreach Drafts</h1>
          <p className="text-slate-400 mt-1">{drafts.length} drafts ready for your approval</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {drafts.map((draft) => (
            <DraftCard key={draft.id} draft={draft} />
          ))}
        </div>
      </main>
    </div>
  );
}

function DraftCard({ draft }: { draft: any }) {
  const typeColors: Record<string, string> = {
    "University - HOT": "bg-red-100 text-red-800",
    "Court - HIGH": "bg-orange-100 text-orange-800"
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className={`px-2 py-1 text-xs font-bold rounded ${typeColors[draft.type] || "bg-slate-100 text-slate-800"}`}>
              {draft.type}
            </span>
            {draft.connection && (
              <span className="text-sm text-green-700">{draft.connection}</span>
            )}
          </div>

          <div className="mt-3">
            <p className="text-sm text-slate-500">To: {draft.to}</p>
            <p className="text-sm text-slate-500">Subject: {draft.subject}</p>
          </div>

          <div className="mt-4 p-4 bg-slate-50 rounded text-sm text-slate-700 whitespace-pre-wrap font-mono">
            {draft.fullBody}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700">
          Approve & Send
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
          Edit
        </button>
        <button className="px-4 py-2 bg-slate-200 text-slate-700 text-sm font-medium rounded hover:bg-slate-300">
          Reject
        </button>
        <button className="px-4 py-2 border border-slate-300 text-slate-600 text-sm font-medium rounded hover:bg-slate-50">
          Copy Text
        </button>
      </div>
    </div>
  );
}
