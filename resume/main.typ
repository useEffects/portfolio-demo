#let accent = rgb(136, 57, 239)
#let subtext = rgb(76, 79, 105)
#set page("a4", margin: 1cm)
#show heading: set text(fill: black)
#set text(9.75pt)
#show link: set text(fill: rgb(30, 102, 245))

#let contactChips = (
  (
    icon: "github-svgrepo-com.svg",
    label: "/johnDoe",
    href: "https://github.com/johnDoe"
  ),
  (
    icon: "linkedin-svgrepo-com.svg",
    label: "/in/johnDoe",
    href: "https://www.linkedin.com/in/johnDoe"
  ),
  (
    icon: "email-svgrepo-com.svg",
    label: "johndoe123@gmail.com",
    href: "mailto:johndoe123@gmail.com"
  ),
  (
    icon: "phone-svgrepo-com.svg",
    label: "+1 123 456 7890",
    href: "tel:+11234567890"
  ),
  (
    icon: "cursor-svgrepo-com.svg",
    label: "johndoe.me",
    href: "https://johndoe.me"
  ),
  (
    icon: "leetcode-svgrepo-com.svg",
    label: "leetcode/johnDoe",
    href: "https://leetcode.com/johnDoe"
  )
)

#let linkChip(imageSrc, linkHref, linkLabel) = {
  grid(columns: (14pt, 1fr), gutter: 0.5em, align: alignment.horizon,
    image(imageSrc, width: 14pt),
    link(linkHref)[#text(linkLabel, size: 11pt)]
  )
}

#let iconChip(imageSrc, label) = {
  grid(columns: (14pt, 1fr), gutter: 0.5em, align: alignment.horizon,
    image(imageSrc, width: 14pt),
    text(label)
  )
}

#let header(content) = {
  pad(
    underline(
      text(content, font: "New York Extra Large", size: 16pt, weight: 700)
    ), y:0.75mm)
}
#let careers = (
  (
    company: "Tech Innovations Inc",
    position: "Lead Engineer (Full time)",
    websites: ("https://techinnovations.com",),
    location: "Remote",
    period: "Jan 2024 - Jul 2024",
    experience: "7 months",
    content: [
      - *Tech stack:* JavaScript, Python, React, Node.js, Docker, AWS, Kubernetes.
      - Spearheaded the design and implementation of a *scalable web platform* serving thousands of users.
      - Deployed mobile apps on #link("https://playstore.com/techinnovations")[Play Store] and #link("https://appstore.com/techinnovations")[App Store].
      - Managed a team of *4 engineers* and collaborated with product managers and designers to deliver high-quality features.
    ]
  ),
  (
    company: "DataTech Solutions",
    position: "Software Developer Intern",
    websites: ("https://datatech.com",),
    location: "New York, NY",
    period: "Jun 2022 - Dec 2023",
    experience: "1 year 6 months",
    content: [
      - *Tech stack*: Python, Django, PostgreSQL, Redis, Docker, Kubernetes.
      - Developed microservices for a data analytics platform handling *terabytes* of data.
      - Implemented a *CI/CD pipeline* using Docker and Kubernetes, reducing deployment times by *40%*.
      - Improved database query performance by optimizing indexes and queries, resulting in a *20%* performance boost.
    ]
  ),
  (
    company: "GovTech Inc.",
    position: "Fullstack Developer Intern",
    websites: ("https://govtech.com",),
    location: "Washington, DC",
    period: "Jan 2022 - May 2022",
    experience: "5 months",
    content: [
      - *Tech stack:* TypeScript, React, Node.js, MongoDB, Firebase.
      - Developed a web portal for managing government applications, used by over *500 agencies*.
      - Reduced page load times by *30%* by optimizing front-end code and using efficient data fetching strategies.
    ]
  ),
  (
    company: "Code Academy",
    position: "Club President",
    websites: ("https://codeacademy.com", "https://github.com/codeacademy"),
    location: "Los Angeles, CA",
    experience: "1 year 6 months",
    period: "Aug 2021 - Jan 2023",
    content: [
      - Led a team to develop #link("https://github.com/codeacademy/platform")[a coding platform], featuring real-time code compilation and a robust test suite.
      - Hosted coding competitions and hackathons, engaging with over *1,000 students* from various universities.
    ]
  )
)

#let education = (
  institution: "University of California, Berkeley",
  period: "2024 - 2020",
  degree: "B.Sc. in Computer Science",
  content: [ GPA: 3.85 ]
)

#let projects = (
  (
    name: "CodeFlare",
    link: "https://github.com/johnDoe/codeflare",
    content: [
      Developed a web-based code editor supporting multiple languages and real-time collaboration. 
    ]
  ),
  (
    name: "DataViz",
    link: "https://dataviz.com",
    content: [
      Built a data visualization tool that generates interactive charts and dashboards from various data sources.
    ]
  ),
  (
    name: "Smart Assistant AI",
    link: "",
    content: [
      WIP project on building a smart assistant using NLP models to understand and execute voice commands.
    ]
  )
)

#let skills = (
  (
    name: "Programming languages",
    content: [
      JavaScript, Python, Go, C++, Java, SQL, Rust, Bash.
    ]
  ),
  (
    name: "Tools",
    content: [
      React, Node.js, Docker, Kubernetes, AWS, PostgreSQL, MongoDB.
    ]
  )
)

#box(height: 15mm)[
  #grid(columns: (1fr, 1.6fr), gutter: 1em,
    grid(rows: (1fr, 1fr), gutter: 1em,
      text("John Doe", size: 18pt, tracking: 2pt, weight: 700, font: "New York Extra Large"),
      text("Software developer with a passion for scalable systems and AI technologies.", fill: subtext)
    ),
    grid(columns: (1fr, 1fr, 1fr), row-gutter: 1em, column-gutter: 0em,
      ..contactChips.map(contactChip => {
        linkChip("images/" + contactChip.icon, contactChip.href, contactChip.label)
      }),
    )
  )
]
#line(length: 100%)
#header("Skills")
#grid(gutter: 1em,
  ..skills.map(skill => {
    text()[*#skill.name*: #skill.content]
  })
)
#header("Experience")
#grid(gutter: 1.5em,
  ..careers.map(career => {
    grid(columns: (auto, auto, 1fr), column-gutter: 1em, align: alignment.horizon,
      heading(career.company, level: 2),
      box(height: 9.5pt)[
        #grid(rows: (1fr), columns: (auto, auto, auto), column-gutter: 1em,
          text()[*#career.position*],
          ..career.websites.map(website => {
            link(website)[#website.replace("https://", "").replace("github.com", "github")]
          })
        )
      ],
      text(dir: direction.rtl)[#career.period, *#career.experience*]
    )
    text()[#career.content]
  })
)
#header("Projects")
#grid(gutter: 1em,
  ..projects.map(project => {
    if(project.link == "") {
      text()[*#project.name*: #project.content]
    } else {
      text()[#link(project.link)[*#project.name*]: #project.content]
    }
  })
)
#header("Achievements")
#grid(gutter: 1em,
  text()[
    - Contributor to #link("https://opensource.org")[open-source projects] and multiple code libraries.
    - Winner of the *2023 National Hackathon* for developing an AI-powered traffic monitoring system.
    - *Mentor*: Trained and led coding boot camps, mentoring junior developers.
  ]
)
#header("Education")
#grid(gutter: 1em,
  text(education.institution),
  grid(columns: (2fr, 1fr), gutter: 1em,
  text(education.degree),
  text(education.period, fill: subtext, dir: direction.rtl)
  ),
  text(education.content)
)
