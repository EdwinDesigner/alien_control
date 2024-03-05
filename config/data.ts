
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NOMBRE", uid: "name", sortable: true},
  {name: "EDAD", uid: "age", sortable: true},
  {name: "CARGO", uid: "role", sortable: true},
  {name: "EQUIPO", uid: "team"},
  {name: "CÉDULA", uid: "cedula"},
  {name: "ESTADO", uid: "status", sortable: true},
  // {name: "ACCIONES", uid: "actions"},
  {name: "FECHA", uid: "date"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    date: "15 de enero de 2024"
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    date: "16 de enero de 2024"
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    date: "17 de enero de 2024"
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    date: "18 de enero de 2024"
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    date: "19 de enero de 2024"
  },
];

export {columns, users, statusOptions};
