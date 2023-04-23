import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Contact from './View/Contact';
import HomeView from './View/HomeView';
import DevisAsking from './View/devisAsking';

function App() {
  return (
    <>
      <Routes>
        {/*<Route path="login" element={<LoginView />}></Route>*/}
        <Route path="home" index element={<HomeView />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="devis" element={<DevisAsking />}></Route>
        {/*  <Route path="post/:id" element={<PostView />}></Route>*/}
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </>
  );
}

export default App;
