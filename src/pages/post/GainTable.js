import tableStyles from "../../styles/Table2.module.css";

export default function GainTable({ postDetail, receiver }){

    return (
        <>
        <table className={tableStyles.Table2}>
            <tbody>
                <tr>
                    <th>번호</th>
                    <td>{postDetail.postId}</td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td>{postDetail.writer}</td>
                </tr>
                <tr>
                    <th>작성 날짜</th>
                    <td>2025.10.10.금</td>
                </tr>
                <tr>
                    <th>습득물에 학번 존재 유무</th>
                    <td>
                        {postDetail.studentId}
                    </td>
                </tr>
                <tr>
                    <th>물품 카테고리</th>
                    <td>{postDetail.categories}</td>
                </tr>
                <tr>
                    <th>습득 장소</th>
                    <td>
                        {postDetail.locationName}{" "}
                        {postDetail.locationDetail 
                            ? `( ${postDetail.locationDetail} )` : ""}
                    </td>
                </tr>
                <tr>
                    <th>보관 위치</th>
                    <td>{postDetail.storedLocation}</td>
                </tr>
                <tr>
                    <th>상태</th>
                    <td>
                        { postDetail.status === "UNCOMPLETED" ? "미완료" : "" }
                        { postDetail.status === "COMPLETED" ? "완료" : "" }
                        { postDetail.status === "POLICE" ? "인계" : "" }
                    </td>
                </tr>
                <tr>
                    <th>수령인</th>
                    <td>{receiver}</td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>{postDetail.title}</td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>{postDetail.content}</td>
                </tr>
            </tbody>
        </table>
    </>

    )
}