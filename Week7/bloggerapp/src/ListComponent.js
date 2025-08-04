import React from 'react';

// Mock data
const items = [
  { id: 1, type: 'Book', name: 'Clean Code' },
  { id: 2, type: 'Blog', name: 'React Rendering Techniques' },
  { id: 3, type: 'Course', name: 'JavaScript Mastery' }
];

function ListComponent() {
  return (
    <div>
      <h3>📚 List of Learning Materials</h3>
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

// Extracted component with key usage
function ListItem({ item }) {
  return <li>{item.type}: {item.name}</li>;
}

export default ListComponent;
