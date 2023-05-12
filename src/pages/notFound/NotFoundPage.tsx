import MemojiShrug from "../../../public/assets/images/memoji-shrug.webp";

function NotFoundPage() {
  return (
    <div>
      <h1>404 Page not found</h1>
      <img src={MemojiShrug} alt="Shrugging man memoji" />
    </div>
  );
}

export default NotFoundPage;
