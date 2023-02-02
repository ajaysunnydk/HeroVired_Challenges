import './style.css';

function ChallengeCard(props) {
    return (
        <button className="card">
            <p>{props.title}</p>
            <p>{props.score}</p>
        </button>
    )
}
export default ChallengeCard;