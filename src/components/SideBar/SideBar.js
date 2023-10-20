import React from 'react';
import './styles.css';

/**
 * Sidebar component that displays a sidebar with optional children content.
 * @component
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - A boolean flag indicating whether the sidebar is open or closed.
 * @param {Function} props.toggleSidebar - A function to toggle the visibility of the sidebar.
 * @param {ReactNode} props.children - The content to be displayed inside the sidebar.
 *
 * @returns {JSX.Element} Rendered Sidebar component.
 *
 * @example
 * // Example usage of the Sidebar component.
 * const MyComponent = () => {
 *   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 *
 *   return (
 *     <div>
 *       <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Toggle Sidebar</button>
 *       <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
 *         Sidebar Content
 *       </Sidebar>
 *     </div>
 *   );
 * }
 */
const Sidebar = ({ isOpen, toggleSidebar, children }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      {children}
    </div>
  );
};

export default Sidebar;
