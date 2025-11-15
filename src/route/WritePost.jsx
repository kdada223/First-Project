import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function WritePostWindow({ write, setWrite }) {
	let [title, setTitle] = useState('');
	let [detail, setDetail] = useState('');
	let navigate = useNavigate();
	const generateId = () => {
		return Math.random().toString(36) + Date.now().toString(36);
	};

	let handleSave = () => {
		let newPost = {
			id: generateId(),
			title: title,
			detail: detail,
			date: new Date().toLocaleDateString(),
		};
		setWrite([...write, newPost]);

		navigate('/');
	};

	return (
		<div className='window' style={{ width: '600px', minHeight: '500px' }}>
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
					<div className='field-row'>
						<label>제목:</label>
						<input type='text' placeholder='글 제목을 입력하세요' style={{ width: '300px' }} value={title} onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div className='field-row'>
						<label>태그:</label>
						<input type='text' placeholder='#를 사용해 태그를 입력하세요' style={{ width: '300px' }} />
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
					<textarea rows='15' style={{ width: '100%' }} placeholder='글 내용을 작성하세요...' value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
				</fieldset>
				<fieldset>
					<legend className='field-row'>이미지 첨부</legend>
					<div className='field-row'>
						<input type='file' accept='image/*,video/*' />
					</div>
				</fieldset>
				<div style={{ textAlign: 'right', marginTop: '10px' }}>
					<button className='default'>임시저장</button>
					<button onClick={handleSave}>작성</button>

					<button
						onClick={() => {
							//팝업 창 띄우고 저장안될 수 있다는 문구 띄워주세요
							//그런데 이러면 링크태그를 사용하면 안될듯
							navigate('/');
						}}>
						취소
					</button>
				</div>
			</div>
		</div>
	);
}

export default WritePostWindow;
