import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const json = await data.json();
    if (json && json.products) {
      setData(json.products);
      setTotalPages(json.total / 10);
    }
  };

  const handleClick = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <>
      <div>
        {data.length > 0 && (
          <div className="products">
            {data.map((d) => (
              <span className="products__single">
                <img src={d.thumbnail} alt={d.title} />
                <span>{d.title}</span>
              </span>
            ))}
          </div>
        )}
        {data.length > 0 && (
          <div className="pagination">
            <span
              role="img"
              aria-label="prev"
              onClick={() => handleClick(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ◀️
            </span>
            {[...Array(totalPages)].map((_, i) => (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                key={i}
                onClick={() => handleClick(i + 1)}
              >
                {i + 1}
              </span>
            ))}
            <span
              role="img"
              aria-label="next"
              onClick={() => handleClick(page + 1)}
              className={page < totalPages ? "" : "pagination__disable"}
            >
              ▶️
            </span>
          </div>
        )}
      </div>
    </>
  );
}
