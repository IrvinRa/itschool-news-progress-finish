import BootrapPagination from "react-bootstrap/Pagination";
import { useHistory } from "react-router-dom";

export function Pagination(props) {
  let { active, baseUrl } = props;
  const history = useHistory();
  if (!active) {
    active = 1;
  }

  const onPageClick = page => {
    history.push(`${baseUrl}?page=${page}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <BootrapPagination>
        {[1, 2, 3, 4, 5].map(page => (
          <BootrapPagination.Item
            key={page}
            active={page === active}
            onClick={() => onPageClick(page)}>
            {page}
          </BootrapPagination.Item>
        ))}
      </BootrapPagination>
    </div>
  );
}
