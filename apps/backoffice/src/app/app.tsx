import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/main-layout';
import { Dashboard } from './pages/dashboard';
import { Agents } from './pages/agents';

// Placeholder components for routes
const Analytics = () => <div>Analytics Page</div>;
const Users = () => <div>Users Page</div>;
const Documents = () => <div>Documents Page</div>;
const Settings = () => <div>Settings Page</div>;

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/users" element={<Users />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
