import Projects from './pages/Projects';
import About from './pages/About';
import Events from './pages/Events';
import People from './pages/People';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import JoinUs from './pages/JoinUs';

import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/people' element={<People />} />
          <Route path='/joinus' element={<JoinUs />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
