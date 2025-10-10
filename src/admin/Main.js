import StatusSelect from "../components/StatusSelect";
import styles from "../styles/Mainboard.module.css";

import { Link } from "react-router-dom";

export default function Main() {
    {/*메인보드*/}
    return (
                
        <div>
            {/*검색창*/}
            <div className={styles.Search_Part}>
                <div className={styles.Search}>
                    <select id="stateType">
                        <option id="stateType">분실</option>
                        <option id="stateType">습득</option>
                        <option id="stateType">전체</option>
                    </select>

                    <div>
                        <input placeholder="게시글 IDX 검색 ex)1342"></input>
                        <button type="submit">
                            <img src="./images/search.png" alt="finder" width="20" height="20" />
                        </button>
                    </div>
                </div>
                
                <div>
                    <label><input type="checkbox" value="미완료" /> 미완료</label>
                    <label><input type="checkbox" value="완료" />완료</label>
                    <label><input type="checkbox" value="인계됨" />인계됨</label>
                </div>
            </div>

            <br />

            {/*게시글 리스트*/}
            <div>
                {/*여러개 한 번에 삭제 상태 변경 버튼*/}
                <div className={styles.Select_Option}>
                    <div>n개를 체크하였습니다.</div>
                    
                    <button>삭제</button>
                    <button>상태 변경: 인계</button>
                </div>

                {/*테이블*/}
                <div>
                    <table>
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
                                    <td><Link to="/postDetailFrame">검정색 지갑 하텍 강당에서 분실하였습니다.</Link></td>
                                    <td>지갑</td>
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