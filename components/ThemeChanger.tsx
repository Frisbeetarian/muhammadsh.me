import { ReactElement, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [
  {
    name: 'light',
    step: 0,
    icon: (
      <svg
        className="text-gray-700 hover:text-gray-900 transition-all"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24.71 26.28"
        fill="currentColor"
        stroke="none"
        width="24"
        height="24"
      >
        <path
          d="M858.06,176.93a.92.92,0,0,0-.95-.38,6.76,6.76,0,0,1-1.41.15,8.68,8.68,0,0,1-4.64-16,.86.86,0,0,0,.43-.89,1,1,0,0,0-.66-.81,13.87,13.87,0,0,0-4.16-.66A13.14,13.14,0,1,0,858.06,178a.91.91,0,0,0,0-1.09Z"
          transform="translate(-833.53 -158.31)"
        />
      </svg>
    )
  },
  {
    name: 'dark',
    step: 0,
    icon: <p></p>
  },
  {
    name: 'emerald',
    step: 0,
    icon: (
      <svg
        className="text-pink-500 hover:text-pink-300 ring-pink-500 transition-all"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 525 525"
        stroke="none"
        fill="currentColor"
        width="26"
        height="26"
      >
        <path
          d="M605.8,315a26.11,26.11,0,0,0,6.7-17.5c0-12.15-8.44-23.72-23.15-31.74-13.06-7.12-30.08-11.19-49.52-11.89,13.25-14.24,22.41-29.15,26.61-43.42,4.73-16.08,2.52-30.23-6.07-38.82h0A26.2,26.2,0,0,0,543.25,164a26.2,26.2,0,0,0-24.75-24.75,26.12,26.12,0,0,0-7.63-17.11c-8.59-8.59-22.74-10.8-38.82-6.07-14.26,4.2-29.18,13.36-43.42,26.61-.7-19.44-4.77-36.46-11.89-49.52C408.72,78.46,397.15,70,385,70a26.13,26.13,0,0,0-17.5,6.7,26.2,26.2,0,0,0-35,0A26.11,26.11,0,0,0,315,70c-12.15,0-23.72,8.44-31.74,23.15-7.12,13.06-11.19,30.08-11.89,49.52-14.23-13.25-29.15-22.41-43.42-26.61-16.08-4.73-30.23-2.51-38.82,6.07h0a26,26,0,0,0-7.65,17.1A26.24,26.24,0,0,0,156.74,164a26.2,26.2,0,0,0-17.11,7.64c-8.59,8.58-10.8,22.73-6.07,38.81,4.2,14.27,13.37,29.18,26.61,43.42-19.44.7-36.46,4.77-49.52,11.89-14.71,8-23.15,19.59-23.15,31.74A26.11,26.11,0,0,0,94.2,315a26.2,26.2,0,0,0,0,35,26.13,26.13,0,0,0-6.7,17.5c0,12.15,8.44,23.72,23.15,31.74,13.06,7.13,30.08,11.19,49.52,11.89-13.25,14.24-22.41,29.15-26.61,43.42-4.73,16.08-2.52,30.23,6.07,38.82h0A26.16,26.16,0,0,0,156.75,501a26.2,26.2,0,0,0,24.75,24.75,26.12,26.12,0,0,0,7.63,17.11c5.62,5.62,13.62,8.51,23,8.51h0A55.86,55.86,0,0,0,228,549c14.27-4.19,29.18-13.36,43.42-26.61.7,19.44,4.77,36.47,11.89,49.52,8,14.71,19.59,23.15,31.74,23.15a26.13,26.13,0,0,0,17.5-6.7,26.2,26.2,0,0,0,35,0A26.11,26.11,0,0,0,385,595c12.15,0,23.72-8.44,31.74-23.15,7.12-13.06,11.19-30.08,11.89-49.52,14.23,13.25,29.15,22.41,43.42,26.61h0a56.27,56.27,0,0,0,15.83,2.44c9.37,0,17.37-2.89,23-8.51h0a26.15,26.15,0,0,0,7.64-17.1A26.24,26.24,0,0,0,543.26,501a26.18,26.18,0,0,0,17.11-7.64c8.59-8.59,10.8-22.74,6.07-38.82-4.2-14.26-13.36-29.18-26.61-43.42,19.44-.7,36.47-4.77,49.52-11.89,14.71-8,23.15-19.59,23.15-31.74a26.13,26.13,0,0,0-6.7-17.5,26.2,26.2,0,0,0,0-35ZM477,132.87c9.61-2.83,17.65-2.21,21.5,1.66a8.74,8.74,0,0,1,0,12.37,8.75,8.75,0,0,0,12.38,12.38,8.75,8.75,0,0,1,12.38,12.37A8.75,8.75,0,1,0,535.61,184,8.77,8.77,0,0,1,548,184c3.86,3.86,4.48,11.9,1.65,21.5-3.75,12.76-13.12,27.09-26.4,40.37a150,150,0,0,1-12.05,10.76c-26.2,21.13-61,36.85-88.25,47h0a26.21,26.21,0,0,0-9.09-9.59c21.24-15.32,48.18-36.48,72.25-60.57l24.76-24.74h0a8.76,8.76,0,0,0-12.38-12.39l-24.75,24.75c-22.88,22.9-48.55,43.13-69,58-.28-.63-.58-1.25-.92-1.85,14-19.3,34.4-45.32,57.6-68.52L486.12,184h0a8.75,8.75,0,0,0-12.38-12.38L449,196.4h0a552.56,552.56,0,0,0-41.6,47.16c8.92-22.77,17-48.86,20.05-74.15,3-3.62,6.08-7,9.18-10.13C449.9,146,464.23,136.62,477,132.87ZM374.16,380.59a8.75,8.75,0,0,0-15.45,5,8.73,8.73,0,0,1-17.42,0,8.75,8.75,0,0,0-15.45-5,8.73,8.73,0,0,1-14.09-10.24,8.75,8.75,0,0,0-9.55-13.14,8.73,8.73,0,0,1-5.39-16.57,8.75,8.75,0,0,0,0-16.25,8.73,8.73,0,0,1,5.39-16.56,8.75,8.75,0,0,0,9.55-13.15,8.73,8.73,0,0,1,14.09-10.24,8.75,8.75,0,0,0,15.45-5,8.73,8.73,0,0,1,17.42,0,8.75,8.75,0,0,0,15.45,5,8.73,8.73,0,0,1,14.09,10.24,8.76,8.76,0,0,0,9.56,13.15,8.72,8.72,0,0,1,5.38,16.56,8.75,8.75,0,0,0,0,16.25,8.73,8.73,0,0,1-5.38,16.57,8.75,8.75,0,0,0-9.56,13.14,8.73,8.73,0,0,1-14.09,10.24ZM315,87.52a8.76,8.76,0,0,1,8.75,8.75,8.75,8.75,0,0,0,17.5,0,8.75,8.75,0,1,1,17.5,0,8.75,8.75,0,0,0,17.5,0A8.76,8.76,0,0,1,385,87.52c11,0,26.25,21.29,26.25,61.25a155.23,155.23,0,0,1-.9,16.13c-3.72,34.82-18.22,72.13-30.69,99h0a26.67,26.67,0,0,0-7.86,1.58,26.68,26.68,0,0,0-3.91-4.57c4-24.68,8.36-59.57,8.36-94.6v-35a8.75,8.75,0,0,0-17.5,0v35c0,31.92-3.77,63.88-7.46,87.54-.43,0-.86,0-1.29,0s-.86,0-1.29,0c-3.69-23.66-7.46-55.62-7.46-87.54v-35a8.75,8.75,0,1,0-17.5,0v35c0,35,4.36,69.92,8.36,94.6a26.68,26.68,0,0,0-3.91,4.57,26.67,26.67,0,0,0-7.86-1.58c-12.47-26.83-27-64.14-30.69-99a155.42,155.42,0,0,1-.9-16.14c0-40,15.25-61.25,26.25-61.25ZM152,184a8.76,8.76,0,0,1,12.38,0,8.75,8.75,0,0,0,12.37-12.38,8.75,8.75,0,0,1,12.38-12.37,8.75,8.75,0,0,0,12.37-12.38,8.76,8.76,0,0,1,0-12.37c3.86-3.86,11.9-4.48,21.5-1.66,12.76,3.75,27.09,13.13,40.36,26.41,3.11,3.1,6.18,6.51,9.19,10.13,3.06,25.29,11.13,51.38,20.05,74.15h0A550.57,550.57,0,0,0,251,196.42l-24.74-24.76h0A8.75,8.75,0,1,0,213.89,184s12.37,12.36,24.74,24.75c23.2,23.19,43.58,49.2,57.6,68.5-.34.61-.64,1.23-.93,1.86-20.48-14.86-46.14-35.09-69-58l-24.74-24.74h0a8.75,8.75,0,1,0-12.38,12.37l24.75,24.75A548.33,548.33,0,0,0,261,275.1c-23-9-48.92-17-74.12-20-3.62-3-7-6.08-10.13-9.18-13.28-13.28-22.65-27.62-26.4-40.36-2.83-9.61-2.21-17.65,1.65-21.51ZM105,367.52a8.76,8.76,0,0,1,8.75-8.75,8.75,8.75,0,0,0,0-17.5,8.75,8.75,0,0,1,0-17.5,8.75,8.75,0,0,0,0-17.5,8.76,8.76,0,0,1-8.75-8.75c0-11,21.29-26.25,61.25-26.25a155.42,155.42,0,0,1,16.14.9c33.32,3.56,68.82,16.89,96,29.33a25.9,25.9,0,0,0-4.47,12.43c-24.7-3.85-57.41-7.66-90.19-7.66h-35a8.75,8.75,0,0,0,0,17.5h35c35.37,0,70.82,4.61,95.52,8.75-24.7,4.14-60.15,8.75-95.52,8.75h-35a8.75,8.75,0,0,0,0,17.5h35a550.71,550.71,0,0,0,62.76-3.92c-22.37,9.78-46.54,22.53-66.59,38.25-4.75.44-9.34.67-13.67.67-40,0-61.25-15.25-61.25-26.25ZM223,532.17c-9.6,2.83-17.64,2.21-21.5-1.66a8.74,8.74,0,0,1,0-12.37,8.75,8.75,0,0,0-12.38-12.38,8.75,8.75,0,0,1-12.38-12.37A8.75,8.75,0,1,0,164.39,481,8.75,8.75,0,0,1,152,481c-3.86-3.86-4.48-11.89-1.65-21.5,3.75-12.75,13.12-27.09,26.4-40.37a150.11,150.11,0,0,1,12.06-10.76c26.19-21.13,61-36.85,88.25-47h0a26.3,26.3,0,0,0,9.09,9.59c-21.24,15.32-48.17,36.48-72.25,60.57l-24.76,24.74h0a8.76,8.76,0,1,0,12.38,12.39l24.75-24.74c22.89-22.91,48.55-43.14,69-58,.28.63.59,1.25.92,1.86-14,19.3-34.4,45.31-57.6,68.51L213.88,481h0a8.75,8.75,0,1,0,12.38,12.38L251,468.64h0a551,551,0,0,0,41.61-47.16c-8.93,22.77-17,48.87-20.05,74.15-3,3.62-6.08,7-9.19,10.13C250.11,519,235.77,528.42,223,532.17Zm162,45.35a8.76,8.76,0,0,1-8.75-8.75,8.75,8.75,0,0,0-17.5,0,8.75,8.75,0,0,1-17.5,0,8.75,8.75,0,0,0-17.5,0,8.75,8.75,0,0,1-8.75,8.75c-11,0-26.25-21.28-26.25-61.25a155.23,155.23,0,0,1,.9-16.13c3.73-34.82,18.22-72.13,30.69-98.95a26.49,26.49,0,0,0,7.87-1.59,25.89,25.89,0,0,0,3.91,4.58c-4,24.67-8.37,59.57-8.37,94.59v35a8.75,8.75,0,0,0,17.5,0v-35c0-31.92,3.77-63.88,7.47-87.54.42,0,.85,0,1.28,0s.86,0,1.29,0c3.69,23.66,7.46,55.62,7.46,87.54v35a8.75,8.75,0,0,0,17.5,0v-35a550,550,0,0,0-3.91-62.71c9.9,22.66,22.62,46.62,38.25,66.54.43,4.75.67,9.35.67,13.68,0,40-15.25,61.24-26.26,61.24ZM548,481a8.74,8.74,0,0,1-12.37,0,8.75,8.75,0,0,0-12.38,12.38,8.75,8.75,0,1,1-12.37,12.37,8.75,8.75,0,0,0-12.38,12.38,8.76,8.76,0,0,1,0,12.37c-3.86,3.86-11.9,4.49-21.5,1.66-12.76-3.75-27.09-13.13-40.36-26.41h0a149.75,149.75,0,0,1-10.77-12c-22-27.3-38.19-63.85-48.68-92.78a26.35,26.35,0,0,0,13.41-1.57c14.38,19.7,35,45.83,58.41,69.26l24.74,24.76h0A8.76,8.76,0,1,0,486.12,481l-24.75-24.75c-23.19-23.19-43.58-49.2-57.59-68.5.33-.6.63-1.23.92-1.85,20.48,14.85,46.15,35.09,69,58l24.74,24.74h0a8.75,8.75,0,0,0,12.38-12.38l-24.75-24.75h0A551.6,551.6,0,0,0,439,389.94c23,9,48.92,17,74.11,20,3.62,3,7,6.08,10.13,9.19,13.28,13.27,22.66,27.61,26.41,40.36,2.83,9.6,2.2,17.64-1.66,21.5Zm38.26-157.24a8.75,8.75,0,0,1,0,17.5,8.75,8.75,0,0,0,0,17.5,8.76,8.76,0,0,1,8.75,8.75c0,11-21.28,26.25-61.25,26.25a149.9,149.9,0,0,1-16.13-.9c-33.32-3.56-68.83-16.88-96-29.33a25.66,25.66,0,0,0,4.47-12.43c24.71,3.85,57.42,7.66,90.19,7.66h35a8.75,8.75,0,0,0,0-17.5h-35c-35.37,0-70.82-4.6-95.52-8.75,24.7-4.14,60.15-8.75,95.52-8.75h35a8.75,8.75,0,0,0,0-17.5h-35a553.17,553.17,0,0,0-62.76,3.93c22.37-9.78,46.54-22.53,66.6-38.26,4.74-.44,9.34-.67,13.66-.67,40,0,61.25,15.25,61.25,26.25a8.75,8.75,0,0,1-8.75,8.75,8.75,8.75,0,0,0,0,17.5Z"
          transform="translate(-87.5 -70.02)"
        />
        <path
          d="M393.75,332.52a43.8,43.8,0,1,0-12.83,30.92A43.79,43.79,0,0,0,393.75,332.52ZM350,358.77a26.29,26.29,0,1,1,18.55-7.7,26.22,26.22,0,0,1-18.55,7.7Z"
          transform="translate(-87.5 -70.02)"
        />
      </svg>
    )
  },
  {
    name: 'pink',
    step: 0,
    icon: (
      <svg
        className="text-gray-200 hover:text-gray-300 ring-pink-500 transition-all"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 29 25.58"
        fill="currentColor"
        stroke="none"
        width="26"
        height="26"
      >
        <path
          className="a"
          d="M-77.36,277.25l-.42-.75Zm-8.48,2.89-.84.14Zm8,0-.85-.14h0Zm6.45-4.58a.85.85,0,0,0-1.21,0,.86.86,0,0,0,0,1.21Zm.32,2.71a.86.86,0,0,0,1.21,0,.86.86,0,0,0,0-1.21Zm1.36-9.67a.86.86,0,0,0-.86.85.86.86,0,0,0,.86.85Zm1.51,1.7a.86.86,0,0,0,.86-.85.86.86,0,0,0-.86-.85Zm-3.63-8.92a.86.86,0,0,0,0,1.21.86.86,0,0,0,1.21,0Zm2.71-.28a.84.84,0,0,0,0-1.2.84.84,0,0,0-1.2,0ZM-93,262.6a.85.85,0,0,0,1.2,0,.85.85,0,0,0,0-1.21Zm-.32-2.71a.85.85,0,0,0-1.21,0,.84.84,0,0,0,0,1.2ZM-94,270.3a.85.85,0,0,0,.85-.85.85.85,0,0,0-.85-.85Zm-1.52-1.7a.85.85,0,0,0-.85.85.85.85,0,0,0,.85.85Zm4.39,8.18a.85.85,0,0,0,0-1.21.85.85,0,0,0-1.21,0Zm-2.71.27a.85.85,0,0,0,0,1.21.85.85,0,0,0,1.2,0Zm13.38-11.52a.87.87,0,0,0-.1-1.21.87.87,0,0,0-1.21.1Zm-4.44,3.92-.66-.55a.86.86,0,0,0-.12.91.85.85,0,0,0,.78.49Zm6.06,0,.65.55a.84.84,0,0,0,.12-.91.85.85,0,0,0-.77-.49Zm-4.44,3.93a.84.84,0,0,0,.1,1.2.85.85,0,0,0,1.2-.1Zm-.87,10.14a.86.86,0,0,0-.85.86.85.85,0,0,0,.85.85Zm4.55,1.71a.85.85,0,0,0,.85-.85.86.86,0,0,0-.85-.86Zm-10.52-15.78a8.18,8.18,0,0,1,8.25-8.1v-1.71a9.88,9.88,0,0,0-10,9.81Zm8.25-8.1a8.17,8.17,0,0,1,8.24,8.1h1.71a9.88,9.88,0,0,0-10-9.81Zm8.24,8.1a8.07,8.07,0,0,1-4.18,7.05l.83,1.49a9.79,9.79,0,0,0,5.06-8.54Zm-4.18,7.05a8.29,8.29,0,0,1-4.06,1.05v1.71A10,10,0,0,0-76.95,278Zm-4.06,1.05a8.33,8.33,0,0,1-4.07-1.05l-.83,1.49a10,10,0,0,0,4.9,1.27Zm-4.07-1.05a8.07,8.07,0,0,1-4.18-7.05h-1.7A9.78,9.78,0,0,0-86.74,278ZM-85,280l-.48-2.89-1.68.28.48,2.89Zm6.8-2.89-.49,2.89,1.69.28.48-2.89Zm5.61-.33,1.52,1.49,1.2-1.22-1.52-1.49Zm2.88-6.48h1.51v-1.7h-1.51Zm-.92-7.7,1.51-1.5-1.19-1.21-1.52,1.49Zm-21.23-1.22-1.51-1.49-1.2,1.21,1.52,1.5ZM-94,268.6h-1.52v1.7H-94Zm1.67,7-1.51,1.49,1.19,1.22,1.52-1.49Zm10.56-11.14-3.79,4.48,1.31,1.1,3.79-4.47Zm-3.13,5.88h6.06v-1.7h-6.06Zm5.41-1.4-3.79,4.48,1.3,1.1,3.79-4.48Zm.12,11.64h-5v1.7h5Zm-4.78,4.69h4.55v-1.71h-4.55Zm5.43-5.23a.65.65,0,0,1-.65.54v1.7a2.36,2.36,0,0,0,2.34-2Zm-8,.28a2.36,2.36,0,0,0,2.33,2v-1.7A.66.66,0,0,1-85,280Z"
          transform="translate(96.34 -259.64)"
        />
      </svg>
    )
  }
];

interface Theme {
  name: string;
  step: number;
  icon: ReactElement;
}

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<Theme>();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (step === 4) {
      setStep(0);
    }
  }, [step]);

  useEffect(() => {
    if (theme) {
      const returnTheme = themes.find(
        (themeFromArray) => themeFromArray.name === theme
      );
      setSelectedTheme(returnTheme);
    }
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className="-mr-2 flex justify-between items-center font-bold text-xl">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-9 h-9 flex items-center justify-center transition-all rounded"
        onClick={() => {
          const randomTheme = themes[step];
          setStep(step + 1);
          setTheme(randomTheme.name);
        }}
      >
        {/*fwefwefwe*/}
        {/*{mounted && selectedTheme.icon ? selectedTheme.step : null}*/}
      </button>
    </div>
  );
};

export default ThemeChanger;
