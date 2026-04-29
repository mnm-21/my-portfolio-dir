const ITEMS = [
  "Reinforcement Learning",
  "Surgical Robotics",
  "Gaussian Splatting",
  "Computer Vision",
  "MuJoCo",
  "PyTorch",
  "ICCV 2025",
];

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((group) => (
          <div className="ticker-items" key={group}>
            {ITEMS.map((item) => (
              <span key={`${group}-${item}`}>{item} /</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
