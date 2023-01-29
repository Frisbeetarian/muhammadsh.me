import Container from 'components/Container';

export default function Visuals() {
  return (
    <Container title="Visuals – Muhammad Sulayman Haydar">
      <div className="flex flex-col items-start justify-start max-w-4xl 2xl:max-w-4xl mx-auto mb-16 w-full px-8 md:px-0 ">
        <div className="flex flex-col items-start w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-th-primary-dark">
            Visualizations
          </h1>

          <p className="mb-8">
            In late 2010, I started using UDK (Unreal Development Kit) for a
            game development course at university. I was introduced to its
            visual scripting system, Kismet, and used it to build mini games and
            prototype with gameplay. Being a gamer since I was a kid, I
            continued to experiment and tinker with UDK and became more driven
            to try and develop casual and strategy games. With the release of
            UE4 (Unreal Engine 4), I saw the potential of its powerful rendering
            capabilities and robust toolkit and used those to experiment with
            visuals. I love walking and listening to music and imagining visuals
            and images that could accompany the music. Here are some of my
            visualizations:
          </p>

          <div className="flex w-full justify-end pr-2 my-3">
            <h2 className="text-2xl rajdhani-semi-bold block ">تعغ</h2>
          </div>

          <iframe
            className=""
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/Ayr78UM0TIs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <p className="mx-2 my-4">
            The above utilizes Epic's{' '}
            <a
              className="underline"
              href="https://www.youtube.com/watch?v=WU0gvPcc3jQ&t=214s"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Matrix Awakens
            </a>{' '}
            demo map for the lifelike city with pedestrians and car traffic. I
            enabled the simulation, placed a camera in the scene, put it on a
            track and altered post process effects, lighting and camera settings
            to produce the result.
          </p>

          <div className="flex w-full pl-2 mt-10 my-3">
            <h2 className="text-2xl rajdhani-semi-bold block ">
              The Mysterious Vanishing of Electra (Fan made music video){' '}
            </h2>
          </div>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/aohVNLJSZMs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <p className="mx-2 my-4">
            Making heavy use of outline, color burn effects and dynamic sky
            sphere. I placed a camera in an abandoned tower environment and
            moved it around the scene as I changed the intensity and settings of
            the effects. Also love the track.
          </p>

          <div className="flex w-full pl-2 mt-10 my-3">
            <h2 className="text-2xl rajdhani-semi-bold block ">
              Say the Name (Fan made music video){' '}
            </h2>
          </div>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/xcB8BbcAbhA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <p className="mx-2 my-4">
            Making heavy use of outline, color burn effects and dynamic sky
            sphere. I placed a camera in an abandoned tower environment and
            moved it around the scene as I changed the intensity and settings of
            the effects. Also love the track.
          </p>
        </div>
      </div>
    </Container>
  );
}
