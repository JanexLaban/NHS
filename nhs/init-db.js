import fetch from "node-fetch"

async function initializeDatabase() {
  try {
    console.log("Initializing database...")

    const response = await fetch("http://localhost:3000/api/db/init")
    const data = await response.json()

    if (data.success) {
      console.log("✅ Database initialized and seeded successfully!")
      console.log("\nSample users created:")
      console.log("- Admin: admin@hospital.com / password123")
      console.log("- Doctor: john.smith@hospital.com / password123")
      console.log("- Nurse: mike.brown@hospital.com / password123")
      console.log("- Reception: reception@hospital.com / password123")
      console.log("- Patient: patient@example.com / password123")
    } else {
      console.error("❌ Failed to initialize database:", data.error)
    }
  } catch (error) {
    console.error("❌ Error connecting to the API:", error.message)
    console.log("\nMake sure your Next.js application is running on http://localhost:3000")
  }
}

initializeDatabase()

