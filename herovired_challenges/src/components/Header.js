import './style.css'
function Header() {
    return (
        <nav className="navbar">
            <div className="left">
                <h2 className="heading">HeroVired Devops</h2>
                <a href="#" className="link">Users</a>
                <a href="#" className="link">Scoreboard</a>
                <a href="#" class="link">Challenges</a>
            </div>
            <div className="right">
                <a href="#" className="link">Notifications</a>
                <a href="#" className="link">Profile</a>
                <a href="#" class="link">Settings</a>
                <a href="#" class="link">Logout</a>
            </div>
        </nav>
    )
}
export default Header;