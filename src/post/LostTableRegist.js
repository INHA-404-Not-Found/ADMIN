import { ITEM } from "../assets/ItemAsset";
import { LOCATION } from "../assets/LocationAsset";
import tableStyles from "../styles/Table2.module.css";
import checkboxStyle from "../styles/CheckboxLabel.module.css";

export default function LostTableRegist(){

    return (
        <>
            <table className={tableStyles.Table2}>
                <tbody>                
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
                        <th>분실 장소</th>
                        <td>
                            <select id="location">
                                {LOCATION.map((e) => (
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
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