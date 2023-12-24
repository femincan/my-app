import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start';
import './app.css';

export default function App() {
  return (
    <Router>
      <FileRoutes />
    </Router>
  );
}
