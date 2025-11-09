import { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '98.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import WritePostWindow from './route/WritePost';
import profileImage from './assets/IMG/images.jpeg';
import DetailPage from './route/Detail';

function App() {
  let [write, setWrite] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main write={write} />} />
          <Route
            path="/write"
            element={<WritePostWindow write={write} setWrite={setWrite} />}
          />
          <Route
            path="/detail/:id"
            element={
              <DetailPage write={write} setWrite={setWrite}></DetailPage>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
function Main({ write }) {
  let navigate = useNavigate();
  return (
    <nav className="window">
      <section className="title-bar">
        <div className="title-bar-text">준영이의 블로그</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </section>
      <section className="window-body main-window-item2">
        <div>
          <img
            src={profileImage}
            alt="프로필 사진"
            style={{ width: '70px', height: '70px', borderRadius: '50%' }}
          />
        </div>
        <div>
          <button>🔔</button>
          <button>🔎</button>

          <Link to="/write">
            <button>글 작성</button>
          </Link>
        </div>
      </section>

      <div style={{ display: 'flex', gap: '20px' }}>
        <section
          className="window"
          style={{ width: '200px', height: '500px', flexShrink: 0 }}
        >
          <div className="title-bar">
            <div className="title-bar-text">📁 카테고리</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <div className="tree-view">
              <ul>
                <li>📂 전체글 (24)</li>
                <li>📄 오늘의 일기 동</li>
                <li>📄 주말 나들이 적</li>
                <li>📄 React 배우기 생</li>
                <li>📄 CSS 팁 성</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            <button>새 카테고리</button>
            <button>삭제</button>
            <button>이름 변경</button>
          </div>
        </section>

        <section style={{ flex: 1 }}>
          {write.map((post, index) => {
            return (
              <div
                onClick={() => {
                  navigate(`/detail/${post.id}`);
                }}
                key={index}
                className="post-item"
                style={{ borderBottom: '1px solid black', padding: '10px 0' }}
              >
                <div className="post-header">
                  <h3 className="post-title">{post.title}</h3>
                  <span className="post-date">{post.date}</span>
                </div>
                <div className="post-preview">{post.detail}</div>
              </div>
            );
          })}
        </section>
      </div>
    </nav>
  );
}
export default App;
