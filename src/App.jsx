import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Alert message={"Setting up a Alert"}/> <Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><Alert message={"Setting up a Alert"}/> <About /></>
    }
  ])

  return (
    <>
      <NoteState>
        <RouterProvider router={router} />
      </NoteState>
    </>
  );
}

export default App
