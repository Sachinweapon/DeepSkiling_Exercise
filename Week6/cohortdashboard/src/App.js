import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    {
      name: "React Bootcamp",
      status: "ongoing",
      mentor: "Sachin Panigrahi",
      startDate: "2025-07-01"
    },
    {
      name: "Java Spring Training",
      status: "completed",
      mentor: "Neha Verma",
      startDate: "2025-05-10"
    },
    {
      name: "Full Stack Node",
      status: "ongoing",
      mentor: "Ravi Kumar",
      startDate: "2025-06-20"
    }
  ];

  return (
    <div>
      <h1>My Academy Cohorts</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          name={cohort.name}
          status={cohort.status}
          mentor={cohort.mentor}
          startDate={cohort.startDate}
        />
      ))}
    </div>
  );
}

export default App;
