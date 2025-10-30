import { ITEM } from "../../assets/ItemAsset";
import tableStyles from "../../styles/Table2.module.css";
import checkboxStyle from "../../styles/CheckboxLabel.module.css";
import { getAllCategories } from "../../api/category";
import { getAllLocations } from "../../api/location";
import { useEffect, useState } from "react";

export default function LostTableEdit({postDetail, setPostDetail}){
    const [categoryList, setCategoryList] = useState([]);
    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        getAllCategories(setCategoryList);
        getAllLocations(setLocationList);
    }, []);


    return (
        <>
            <table className={tableStyles.Table2}>
                <tbody>                
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
                        <th>분실 장소</th>
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