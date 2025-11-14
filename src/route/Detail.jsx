import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteCheckModal from '../component/Modal';

function DetailPage({ write }) {
  let { id } = useParams();
  let currentPost = write.find((post) => post.id === id);
  let navigate = useNavigate();
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
      <CommentSection></CommentSection>
      {modal === true ? (
        <DeleteCheckModal onClose={() => SetModal(false)} navigate={navigate} />
      ) : null}
    </div>
  );
}

function CommentSection() {
  const [newComment, setNewComment] = useState('');
  const [comments] = useState([
    {
      id: 1,
      author: '익명123',
      content: '정말 좋은 글이네요! 많은 도움이 되었습니다.',
      date: '2024-11-12 14:30',
    },
    {
      id: 2,
      author: 'ReactFan',
      content: '저도 비슷한 경험이 있었는데 공감되네요 ㅎㅎ',
      date: '2024-11-12 15:45',
    },
  ]);

  return (
    <div style={{ marginTop: '20px' }}>
      {/* 댓글 작성 영역 */}

      {/* 댓글 목록 */}
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">
            📝 댓글 목록 ({comments.length}개)
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          {comments.map((comment, index) => (
            <div key={comment.id} style={{ marginBottom: '15px' }}>
              <fieldset>
                <legend>💬 댓글 #{index + 1}</legend>

                {/* 댓글 헤더 */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 'bold', color: '#000080' }}>
                      👤 {comment.author}
                    </span>
                    <span
                      style={{
                        marginLeft: '10px',
                        fontSize: '12px',
                        color: '#666',
                      }}
                    >
                      🕐 {comment.date}
                    </span>
                  </div>

                  {/* 댓글 버튼들 */}
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button style={{ fontSize: '11px', padding: '2px 8px' }}>
                      ✏️ 수정
                    </button>
                    <button style={{ fontSize: '11px', padding: '2px 8px' }}>
                      🗑️ 삭제
                    </button>
                  </div>
                </div>

                {/* 댓글 내용 d*/}
                <div
                  style={{
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                    border: '1px inset #c0c0c0',
                    minHeight: '40px',
                    fontFamily: 'MS Sans Serif',
                  }}
                >
                  {comment.content}
                </div>
              </fieldset>
            </div>
          ))}

          {/* 댓글이 없을 때 */}
          {comments.length === 0 && (
            <div
              style={{ textAlign: 'center', padding: '20px', color: '#666' }}
            >
              <p>💭 아직 댓글이 없습니다.</p>
              <p>첫 번째 댓글을 작성해보세요!</p>
            </div>
          )}
        </div>

        {/* 상태바 */}
        <div className="status-bar">
          <p className="status-bar-field">댓글 {comments.length}개</p>
          <p className="status-bar-field">준비</p>
        </div>
      </div>
      <div className="window" style={{ marginBottom: '15px' }}>
        <div className="title-bar">
          <div className="title-bar-text">💬 댓글 작성</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <fieldset>
            <legend>새 댓글</legend>
            <div className="field-row">
              <label>작성자:</label>
              <input
                type="text"
                placeholder="닉네임을 입력하세요"
                style={{ width: '150px', marginRight: '10px' }}
              />
            </div>
            <div className="field-row" style={{ marginTop: '10px' }}>
              <label>내용:</label>
            </div>
            <textarea
              rows="4"
              style={{ width: '100%', resize: 'none' }}
              placeholder="댓글을 입력하세요..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              <button className="default">등록</button>
              <button>취소</button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

// 사용 예시
function CommentExample() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🖥️ Windows 98 댓글 시스템</h2>
      <CommentSection />
    </div>
  );
}

export default DetailPage;
