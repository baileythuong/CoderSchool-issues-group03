import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function Paginations(props) {
    let totalPage = props.repoInfo.open_issues/20;
    let pages = [];
    for (let i = 1; i <= totalPage; i++) pages.push(i)

  return (
    <div>
      <Pagination>
        <Pagination.First disabled={props.currentPage === 1} onClick={()=>props.setCurrentPage(1)}/>
        <Pagination.Prev disabled={props.currentPage === 1} onClick={()=>props.setCurrentPage(props.currentPage-1)}/>
     
        {pages && pages.map(el => {
            if (el >= props.currentPage -4 && el <= props.currentPage + 4)
            return <Pagination.Item active={el === props.currentPage} onClick={()=>props.setCurrentPage(el)}>{el}</Pagination.Item>
        })}
       
       <Pagination.Next disabled={props.currentPage === totalPage} onClick={()=>props.setCurrentPage(props.currentPage+1)}/>
      <Pagination.Last disabled={props.currentPage === totalPage} onClick={()=>props.setCurrentPage(totalPage)}/>
      </Pagination>
    </div>
  );
}
