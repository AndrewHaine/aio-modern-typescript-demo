enum Department {
  Engineering = "engineering",
  Sales = "sales",
  Marketing = "marketing",
}

interface TeamMember {
  name: string;
  department: Department;
}

function printIntro(teamMember: TeamMember) {
  console.log(
    `Hey, my name is ${teamMember.name} and I work in the ${teamMember.department} department.`
  );
}

const jimbo: TeamMember = {
  name: "Jimbo",
  department: Department.Marketing,
};

printIntro(jimbo);
console.log(Department);
