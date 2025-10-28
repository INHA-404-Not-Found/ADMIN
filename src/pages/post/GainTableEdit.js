import { ITEM } from "../../assets/ItemAsset";
import tableStyles from "../../styles/Table2.module.css";
import checkboxStyle from "../../styles/CheckboxLabel.module.css";
import toggleStyle from "../../styles/Toggle.module.css";

import { useState } from "react";


export default function GainTableEdit(){
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
                                    checked={toggleChecked}
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
                                {ITEM.map((e) => (
                                    <label key={e}>
                                        <input type="checkbox" />
                                        <span>{e}</span>
                                    </label>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>습득 장소</th>
                        <td>
                            <select id="location">
                                <option id="location">후문</option>
                                <option id="location">정문</option>
                                <option id="location">5호관</option>
                                <option id="location">60주년기념관</option>
                                <option id="location">하이테크관</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>보관 위치</th>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}