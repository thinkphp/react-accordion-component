import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionStyles = {
  wrapper: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto'
  },
  item: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '8px'
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease'
  },
  buttonHover: {
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#333'
  },
  icon: {
    transition: 'transform 0.2s ease'
  },
  iconOpen: {
    transform: 'rotate(180deg)'
  },
  content: {
    overflow: 'hidden',
    maxHeight: '0',
    transition: 'max-height 0.2s ease-out',
    backgroundColor: '#f9f9f9'
  },
  contentOpen: {
    maxHeight: '300px'
  },
  contentInner: {
    padding: '16px'
  }
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={accordionStyles.wrapper}>
      {items.map((item, index) => (
        <div key={index} style={accordionStyles.item}>
          <button
            onClick={() => toggleItem(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              ...accordionStyles.button,
              ...(hoveredIndex === index && accordionStyles.buttonHover)
            }}
          >
            <span style={accordionStyles.title}>{item.title}</span>
            <ChevronDown
              style={{
                ...accordionStyles.icon,
                ...(openIndex === index && accordionStyles.iconOpen)
              }}
              size={20}
            />
          </button>

          <div
            style={{
              ...accordionStyles.content,
              ...(openIndex === index && accordionStyles.contentOpen)
            }}
          >
            <div style={accordionStyles.contentInner}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Example usage
const MyAccordion = () => {

  const accordionItems = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces, particularly single-page applications."
    },
    {
      title: "Why use React?",
      content: "React makes it easy to create interactive UIs, efficiently updates and renders components, and has a thriving ecosystem."
    },
    {
      title: "How to get started?",
      content: "You can start with Create React App, Next.js, or by adding React to an existing project."
    }
  ];

  return <Accordion items={accordionItems} />;
};

export default MyAccordion;
