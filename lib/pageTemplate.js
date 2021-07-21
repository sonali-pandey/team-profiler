
// function to display additional contact details as per the team member's role
const additionalData = (member,role) => {
    if(role === 'manager'){
        return `
        <p class="card-content">Office Number: ${member.offcNum}</p>`
    }
    else if(role === 'engineer'){
        return `
        <p class="card-action">GitHub username: <a href="https://github.com/${member.github}">${member.github}</a></p>`
    }
    else if(role === 'intern'){
        return `
        <p class="card-content">School name: ${member.school}</p>`
    }
};

// Team member data display
const display = (teamMember, role) => {

    if(teamMember.length === 0) return '';

    return `
    ${teamMember.map(member=>{
        return `
        <ul class="card lighten-4 col s4 offset-s1">
            <li>
                <h3 class="card-header center">${member.name}</h3>
            </li>
            <li>
                <p class="card-content">Employee ID: ${member.employeeId}</p>
            </li>
            <li>
                <p class="card-action">Email Address: <a href="mailto:${member.email}">${member.email}</a></p>
            </li>
            <li>
            ${additionalData(member, role)}
            </li>
        </ul>
        `
    }).join("")
}
        `
}


// Webpage Template
module.exports = (teamInfo)=>{

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Document</title>
</head>
<body>
    <header>
    <h1 class="center card green lighten-2 white-text">My Team Profile</h1>
    </header>
    <main class="container">
        <div id='manager' class="row">
            <h2 class="center purple lighten-3 white-text col s12">Manager</h2>
            <div class="col s12 purple-text">
            ${display(teamInfo.manager,'manager')}
            </div>
        </div>
        <div id='engineer' class="row">
            <h2 class="center red lighten-3 white-text">Engineer</h2>
            <div class="col s12 red-text">
            ${display(teamInfo.engineer,'engineer')}
            </div>
        </div>
        <div id='intern' class='row'>
            <h2 class="center blue lighten-3 white-text">Intern</h2>
            <div class="col s12 blue-text">
            ${display(teamInfo.intern,'intern')}
            </div>
        </div>
    </main>
    
</body>
</html>`
}