const styleSheet = document.getElementById('styles-normal');
const darkModetoggle = document.getElementById('dark-mode');
const moonDark = document.getElementById('moon-dark');
const darkModetext = document.getElementById('dark-text');

const savedMode = localStorage.getItem('mode');
if(savedMode){
  setMode(savedMode);
}

darkModetoggle.addEventListener('click' , () =>{
  if(styleSheet.href.includes('styles/project-dark.css'))
  {
    setMode('light');
  }else{
    setMode('dark');
  }
});

function setMode(mode){
  if(mode === 'light'){
    styleSheet.href = 'styles/project.css';
    darkModetext.textContent='Dark mode';
    moonDark.setAttribute('name', 'moon-outline');
    localStorage.setItem('mode' ,'light');
  }else{
    styleSheet.href = 'styles/project-dark.css';
    darkModetext.textContent='Light mode';
    moonDark.setAttribute('name', 'moon-outline');
    localStorage.setItem('mode' ,'Dark');

  }
}