import StatusSelect from "../components/StatusSelect";
import styles from "../styles/Mainboard.module.css";
import tableStyles from "../styles/Table.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCategory() {

    function categoryEdit(i){
        const categoryName = prompt("수정할 카테고리 이름을 적으세요");
        
    }

    {/*메인보드*/}
    return (
        <div className={styles.Container}>
            <div className={styles.Title_Container}>물품 카테고리 관리</div>

            <br></br>

            {/*검색창*/}
            <div className={styles.Add_Input}>
                <input placeholder="물품 카테고리 추가"></input>
                <button type="submit">추가하기</button>
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
                                        onClick={() => categoryEdit(i)}
                                    >  
                                        수정하기
                                    </td>
                                    <td style={{ textAlign:"center" }}>삭제하기</td>
                                </tr>
                                ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}