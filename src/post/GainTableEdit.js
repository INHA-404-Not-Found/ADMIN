import { ITEM } from "../assets/ItemAsset";
import tableStyles from "../styles/Table2.module.css";
import checkboxStyle from "../styles/CheckboxLabel.module.css";


export default function GainTableEdit(){

    return (
        <>
            <table className={tableStyles.Table2}>
                <tbody>          
                    <tr>
                        <th>습득물에 학번 존재 유무</th>
                        <td>
                            <input type="checkbox" />
                            <input />
                        </td>
                    </tr>      
                    <tr>
                        <th>물품 카테고리</th>
                        <td>
                            <div className={checkboxStyle.Checkbox_Style}>
                                {ITEM.map((e) => (
                                    <label key={e}><input type="checkbox" /><span>{e}</span></label>
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
                </tbody>
            </table>
            
            <table className={tableStyles.Table2}>
                <tbody>
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