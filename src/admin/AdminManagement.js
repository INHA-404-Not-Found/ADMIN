import StatusSelect from "../components/StatusSelect";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";

export default function Main() {

    return (
        <div>
            {/*header*/}
            <div>관리자 관리</div>

            {/*관리자 추가*/}
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Add Admin!');
                    }}
                >
                    <input placeholder="학번" />
                    <input placeholder="이름" />
                    <input placeholder="담당 구역" />

                    <button type="submit">추가하기</button>
                </form>
            </div>

            {/*게시글 리스트*/}
            <div>
                {/*여러개 한 번에 삭제 상태 변경 버튼*/}
                <div>
                    <div>n개를 체크하였습니다.</div>
                    
                    <button>삭제</button>
                </div>

                {/*테이블*/}
                <div>
                    <table>
                        <thead>
                            <tr>
                                {/* {columns.map((column) => (
                                    <th key={column}>{column}</th>
                                ))} */}
                                <th>checkbox</th>
                                <th>학번</th>
                                <th>이름</th>
                                <th>학과</th>
                                <th>담당 구역</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data.map(({ name, email, phone }) => (
                                <tr key={name + email + phone}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                </tr>
                            ))} */}
                            {Array.from({ length: 10 }).map((_, i) => (
                                <tr key={i}>
                                    <td><input type="checkbox" /></td>
                                    <td>12234069</td>
                                    <td>김도담</td>
                                    <td>컴퓨터공학과</td>
                                    <td>하이테크관 14층 컴퓨터공학과 학과 사무실</td>
                                    <td><button>삭제하기</button></td>
                                </tr>
                                ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    )

}