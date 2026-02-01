export default function UniversitiesPage() {
  const universities = [
    {
      name: "CUNY System",
      location: "New York City",
      students: 243000,
      warmConnection: "Layana Abu Touq",
      targetContract: 350000,
      programs: ["AOD", "Academic Resilience", "Responsible Relationships"],
      score: 92,
      priority: "HOT",
      status: "Ready to outreach"
    },
    {
      name: "University of California System",
      location: "California",
      students: 280000,
      warmConnection: "Angela Cline",
      targetContract: 500000,
      programs: ["AOD", "Responsible Relationships"],
      score: 92,
      priority: "HOT",
      status: "Ready to outreach"
    },
    {
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      students: 50000,
      warmConnection: null,
      targetContract: 250000,
      programs: ["AOD", "Academic Resilience", "Responsible Relationships"],
      score: 72,
      priority: "WARM",
      status: "Research decision-maker"
    },
    {
      name: "University of Texas at Austin",
      location: "Austin, TX",
      students: 51000,
      warmConnection: null,
      targetContract: 200000,
      programs: ["AOD", "Responsible Relationships"],
      score: 68,
      priority: "WARM",
      status: "Research needed"
    },
    {
      name: "Ohio State University",
      location: "Columbus, OH",
      students: 60000,
      warmConnection: null,
      targetContract: 250000,
      programs: ["AOD", "Responsible Relationships"],
      score: 65,
      priority: "COOL",
      status: "Queue for later"
    }
  ];

  const totalPotential = universities.reduce((sum, u) => sum + u.targetContract, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <a href="/" className="text-slate-400 hover:text-white text-sm">← Back to Dashboard</a>
          <h1 className="text-2xl font-bold mt-2">University Targets</h1>
          <p className="text-slate-400 mt-1">${(totalPotential / 1000000).toFixed(1)}M total contract potential</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {universities.map((uni) => (
            <UniversityCard key={uni.name} uni={uni} />
          ))}
        </div>
      </main>
    </div>
  );
}

function UniversityCard({ uni }: { uni: any }) {
  const priorityColors: Record<string, string> = {
    HOT: "bg-red-100 text-red-800 border-red-200",
    WARM: "bg-orange-100 text-orange-800 border-orange-200",
    COOL: "bg-blue-100 text-blue-800 border-blue-200"
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">{uni.name}</h2>
            <span className={`px-2 py-1 text-xs font-bold rounded border ${priorityColors[uni.priority]}`}>
              {uni.priority}
            </span>
          </div>
          
          <div className="mt-2 flex items-center gap-4 text-sm text-slate-600">
            <span>{uni.location}</span>
            <span>•</span>
            <span>{uni.students.toLocaleString()} students</span>
            <span>•</span>
            <span className="font-medium text-slate-900">${(uni.targetContract / 1000).toFixed(0)}k target</span>
          </div>

          {uni.warmConnection && (
            <div className="mt-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm text-green-700 font-medium">Warm connection: {uni.warmConnection}</span>
            </div>
          )}

          <div className="mt-3">
            <span className="text-sm text-slate-500">Programs: </span>
            <span className="text-sm text-slate-700">{uni.programs.join(", ")}</span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-slate-500">Status:</span>
            <span className="text-sm font-medium text-slate-900">{uni.status}</span>
          </div>
        </div>

        <div className="text-center ml-6">
          <div className="text-4xl font-bold text-slate-900">{uni.score}</div>
          <div className="text-xs text-slate-500 uppercase mt-1">Score</div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
            View Draft
          </button>
        </div>
      </div>
    </div>
  );
}
