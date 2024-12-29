const Player = ({ number, position }) => {
  return (
    <div
      className="player w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
      style={{ position: "absolute", ...position }}
    >
      {number}
    </div>
  );
};
export default Player;
