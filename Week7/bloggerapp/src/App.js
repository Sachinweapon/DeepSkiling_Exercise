import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import ListComponent from './ListComponent';

function App() {
  const [activeComponent, setActiveComponent] = useState('book');
  const [showList, setShowList] = useState(true);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <h3>Select a component</h3>;
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Welcome to Blogger App</h1>
      <button onClick={() => setActiveComponent('book')}>Book Details</button>
      <button onClick={() => setActiveComponent('blog')}>Blog Details</button>
      <button onClick={() => setActiveComponent('course')}>Course Details</button>

      <hr />
      {renderComponent()}

      <hr />

      
      {showList ? <ListComponent /> : <p>List is hidden</p>}

      <button onClick={() => setShowList(!showList)}>
        {showList ? 'Hide' : 'Show'} List
      </button>

     
      <div>{showList && <p>We love rendering conditionally!</p>}</div>
    </div>
  );
}

export default App;
