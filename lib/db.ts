import { MongoClient, ObjectId } from "mongodb"
import type { Student, Company, Event, User } from "@/lib/types"

// Connection string from environment variable
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/kit-placement-nexus"

// MongoDB client
let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri)
    ;(global as any)._mongoClientPromise = client.connect()
  }
  clientPromise = (global as any)._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

// Database helper functions
export async function getDb() {
  const client = await clientPromise
  return client.db()
}

// Student operations
export async function getStudents() {
  const db = await getDb()
  return db.collection("students").find({}).toArray()
}

export async function getStudentByPRN(prn: string) {
  const db = await getDb()
  return db.collection("students").findOne({ prn })
}

export async function getStudentById(id: string) {
  const db = await getDb()
  return db.collection("students").findOne({ _id: new ObjectId(id) })
}

export async function createStudent(student: Omit<Student, "id">) {
  const db = await getDb()
  const result = await db.collection("students").insertOne(student)
  return { ...student, id: result.insertedId.toString() }
}

export async function updateStudent(id: string, student: Partial<Student>) {
  const db = await getDb()
  await db.collection("students").updateOne({ _id: new ObjectId(id) }, { $set: student })
  return getStudentById(id)
}

// Company operations
export async function getCompanies() {
  const db = await getDb()
  return db.collection("companies").find({}).toArray()
}

export async function getCompanyById(id: string) {
  const db = await getDb()
  return db.collection("companies").findOne({ _id: new ObjectId(id) })
}

export async function createCompany(company: Omit<Company, "id">) {
  const db = await getDb()
  const result = await db.collection("companies").insertOne(company)
  return { ...company, id: result.insertedId.toString() }
}

// Faculty operations
export async function getFaculty() {
  const db = await getDb()
  return db.collection("faculty").find({}).toArray()
}

export async function getFacultyById(id: string) {
  const db = await getDb()
  return db.collection("faculty").findOne({ _id: new ObjectId(id) })
}

// Event operations
export async function getEvents() {
  const db = await getDb()
  return db.collection("events").find({}).toArray()
}

export async function getEventById(id: string) {
  const db = await getDb()
  return db.collection("events").findOne({ _id: new ObjectId(id) })
}

export async function createEvent(event: Omit<Event, "id">) {
  const db = await getDb()
  const result = await db.collection("events").insertOne(event)
  return { ...event, id: result.insertedId.toString() }
}

// Attendance operations
export async function getAttendanceRecords() {
  const db = await getDb()
  return db.collection("attendance").find({}).toArray()
}

export async function getAttendanceByPRN(prn: string) {
  const db = await getDb()
  return db.collection("attendance").findOne({ prn })
}

export async function updateAttendance(prn: string, date: string, status: string) {
  const db = await getDb()
  const record = await db.collection("attendance").findOne({ prn })

  if (record) {
    await db.collection("attendance").updateOne({ prn }, { $set: { [`attendance.${date}`]: status } })
  } else {
    await db.collection("attendance").insertOne({
      prn,
      attendance: { [date]: status },
    })
  }

  return getAttendanceByPRN(prn)
}

// User operations
export async function getUserByUsername(username: string) {
  const db = await getDb()
  return db.collection("users").findOne({ username })
}

export async function createUser(user: Omit<User, "id">) {
  const db = await getDb()
  const result = await db.collection("users").insertOne(user)
  return { ...user, id: result.insertedId.toString() }
}

// Helper functions
export async function isStudentEligibleForCompany(studentId: string, companyId: string) {
  const student = await getStudentById(studentId)
  const company = await getCompanyById(companyId)

  if (!student || !company) return false

  const isEligibleBranch = company.eligibilityCriteria.eligibleBranches.includes(student.branch)
  const hasRequiredCGPA = student.cgpa >= company.eligibilityCriteria.minCGPA
  const hasAcceptableBacklogs = student.backlogs <= company.eligibilityCriteria.maxBacklogs

  return isEligibleBranch && hasRequiredCGPA && hasAcceptableBacklogs
}

export async function getEligibleCompaniesForStudent(studentId: string) {
  const companies = await getCompanies()
  const student = await getStudentById(studentId)

  if (!student) return []

  return companies.filter((company) => {
    const isEligibleBranch = company.eligibilityCriteria.eligibleBranches.includes(student.branch)
    const hasRequiredCGPA = student.cgpa >= company.eligibilityCriteria.minCGPA
    const hasAcceptableBacklogs = student.backlogs <= company.eligibilityCriteria.maxBacklogs

    return isEligibleBranch && hasRequiredCGPA && hasAcceptableBacklogs
  })
}

export async function getEligibleStudentsForCompany(companyId: string) {
  const students = await getStudents()
  const company = await getCompanyById(companyId)

  if (!company) return []

  return students.filter((student) => {
    const isEligibleBranch = company.eligibilityCriteria.eligibleBranches.includes(student.branch)
    const hasRequiredCGPA = student.cgpa >= company.eligibilityCriteria.minCGPA
    const hasAcceptableBacklogs = student.backlogs <= company.eligibilityCriteria.maxBacklogs

    return isEligibleBranch && hasRequiredCGPA && hasAcceptableBacklogs
  })
}

export default clientPromise
