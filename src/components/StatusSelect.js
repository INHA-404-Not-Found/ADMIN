export default function StatusSelect () {
    return (
        <select
            id="stateType"
            style={{ 
                padding: "2px 7px",
                borderRadius: "5px"
            }}
        >
            <option id="stateType">미완료</option>
            <option id="stateType">완료</option>
            <option id="stateType">인계됨</option>
        </select>
    );
};
