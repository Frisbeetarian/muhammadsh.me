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
            visual scripting system Kismet, and used it to build mini games and
            prototype with gameplay. Being a gamer since I was a kid, I
            continued to experiment and tinker with UDK and became more driven
            to try and develop casual and strategy games. With the release of
            UE4, I saw the potential of its powerful rendering capabilities and
            robust toolkit and used those to experiment with visuals. I love
            walking and listening to music and imagining visuals and images that
            could accompany the music. Unreal enabled to translate those
            imaginings into concrete artistic expressions. Here are some of my
            visualizations:
          </p>

          <div className="flex w-full justify-end pr-2 my-3">
            <h2 className="text-2xl rajdhani-semi-bold block ">تعغ</h2>
          </div>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/Ayr78UM0TIs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <p className="mx-2 my-4">
            I utilized Epic's{' '}
            <a
              className="underline"
              href="https://www.youtube.com/watch?v=WU0gvPcc3jQ&t=214s"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Matrix Awakens
            </a>{' '}
            demo map for the lifelike city with pedestrians and car traffic. I
            enabled the city simulation, placed a camera in the scene, put it on
            a track and altered post process effects, lighting and camera
            settings to produce the result.
          </p>

          <div className="flex w-full pl-2 mt-10 my-3">
            <h2 className="text-2xl rajdhani-semi-bold block">
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
            Making heavy use of outline, color burn effects and a dynamic sky
            sphere. I placed a camera in an abandoned tower environment and
            moved it around the scene as I changed the intensity and settings of
            the effects and the elements. Also love the track.
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
            Experimenting with Unreal's sound visualization functionality where
            the audio system in Unreal controls visual elements like post
            process effects, meshes and lights.
          </p>

          <div className="flex w-full pl-2 mt-10 my-3">
            <h2 className="text-2xl rajdhani-semi-bold block ">Khayyam</h2>
          </div>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/VcuIJ2Elxks"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <p className="mx-2 my-4">
            Making heavy use of colored gradient effects. I created a scene with
            interlocking metro tunnels and ran a camera through the tunnels
            while modifying the fog gradient as it moved about.
          </p>

          <div className="flex w-full justify-end pr-2 my-3">
            <h2 className="text-2xl rajdhani-semi-bold block">
              ليس كل شيئ يشرب الماء
            </h2>
          </div>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/LT3i2f6IaCc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <p className="mx-2 my-4">
            My friend Muhammad Berro and I collaborated to create this music
            video for the amazing and up and coming Toni Geitani. The cave
            itself is a community map which we modified and added sections and
            elements to. We built the underground water caves and the
            environment after the camera exists the cave. We used UE4 visual
            scripting system Blueprints and its camera controls system Sequences
            to add interactivity and control the position and movement of the
            elements at certain intervals.
          </p>

          <div className="w-full flex justify-end">
            <a
              className="flex items-center mt-8 text-th-primary-dark leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/playlist?list=PLxVxxL4yicyb41Ug_wFyrzr7lWgazshj4"
            >
              Watch all visualizations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
