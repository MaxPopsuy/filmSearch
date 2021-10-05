export const themeStyles = {
  'Brown theme': {
    '--headline-white': '#FEFFF1',
    '--aside-bg': '#4c4145',
    '--headline-bg': '#3a2f33',
    '--text-grey': '#C7C7C7',
    '--rating-color': '#fcd46b',
    '--main-color': '#ededed',
    '--gear-bg': '#4c4145',
    '--text-color-dark': '#3a2f33',
    '--text-color': '#4c4145',
    '--gear-inner': '#FEFFF1',
  },
  'Dark theme': {
    '--headline-white': '#dcdcdc',
    '--aside-bg': '#404040',
    '--headline-bg': '#494949',
    '--text-grey': '#bbb',
    '--rating-color': '#fcd46b',
    '--main-color': '#333333',
    '--gear-bg': '#efefef',
    '--gear-inner': '#333333',
    '--text-color-dark': '#acacac',
    '--text-color': '#dcdcdc',
  },
  'Blue theme': {
    '--headline-white': '#FEFFF1',
    '--headline-bg': '#293B5F',
    '--aside-bg': '#47597E',
    '--text-grey': '#C7C7C7',
    '--rating-color': '#fcd46b',
    '--main-color': '#DBE6FD',
    '--gear-inner': '#FEFFF1',
    '--gear-bg': '#47597E',
    '--text-color-dark': '#272933',
    '--text-color': '#676778',
  },
  'Toxic-water theme': {
    '--headline-white': '#fff',
    '--headline-bg': '#222',
    '--aside-bg': '#000',
    '--text-grey': '#0ff',
    '--rating-color': '#0ff',
    '--main-color': '#151515',
    '--gear-inner': '#000',
    '--gear-bg': '#fff',
    '--text-color-dark': '#0ff',
    '--text-color': '#0cc',
  },
  'Uran theme': {
    '--headline-white': '#fff',
    '--headline-bg': '#222',
    '--aside-bg': '#000',
    '--text-grey': '#0f0',
    '--rating-color': '#0f0',
    '--main-color': '#151515',
    '--gear-inner': '#000',
    '--gear-bg': '#fff',
    '--text-color-dark': '#0f0',
    '--text-color': '#0c0',
  },
  'Casual theme': {
    '--headline-white': '#5c4f55',
    '--aside-bg': '#F9F8D4',
    '--headline-bg': '#E7C06E',
    '--text-grey': '#4c4145',
    '--rating-color': '#34BEEA',
    '--main-color': '#F9E3AF',
    '--gear-bg': '#4c4145',
    '--text-color-dark': '#3a2f33',
    '--text-color': '#4c4145',
    '--gear-inner': '#FEFFF1',
  },
  'Green theme': {
    '--headline-white': '#d5e2ed',
    '--aside-bg': '#6DAC4FFF',
    '--headline-bg': '#0A5E2AFF',
    '--text-grey': '#d5e2ed',
    '--rating-color': '#d5e2ed',
    '--main-color': '#bad072',
    '--gear-inner': '#FEFFF1',
    '--gear-bg': '#6e9a44',
    '--text-color-dark': '#3a2f33',
    '--text-color': '#4c4145',
  },
  'Pink theme': {
    '--headline-white': '#023026',
    '--aside-bg': '#f5a3b7',
    '--headline-bg': '#BFB9CF',
    '--text-grey': '#715f65',
    '--rating-color': '#715f65',
    '--main-color': '#fee2e3',
    '--gear-inner': '#FEFFF1',
    '--gear-bg': '#715f65',
    '--text-color-dark': '#3a2f33',
    '--text-color': '#4c4145',
  },
  'Yellow theme': {
    '--headline-white': '#272933',
    '--headline-bg': '#fcd46b',
    '--aside-bg': '#ddce6e',
    '--text-grey': '#272933',
    '--rating-color': '#272933',
    '--main-color': '#d9d9c2',
    '--gear-inner': '#ddce6e',
    '--gear-bg': '#272933',
    '--text-color-dark': '#272933',
    '--text-color': '#676778',
  },
};

export const changeTheme = theme => {
  localStorage.setItem('theme', theme);
  // themeStyles.theme
  for (const elem in themeStyles[theme]) {
    document.documentElement.style.setProperty(elem, themeStyles[theme][elem]);
  }
};
