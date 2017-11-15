function(e){
    var competitions = window.document.getElementsByClassName('ui-link-inherit');
    var competition_names = [];
    
    for (i=0; i<competitions.length; i++){
        competition_names[i] = competitions[i].text;
    }
    return JSON.stringify(competition_names);
}