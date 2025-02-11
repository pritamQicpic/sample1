// frontend/components/ui/Tabs.tsx

import { FC, ReactNode, useState } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tabs: FC = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        {React.Children.map(children, (child, index) => (
          <button
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {React.Children.toArray(children)[activeTab].props.children}
      </div>
    </div>
  );
};

export default Tabs;
