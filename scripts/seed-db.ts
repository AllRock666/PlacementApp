import { hash } from "bcrypt"
import { MongoClient } from "mongodb"
import { students, companies, faculty, events } from "@/lib/data"

async function seedDatabase() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/kit-placement-nexus"
  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db()

    // Clear existing collections
    await db.collection("students").deleteMany({})
    await db.collection("companies").deleteMany({})
    await db.collection("faculty").deleteMany({})
    await db.collection("events").deleteMany({})
    await db.collection("users").deleteMany({})
    await db.collection("attendance").deleteMany({})

    // Insert students
    const insertedStudents = await db.collection("students").insertMany(students)
    console.log(`${insertedStudents.insertedCount} students inserted`)

    // Insert companies
    const insertedCompanies = await db.collection("companies").insertMany(companies)
    console.log(`${insertedCompanies.insertedCount} companies inserted`)

    // Insert faculty
    const insertedFaculty = await db.collection("faculty").insertMany(faculty)
    console.log(`${insertedFaculty.insertedCount} faculty inserted`)

    // Insert events
    const insertedEvents = await db.collection("events").insertMany(events)
    console.log(`${insertedEvents.insertedCount} events inserted`)

    // Create users for students
    const studentUsers = await Promise.all(
      Object.entries(insertedStudents.insertedIds).map(async ([index, id]) => {
        const student = students[Number.parseInt(index)]
        return {
          username: student.prn,
          password: await hash("password123", 10),
          name: student.name,
          email: student.email,
          role: "student",
          studentId: id,
          createdAt: new Date(),
        }
      }),
    )

    await db.collection("users").insertMany(studentUsers)
    console.log(`${studentUsers.length} student users created`)

    // Create users for faculty
    const facultyUsers = await Promise.all(
      Object.entries(insertedFaculty.insertedIds).map(async ([index, id]) => {
        const facultyMember = faculty[Number.parseInt(index)]
        return {
          username: facultyMember.email.split("@")[0],
          password: await hash("faculty123", 10),
          name: facultyMember.name,
          email: facultyMember.email,
          role: "faculty",
          department: facultyMember.department,
          createdAt: new Date(),
        }
      }),
    )

    await db.collection("users").insertMany(facultyUsers)
    console.log(`${facultyUsers.length} faculty users created`)

    // Create admin user
    await db.collection("users").insertOne({
      username: "admin",
      password: await hash("admin123", 10),
      name: "Mr. Amit Sarkar",
      email: "admin@kit.edu",
      role: "admin",
      createdAt: new Date(),
    })
    console.log("Admin user created")

    console.log("Database seeded successfully")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await client.close()
    console.log("MongoDB connection closed")
  }
}

seedDatabase()
