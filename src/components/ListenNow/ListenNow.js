import './ListenNow.scss'

function ListenNow() {
    return (
        <section className='listen-now'>
            <h2 className='listen-now__heading'>Listen Now.</h2>
            <div className='listen-now__container'>
                <div>
                    <iframe
                        className='listen-now__iframe'
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        title='If You Let Go'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1377268738&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <div className='listen-now__iframe-container'>
                        <a
                            className='listen-now__iframe-link'
                            href="https://soundcloud.com/maclaynes" title="Maclayne" target="_blank" rel="noreferrer">Maclayne</a> · <a className='listen-now__iframe-link' href="https://soundcloud.com/maclaynes/if-you-let-go-demo" title="If You Let Go Demo" target="_blank" rel="noreferrer">If You Let Go Demo</a>
                    </div>
                </div>
                <div>
                    <iframe
                        className='listen-now__iframe'
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        title='Ometepe Song'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1377271996&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <div className='listen-now__iframe-container--2'>
                        <a
                            className='listen-now__iframe-link'
                            href="https://soundcloud.com/maclaynes" title="Maclayne" target="_blank" rel="noreferrer" >Maclayne</a> · <a className='listen-now__iframe-link' href="https://soundcloud.com/maclaynes/the-ometepe-song" title="The Ometepe Song Demo" target="_blank" rel="noreferrer">The Ometepe Song Demo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ListenNow