function generateTeam(data){
  let roleFactor = ''
  let roleEqual = data.roleID
  switch(data.role){
    case 'Manager':
      roleFactor = 'Office Number';
      break;
    case 'Engineer':
      roleFactor = 'GitHub';
      roleEqual = `<a href="https://github.com/${ data.roleID }" target="_blank">${ data.roleID }</a>`
      break;
    case 'Intern':
      roleFactor = 'School';
      break;
  }
  return`
    <div class="card col-md-4 col-sm-12 mb-3 px-0">
    <div class="card-body bg-primary text-white">
      <h3 class="card-title">${ data.name }</h3>
      <p class="card-text">${ data.role }</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${ data.id } </li>
      <li class="list-group-item">email: <a href="mailto:${ data.email }">${ data.email }</a> </li>
      <li class="list-group-item">${ roleFactor } : ${ roleEqual } </li>
    </ul>
  </div>
`
}
module.exports = generateTeam