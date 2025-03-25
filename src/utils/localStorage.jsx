

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {"active": 2, "newTask": 1, "completed": 1, "fail": 0},
    "tasks": [
      {
        "title": "Design Homepage UI",
        "description": "Create a responsive homepage layout",
        "date": "2025-02-27",
        "category": "UI/UX",
        "active": true,
        "newTask": false,
        "completed": false,
        "fail": false
      },
      {
        "title": "Fix Login Bug",
        "description": "Resolve the issue with login validation",
        "date": "2025-02-28",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false
      },
      {
        "title": "Write API Docs",
        "description": "Document all REST API endpoints",
        "date": "2025-03-01",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {"active": 1, "newTask": 1, "completed": 1, "fail": 0},
    "tasks": [
      {
        "title": "Create DB Schema",
        "description": "Design the database schema for the project",
        "date": "2025-02-27",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false
      },
      {
        "title": "Set up CI/CD Pipeline",
        "description": "Automate deployment and testing",
        "date": "2025-03-02",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {"active": 1, "newTask": 1, "completed": 1, "fail": 0},
    "tasks": [
      {
        "title": "Create Wireframes",
        "description": "Design wireframes for the mobile app",
        "date": "2025-02-26",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false
      },
      {
        "title": "Optimize Database Queries",
        "description": "Improve performance of SQL queries",
        "date": "2025-03-03",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Aditya",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {"active": 1, "newTask": 1, "completed": 1, "fail": 0},
    "tasks": [
      {
        "title": "Implement Authentication",
        "description": "Set up user authentication and authorization",
        "date": "2025-03-01",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false
      },
      {
        "title": "Deploy Frontend App",
        "description": "Deploy the React.js app to production",
        "date": "2025-03-05",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kabir",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {"active": 2, "newTask": 1, "completed": 1, "fail": 0},
    "tasks": [
      {
        "title": "Prepare Project Report",
        "description": "Compile and finalize the project documentation",
        "date": "2025-03-03",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false
      },
      {
        "title": "Test API Endpoints",
        "description": "Ensure all API calls are returning correct data",
        "date": "2025-03-04",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "fail": false
      },
      {
        "title": "Deploy Backend Service",
        "description": "Deploy the Node.js backend to production",
        "date": "2025-03-05",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false
      }
    ]
  }
]

  const admin= [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]
  
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));

}
export const getLocalStorage=()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
}

