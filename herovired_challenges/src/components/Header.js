import './style.css'
function Header() {
    return (
        <nav className="navbar">
            <div className="left">
                <a href='/' className='main-logo'><h2 className="heading">Prowess Devops</h2></a>
                <a href="/users" className="link">Users</a>
                <a href="/scoreboard" className="link">Scoreboard</a>
                <a href="/challenges" class="link">Challenges</a>
            </div>
            <div className="right">
                {/* <a href="#" className="link">Notifications</a>
                <a href="#" className="link">Profile</a>
                <a href="#" class="link">Settings</a> */}
                <a href="/login" class="link">Logout</a>
            </div>
        </nav>
    )
}
export default Header;