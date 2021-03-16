import './App.css';
import PostLike from './PostLike';
import ReactPost from './ReactPost';
import BulletinBoard from './BulletinBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <PostLike />
          <ReactPost />
          <BulletinBoard />
      </header>
    </div>
  );
}

export default App;
