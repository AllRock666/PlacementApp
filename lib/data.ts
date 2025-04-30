import type { Student, Company, AttendanceRecord, Branch, Faculty, Event } from "@/lib/types"

// Parse the TSV data for attendance
export const attendanceData: AttendanceRecord[] = [
  {
    rollNo: "B-01",
    prn: "2324000043",
    name: "AKSHAY NAIK",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-02",
    prn: "2324000052",
    name: "DHRUV KADAM",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-03",
    prn: "2324000109",
    name: "SIDDHARTHA SHINDE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-04",
    prn: "2324000114",
    name: "OM KAGILKAR",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-05",
    prn: "2324000128",
    name: "TANVI JAGTAP",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-06",
    prn: "2324000132",
    name: "DARSHAN MANE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-07",
    prn: "2324000144",
    name: "MANTHAN SHAH",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "" },
  },
  {
    rollNo: "B-08",
    prn: "2324000148",
    name: "ADITYA KHANDAGALE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-09",
    prn: "2324000149",
    name: "ADITYA PATIL",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-10",
    prn: "2324000152",
    name: "AARYA DESHPANDE",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-11",
    prn: "2324000158",
    name: "SAURABH MANGALE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-12",
    prn: "2324000165",
    name: "MAITREYEE BUDHALE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-13",
    prn: "2324000173",
    name: "SATVIK MOHITE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-14",
    prn: "2324000198",
    name: "SAIRAJ PATIL",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-15",
    prn: "2324000221",
    name: "ADITYA KURALI",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-16",
    prn: "2324000239",
    name: "MOHINI PAUL",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-17",
    prn: "2324000257",
    name: "ATHARV KAGALE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-19",
    prn: "2324000281",
    name: "SUYASH GONDHALI",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-20",
    prn: "2324000298",
    name: "ANIKET MESHRAM",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-21",
    prn: "2324000302",
    name: "YASH TIWARI",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-22",
    prn: "2324000329",
    name: "PARINEETA RAJPUT",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-23",
    prn: "2324000345",
    name: "SIDDHI DESAI",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-24",
    prn: "2324000351",
    name: "PARTH GAWAS",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-25",
    prn: "2324001247",
    name: "ANIKET KAKDE",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-26",
    prn: "2324001227",
    name: "SUSHRUT PATIL",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-27",
    prn: "2324000467",
    name: "ANGAD BAHETI",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-28",
    prn: "2324000489",
    name: "SARASWATI WAGHMODE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-29",
    prn: "2324000550",
    name: "KAILASH KHANPATTE",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-30",
    prn: "2324000589",
    name: "PAVAN GITTE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-31",
    prn: "2324000590",
    name: "LAXMIKANT JAWADWAR",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-32",
    prn: "2324000660",
    name: "ARYA KASHID",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-33",
    prn: "2324000679",
    name: "TANVI MANGALE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-34",
    prn: "2324000704",
    name: "RAJNANDINI DESAI",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-35",
    prn: "2324000712",
    name: "AVANI KHOT",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-36",
    prn: "2324000722",
    name: "OMKAR SHINDE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-37",
    prn: "2324000738",
    name: "ADITYA SUTAR",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-38",
    prn: "2324000780",
    name: "VIKRAMADITYA BOTE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-39",
    prn: "2324000784",
    name: "ARYMAN SUTAR",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-40",
    prn: "2324000785",
    name: "DEVANSHU GHODEKAR",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-41",
    prn: "2324000826",
    name: "VISHAL PATIL",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "" },
  },
  {
    rollNo: "B-42",
    prn: "2324000894",
    name: "MITALI NALAWADE",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-43",
    prn: "2324000916",
    name: "SUSHANT KUMBHAR",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-44",
    prn: "2324000936",
    name: "YASHIKA TELI",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-45",
    prn: "2324001290",
    name: "NAJIM MAHAMMAD BAGWAN",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-46",
    prn: "2324000954",
    name: "SAURAV MORE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-47",
    prn: "2324000965",
    name: "SRUSHTI CHOUGULE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-48",
    prn: "2324000987",
    name: "AKASH MANWAR",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-49",
    prn: "2324000993",
    name: "MUFIJ TAMBOLI",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-50",
    prn: "2324000995",
    name: "DEEPAK CHANDEKAR",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-51",
    prn: "2324001003",
    name: "RADHA PARKAR",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-52",
    prn: "2324001034",
    name: "SARAH KHAN",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-53",
    prn: "2324001072",
    name: "ADITYA SHETAKE",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-54",
    prn: "2324001073",
    name: "GURUPRASAD MOTE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-55",
    prn: "2324001100",
    name: "BHAKTI PATWARI",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "" },
  },
  {
    rollNo: "B-56",
    prn: "2324001120",
    name: "DEVANG SHEDGE",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-57",
    prn: "2324001140",
    name: "RENU BHOSALE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-58",
    prn: "2324001163",
    name: "PRATHMESH VHANBATTE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-60",
    prn: "2324001181",
    name: "ANJALI SANKPAL",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-61",
    prn: "2324001183",
    name: "ASHISH WALAKE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-62",
    prn: "2324001201",
    name: "HARSHAD JALANE",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-63",
    prn: "2324001204",
    name: "AZEEM JAMADAR",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "" },
  },
  {
    rollNo: "B-64",
    prn: "2324001213",
    name: "ADARSH JALANE",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-65",
    prn: "2324001215",
    name: "AAKASH DESAI",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-66",
    prn: "2324001248",
    name: "VIRAJ PAILWAN",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-67",
    prn: "2324001266",
    name: "SWAROOP DIWAN",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-68",
    prn: "2324001267",
    name: "PRASHANT POWAR",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-69",
    prn: "2324001289",
    name: "AAKASH MANE",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-70",
    prn: "2425010070",
    name: "SWARUP CHAVAN",
    attendance: { "18/01/25": "", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-71",
    prn: "2425010058",
    name: "AKASH PATIL",
    attendance: { "18/01/25": "A", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-72",
    prn: "2425010173",
    name: "NEHA RONGE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "" },
  },
  {
    rollNo: "B-73",
    prn: "2425010122",
    name: "SHRADDHA PATIL",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "A" },
  },
  {
    rollNo: "B-74",
    prn: "2425010134",
    name: "KAVITA KHARADE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "", "05/04/2025": "A" },
  },
  {
    rollNo: "B-75",
    prn: "2425010068",
    name: "SIMRAN LONDHE",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-76",
    prn: "2425010175",
    name: "SATYAM MALI",
    attendance: { "18/01/25": "", "25/01/25": "A", "01/02/2025": "A", "05/04/2025": "" },
  },
  {
    rollNo: "B-77",
    prn: "2425010199",
    name: "SAIYAM PATIL",
    attendance: { "18/01/25": "A", "25/01/25": "", "01/02/2025": "A", "05/04/2025": "A" },
  },
]

