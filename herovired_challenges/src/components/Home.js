import '../App.css'
import './style.css'
import ChallengeCard from './ChallengeCard'
import Header from "./Header"
import { useState } from 'react';
import Popup from './Popup';


function Home() {

    const [showPopup, setShowPopup] = useState(false);
    const [selectedChallenge, setSelectedChallenge] = useState({});

    const handleClick = (challenge) => {
        setSelectedChallenge(challenge);
        setShowPopup(true);
    };

    const technologies = ["Programming", "Linux"]
    const programming = [
        {
            title: "Server Addition",
            score: 15
        },
        {
            title: "Reverse Gear",
            score: 15
        },
        {
            title: "Mathematically Beauty!",
            score: 95
        }
    ]
    const linux = [
        {
            title: "Read File",
            score: 10
        },
        {
            title: "Hidden Files",
            score: 20
        },
        {
            title: "Unique Flag",
            score: 20
        },
        {
            title: "Pain in a dash!",
            score: 25
        },
        {
            title: "Eleven",
            score: 30
        }
    ]
    return (
        <div>
            <Header></Header>
            <div className="content-ctn">
                <h1 id="challenges">Challenges</h1>
                <div className='technology'>
                    <h2 className='tech-title'>{technologies[0]}</h2>
                    <div className='cards-ctn'>{
                        programming.map(x => (
                            <ChallengeCard title={x.title} score={x.score} onClick={() => handleClick(x)}></ChallengeCard>
                        ))
                    }</div>
                </div>
                <div className='technology'>
                    <h2 className='tech-title'>{technologies[1]}</h2>
                    <div className='cards-ctn'>{
                        linux.map(x => (
                            <ChallengeCard title={x.title} score={x.score} onClick={() => handleClick(x)}></ChallengeCard>
                        ))
                    }</div>
                </div>
            </div>
            {showPopup && (
                <Popup challenge={selectedChallenge} onClose={() => setShowPopup(false)} />
            )}
        </div>
    )

}
export default Home