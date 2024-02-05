import { Link } from 'react-router-dom';
import { TbFaceIdError } from 'react-icons/tb';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Cannot found this page <TbFaceIdError /></h1>
      <Link to="/">To home page</Link>
    </div>
  );
};

export default NotFoundPage;
