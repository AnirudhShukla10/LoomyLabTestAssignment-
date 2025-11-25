import CrownIcon from './components/CrownIcon'

export default function Home() {
  const topUsers12th = Array.from({ length: 13 }, (_, i) => ({
    rank: i + 1,
    name: 'Student A',
    loomies: '10000000',
    level: '102',
  }));

  const topUsersEver = Array.from({ length: 13 }, (_, i) => ({
    rank: i + 1,
    name: 'Student A',
    grade: '12',
    board: 'CBSE',
    loomies: '10000000',
    level: '102',
  }));

  return (
    <main className="leaderboard-container">
      {/* Decorative circles on the left */}
      <div className="decorative-circles">
        <div className="plain-circle"></div>
        <div className="plain-circle"></div>
      </div>

      <div className="cards-container">

        {/* LEFT CARD */}
        <div className="leaderboard-card left-card">
          <div className="card-title">
            <span className="title-main">TOP USERS IN </span>
            <span className="title-accent">12th AND CBSE</span>
          </div>

          <div className="header-row">
            <div>User</div>
            <div>Loomies</div>
            <div>Level</div>
          </div>

          <div className="list-container">
            {topUsers12th.map((user, index) => (
              <div key={index} className="list-item">
                <div className="list-item-content">
                  <span className="rank-number">{user.rank}.</span>
                  <div className="red-square-icon">
                    <img src="/images/hakla.webp" alt="avatar" className="avatar-image" />
                  </div>
                  <span className="student-name">{user.name}</span>
                </div>
                <div>{user.loomies}</div>
                <div>{user.level}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="leaderboard-card right-card">

          {/* ⭐ Red circle attached to card */}
          <div className="red-circle-attached">
            <CrownIcon />
          </div>

          {/* ⭐ Rank text attached to circle */}
          <div className="rank-text-on-circle">
            <div className="rank-number-large">Rank #1</div>
            <div className="student-name-large">Student Name</div>
          </div>

          <div className="card-title" style={{ marginTop: "160px" }}>
            <span className="title-main">TOP USERS </span>
            <span className="title-accent">EVER</span>
          </div>

          <div className="header-row five-columns">
            <div>User</div>
            <div>Grade</div>
            <div>Board</div>
            <div>Loomies</div>
            <div>Level</div>
          </div>

          <div className="list-container">
            {topUsersEver.map((user, index) => (
              <div key={index} className={`list-item five-columns ${index === 1 ? "highlighted" : ""}`}>
                <div className="list-item-content">
                  <span className="rank-number">{user.rank}.</span>
                  <div className="red-square-icon">
                    <img src="/images/hakla.webp" alt="avatar" className="avatar-image" />
                  </div>
                  <span className="student-name">{user.name}</span>
                </div>
                <div>{user.grade}</div>
                <div>{user.board}</div>
                <div>{user.loomies}</div>
                <div>{user.level}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
