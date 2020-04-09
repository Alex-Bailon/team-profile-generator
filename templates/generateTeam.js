function generateTeam(data){
    return`
    <div class="card col-md-4 col-sm-12 mb-3 mx-1 px-0">
    <div class="card-body bg-primary text-white">
      <h5 class="card-title">${ data.name }</h5>
      <p class="card-text">${ data.role }</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${ data.id } </li>
      <li class="list-group-item">ID: ${ data.email } </li>
      <li class="list-group-item">GitHub : ${ data.roleID } </li>
    </ul>
  </div>
`
}
