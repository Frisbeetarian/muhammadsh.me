import Container from 'components/Container';

export default function Visuals() {
  return (
    <Container title="Visuals – Muhammad Sulayman Haydar">
      <div className="flex flex-col items-start justify-start max-w-4xl 2xl:max-w-4xl mx-auto mb-16 w-full px-8 md:px-0 ">
        <div className="flex flex-col items-start w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-th-primary-dark">
            Visualizations
          </h1>

          <p>I started using UDK in 2011</p>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/Ayr78UM0TIs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/aohVNLJSZMs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
