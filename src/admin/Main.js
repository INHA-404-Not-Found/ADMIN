import StatusSelect from "../components/StatusSelect";
import { Link } from "react-router-dom";

export default function Main() {

    return (
        <div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 5fr",
                    gap: "20px",

                    height: "100%"
                }}
            >
                {/*왼쪽 메뉴*/}
                <div>
                    {/*로고*/}
                    <div>
                        <div>
                            <img src="./images/INHA_logo.png" />
                        </div>

                        <div>
                            <span>분실물 찾기</span> <span>관리자 페이지</span>
                        </div>
                    </div>

                    <br></br>

                    {/*메뉴*/}
                    <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 5fr",
                            }}>
                        <img src="./images" alt="user" />
                        <div>김도담(12234069)</div>

                        <img src="./images" alt="logout" />
                        <div><Link to="/login">로그아웃</Link></div>

                        <img src="./images" alt="dashboard" />
                        <div><Link to="/">Dashboard</Link></div>

                        <img src="./images" alt="write" />
                        <div><Link to="/">게시글 작성</Link></div>

                        <img src="./images" alt="problem" />
                        <div>문제상황 보고</div>
                            
                        {/*관리자만 보이게*/}
                        <img src="./images" alt="problem" />
                        <div><Link to="/adminManagement">관리자 관리</Link></div>
                    </div>
                </div>
                
                {/*메인보드*/}
                <div>
                    {/*검색창*/}
                    <div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert('Search!');
                            }}
                        >
                            <select id="stateType">
                                <option id="stateType">분실</option>
                                <option id="stateType">습득</option>
                                <option id="stateType">전체</option>
                            </select>

                            <div>
                                <input placeholder="게시글 IDX 검색 ex)1342"></input>
                                <button type="submit">
                                    <img src="./images/finder.png" alt="finder" width="20" height="20" />
                                </button>
                            </div>
                            
                            <div>
                                <label><input type="checkbox" value="미완료" /> 미완료</label>
                                <label><input type="checkbox" value="완료" />완료</label>
                                <label><input type="checkbox" value="인계됨" />인계됨</label>
                            </div>  
                        </form>
                    </div>

                    {/*게시글 리스트*/}
                    <div>
                        {/*여러개 한 번에 삭제 상태 변경 버튼*/}
                        <div>
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
                                        <th>checkbox</th>
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
            </div>
        </div>   
    )

}