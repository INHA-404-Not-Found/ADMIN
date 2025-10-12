import StatusSelect from "../components/StatusSelect";
import styles from "../styles/Mainboard.module.css";
import tableStyles from "../styles/Table.module.css";
import pageStyles from "../styles/Pagination.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCategory() {

    {/*메인보드*/}
    return (
        <div className={styles.Container}>
            <div className={styles.Title_Container}>물품 카테고리 관리</div>

            <br></br>

            {/*검색창*/}
            <div className={styles.Add_Input}>
                <input placeholder="물품 카테고리 추가"></input>
                <button
                    type="submit"
                    onClick={() => {
                        alert("카테고리가 추가되었습니다.");
                    }}
                >
                    추가하기
                </button>
            </div>

            <br></br>

            {/*물품 카테고리 리스트*/}
            <div>
                {/*테이블*/}
                <div>
                    <table className={tableStyles.Table}>
                        <thead>
                            <tr>
                                {/* {columns.map((column) => (
                                    <th key={column}>{column}</th>
                                ))} */}
                                <th>번호</th>
                                <th>카테고리</th>
                                <th>수정하기</th>
                                <th>삭제하기</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data.map(({ name, email, phone }) => (
                                <tr key={name + email + phone}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                </tr>
                            ))} */}
                            {Array.from({ length: 10 }).map((_, i) => (
                                <tr key={i}>
                                    <td style={{ textAlign:"center" }}>{i+1}</td>
                                    <td style={{ textAlign:"center" }}>지갑(현금, 카드)</td>
                                    <td style={{ textAlign:"center" }}
                                        onClick={() => {
                                            const categoryName = prompt("수정할 카테고리 이름을 적으세요");
                                            if(categoryName === ""){
                                                alert("실패하였습니다.");
                                            } else{
                                                alert("추가되었습니다.")
                                            }
                                        }}
                                    >  
                                        수정하기
                                    </td>
                                    <td
                                        style={{ textAlign:"center" }}
                                        onClick={() => {
                                            const deleteConfirmMsg = prompt("삭제하면 복구할 수 없습니다. 삭제하려면 카테고리의 이름을 그대로 따라 적으세요.")
                                            if(deleteConfirmMsg === "지갑(현금, 카드)"){
                                                alert("삭제되었습니다.");
                                            } else{
                                                alert("실패하였습니다.")
                                            }
                                        }}   
                                    >
                                        삭제하기
                                    </td>
                                </tr>
                                ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={pageStyles.Pagination}>
                <img src="./images/left.png" />

                <div className={pageStyles.PaginationNum}>
                    <button>1</button>
                    <button className={pageStyles.SelectedPage}>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>

                <img src="./images/right.png" />
            </div>

            <footer className={styles.FooterContainer}>
                <div>© 2025 404-Not-Found. All rights reserved.</div>
                <div>jiyun421 | eheka78 | Kdoby | yuminmi</div>
            </footer>
        </div>
    )

}