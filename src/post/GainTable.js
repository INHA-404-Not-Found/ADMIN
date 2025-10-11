import tableStyles from "../styles/Table2.module.css";

export default function GainTable(){

    return (
        <>
        <table className={tableStyles.Table}>
            <tbody>
                <tr>
                    <th>번호</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td>김도담</td>
                </tr>
                <tr>
                    <th>작성 날짜</th>
                    <td>2025.10.10.금</td>
                </tr>
                <tr>
                    <th>습득물에 학번 존재 유무</th>
                    <td>
                        -
                    </td>
                </tr>
                <tr>
                    <th>물품 카테고리</th>
                    <td>지갑</td>
                </tr>
                <tr>
                    <th>습득 장소</th>
                    <td>하텍</td>
                </tr>
                <tr>
                    <th>보관 위치</th>
                    <td>하텍 14층 컴공 학과 사무실</td>
                </tr>
                <tr>
                    <th>상태</th>
                    <td>미완료</td>
                </tr>
            </tbody>
        </table>

        <table className={tableStyles.Table}>
            <tbody>
                <tr>
                    <th>제목</th>
                    <td>검정색 지갑 하텍 강당에서 습득하였습니다.</td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>제곧내</td>
                </tr>
            </tbody>
        </table>
    </>

    )
}