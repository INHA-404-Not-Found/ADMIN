import StatusSelect from "../components/StatusSelect";
import styles from "../styles/Mainboard.module.css";
import "../styles/Table.css";

import { Link } from "react-router-dom";

export default function Main() {
    {/*메인보드*/}
    return (
                
        <div className={styles.Container}>
            <div className={styles.Title_Container}>Dashboard</div>

            <br></br>
            
            {/*검색창*/}
            <div className={styles.Search_Part}>
                <div className={styles.Search}>
                    <select id="stateType" className={styles.State_Type_Select}>
                        <option id="stateType">분실</option>
                        <option id="stateType">습득</option>
                        <option id="stateType">전체</option>
                    </select>

                    <div className={styles.Search_Input}>
                        <input placeholder="게시글 IDX 검색 ex)1342" />
                        <button type="submit">
                            <img src="./images/search.png" alt="finder" width="20" height="20" />
                        </button>
                    </div>
                </div>
                
                <div className={styles.Search_Option}>
                    <label className={styles.Checkbox_Style}>
                        <input type="checkbox" />
                        <span>미완료</span>
                    </label>

                    <label className={styles.Checkbox_Style}>
                        <input type="checkbox" />
                        <span>완료</span>
                    </label>

                    <label className={styles.Checkbox_Style}>
                        <input type="checkbox" />
                        <span>인계됨</span>
                    </label>

                </div>
            </div>

            <br />

            {/*게시글 리스트*/}
            <div>
                {/*여러개 한 번에 삭제 상태 변경 버튼*/}
                <div className={styles.Select_Option}>
                    <span style={{ marginRight: "10px" }}>n개를 체크하였습니다.</span>
                    
                    <button>삭제</button>
                    <button>상태 변경: 인계</button>
                </div>

                {/*테이블*/}
                <div>
                    <table className={styles.Table}>
                        <thead>
                            <tr>
                                {/* {columns.map((column) => (
                                    <th key={column}>{column}</th>
                                ))} */}
                                <th><input type="checkbox" /></th>
                                <th>번호</th>
                                <th>날짜</th>
                                <th>제목</th>
                                <th>카테고리</th>
                                <th>작성자</th>
                                <th>상태</th>
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
                                    <td><input type="checkbox" /></td>
                                    <td>{i+1}</td>
                                    <td>2025.10.10.금</td>
                                    <td style={{ textAlign: "left" }}>
                                        <Link to="/postDetailFrame">검정색 지갑 하텍 강당에서 분실하였습니다.</Link>
                                    </td>
                                    <td>지갑</td>
                                    <td>김도담</td>
                                    <td>
                                        <StatusSelect />
                                    </td>
                                </tr>
                                ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}