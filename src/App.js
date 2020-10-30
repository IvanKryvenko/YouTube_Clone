import './App.scss';
import Header from './components/header.component';
import Sidebar from './components/sidebar.component';
import VideoList from './components/videolist.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './youtube.png';

function App() {
  return (
    <>
      <header className="row">
        <Header logo={logo} />
      </header>
      <div className="row content">
        <div className="col-2 side-bar">
          <Sidebar />
        </div>
        <div className="col-10 video-list">
          <VideoList />
        </div>
      </div>
    </>
  );
}

export default App;
