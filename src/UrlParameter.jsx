import { useParams, useLocation } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query, search);
  return (
    <div>
      <h2>URLパラメータページです</h2>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは{query.get('name')}です</p>
    </div>
  );
};
