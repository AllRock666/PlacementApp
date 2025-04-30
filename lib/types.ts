// Student Types
export interface Student {
  id: string
  prn: string
  rollNo: string
  name: string
  branch: Branch
  year: "First Year" | "Second Year" | "Third Year" | "Final Year"
  email: string
  phone: string
  cgpa: number
  backlogs: number
  semesterResults: SemesterResult[]
  placementStatus: "Placed" | "Not Placed"
  attendancePercentage: number
  skills: string[]
  address: string
  dateOfBirth: string
  gender: "Male" | "Female" | "Other"
  bloodGroup: string
  category: string
  nationality: string
  admissionYear: string
}

export interface SemesterResult {
  semester: number
  year: string
  sgpa: number
  subjects: SubjectResult[]
  status: "Passed" | "Failed"
}

export interface SubjectResult {
  code: string
  name: string
  credits: number
  grade: string
  status: "Passed" | "Failed"
}

// Company Types
export interface Company {
  id: string
  name: string
  industry: string
  website: string
  description: string
  eligibilityCriteria: EligibilityCriteria
  visitDate: string
  status: "Upcoming" | "Ongoing" | "Completed"
  package: string
  logo?: string
  hiringProcess: string[]
  jobRoles: string[]
}

export interface EligibilityCriteria {
  minCGPA: number
  maxBacklogs: number
  eligibleBranches: Branch[]
  additionalRequirements?: string
}

// Branch Types
export type Branch =
  | "CSE"
  | "CSE - AIML"
  | "CSE - DS"
  | "ENTC"
  | "ELECTRICAL"
  | "BIOTECH"
  | "MECHANICAL"
  | "CIVIL"
  | "CIVIL & ENV."
  | "ETC"

// User Types
export interface User {
  id: string
  username: string
  role: "admin" | "faculty" | "student"
  name: string
  email: string
  department?: Branch
  studentId?: string
}

// Attendance Types
export interface AttendanceRecord {
  rollNo: string
  prn: string
  name: string
  attendance: Record<string, string>
}

// Faculty Types
export interface Faculty {
  id: string
  name: string
  department: string
  email: string
  phone: string
  designation: string
  qualification: string
  experience: number
  specialization: string
  profileImage?: string
}

// Event Types
export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  venue: string
  organizer: string
  type: "Pre-Placement Talk" | "Workshop" | "Training" | "Recruitment Drive" | "Guest Lecture" | "Other"
  eligibleBranches: (Branch | "All Branches")[]
  registrationRequired: boolean
  registrationDeadline: string
  status: "Upcoming" | "Ongoing" | "Completed"
}
