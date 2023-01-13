//race track container and insert it into garage view
export const raceTracks = document.createElement('div');
raceTracks.id = 'tracks-container'

export const numPerPage = 7;
let track;
for (let i = 0; i < numPerPage; i++) {
    track = document.createElement('div');
    track.classList.add('race-track');
    raceTracks.appendChild(track);
}
