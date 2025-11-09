import { useParams } from 'react-router-dom';

function DetailPage({ write }) {
  let { id } = useParams();
  let currentPost = write.find((post) => post.id === id);

  return (
    <div>
      <h1>{currentPost?.title}</h1>
      <p>{currentPost?.detail}</p>
    </div>
  );
}

export default DetailPage;