// Generate student data based on attendance data
export const students: Student[] = attendanceData.map((record, index) => {
  // Generate random CGPA between 6.0 and 9.8
  const cgpa = Math.round((6.0 + Math.random() * 3.8) * 10) / 10

  // Generate random number of backlogs (0-2)
  const backlogs = Math.floor(Math.random() * 3)

  // Determine branch (most are CSBS-B based on the data)
  const branch: Branch = "CSE - DS"

  // Calculate attendance percentage
  const totalDates = Object.keys(record.attendance).length
  const absences = Object.values(record.attendance).filter((status) => status === "A").length
  const attendancePercentage = Math.round(((totalDates - absences) / totalDates) * 100)

  // Determine placement status based on CGPA and backlogs
  const placementStatus = cgpa > 8.0 && backlogs === 0 ? (Math.random() > 0.7 ? "Placed" : "Not Placed") : "Not Placed"

  // Generate semester results
  const semesterResults = Array.from({ length: 5 }, (_, i) => {
    const semester = i + 1
    const year = `202${Math.floor(semester / 2) + 2}-2${Math.floor(semester / 2) + 3}`
    const sgpa = Math.round((cgpa - 0.5 + Math.random()) * 10) / 10

    return {
      semester,
      year,
      sgpa,
      subjects: [
        {
          code: `CS${100 + semester * 10 + 1}`,
          name: [
            "Programming Fundamentals",
            "Data Structures",
            "Object Oriented Programming",
            "Database Systems",
            "Web Technologies",
          ][i],
          credits: 4,
          grade: sgpa > 9 ? "A+" : sgpa > 8 ? "A" : sgpa > 7 ? "B+" : "B",
          status: "Passed",
        },
        {
          code: `CS${100 + semester * 10 + 2}`,
          name: [
            "Engineering Mathematics I",
            "Engineering Mathematics II",
            "Discrete Mathematics",
            "Computer Networks",
            "Software Engineering",
          ][i],
          credits: 4,
          grade: sgpa > 9 ? "A+" : sgpa > 8 ? "A" : sgpa > 7 ? "B+" : "B",
          status: "Passed",
        },
        {
          code: `CS${100 + semester * 10 + 3}`,
          name: ["Physics", "Chemistry", "Digital Logic", "Operating Systems", "Artificial Intelligence"][i],
          credits: 3,
          grade: sgpa > 9 ? "A+" : sgpa > 8 ? "A" : sgpa > 7 ? "B+" : "B",
          status: "Passed",
        },
        {
          code: `CS${100 + semester * 10 + 4}`,
          name: [
            "Communication Skills",
            "Environmental Studies",
            "Computer Organization",
            "Theory of Computation",
            "Machine Learning",
          ][i],
          credits: 3,
          grade: sgpa > 9 ? "A" : sgpa > 8 ? "B+" : sgpa > 7 ? "B" : "C+",
          status: "Passed",
        },
        {
          code: `CS${100 + semester * 10 + 5}`,
          name: ["Workshop Practice", "Engineering Drawing", "Economics", "Professional Ethics", "Cloud Computing"][i],
          credits: 2,
          grade: sgpa > 9 ? "A+" : sgpa > 8 ? "A" : sgpa > 7 ? "B+" : "B",
          status: "Passed",
        },
      ],
      status: "Passed",
    }
  })

  return {
    id: (index + 1).toString(),
    prn: record.prn,
    rollNo: record.rollNo,
    name: record.name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    branch,
    year: "Second Year",
    email: `${record.name.toLowerCase().replace(/\s+/g, ".")}@example.com`,
    phone: `98${Math.floor(10000000 + Math.random() * 90000000)}`,
    cgpa,
    backlogs,
    semesterResults,
    placementStatus,
    attendancePercentage,
    skills: [
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "HTML/CSS",
      "React",
      "Node.js",
      "SQL",
      "Data Structures",
      "Algorithms",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3 + Math.floor(Math.random() * 4)),
    address: "Kolhapur, Maharashtra",
    dateOfBirth: `${2000 + Math.floor(Math.random() * 5)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
    gender: Math.random() > 0.6 ? "Male" : "Female",
    bloodGroup: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"][Math.floor(Math.random() * 8)],
    category: ["Open", "OBC", "SC", "ST", "NT"][Math.floor(Math.random() * 5)],
    nationality: "Indian",
    admissionYear: "2022",
  }
})

// Mock company data
export const companies: Company[] = [
  {
    id: "1",
    name: "TCS",
    industry: "IT Services",
    website: "https://www.tcs.com",
    description:
      "Tata Consultancy Services is an Indian multinational information technology services and consulting company.",
    eligibilityCriteria: {
      minCGPA: 7.0,
      maxBacklogs: 0,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS", "ENTC", "ETC"],
      additionalRequirements: "No active backlogs",
    },
    visitDate: "2025-05-15",
    status: "Upcoming",
    package: "3.6 - 7.0 LPA",
    logo: "/company-logos/tcs.png",
    hiringProcess: ["Online Test", "Technical Interview", "HR Interview"],
    jobRoles: ["Software Developer", "System Engineer", "Business Analyst"],
  },
  {
    id: "2",
    name: "Infosys",
    industry: "IT Services",
    website: "https://www.infosys.com",
    description:
      "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.",
    eligibilityCriteria: {
      minCGPA: 6.5,
      maxBacklogs: 1,
      eligibleBranches: [
        "CSE",
        "CSE - AIML",
        "CSE - DS",
        "ENTC",
        "ETC",
        "ELECTRICAL",
        "MECHANICAL",
        "CIVIL",
        "CIVIL & ENV.",
        "BIOTECH",
      ],
      additionalRequirements: "Maximum 1 active backlog allowed",
    },
    visitDate: "2025-05-20",
    status: "Upcoming",
    package: "3.6 - 5.0 LPA",
    logo: "/company-logos/infosys.png",
    hiringProcess: ["Online Test", "Technical Interview", "HR Interview"],
    jobRoles: ["Systems Engineer", "Power Programmer", "Digital Specialist Engineer"],
  },
  {
    id: "3",
    name: "Wipro",
    industry: "IT Services",
    website: "https://www.wipro.com",
    description:
      "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services.",
    eligibilityCriteria: {
      minCGPA: 6.0,
      maxBacklogs: 0,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS", "ENTC", "ETC", "ELECTRICAL"],
      additionalRequirements: "No active backlogs",
    },
    visitDate: "2025-05-25",
    status: "Upcoming",
    package: "3.5 - 6.0 LPA",
    logo: "/company-logos/wipro.png",
    hiringProcess: ["Online Assessment", "Technical Interview", "HR Interview"],
    jobRoles: ["Project Engineer", "Software Developer", "Technical Support"],
  },
  {
    id: "4",
    name: "Microsoft",
    industry: "Technology",
    website: "https://www.microsoft.com",
    description:
      "Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.",
    eligibilityCriteria: {
      minCGPA: 8.0,
      maxBacklogs: 0,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS"],
      additionalRequirements: "Strong programming skills, No history of backlogs",
    },
    visitDate: "2025-04-28",
    status: "Completed",
    package: "15.0 - 25.0 LPA",
    logo: "/company-logos/microsoft.png",
    hiringProcess: ["Online Coding Test", "Technical Interviews (2-3 rounds)", "HR Interview"],
    jobRoles: ["Software Engineer", "Program Manager", "Data Scientist"],
  },
  {
    id: "5",
    name: "Amazon",
    industry: "Technology",
    website: "https://www.amazon.com",
    description:
      "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.",
    eligibilityCriteria: {
      minCGPA: 7.5,
      maxBacklogs: 0,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS", "ENTC"],
      additionalRequirements: "Strong problem-solving skills, No history of backlogs",
    },
    visitDate: "2025-04-22",
    status: "Completed",
    package: "12.0 - 30.0 LPA",
    logo: "/company-logos/amazon.png",
    hiringProcess: ["Online Assessment", "Technical Interviews (3-4 rounds)", "Bar Raiser Interview"],
    jobRoles: ["Software Development Engineer", "Applied Scientist", "Business Analyst"],
  },
  {
    id: "6",
    name: "Google",
    industry: "Technology",
    website: "https://www.google.com",
    description:
      "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.",
    eligibilityCriteria: {
      minCGPA: 8.5,
      maxBacklogs: 0,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS"],
      additionalRequirements: "Exceptional problem-solving skills, Strong data structures and algorithms knowledge",
    },
    visitDate: "2025-06-10",
    status: "Upcoming",
    package: "20.0 - 40.0 LPA",
    logo: "/company-logos/google.png",
    hiringProcess: ["Online Coding Challenge", "Technical Interviews (4-5 rounds)", "Team Matching"],
    jobRoles: ["Software Engineer", "Research Engineer", "Product Manager"],
  },
  {
    id: "7",
    name: "Accenture",
    industry: "Consulting",
    website: "https://www.accenture.com",
    description:
      "Accenture plc is an Irish-American professional services company specializing in information technology services and consulting.",
    eligibilityCriteria: {
      minCGPA: 6.0,
      maxBacklogs: 2,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS", "ENTC", "ETC", "ELECTRICAL", "MECHANICAL", "CIVIL"],
      additionalRequirements: "Maximum 2 active backlogs allowed",
    },
    visitDate: "2025-04-15",
    status: "Completed",
    package: "4.5 - 6.5 LPA",
    logo: "/company-logos/accenture.png",
    hiringProcess: ["Cognitive Assessment", "Technical Assessment", "HR Interview"],
    jobRoles: ["Associate Software Engineer", "Technical Support", "Business Analyst"],
  },
  {
    id: "8",
    name: "Capgemini",
    industry: "IT Services",
    website: "https://www.capgemini.com",
    description: "Capgemini SE is a French multinational information technology services and consulting company.",
    eligibilityCriteria: {
      minCGPA: 6.0,
      maxBacklogs: 1,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS", "ENTC", "ETC", "ELECTRICAL", "MECHANICAL"],
      additionalRequirements: "Maximum 1 active backlog allowed",
    },
    visitDate: "2025-06-05",
    status: "Upcoming",
    package: "3.8 - 6.0 LPA",
    logo: "/company-logos/capgemini.png",
    hiringProcess: ["Pseudo Code Test", "Technical Interview", "HR Interview"],
    jobRoles: ["Software Engineer", "Analyst", "Consultant"],
  },
  {
    id: "9",
    name: "Cognizant",
    industry: "IT Services",
    website: "https://www.cognizant.com",
    description: "Cognizant is an American multinational information technology services and consulting company.",
    eligibilityCriteria: {
      minCGPA: 6.0,
      maxBacklogs: 1,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS", "ENTC", "ETC", "ELECTRICAL"],
      additionalRequirements: "Maximum 1 active backlog allowed",
    },
    visitDate: "2025-06-15",
    status: "Upcoming",
    package: "4.0 - 6.5 LPA",
    logo: "/company-logos/cognizant.png",
    hiringProcess: ["GenC Next Assessment", "Technical Interview", "HR Interview"],
    jobRoles: ["Programmer Analyst", "Software Engineer", "Quality Engineer"],
  },
  {
    id: "10",
    name: "IBM",
    industry: "Technology",
    website: "https://www.ibm.com",
    description:
      "International Business Machines Corporation is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries.",
    eligibilityCriteria: {
      minCGPA: 7.0,
      maxBacklogs: 0,
      eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS", "ENTC", "ETC"],
      additionalRequirements: "No active backlogs",
    },
    visitDate: "2025-06-20",
    status: "Upcoming",
    package: "6.0 - 10.0 LPA",
    logo: "/company-logos/ibm.png",
    hiringProcess: ["Cognitive Ability Assessment", "Technical Interview", "Manager Round"],
    jobRoles: ["Associate System Engineer", "Software Developer", "Data Scientist"],
  },
]

// Faculty data
export const faculty: Faculty[] = [
  {
    id: "1",
    name: "Prof. Jane Doe",
    department: "CSE",
    email: "jane.doe@kit.edu",
    phone: "9876543210",
    designation: "TNP Coordinator",
    qualification: "Ph.D. in Computer Science",
    experience: 12,
    specialization: "Machine Learning, Data Science",
    profileImage: "/avatars/faculty.jpg",
  },
  {
    id: "2",
    name: "Prof. Rajesh Kumar",
    department: "CSE - AIML",
    email: "rajesh.kumar@kit.edu",
    phone: "9876543211",
    designation: "TNP Coordinator",
    qualification: "Ph.D. in Artificial Intelligence",
    experience: 10,
    specialization: "Artificial Intelligence, Neural Networks",
    profileImage: "/avatars/faculty-2.jpg",
  },
  {
    id: "3",
    name: "Prof. Priya Sharma",
    department: "CSE - DS",
    email: "priya.sharma@kit.edu",
    phone: "9876543212",
    designation: "TNP Coordinator",
    qualification: "Ph.D. in Data Science",
    experience: 8,
    specialization: "Big Data Analytics, Data Visualization",
    profileImage: "/avatars/faculty-3.jpg",
  },
  {
    id: "4",
    name: "Prof. Sunil Patil",
    department: "ENTC",
    email: "sunil.patil@kit.edu",
    phone: "9876543213",
    designation: "TNP Coordinator",
    qualification: "Ph.D. in Electronics",
    experience: 15,
    specialization: "VLSI Design, Embedded Systems",
    profileImage: "/avatars/faculty-4.jpg",
  },
  {
    id: "5",
    name: "Prof. Meera Desai",
    department: "ELECTRICAL",
    email: "meera.desai@kit.edu",
    phone: "9876543214",
    designation: "TNP Coordinator",
    qualification: "Ph.D. in Electrical Engineering",
    experience: 11,
    specialization: "Power Systems, Control Systems",
    profileImage: "/avatars/faculty-5.jpg",
  },
]

// Events data
export const events: Event[] = [
  {
    id: "1",
    title: "TCS Pre-Placement Talk",
    description: "Learn about career opportunities at TCS and interact with their recruitment team.",
    date: "2025-05-10",
    time: "10:00 AM - 12:00 PM",
    venue: "Seminar Hall 1",
    organizer: "Training and Placement Cell",
    type: "Pre-Placement Talk",
    eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS", "ENTC", "ETC"],
    registrationRequired: true,
    registrationDeadline: "2025-05-08",
    status: "Upcoming",
  },
  {
    id: "2",
    title: "Resume Building Workshop",
    description: "Learn how to create an impressive resume that stands out to recruiters.",
    date: "2025-04-20",
    time: "2:00 PM - 4:00 PM",
    venue: "Seminar Hall 2",
    organizer: "Training and Placement Cell",
    type: "Workshop",
    eligibleBranches: ["All Branches"],
    registrationRequired: true,
    registrationDeadline: "2025-04-18",
    status: "Completed",
  },
  {
    id: "3",
    title: "Mock Interview Sessions",
    description: "Practice your interview skills with industry professionals and get valuable feedback.",
    date: "2025-04-25",
    time: "9:00 AM - 5:00 PM",
    venue: "Training Center",
    organizer: "Training and Placement Cell",
    type: "Training",
    eligibleBranches: ["All Branches"],
    registrationRequired: true,
    registrationDeadline: "2025-04-22",
    status: "Completed",
  },
  {
    id: "4",
    title: "Infosys Recruitment Drive",
    description: "Campus recruitment drive for Infosys. Bring your resume and be prepared for on-the-spot interviews.",
    date: "2025-05-20",
    time: "9:00 AM - 6:00 PM",
    venue: "Main Auditorium",
    organizer: "Training and Placement Cell",
    type: "Recruitment Drive",
    eligibleBranches: ["All Branches"],
    registrationRequired: true,
    registrationDeadline: "2025-05-18",
    status: "Upcoming",
  },
  {
    id: "5",
    title: "Technical Skills Workshop",
    description: "Enhance your technical skills with hands-on workshops on the latest technologies.",
    date: "2025-05-05",
    time: "10:00 AM - 4:00 PM",
    venue: "Computer Lab 1",
    organizer: "CSE Department",
    type: "Workshop",
    eligibleBranches: ["CSE", "CSE - AIML", "CSE - DS"],
    registrationRequired: true,
    registrationDeadline: "2025-05-03",
    status: "Upcoming",
  },
  {
    id: "6",
    title: "Industry Expert Talk",
    description: "Gain insights from industry experts about current trends and future opportunities.",
    date: "2025-05-12",
    time: "3:00 PM - 5:00 PM",
    venue: "Seminar Hall 3",
    organizer: "Training and Placement Cell",
    type: "Guest Lecture",
    eligibleBranches: ["All Branches"],
    registrationRequired: false,
    registrationDeadline: "",
    status: "Upcoming",
  },
  {
    id: "7",
    title: "Aptitude Test Preparation",
    description: "Prepare for company aptitude tests with practice sessions and tips from experts.",
    date: "2025-04-15",
    time: "1:00 PM - 3:00 PM",
    venue: "Classroom Complex",
    organizer: "Training and Placement Cell",
    type: "Training",
    eligibleBranches: ["All Branches"],
    registrationRequired: true,
    registrationDeadline: "2025-04-13",
    status: "Completed",
  },
  {
    id: "8",
    title: "Group Discussion Practice",
    description: "Improve your group discussion skills with practice sessions and feedback.",
    date: "2025-05-08",
    time: "2:00 PM - 5:00 PM",
    venue: "Seminar Hall 2",
    organizer: "Training and Placement Cell",
    type: "Training",
    eligibleBranches: ["All Branches"],
    registrationRequired: true,
    registrationDeadline: "2025-05-06",
    status: "Upcoming",
  },
]

// Helper function to check if a student is eligible for a company
export function isStudentEligibleForCompany(student: Student, company: Company): boolean {
  const isEligibleBranch = company.eligibilityCriteria.eligibleBranches.includes(student.branch)
  const hasRequiredCGPA = student.cgpa >= company.eligibilityCriteria.minCGPA
  const hasAcceptableBacklogs = student.backlogs <= company.eligibilityCriteria.maxBacklogs

  return isEligibleBranch && hasRequiredCGPA && hasAcceptableBacklogs
}

// Get eligible companies for a student
export function getEligibleCompaniesForStudent(student: Student): Company[] {
  return companies.filter((company) => isStudentEligibleForCompany(student, company))
}

// Get eligible students for a company
export function getEligibleStudentsForCompany(company: Company): Student[] {
  return students.filter((student) => isStudentEligibleForCompany(student, company))
}

// Get student by PRN
export function getStudentByPRN(prn: string): Student | undefined {
  return students.find((student) => student.prn === prn)
}

// Get company by ID
export function getCompanyById(id: string): Company | undefined {
  return companies.find((company) => company.id === id)
}

// Get attendance for a student
export function getStudentAttendance(prn: string) {
  return attendanceData.find((student) => student.prn === prn)?.attendance || {}
}

// Calculate attendance percentage
export function calculateAttendancePercentage(attendance: Record<string, string>): number {
  const totalDates = Object.keys(attendance).length
  if (totalDates === 0) return 0

  const absences = Object.values(attendance).filter((status) => status === "A").length
  const attendedClasses = totalDates - absences
  return (attendedClasses / totalDates) * 100
}

// Get events by status
export function getEventsByStatus(status: string): Event[] {
  return events.filter((event) => event.status === status)
}

// Get events by branch
export function getEventsByBranch(branch: Branch): Event[] {
  return events.filter(
    (event) => event.eligibleBranches.includes(branch) || event.eligibleBranches.includes("All Branches"),
  )
}

// Get faculty by department
export function getFacultyByDepartment(department: string): Faculty | undefined {
  return faculty.find((f) => f.department === department)
}

// Get placement statistics by branch
export function getPlacementStatsByBranch(): Record<string, { total: number; placed: number; percentage: number }> {
  const branches: Record<string, { total: number; placed: number }> = {}

  students.forEach((student) => {
    if (!branches[student.branch]) {
      branches[student.branch] = { total: 0, placed: 0 }
    }

    branches[student.branch].total++

    if (student.placementStatus === "Placed") {
      branches[student.branch].placed++
    }
  })

  const stats: Record<string, { total: number; placed: number; percentage: number }> = {}

  Object.entries(branches).forEach(([branch, data]) => {
    stats[branch] = {
      ...data,
      percentage: Math.round((data.placed / data.total) * 100),
    }
  })

  return stats
}

// Get overall placement statistics
export function getOverallPlacementStats(): { total: number; placed: number; percentage: number } {
  const total = students.length
  const placed = students.filter((student) => student.placementStatus === "Placed").length

  return {
    total,
    placed,
    percentage: Math.round((placed / total) * 100),
  }
}
