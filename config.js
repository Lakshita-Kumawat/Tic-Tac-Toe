function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;  // +'1' => 1
    playerConfigOverlay.style.display='block';
    backdrop.style.display='block';
}

function closePlayerConfig(){
    playerConfigOverlay.style.display='none';
    backdrop.style.display='none';
    form.firstElementChild.classList.remove('error');
    errorsOutput.textContent='';
    form.firstElementChild.lastElementChild.value='';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData= new FormData(event.target);  // trim()=>'   Max A   '=> 'Max A'
    const enteredPlayerName=formData.get('playername').trim();

    if(!enteredPlayerName){     // or (enteredPlayerName === '')
        event.target.firstElementChild.classList.add('error');
        errorsOutput.textContent='Please enter a valid name';
        return;
        //lines below the return function will no extcute if the condition is false
    }

    const updatedPlayerData=document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerData.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name=enteredPlayerName;

    closePlayerConfig();
}