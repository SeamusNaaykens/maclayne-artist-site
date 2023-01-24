import './ListenNow.scss'

function ListenNow() {
    return (
        <section className='listen-now'>
            <h2 className='listen-now__heading'>Listen Now.</h2>
            <iframe
                width="100%"
                height="300" scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1377268738&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
            <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                <a href="https://soundcloud.com/maclaynes" title="Maclayne" target="_blank" style="color: #cccccc; text-decoration: none;">Maclayne</a> · <a href="https://soundcloud.com/maclaynes/if-you-let-go-demo" title="If You Let Go Demo" target="_blank" style="color: #cccccc; text-decoration: none;">If You Let Go Demo</a>
            </div>
            <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1377271996&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
            <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                <a href="https://soundcloud.com/maclaynes" title="Maclayne" target="_blank" style="color: #cccccc; text-decoration: none;">Maclayne</a> · <a href="https://soundcloud.com/maclaynes/the-ometepe-song" title="The Ometepe Song Demo" target="_blank" style="color: #cccccc; text-decoration: none;">The Ometepe Song Demo</a>
            </div>
        </section>
    )
}
export default ListenNow