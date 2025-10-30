import { ITEM } from "../../assets/ItemAsset";
import tableStyles from "../../styles/Table2.module.css";
import checkboxStyle from "../../styles/CheckboxLabel.module.css";
import toggleStyle from "../../styles/Toggle.module.css";

import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";
import { getAllLocations } from "../../api/location";


export default function GainTableEdit({postDetail, setPostDetail}){
    const [categoryList, setCategoryList] = useState([]);
    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        getAllCategories(setCategoryList);
        getAllLocations(setLocationList);
    }, []);


    const [toggleChecked, setToggleChecked] = useState(false);

    return (
        <>
            <table className={tableStyles.Table2}>
                <tbody>          
                    <tr>
                        <th>습득물에 학번 존재 유무</th>
                        <td>
                            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                                {/* 토글 체크박스 */}
                                <input
                                    type="checkbox"
                                    id="Toggle"
                                    className={toggleStyle.Toggle}
                                    checked={postDetail.isPersonal}
                                    onChange={(e) => setToggleChecked(e.target.checked)}
                                    hidden
                                />

                                <label htmlFor="Toggle" className={toggleStyle.ToggleSwitch}>
                                    <span className={toggleStyle.ToggleButton}></span>
                                </label>

                                {/* 체크박스 상태에 따라 활성화/비활성화 */}
                                <input
                                    type="text"
                                    disabled={!toggleChecked}
                                    placeholder={toggleChecked ? "작성 가능" : "토글 켜야 입력 가능"}
                                    style={{
                                        padding: "5px 10px",
                                        border: "1px solid #ccc",
                                        borderRadius: "5px",
                                        flex: 1,
                                    }}
                                />
                            </div>
                        </td>
                    </tr>      
                    <tr>
                        <th>물품 카테고리</th>
                        <td>
                            <div className={checkboxStyle.Checkbox_Style}>
                                {categoryList.map((e) => (
                                    <label key={e.id}>
                                    <input
                                        type="checkbox"
                                        checked={postDetail.categories?.includes(e.name) || false} // postDetail.categories에 있으면 체크
                                        onChange={() => {
                                        setPostDetail((prev) => {
                                            let updatedCategories;
                                            if (prev.categories.includes(e.name)) {
                                            updatedCategories = prev.categories.filter((c) => c !== e.name);
                                            } else {
                                            updatedCategories = [...prev.categories, e.name];
                                            }
                                            return { ...prev, categories: updatedCategories };
                                        });
                                        }}
                                    />
                                    <span>{e.name}</span>
                                    </label>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>습득 장소</th>
                        <td>
                            <select
                                id="location"
                                value={postDetail.locationName || ""} // 기본 선택값 지정
                                onChange={(e) =>
                                    setPostDetail((prev) => ({ ...prev, locationName: e.target.value }))
                                }
                            >
                                {locationList.map((e) => (
                                    <option key={e.id} value={e.name}>
                                    {e.name}
                                    </option>
                                ))}
                            </select>
                            <input 
                                type="text" 
                                style={{ marginTop: "4px" }}
                                defaultValue={postDetail.locationDetail}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>보관 위치</th>
                        <td>
                            <input type="text" defaultValue={postDetail.storedLocation} />
                        </td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input type="text" defaultValue={postDetail.title} />
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea defaultValue={postDetail.content}></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}