# React Accordion Component

A lightweight, customizable accordion component for React applications with smooth animations and keyboard accessibility.

## ✨ Features

- 🎯 Clean and minimal design
- 🔄 Smooth expand/collapse animations
- ⌨️ Keyboard accessible
- 📱 Responsive layout
- 🎨 Customizable styling
- 💫 Hover effects
- 🔍 Single item expansion
- 📦 Zero dependencies (except React and Lucide React)

## 📦 Installation

1. Install the required dependencies:
```bash
npm install react lucide-react
```

2. Copy the Accordion component into your project.

## 🚀 Usage

```jsx
import Accordion from './components/Accordion';

const MyAccordion = () => {
  const accordionItems = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "Why use React?",
      content: "React makes it easy to create interactive UIs."
    }
  ];

  return <Accordion items={accordionItems} />;
};
```

## 📝 Props

| Prop  | Type | Required | Description |
|-------|------|----------|-------------|
| items | Array<{title: string, content: string\|ReactNode}> | Yes | Array of accordion items |

### Item Structure

```typescript
interface AccordionItem {
  title: string;
  content: string | ReactNode;
}
```

## 🎨 Styling

The component uses inline styles with a clean, modern design. You can customize the appearance by modifying the `accordionStyles` object:

```javascript
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
  // ... other styles
};
```

### Available Style Keys

- `wrapper` - Main container styles
- `item` - Individual accordion item styles
- `button` - Accordion header button styles
- `buttonHover` - Button hover state styles
- `title` - Header title styles
- `icon` - Chevron icon styles
- `iconOpen` - Open state icon styles
- `content` - Content container styles
- `contentOpen` - Open state content styles
- `contentInner` - Inner content padding styles

## 🔍 Examples

### Basic Usage
```jsx
const items = [
  {
    title: "Section 1",
    content: "Content for section 1"
  },
  {
    title: "Section 2",
    content: "Content for section 2"
  }
];

<Accordion items={items} />
```

### With React Components as Content
```jsx
const items = [
  {
    title: "Custom Content",
    content: <CustomComponent />
  }
];

<Accordion items={items} />
```

## ⚙️ Features Explained

1. **Single Expansion**
   - Only one item can be open at a time
   - Opening a new item automatically closes the previously open item

2. **Animations**
   - Smooth height transitions for content
   - Rotating chevron icon
   - Hover effects on headers

3. **State Management**
   - Tracks open/closed state
   - Manages hover states
   - Handles icon rotation

## 🎮 Component Behavior

- Clicking an item header toggles its content
- Hovering over headers shows a background color change
- The chevron icon rotates 180° when its section is open
- Content slides smoothly in/out using CSS transitions

## 🔧 Customization Options

### Modify Default Styles
```jsx
// Override default styles
const customStyles = {
  wrapper: {
    maxWidth: '800px',  // Change maximum width
  },
  item: {
    border: '2px solid #000',  // Change border style
  }
};

// Merge with default styles
const mergedStyles = {...accordionStyles, ...customStyles};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🐛 Troubleshooting

**Content not visible?**
- Check if the content height exceeds `maxHeight` in `contentOpen` styles
- Adjust the `maxHeight` value in `accordionStyles.contentOpen`

**Animations not smooth?**
- Ensure transition properties are correct in styles
- Check for conflicting CSS animations

## 🔜 Future Improvements

- [ ] Add multi-select option
- [ ] Implement custom animation durations
- [ ] Add more style customization options
- [ ] Include accessibility enhancements
- [ ] Add theme support
