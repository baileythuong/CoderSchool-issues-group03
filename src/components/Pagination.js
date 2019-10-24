import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function Paginations(props) {
    let totalPage = props.reactRepo.open_issues/20;
    let pages = [1];
    for (let i = 1; i <= totalPage; i++) pages.push(i)

  return (
    <div>
      <Pagination>
        <Pagination.First disables={props.currentPage === 1} onClick={()=>props.setCurrentPage(1)}/>
        <Pagination.Prev disables={props.currentPage === 1} onClick={()=>props.setCurrentPage(props.currentPage-1)}/>
     
        {pages.map(el => {
            if (el >= props.currentPage -2 && el <= props.currentPage + 2)
            return <Pagination.Item active={el === props.currentPage} onClick={()=>props.setCurrentPage(el)}>{el}</Pagination.Item>
        })}
       
       <Pagination.Next disables={props.currentPage === totalPage} onClick={()=>props.setCurrentPage(props.currentPage+1)}/>
      <Pagination.Last disables={props.currentPage === totalPage} onClick={()=>props.setCurrentPage(totalPage)}/>
      </Pagination>
    </div>
  );
}
