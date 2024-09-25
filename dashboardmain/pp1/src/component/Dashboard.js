import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Mody University</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Assignment</li>
            <li>Report</li>
            <li>Stats</li>
            <li>Message</li>
            <li>Help</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <input type="text" placeholder="Search anything here..." />
          <div className="login">
          <button className="login-button">Logout</button>
          </div>
          <div className="profile">
            <img src="https://i.pinimg.com/564x/6b/2c/0b/6b2c0bd51b529791a7381f1e490bc2d6.jpg" alt="Profile" />
           
          </div>
          <div className="login">

          </div>
        </header>
        <section className="content">
          <div className="cards">
            <div className="card"> <img src="https://png.pngtree.com/png-vector/20230316/ourmid/pngtree-web-development-line-icon-vector-png-image_6653005.png" alt="web" />Web Development </div>
            <div className="card"> <img src="https://www.ourtelekom.com.sb/templates/oracle/img/mselen/icon-developer.png" alt="app" />App Development</div>
            <div className="card"> <img src="https://static.vecteezy.com/system/resources/previews/009/992/266/non_2x/ui-ux-icon-sign-design-free-png.png" alt="ux/ui" />UX & UI</div>
          </div>
          <h3>Group 1</h3>
          <ul className="teachers">
            {
              <><li>
                <img src="https://i.pinimg.com/564x/cc/c4/06/ccc406dbafc09f3ac2f066a494af21e7.jpg" alt="Teacher" />
                <div>
                  <h4>Aishini</h4>
                  <p>HTML</p>
                  <span>intermediate</span>
                </div>
              </li><li>
                  <img src="https://i.pinimg.com/564x/cc/c4/06/ccc406dbafc09f3ac2f066a494af21e7.jpg" alt="Teacher" />
                  <div>
                    <h4>Anjali</h4>
                    <p>HTML</p>
                    <span>intermediate</span>
                  </div>
                </li>
                <li>
                  <img src="https://i.pinimg.com/564x/cc/c4/06/ccc406dbafc09f3ac2f066a494af21e7.jpg" alt="Teacher" />
                  <div>
                    <h4>Ankita</h4>
                    <p>HTML</p>
                    <span>intermediate</span>
                  </div>
                </li>
                <li>
                  <img src="https://i.pinimg.com/564x/cc/c4/06/ccc406dbafc09f3ac2f066a494af21e7.jpg" alt="Teacher" />
                  <div>
                    <h4>Aayushi Jain</h4>
                    <p>HTML</p>
                    <span>intermediate</span>
                  </div>
                </li></>
            }
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;