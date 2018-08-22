const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

function addRemaningRadioheadMembers() {

  radioheadRemainingMembers.forEach( member => {

  let objData = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: member, band_id: 2})
  }


  fetch( "http://localhost:3000/members", objData ).then( res => res.json() ).then( data => console.log(data.id) )

  }

)};


//redundant code, misunderstood directions below. please ignore:


//get fetch, displays ID of all band members
//
// function fetchMemberId(){
//   fetch("http://localhost:3000/members")
//     .then(res => res.json())
//     .then( member => member.forEach ( bandMember => console.log(bandMember.id) ) )
// }


addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
