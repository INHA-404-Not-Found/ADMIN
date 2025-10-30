import StatusSelect from "../../components/StatusSelect";
import styles from "../../styles/Mainboard.module.css";
import tableStyles from "../../styles/Table.module.css";
import pageStyles from "../../styles/Pagination.module.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "../../api/category";

export default function ItemCategory() {
    const [categoryList, setCategoryList] = useState([]);
    const [newCategory, setNewCategory] = useState([]);

    useEffect(() => {
        getAllCategories(setCategoryList);
    }, []);

    {/*메인보드*/}
    return (
        <div className={styles.Container}>
            <div className={styles.Title_Container}>물품 카테고리 관리</div>

            <br></br>

            {/*검색창*/}
            <div className={styles.Add_Input}>
                <input
                    placeholder="물품 카테고리 추가" 
                    onChange={(e) => {setNewCategory(e.target.value);}}
                />
                <button
                    type="submit"
                    onClick={() => {
                        createCategory(newCategory);
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
                            {categoryList.map((e) => (
                                <tr key={e.id}>
                                    <td style={{ textAlign:"center" }}>{e.id}</td>
                                    <td style={{ textAlign:"center" }}>{e.name}</td>
                                    <td style={{ textAlign:"center" }}
                                        onClick={() => {
                                            const categoryName = prompt("수정할 카테고리 이름을 적으세요");
                                            if(categoryName === ""){
                                                alert("실패하였습니다.");
                                            } else {
                                                updateCategory(e.id, categoryName);
                                            }
                                        }}
                                    >  
                                        수정하기
                                    </td>
                                    <td
                                        style={{ textAlign:"center" }}
                                        onClick={() => {
                                            const deleteConfirmMsg = prompt("삭제하면 복구할 수 없습니다. 삭제하려면 카테고리의 이름을 그대로 따라 적으세요.")
                                            if(deleteConfirmMsg === e.name){
                                                deleteCategory(e.id);
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