import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteCheckModal from '../component/Modal';

function DetailPage({ write }) {
  let { id } = useParams();
  let currentPost = write.find((post) => post.id === id);
  let navigate = useNavigate();
  let goMain = useState(true);
  let [modal, SetModal] = useState(false);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">내 프로그램</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <div
          style={{
            borderBottom: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h3 style={{ textAlign: 'start' }}>제목 : </h3>
          <h3> {currentPost?.title}</h3>
        </div>
        <div>
          <span>내용 : </span>
          <span>{currentPost?.detail}</span>
        </div>
      </div>
      <div className="toolbar">
        <button>수정</button>
        <button
          onClick={() => {
            SetModal(true);
          }}
        >
          삭제
        </button>
      </div>

      {modal === true ? (
        <DeleteCheckModal
          onClose={() => SetModal(false)}
          onConfirm={() => {
            alert('삭제되었습니다!');
            SetModal(false);
            navigate('/');
          }}
        />
      ) : null}
    </div>
  );
}

export default DetailPage;
