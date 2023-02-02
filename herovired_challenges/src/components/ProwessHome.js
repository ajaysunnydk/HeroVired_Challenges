import './style.css'

function ProwessHome() {
    return (
        <>
        <nav className="navbar">
            <div className="left">
                <a href='#' className='main-logo'><h2 className="heading">Prowess Devops</h2></a>
                <a href="/users" className="link">Users</a>
                <a href="/scoreboard" className="link">Scoreboard</a>
                <a href="/" class="link">Challenges</a>
            </div>
            <div className="right">
                <a href="/login" class="link">Login</a>
            </div>
        </nav>
        <div>
            <h1 className="main-title">Prowess Soft</h1>
        </div>
        </>
    )
}
export default ProwessHome