// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { getUsers, getLength } from './api/users';
import Table from './components/Table';
import Pagination from './components/Pagination';

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(24);
  let totalPage = Math.ceil(getLength() / limit);
  // console.log(totalPage);
  function handlePageChange(value) {
    if (value === "&laquo" || value === "... ") {
      setPage(1);
    } else if (value === "&lsaquo") {
      setPage(page - 1);
    } else if (value === '&rsaquo') {
      setPage(page + 1);
    } else if (value === '&raquo' || value === " ...") {
      setPage((totalPage));
    } else {
      setPage(value);
    }
  }
  return (
    <div className="container">
      <Table users={getUsers(page, limit)} />
      <Pagination page={page} limit={limit} totalPage={totalPage} siblings={1} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
