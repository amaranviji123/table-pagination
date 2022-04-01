import React from "react";

const Page = ({ pageNum, len }) => {
  const page = [];

  for (let i = 1; i <= Math.round(len/10); i++) {
    page.push(i);
  }
  
  return (
    <div>
      <nav>
        <ul className="pagination">
          {page.map((num) => (
            <li className="page-item" key={num}>
              <a onClick={() => pageNum(num)} href="#" className="page-link">
                {num}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Page;
