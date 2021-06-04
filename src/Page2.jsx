import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h2>Page2</h2>
      <Link to='/page2/999'>URL Parameter</Link>
      <br />
      <Link to='/page2/999?name=foobar'>Query Parameter</Link>
    </div>
  );
}
