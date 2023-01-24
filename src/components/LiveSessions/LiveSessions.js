import './LiveSessions.scss'

function LiveSessions() {
    return (
        <section className='live-sessions'>
            <h2 className='live-sessions__heading'>Live sessions.</h2>
            <iframe
                className='live-sessions__video'
                src="https://www.youtube.com/embed/ec-wAEupTS4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <iframe
                className='live-sessions__video'
                src="https://www.youtube.com/embed/HKgVwEjVf4w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </section>
    )
}
export default LiveSessions