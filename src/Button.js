import PropTypes from "prop-types";
import styles from "./Button.module.css"; // 버튼 모듈 css

function Button ({text}) {
    return(
        <button className={styles.title}>{text}</button> // 클래스 이름을 title로 정한 다음에 prop으로 넘김
    );
} 
Button.propTypes = { // prop 유효성 검사
    text: PropTypes.string.isRequired, // {text}에는 문자만 오게 할 것
};
export default Button;