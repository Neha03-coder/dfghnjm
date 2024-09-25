import './App.css';
// import { Signup} from './component/Signup';
// import { Login } from './component/Login';
// import Dashboard from './common/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Signup } from './component/Signup';
import { Login } from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
  return (
      <div className="">
    <Routes>
<Route path="/" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
    </div>

  );
}

export default App;