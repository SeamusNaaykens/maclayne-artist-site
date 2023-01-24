import './Homepage.scss'
import About from '../../components/About/About'
import ListenNow from '../../components/ListenNow/ListenNow'
import LiveSessions from '../../components/LiveSessions/LiveSessions'

function Homepage() {
    return(
        <main>
            <About/>
            <ListenNow/>
            <LiveSessions/>
        </main>
    )
}
export default Homepage