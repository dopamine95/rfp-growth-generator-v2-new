export default function Home() {
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
            />
            <ActionItem 
              priority="HOT"
              type="University"
              target="UC System"
              action="Send outreach via Angela"
              score={92}
            />
            <ActionItem 
              priority="HIGH"
              type="Court"
              target="Orange County, CA"
              action="Call 714-569-2100"
              score={85}
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

function ActionItem({ priority, type, target, action, score }: {
  priority: string;
  type: string;
  target: string;
  action: string;
  score: number;
}) {
  const priorityColors: Record<string, string> = {
    HOT: "bg-red-100 text-red-800 border-red-200",
    HIGH: "bg-orange-100 text-orange-800 border-orange-200",
    MEDIUM: "bg-yellow-100 text-yellow-800 border-yellow-200"
  };

  return (
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
      <div className="text-right">
        <span className="text-2xl font-bold text-slate-900">{score}</span>
        <p className="text-xs text-slate-500">score</p>
      </div>
    </div>
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
