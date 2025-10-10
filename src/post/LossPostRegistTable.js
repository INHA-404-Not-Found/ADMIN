import StatusSelect from "../components/StatusSelect";

export default function GainTable(){

    return (
        <table>
            <tbody>                
                <tr>
                    <th>물품 카테고리</th>
                    <td>
                        {["지갑", "열쇠", "카드", "기타"].map((item, index) => (
                            <label key={index}>
                                <input type="checkbox" />
                                {item}
                            </label>
                        ))}
                    </td>
                </tr>
                <tr>
                    <th>분실 장소</th>
                    <td>
                        <input />
                    </td>
                </tr>
            </tbody>

            <br></br>
            
            <tbody>
                <tr>
                    <th>제목</th>
                    <td>
                        <input />
                    </td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>
                        <input />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}