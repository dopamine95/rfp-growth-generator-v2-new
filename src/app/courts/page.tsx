export default function CourtsPage() {
  const caCounties = [
    {
      name: "Orange County",
      difficulty: "Easy",
      onlineApproved: true,
      phone: "714-569-2100",
      volume: "30-50 clients/month",
      strategy: "Angela intro + CDCR registration",
      revenue: "$10,500-17,500/month"
    },
    {
      name: "San Diego County",
      difficulty: "Easy",
      onlineApproved: true,
      phone: "619-550-5800",
      volume: "40-60 clients/month",
      strategy: "Target first-time offender program",
      revenue: "$14,000-21,000/month"
    },
    {
      name: "Riverside County",
      difficulty: "Easy",
      onlineApproved: true,
      phone: "951-955-2700",
      volume: "25-40 clients/month",
      strategy: "Emphasize 93.4% success rate",
      revenue: "$8,750-14,000/month"
    },
    {
      name: "Los Angeles County",
      difficulty: "Hard",
      onlineApproved: false,
      phone: null,
      volume: "100+ clients/month",
      strategy: "Enter AFTER establishing in OC/SD/Riverside",
      revenue: "$35,000+/month",
      blocker: "6+ month certification process"
    }
  ];

  const nyCounties = [
    {
      name: "Westchester County",
      difficulty: "Easy",
      onlineApproved: true,
      restrictions: "Anger management only",
      phone: "914-995-7800",
      volume: "15-25 clients/month",
      revenue: "$5,250-8,750/month"
    },
    {
      name: "Nassau County",
      difficulty: "Easy",
      onlineApproved: true,
      phone: "516-493-4500",
      volume: "20-30 clients/month",
      revenue: "$7,000-10,500/month"
    },
    {
      name: "Suffolk County",
      difficulty: "Easy",
      onlineApproved: true,
      phone: "631-852-2400",
      volume: "20-30 clients/month",
      strategy: "Train existing providers",
      revenue: "$7,000-10,500/month"
    },
    {
      name: "NYC (5 Boroughs)",
      difficulty: "Hard",
      onlineApproved: false,
      restrictions: "DV in-person required",
      volume: "50+ clients/month",
      strategy: "Anger management online + train local DV",
      revenue: "$17,500+/month"
    }
  ];

  const totalRevenue = [...caCounties, ...nyCounties]
    .filter(c => c.difficulty === "Easy")
    .reduce((sum, c) => {
      const match = c.revenue.match(/\$([\d,]+)-([\d,]+)/);
      if (match) {
        const avg = (parseInt(match[1].replace(/,/g, "")) + parseInt(match[2].replace(/,/g, ""))) / 2;
        return sum + avg;
      }
      return sum;
    }, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <a href="/" className="text-slate-400 hover:text-white text-sm">← Back to Dashboard</a>
          <h1 className="text-2xl font-bold mt-2">Court Expansion</h1>
          <p className="text-slate-400 mt-1">${(totalRevenue * 12 / 1000).toFixed(0)}k annual from easy-entry counties</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* California */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">California</h2>
            <div className="space-y-4">
              {caCounties.map((county) => (
                <CountyCard key={county.name} county={county} />
              ))}
            </div>
          </div>

          {/* New York */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">New York</h2>
            <div className="space-y-4">
              {nyCounties.map((county) => (
                <CountyCard key={county.name} county={county} />
              ))}
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Registration Action Items</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-slate-900">California CDCR Registration</p>
                <p className="text-sm text-slate-500">File provider application with CA Department of Corrections</p>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded">This Week</span>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-slate-900">New York State Certification</p>
                <p className="text-sm text-slate-500">NYS Office of Children and Family Services - Batterer intervention cert</p>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded">2-3 Weeks</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function CountyCard({ county }: { county: any }) {
  const difficultyColors: Record<string, string> = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800"
  };

  return (
    <div className={`bg-white rounded-lg shadow p-5 ${county.difficulty === "Hard" ? "opacity-60" : ""}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-900">{county.name}</h3>
            <span className={`px-2 py-0.5 text-xs font-medium rounded ${difficultyColors[county.difficulty]}`}>
              {county.difficulty}
            </span>
          </div>
          
          <div className="mt-2 space-y-1 text-sm">
            <p className="text-slate-600">
              <span className="font-medium">Volume:</span> {county.volume}
            </p>
            <p className="text-slate-600">
              <span className="font-medium">Revenue:</span> {county.revenue}
            </p>
            {county.phone && (
              <p className="text-slate-600">
                <span className="font-medium">Phone:</span> {county.phone}
              </p>
            )}
            {county.restrictions && (
              <p className="text-amber-600 text-xs">
                ⚠️ {county.restrictions}
              </p>
            )}
          </div>

          {county.blocker && (
            <p className="mt-2 text-sm text-red-600">🚫 {county.blocker}</p>
          )}
        </div>

        <div className="text-right">
          {county.onlineApproved ? (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
              Online ✓
            </span>
          ) : (
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
              In-person
            </span>
          )}
          
          {county.difficulty !== "Hard" && (
            <button className="mt-3 block w-full px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
              Get Draft
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
