import './LiveSessions.scss'
import ReactPlayer from "react-player"

function LiveSessions() {
    return (
        <section className='live-sessions'>
            <h2 className='live-sessions__heading'>Live sessions.</h2>
            <ReactPlayer
                className='live-sessions__video'
                url='https://www.youtube.com/watch?v=ec-wAEupTS4' />
            <ReactPlayer
                className='live-sessions__video'
                url='https://www.youtube.com/watch?v=HKgVwEjVf4w' />
        </section>
    )
}
export default LiveSessions