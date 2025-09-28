import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="recommendation-card">
        <div className="recommendation-header">
          {/* Use a placeholder avatar for now; swap with a local image anytime */}
          <img
            src="https://picsum.photos/seed/nandini/200/200"
            alt="Nandini Subbaraja"
            className="profile-pic"
          />
          <div>
            <h3>Nandini Subbaraja</h3>
            <p>Manager, Data &amp; Analytics — Cisco</p>
            <p className="date">2023</p>
          </div>
        </div>

        <div className="recommendation-body">
          <p>
            “I’m pleased to recommend Vighnesh. As part of my team at Cisco, he
            consistently demonstrated strong analytical thinking, ownership, and a
            calm, solution-oriented approach.”
          </p>
          <p>
            “He automated data pipelines in Python/SQL, improved KPI reporting, and
            translated ambiguous business questions into clear, data-backed insights. And even built a Chatbot for the team!
            Vighnesh is quick to learn, collaborative, and dependable under deadlines.”
          </p>
          <p>
            “I’m confident he’ll be a valuable addition to any team.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
