import StatusSelect from "../../components/StatusSelect";
import styles from "../../styles/Mainboard.module.css";
import tableStyles from "../../styles/Table.module.css";
import pageStyles from "../../styles/Pagination.module.css";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../api/post";
import { getPostsByKeyword } from './../../api/post';

export default function Main({setShowPopUp, setType, setPostId}) {
    const [postList, setPostList] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        getAllPosts(setPostList, 1);
    }, []);

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
                        <input 
                            placeholder="게시글 IDX 검색 ex)1342"
                            onChange={(e) => {setKeyword(e.target.value)}}
                        />
                        <button
                            type="submit"
                            onClick={() => {
                                getPostsByKeyword(setPostList, keyword, 1);
                            }}
                        >
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
                    
                    <button
                        onClick={() => {
                            if(window.confirm("삭제하면 복구할 수 없습니다.")){
                                alert("삭제");
                            } else{
                                alert("취소하였습니다.");
                            }
                        }}
                    >
                        삭제
                    </button>
                    <button
                        onClick={() => {
                            if(window.confirm("경찰서에 인계를 완료하였습니까?")){
                                alert("상태를 인계로 변경하였습니다.");
                            } else{
                                alert("취소하였습니다.");
                            }
                        }}
                    >
                        상태 변경: 인계
                    </button>
                </div>

                {/*테이블*/}
                <div>
                    <table className={tableStyles.Table}>
                        <thead>
                            <tr>
                                {/* {columns.map((column) => (
                                    <th key={column}>{column}</th>
                                ))} */}
                                <th><input type="checkbox" /></th>
                                <th>번호</th>
                                <th>날짜</th>
                                <th>습득/분실</th>
                                <th>제목</th>
                                <th>카테고리</th>
                                <th>작성자</th>
                                <th>수령인</th>
                                <th>상태</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {postList.map((e) => (
                                <tr key={e.postId}>
                                    <td style={{ textAlign:"center" }}><input type="checkbox" /></td>
                                    <td style={{ textAlign:"center" }}>{e.postId}</td>
                                    <td style={{ textAlign:"center" }}>2025.10.10.금</td>
                                    <td style={{ textAlign:"center" }}>
                                        {e.type == 'FIND' ? "습득" : "분실"}
                                    </td>
                                    <td style={{ textAlign: "left", padding: "0 5px" }}
                                        onClick={() => {
                                            setShowPopUp(true);
                                            if(e.type === "FIND"){ setType("gain post"); }
                                            else if(e.type === "LOST"){ setType("lost post"); }
                                            setPostId(e.postId);
                                        }}
                                    >
                                        {e.title}
                                    </td>
                                    <td style={{ textAlign: "left", padding: "0 5px" }}>{e.categories}</td>
                                    <td style={{ textAlign:"center" }}>{e.writer}</td>
                                    <td style={{ textAlign:"center" }}>최지윤</td>
                                    <td style={{ textAlign:"center" }}>
                                        <StatusSelect status={e.status} />
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
                    <button className={pageStyles.SelectedPage}>1</button>
                    <button>2</button>
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