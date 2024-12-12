export default function PlayerCard() {
  return (
    <div class="card player-vote bg-[#1A1A3D] rounded-xl p-4 mb-5">
      <h3 class="text-yellow-400 text-lg">Player of The Match Voting</h3>
      <div class="player flex items-center mb-4">
        <img
          src="player1.jpg"
          alt="Player 1"
          class="w-12 h-12 rounded-full mr-4"
        />
        <div class="progress-bar w-1/2 h-1 bg-yellow-400 rounded-sm"></div>
      </div>
      <div class="player flex items-center mb-4">
        <img
          src="player2.jpg"
          alt="Player 2"
          class="w-12 h-12 rounded-full mr-4"
        />
        <div class="progress-bar w-1/5 h-1 bg-yellow-400 rounded-sm"></div>
      </div>
      <div class="player flex items-center mb-4">
        <img
          src="player3.jpg"
          alt="Player 3"
          class="w-12 h-12 rounded-full mr-4"
        />
        <div class="progress-bar w-1/5 h-1 bg-yellow-400 rounded-sm"></div>
      </div>
    </div>
  );
}
