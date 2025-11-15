function Window() {
	return (
		<div className='window'>
			<div className='title-bar'>
				<div className='title-bar-text'>내 프로그램</div>
				<div className='title-bar-controls'>
					<button aria-label='Minimize'></button>
					<button aria-label='Maximize'></button>
					<button aria-label='Close'></button>
				</div>
			</div>
			<div className='window-body'>
				<p>윈도우 내용</p>
			</div>
		</div>
	);
}
function BlogWindow() {
	return (
		<div className='window' style={{ width: '800px', height: '600px' }}>
			<div className='title-bar'>
				<div className='title-bar-text'>📝 내 블로그 - Windows 98</div>
				<div className='title-bar-controls'>
					<button aria-label='Minimize'></button>
					<button aria-label='Maximize'></button>
					<button aria-label='Close'></button>
				</div>
			</div>
			<div className='window-body'>
				<ul role='menubar'>
					<li role='menuitem'>파일</li>
					<li role='menuitem'>편집</li>
					<li role='menuitem'>보기</li>
					<li role='menuitem'>도구</li>
				</ul>
				<div className='toolbar'>
					<button>새 글</button>
					<button>열기</button>
					<button>저장</button>
				</div>
				<div style={{ padding: '20px' }}>
					<h2>블로그 메인 화면</h2>
					<p>최근 글들이 여기에 표시됩니다.</p>
				</div>
			</div>
		</div>
	);
}
function WritePostWindow() {
	return (
		<div className='window' style={{ width: '600px', height: '500px' }}>
			<div className='title-bar'>
				<div className='title-bar-text'>📝 새 글 작성</div>
				<div className='title-bar-controls'>
					<button aria-label='Minimize'></button>
					<button aria-label='Maximize'></button>
					<button aria-label='Close'></button>
				</div>
			</div>
			<div className='window-body'>
				<fieldset>
					<legend>글 정보</legend>
					<div className='field-row'>
						<label>제목:</label>
						<input type='text' placeholder='글 제목을 입력하세요' style={{ width: '300px' }} />
					</div>
					<div className='field-row'>
						<label>카테고리:</label>
						<select>
							<option>일상</option>
							<option>기술</option>
							<option>여행</option>
						</select>
					</div>
				</fieldset>
				<fieldset>
					<legend>내용</legend>
					<textarea rows='15' style={{ width: '100%' }} placeholder='글 내용을 작성하세요...'></textarea>
				</fieldset>
				<div style={{ textAlign: 'right', marginTop: '10px' }}>
					<button className='default'>저장</button>
					<button>취소</button>
				</div>
			</div>
		</div>
	);
}
function CategoryWindow() {
	return (
		<div className='window' style={{ width: '400px', height: '350px' }}>
			<div className='title-bar'>
				<div className='title-bar-text'>📁 카테고리 관리</div>
				<div className='title-bar-controls'>
					<button aria-label='Minimize'></button>
					<button aria-label='Maximize'></button>
					<button aria-label='Close'></button>
				</div>
			</div>
			<div className='window-body'>
				<div className='tree-view'>
					<ul>
						<li>📂 전체글 (24)</li>
						<li>
							📂 일상 (12)
							<ul>
								<li>📄 오늘의 일기</li>
								<li>📄 주말 나들이</li>
							</ul>
						</li>
						<li>
							📂 기술 (8)
							<ul>
								<li>📄 React 배우기</li>
								<li>📄 CSS 팁</li>
							</ul>
						</li>
						<li>📂 여행 (4)</li>
					</ul>
				</div>
				<div style={{ marginTop: '10px' }}>
					<button>새 카테고리</button>
					<button>삭제</button>
					<button>이름 변경</button>
				</div>
			</div>
		</div>
	);
}
function SettingsWindow() {
	return (
		<div className='window' style={{ width: '450px', height: '400px' }}>
			<div className='title-bar'>
				<div className='title-bar-text'>⚙️ 블로그 설정</div>
				<div className='title-bar-controls'>
					<button aria-label='Minimize'></button>
					<button aria-label='Maximize'></button>
					<button aria-label='Close'></button>
				</div>
			</div>
			<div className='window-body'>
				<div className='tabs'>
					<menu role='tablist'>
						<button role='tab' aria-selected='true'>
							일반
						</button>
						<button role='tab'>모양</button>
						<button role='tab'>고급</button>
					</menu>
					<article role='tabpanel'>
						<fieldset>
							<legend>블로그 정보</legend>
							<div className='field-row'>
								<label>블로그 제목:</label>
								<input type='text' value='내 멋진 블로그' />
							</div>
							<div className='field-row'>
								<label>부제목:</label>
								<input type='text' value='Windows 98 스타일로' />
							</div>
						</fieldset>
						<fieldset>
							<legend>표시 옵션</legend>
							<div className='field-row'>
								<input type='checkbox' id='show-date' />
								<label htmlFor='show-date'>작성 날짜 표시</label>
							</div>
							<div className='field-row'>
								<input type='checkbox' id='show-author' />
								<label htmlFor='show-author'>작성자 표시</label>
							</div>
						</fieldset>
					</article>
				</div>
				<div style={{ textAlign: 'right', marginTop: '20px' }}>
					<button className='default'>확인</button>
					<button>취소</button>
				</div>
			</div>
		</div>
	);
}
function AboutDialog() {
	return (
		<div className='window' style={{ width: '350px', height: '200px' }}>
			<div className='title-bar'>
				<div className='title-bar-text'>ℹ️ 프로그램 정보</div>
				<div className='title-bar-controls'>
					<button aria-label='Close'></button>
				</div>
			</div>
			<div className='window-body' style={{ textAlign: 'center' }}>
				<h3>🖥️ 레트로 블로그</h3>
				<p>버전 1.0</p>
				<p>Windows 98 스타일 블로그 시스템</p>
				<br />
				<p>© 2024 내 이름. 모든 권리 보유.</p>
				<br />
				<button className='default'>확인</button>
			</div>
		</div>
	);
}
function BlogButtons() {
	return (
		<div style={{ padding: '20px' }}>
			<h3>블로그 버튼들</h3>

			{/* 기본 버튼들 */}
			<button>새 글 작성</button>
			<button>글 목록</button>
			<button className='default'>저장</button>
			<button disabled>삭제</button>

			{/* 아이콘 버튼들 */}
			<button>📝 작성</button>
			<button>📁 폴더</button>
			<button>⚙️ 설정</button>
			<button>❓ 도움말</button>

			{/* 상태바 */}
			<div className='status-bar'>
				<p className='status-bar-field'>글 5개</p>
				<p className='status-bar-field'>작성중...</p>
				<p className='status-bar-field'>준비</p>
			</div>
		</div>
	);
}

export { Window, BlogWindow, WritePostWindow, CategoryWindow, SettingsWindow, AboutDialog, BlogButtons };
