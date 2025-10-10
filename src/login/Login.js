import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div>
            {/*로고*/}
            <div>
                <div>
                    <img src="./images/INHA_logo.png" />
                </div>
                <div>
                    분실물 찾기
                </div>
                <div>
                    관리자 페이지
                </div>
            </div>
            
            {/*로그인*/}
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Sign In!');
                    }}
                >
                    <div>학번</div>
                    <input type="text" placeholder="value"></input>
                    <div>비밀번호</div>
                    <input type="text" placeholder="value"></input>

                    <div>
                        <Link to="/"><input type="submit" value="Sign In" /></Link>
                    </div>
                </form>
            </div>
        </div>   
    )

}