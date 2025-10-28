import tableStyles from "../../styles/Table2.module.css";

export default function ReceiverRegistTable () {

    return (
        <table className={tableStyles.Table2}>
            <tbody>
                <tr>
                    <th>게시물 번호</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>수령인 <span style={{color:"#fe2828ff"}}>*</span></th>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <th>이메일 <span style={{color:"#fe2828ff"}}>*</span></th>
                    <td>
                        <div style={{ display: "flex", flexDirection:"row", boxSizing: "border-box" }}>
                            <input type="text" defaultValue="010" style={{ marginRight:"5px" }} />
                            @
                            <input type="text" style={{ marginLeft:"5px" }} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>전화번호 <span style={{color:"#fe2828ff"}}>*</span></th>
                    <td>
                        <div style={{ display: "flex", flexDirection:"row", boxSizing: "border-box" }}>
                            <input type="text" defaultValue="010" style={{ marginRight:"5px" }} />
                            -
                            <input type="text" style={{ margin:"0 5px" }} />
                            -
                            <input type="text" style={{ marginLeft: "5px" }} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>학번</th>
                    <td><input type="text" /></td>
                </tr>
            </tbody>
        </table>
    )
}