import { Trophy, Medal, Award } from "lucide-react";
import { useState, useEffect } from "react";

interface TeamData {
  serialNumber: number;
  teamName: string;
  teamLeader: string;
}

const Leaderboard = () => {
  const [selectedTeams, setSelectedTeams] = useState<TeamData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load data from CSV file in public folder
  useEffect(() => {
    loadTeamsFromCSV();
  }, []);

  const loadTeamsFromCSV = async () => {
    try {
      const response = await fetch("/Selected.csv");
      if (!response.ok) {
        console.log("Selected.csv not found in public folder");
        setIsLoading(false);
        return;
      }

      const text = await response.text();
      const lines = text.split("\n").filter((line) => line.trim());
      const teams: TeamData[] = [];

      // Parse CSV data (skip header row if present)
      const startIndex = lines[0].includes("Team") ? 1 : 0;

      for (let i = startIndex; i < lines.length && teams.length < 1000; i++) {
        const columns = lines[i]
          .split(",")
          .map((col) => col.trim().replace(/"/g, ""));

        if (columns.length >= 2) {
          const teamName = columns[0] || `Team ${teams.length + 1}`;
          const teamLeader = columns[1] || `Leader ${teams.length + 1}`;

          teams.push({
            serialNumber: teams.length + 1,
            teamName: teamName,
            teamLeader: teamLeader,
          });
        }
      }

      if (teams.length > 0) {
        setSelectedTeams(teams);
      }
    } catch (error) {
      console.error("Error loading teams:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredTeams = selectedTeams.filter(
    (team) =>
      team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.teamLeader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-br from-black via-red-950 to-black min-h-screen relative overflow-hidden font-serif">
      {/* Background Samurai Texture */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/asfalt-dark.png')`,
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Dark crimson overlay for Samurai vibe */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-red-900/80 to-black/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Trophy className="w-12 h-12 text-yellow-500 drop-shadow-lg" />
            <h1 className="text-3xl md:text-6xl font-bold tracking-widest text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
              Samurai Leaderboard
            </h1>
            <Trophy className="w-12 h-12 text-yellow-500 drop-shadow-lg" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto italic">
            Honor, Discipline, and Glory to the selected warriors of the Finale!
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-900/30 backdrop-blur-sm rounded-2xl border border-red-600 p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                Summoning Samurai...
              </h3>
              <p className="text-gray-400">
                Place <code>Selected.csv</code> in the public folder to continue.
              </p>
            </div>
          </div>
        )}

        {/* Search Controls */}
        {!isLoading && selectedTeams.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search warriors or leaders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/60 backdrop-blur-sm border border-red-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-yellow-500"
                />
              </div>

              {/* Results Info */}
              <div className="text-sm text-gray-400">
                Showing {filteredTeams.length} of {selectedTeams.length} warriors
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Table */}
        {!isLoading && selectedTeams.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/70 backdrop-blur-sm rounded-2xl border border-red-700 overflow-hidden shadow-2xl shadow-red-900/50">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-red-800/60 to-black/60 p-4 md:p-6 border-b border-red-700">
                <div className="grid grid-cols-12 gap-2 md:gap-4 text-sm md:text-lg font-semibold text-yellow-400 tracking-widest">
                  <div className="col-span-2 md:col-span-1 text-center">⚔️</div>
                  <div className="col-span-5 md:col-span-5">Clan Name</div>
                  <div className="col-span-5 md:col-span-6">Clan Leader</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-red-800/50">
                {filteredTeams.map((team) => (
                  <div
                    key={team.serialNumber}
                    className="p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-red-700/50 hover:shadow-xl border-l-4 border-transparent hover:border-yellow-500"
                  >
                    <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
                      {/* Serial Number */}
                      <div className="col-span-2 md:col-span-1 text-center">
                        <span className="text-base md:text-lg font-bold text-red-400">
                          {team.serialNumber}
                        </span>
                      </div>

                      {/* Team Name */}
                      <div className="col-span-5 md:col-span-5">
                        <h3 className="text-base md:text-xl font-bold text-gray-100 hover:text-yellow-400 transition-colors break-words">
                          {team.teamName}
                        </h3>
                      </div>

                      {/* Team Leader */}
                      <div className="col-span-5 md:col-span-6">
                        <p className="text-sm md:text-lg text-gray-400 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-red-900/60 border border-yellow-500 flex items-center justify-center text-sm md:text-base font-bold text-yellow-400">
                            {team.teamLeader.charAt(0)}
                          </span>
                          <span className="truncate">{team.teamLeader}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && selectedTeams.length === 0 && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/70 backdrop-blur-sm rounded-2xl border border-red-700 p-12">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                Leaderboard Coming Soon
              </h3>
              <p className="text-gray-400">
                Place your <code>Selected.csv</code> file in the public folder to
                reveal the warriors.
              </p>
            </div>
          </div>
        )}

        {/* Footer Stats */}
        {!isLoading && selectedTeams.length > 0 && (
          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-center border border-red-700">
                <div className="text-2xl font-bold text-yellow-400">
                  {selectedTeams.length}
                </div>
                <div className="text-sm text-gray-400">Total Warriors</div>
              </div>
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-center border border-red-700">
                <div className="text-2xl font-bold text-yellow-400">
                  {selectedTeams.length}
                </div>
                <div className="text-sm text-gray-400">Clan Leaders</div>
              </div>
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-center border border-red-700">
                <div className="text-2xl font-bold text-yellow-400">1</div>
                <div className="text-sm text-gray-400">Shōgun (Grand Winner)</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Leaderboard;
