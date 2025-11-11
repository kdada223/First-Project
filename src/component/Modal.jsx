function DeleteCheckModal({ onClose, navigate }) {
  let Deletehaddle = () => {
    alert('삭제됨');
    onClose();
    navigate('/');
  };
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={onClose}
      >
        <div
          className="window"
          style={{
            width: '350px',
            minHeight: '150px',
            position: 'relative',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="title-bar">
            <div className="title-bar-text">⚠️ 삭제 확인</div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={onClose}></button>
            </div>
          </div>
          <div
            className="window-body"
            style={{ padding: '20px', textAlign: 'center' }}
          >
            <div>
              <h3>⚠️ 정말 삭제하시겠습니까?</h3>
              <p>이 글을 삭제하면 되돌릴 수 없습니다.</p>
              <br />
              <button
                className="default"
                onClick={Deletehaddle}
                style={{ marginRight: '10px' }}
              >
                삭제
              </button>
              <button onClick={onClose}>취소</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteCheckModal;
