import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

const skills = [
  // Technical Skills
  {
    id: 1,
    name: 'JavaScript',
    points: [
      "Variables and Data Types",
      "Operators",
      "Functions",
      "Objects",
      "Arrays",
      "ES6 Features",
      "DOM Manipulation",
      "Event Handling",
      "Asynchronous JS",
      "Promises",
      "Async/Await",
      "Fetch API",
      "LocalStorage & SessionStorage",
      "JSON Handling",
      "Error Handling",
      "Template Literals",
      "Modules and Import/Export",
      "Arrow Functions",
      "Callback Functions",
      "Closures",
      "Scope & Hoisting",
      "Prototype & Inheritance",
      "Debugging & Console",
      "Regular Expressions",
      "Best Practices"
    ]
  },
  {
    id: 2,
    name: 'Python',
    points: [
      "Data Types",
      "Variables",
      "Operators",
      "Functions",
      "Loops",
      "Conditionals",
      "Lists & Tuples",
      "Dictionaries & Sets",
      "File Handling",
      "Modules & Packages",
      "OOP Concepts",
      "Exceptions",
      "Lambda Functions",
      "List Comprehension",
      "Decorators",
      "Generators",
      "Regular Expressions",
      "NumPy Basics",
      "Pandas Basics",
      "Matplotlib Basics",
      "JSON Handling",
      "Debugging",
      "Best Practices",
      "Virtual Environments",
      "Testing Basics"
    ]
  },
  {
    id: 3,
    name: 'React',
    points: [
      "JSX Syntax",
      "Components",
      "Props & State",
      "Event Handling",
      "Conditional Rendering",
      "Lists & Keys",
      "Forms & Inputs",
      "useEffect Hook",
      "useState Hook",
      "useRef Hook",
      "useContext Hook",
      "Custom Hooks",
      "React Router",
      "React Router Params",
      "React Router Navigate",
      "State Management Basics",
      "Functional Components",
      "Class Components",
      "Props Drilling",
      "Lifecycle Methods",
      "Error Boundaries",
      "Performance Optimization",
      "Best Practices",
      "Debugging",
      "Testing Components"
    ]
  },
  {
    id: 4,
    name: 'Physics',
    points: [
      "Mechanics",
      "Motion in One Dimension",
      "Motion in Two Dimensions",
      "Newton's Laws",
      "Work & Energy",
      "Momentum",
      "Circular Motion",
      "Gravitation",
      "Oscillations",
      "Waves",
      "Sound",
      "Optics Basics",
      "Light Reflection",
      "Refraction",
      "Lenses & Mirrors",
      "Electricity Basics",
      "Magnetism Basics",
      "Heat & Thermodynamics",
      "Fluid Mechanics",
      "Modern Physics Introduction",
      "Atomic Structure",
      "Nuclear Physics Basics",
      "Relativity Overview",
      "Electromagnetic Induction",
      "Practical Experiments"
    ]
  },
  {
    id: 5,
    name: 'Chemistry',
    points: [
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "Ionic & Covalent Bonds",
      "Molecular Geometry",
      "Stoichiometry",
      "States of Matter",
      "Solutions",
      "Acids & Bases",
      "pH Concept",
      "Thermochemistry",
      "Chemical Kinetics",
      "Equilibrium",
      "Redox Reactions",
      "Electrochemistry",
      "Organic Chemistry Basics",
      "Hydrocarbons",
      "Alcohols & Phenols",
      "Carboxylic Acids",
      "Polymers",
      "Environmental Chemistry",
      "Practical Lab Skills",
      "Safety Measures",
      "Analytical Techniques",
      "Chemical Reactions Types"
    ]
  },
  {
    id: 6,
    name: 'Machine Learning',
    points: [
      "Introduction to ML",
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression Basics",
      "Classification Basics",
      "Decision Trees",
      "Random Forests",
      "Support Vector Machines",
      "K-Nearest Neighbors",
      "Clustering Algorithms",
      "Dimensionality Reduction",
      "PCA Basics",
      "Feature Engineering",
      "Model Evaluation Metrics",
      "Overfitting & Underfitting",
      "Cross Validation",
      "Hyperparameter Tuning",
      "Neural Networks Basics",
      "Deep Learning Overview",
      "ML Libraries (scikit-learn, TensorFlow, PyTorch)",
      "Data Preprocessing",
      "Data Cleaning",
      "Model Deployment Basics",
      "Practical Projects",
      "Best Practices"
    ]
  },

  // Non-Technical Skills
  {
    id: 7,
    name: 'UI/UX Design',
    points: [
      "Design Principles",
      "Color Theory",
      "Typography Basics",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Persona Creation",
      "Information Architecture",
      "Interaction Design",
      "Accessibility",
      "Responsive Design",
      "Design Tools (Figma, Adobe XD)",
      "Layout & Grids",
      "User Testing",
      "Feedback Analysis",
      "Style Guides",
      "Consistency & Patterns",
      "Visual Hierarchy",
      "Animation Basics",
      "Design Systems",
      "Portfolio Creation",
      "Industry Standards",
      "Collaboration with Developers",
      "Trends Awareness",
      "Best Practices"
    ]
  },
  {
    id: 8,
    name: 'Playing Guitar',
    points: [
      "Basic Chords",
      "Major & Minor Scales",
      "Finger Exercises",
      "Strumming Patterns",
      "Reading Tabs",
      "Basic Songs",
      "Barre Chords",
      "Fingerpicking",
      "Hammer-ons & Pull-offs",
      "Slides & Bends",
      "Chord Progressions",
      "Tuning Guitar",
      "Using a Capo",
      "Riff Practice",
      "Improvisation Basics",
      "Dynamics & Volume Control",
      "Rhythm Training",
      "Chord Transitions",
      "Palm Muting",
      "Practice Routine",
      "Music Theory Basics",
      "Ear Training",
      "Recording Practice",
      "Performance Tips",
      "Guitar Maintenance"
    ]
  },
  {
    id: 9,
    name: 'Time Management',
    points: [
      "Goal Setting",
      "Prioritization",
      "Task Breakdown",
      "Daily Planning",
      "Weekly Planning",
      "Time Tracking",
      "Avoiding Procrastination",
      "Pomodoro Technique",
      "Delegation",
      "Focus & Concentration",
      "Scheduling",
      "Deadline Management",
      "Task Estimation",
      "Time Audit",
      "Productivity Tools",
      "Work-Life Balance",
      "Energy Management",
      "Reducing Distractions",
      "Multitasking Awareness",
      "Self-Discipline",
      "Review & Reflection",
      "Habit Building",
      "Effective Meetings",
      "Time Blocking",
      "Prioritize High-Impact Work"
    ]
  },
  {
    id: 10,
    name: 'Gardening / Plant Care',
    points: [
      "Soil Types",
      "Watering Techniques",
      "Sunlight Requirements",
      "Plant Selection",
      "Fertilizers & Nutrients",
      "Pruning Basics",
      "Pest Control",
      "Plant Propagation",
      "Indoor Gardening",
      "Outdoor Gardening",
      "Container Gardening",
      "Herb Gardening",
      "Vegetable Gardening",
      "Flower Gardening",
      "Composting Basics",
      "Seasonal Planting",
      "Mulching Techniques",
      "Garden Tools",
      "Plant Health Monitoring",
      "Landscape Planning",
      "Sustainable Gardening",
      "Organic Practices",
      "Gardening Journals",
      "DIY Projects",
      "Garden Safety"
    ]
  },
  {
    id: 11,
    name: 'Public Speaking',
    points: [
      "Overcoming Fear",
      "Voice Control",
      "Pronunciation",
      "Pacing & Pausing",
      "Body Language",
      "Gestures",
      "Eye Contact",
      "Audience Engagement",
      "Speech Structure",
      "Opening Techniques",
      "Closing Techniques",
      "Storytelling",
      "Use of Visuals",
      "Confidence Building",
      "Practice Techniques",
      "Handling Questions",
      "Improvisation",
      "Persuasion Techniques",
      "Clarity & Simplicity",
      "Speech Rehearsal",
      "Feedback Analysis",
      "Time Management",
      "Tone Variation",
      "Overcoming Nervousness",
      "Effective Introductions"
    ]
  },
  {
    id: 12,
    name: 'Photography',
    points: [
      "Camera Basics",
      "Exposure Triangle",
      "Aperture Settings",
      "Shutter Speed",
      "ISO Settings",
      "White Balance",
      "Focus & Depth of Field",
      "Composition Techniques",
      "Rule of Thirds",
      "Leading Lines",
      "Framing",
      "Perspective",
      "Lighting Techniques",
      "Natural Light Photography",
      "Artificial Light Photography",
      "Portrait Photography",
      "Landscape Photography",
      "Macro Photography",
      "Post-Processing Basics",
      "Editing Software",
      "Color Correction",
      "Photo Storage & Backup",
      "Sharing & Publishing",
      "Photography Projects",
      "Creative Techniques"
    ]
  },
];

function SkillDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const skill = skills.find(s => s.id === parseInt(id));

  if (!skill) return <div>Skill not found</div>;

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '1rem', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '1rem' }}>{skill.name}</h2>
        <ul style={{ lineHeight: '1.6', paddingLeft: '1.5rem' }}>
          {skill.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <button
          style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default SkillDetail;
