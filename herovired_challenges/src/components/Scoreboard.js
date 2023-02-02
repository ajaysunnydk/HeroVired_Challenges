import Header from './Header'
import './style.css'
import './users.css'
function Scoreboard() {
    const rows = [
        {
            user: "ajay",
            score: "130"
        },
        {
            user: "vijay",
            score: "250"
        },
        {
            user: "sanjay",
            score: "180"
        }
    ]

    rows.sort((a, b) => {
        return b.score - a.score;
    });
    var position=1;
    return (
        <div>
            <Header></Header>
            <div className="content-ctn">
                <h1 id="challenges">Scoreboard</h1>
                <section>
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>User</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                {
                                    
                                    rows.map(x => (
                                        
                                        <tr>
                                            <td>{position++}</td>
                                            <td><a style={{ color: "#fff" }} href='#'>{x.user}</a></td>
                                            <td>{x.score}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </div>
    )
}
export default Scoreboard