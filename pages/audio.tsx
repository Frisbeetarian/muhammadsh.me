import Container from 'components/Container';

export default function Audio() {
  return (
    <Container title="Visuals – Muhammad Sulayman Haydar">
      <div className="flex flex-col items-start justify-center max-w-4xl 2xl:max-w-4xl mx-auto mb-16">
        <div className="flex flex-col items-start rajdhani-light text-th-primary-medium w-full">
          <h1>Audio</h1>

          <div>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1424513839&color=%23f80554&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div>
              <a
                href="https://soundcloud.com/mohamad-hoho"
                title="سطوحي"
                target="_blank"
                rel="noopener noreferrer"
                // style={{color: #cccccc; text-decoration: none;}}
              >
                سطوحي
              </a>
              ·
              <a
                href="https://soundcloud.com/mohamad-hoho/oouqepg95kdl"
                title="ذبذبات مطاطية"
                target="_blank"
                rel="noopener noreferrer"
                // style={{color: #cccccc; text-decoration: none;}}
              >
                ذبذبات مطاطية
              </a>
            </div>
          </div>

          <div className="w-full">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1282190992&color=%23f80554&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div
            // style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
            >
              <a
                href="https://soundcloud.com/mohamad-hoho"
                title="سطوحي"
                target="_blank"
                // style="color: #cccccc; text-decoration: none;"
              >
                سطوحي
              </a>
              ·
              <a
                href="https://soundcloud.com/mohamad-hoho/p51zoafdemla"
                title="إنخع فشش"
                target="_blank"
                // style="color: #cccccc; text-decoration: none;"
              >
                إنخع فشش
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
