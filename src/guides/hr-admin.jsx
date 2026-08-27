import { Sparkles, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

// HR & Admin resource guide.
export default function GuideContent({
  FadeUp,
  VideoEmbed,
  leadForm,
  leadStatus,
  handleLeadChange,
  handleLeadSubmit,
}) {
  return (
<main className="rg-main">
          
          {/* ── HERO ── */}
          <section className="rg-hero rg-section">
            <FadeUp>
              <h1><span className="rg-gold">HR & Admin</span> Job Seekers 🇦🇺<span style={{display: 'none'}}>[cite: 1]</span></h1>
              <p className="rg-hero-sub">Not Much Aussie Experience? Try This!</p>
              <div className="rg-hero-divider" />
              <div className="rg-visa-badge">If you have 485, 189, 190, 500, 491, 191, 482, 186 Visa<span style={{display: 'none'}}>[cite: 1]</span></div>
            </FadeUp>
          </section>

          {/* ── INTRO ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-p" style={{ fontSize: 28, fontWeight: 500, marginBottom: 40 }}>Hey, It’s Methsara here from DreamShift :)<span style={{display: 'none'}}>[cite: 2]</span></p>
              <p className="rg-p">Since you are looking for HR & Admin Jobs, we gathered as many resources as possible to help your job search! Here’s Something you need to know:<span style={{display: 'none'}}>[cite: 2, 3]</span></p>
              <p className="rg-p">Let’s think you are applying for 100 Jobs on LinkedIn & Seek: Unfortunately, around <span className="rg-accent-red">65%</span> of the jobs you apply will get rejected.<span style={{display: 'none'}}>[cite: 3]</span></p>
              
              <div className="rg-callout">
                <p className="rg-p">That is the reality of Australian Job Market for Migrants! But don’t worry, you still have around <strong className="rg-accent">35 jobs</strong> you can apply for and land interviews! For these 35 Jobs, you will be competing with other Migrants like you.<span style={{display: 'none'}}>[cite: 4]</span></p>
              </div>
              
              <p className="rg-p" style={{ fontWeight: 500 }}>If you can do the following things, you can increase your chances of landing Interviews!<span style={{display: 'none'}}>[cite: 5]</span></p>
            </FadeUp>
          </section>

          {/* ── 01 PASSION PROJECTS ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">01 — Strategy</p>
              <h2 className="rg-title">Passion Projects<span style={{display: 'none'}}>[cite: 5]</span></h2>
              
              <p className="rg-video-label">Watch this first</p>
              <VideoEmbed src="https://player.vimeo.com/video/1190467338?badge=0&autopause=0&player_id=0&app_id=58479" title="Passion Projects" />

              <p className="rg-p" style={{ color: "var(--gold)", fontStyle: "italic", fontSize: 16 }}>*Tip: Try to do a passion project based on your state/city, because recruiters can relate to it more easily.<span style={{display: 'none'}}>[cite: 7]</span></p>
              
              <p className="rg-p" style={{ marginTop: 48, fontWeight: 500 }}>Here’s a simple guide on how to do a Passion Project and land more interviews:<span style={{display: 'none'}}>[cite: 7]</span></p>

              <div className="rg-steps">
                <div className="rg-step">
                  <span className="rg-step-num">Step 01</span>
                  <div className="rg-step-body">Go to ChatGPT (or any AI tools you use), upload your CV, and clearly mention your job preferences, like the job titles you’re targeting, the location, and the industry.<span style={{display: 'none'}}>[cite: 8]</span></div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 02</span>
                  <div className="rg-step-body">
                    Once you’ve shared those details, use this prompt:<span style={{display: 'none'}}>[cite: 9]</span>
                    <blockquote>“Suggest me passion project ideas I can do to build my portfolio targeting HR, Recruitment, People & Culture, Office Administration or Administration jobs in [city/state], Australia. The projects should show I understand Australian workplace practices, HR processes, administration systems and local employment context.”<span style={{display: 'none'}}>[cite: 10]</span></blockquote>
                  </div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 03</span>
                  <div className="rg-step-body">Go through the ideas, brainstorm, pick the best one, tweak it based on your preferences, and start working on it.<span style={{display: 'none'}}>[cite: 11]</span></div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 04</span>
                  <div className="rg-step-body">As soon as you start, add it as an ongoing project.<span style={{display: 'none'}}>[cite: 12]</span> You don’t have to wait until it’s fully completed. Ongoing projects actually work better than listing them as finished ones..<span style={{display: 'none'}}>[cite: 13]</span></div>
                </div>
              </div>
            </FadeUp>
          </section>

          {/* ── 02 NETWORKING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">02 — Strategy</p>
              <h2 className="rg-title">Networking Events</h2>

              <p className="rg-p">
                A Huge Mistake migrants make is staying in their own circles after coming to Australia.{" "}
                <strong className="rg-accent">Don’t be that guy!</strong>
              </p>

              <p className="rg-p">
                Go to HR, recruitment, people &amp; culture and workplace events in your target city.
                These are useful places to meet HR professionals, recruiters, people leaders,
                office managers and hiring managers already working in the Australian market.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  Here are 2 useful places to keep checking for HR &amp; People networking events in Australia.
                </p>
              </div>

              <div className="rg-link-list">
                <a
                  href="https://www.hcamag.com/au/hr-events"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">01</span>
                    Human Resources Director — HR Events
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a
                  href="https://www.ahri.com.au/events-and-networking/calendar-of-events"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    Australian HR Institute — Events &amp; Networking
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                Tip: Don’t only look for career fairs. HR conferences, people &amp; culture events,
                employment-law sessions, recruitment events and professional-development meetups
                can be much better places to build real industry connections.
              </p>
            </FadeUp>
          </section>

          {/* ── 03 COURSES ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">03 — Strategy</p>
              <h2 className="rg-title">Online Courses &amp; Certifications</h2>

              <p className="rg-p">
                For HR &amp; Admin roles, focus on courses that strengthen practical skills in recruitment,
                onboarding, employee relations, performance management, workforce planning,
                office administration, business operations and workplace communication.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  A good combination is an <strong className="rg-accent">Australian course source</strong>
                  plus a recognised global platform such as Coursera.
                </p>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">TAFE Courses — HR &amp; Business Administration</p>

                <p className="rg-p">
                  TAFE Courses lets you compare Australian vocational qualifications from TAFEs,
                  universities and registered training organisations. Start with the area closest to your target role.
                </p>

                <a
                  href="https://www.tafecourses.com.au/courses/human-resources/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Human Resources Courses
                </a>

                <a
                  href="https://www.tafecourses.com.au/course/certificate-iv-in-human-resources/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Certificate IV in Human Resource Management Options
                </a>

                <a
                  href="https://www.tafecourses.com.au/courses/business-administration/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Business Administration Courses
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Coursera — Human Resources</p>

                <p className="rg-p">
                  Coursera has HR-focused programs covering recruitment, people management,
                  performance, employee relations and workforce planning.
                </p>

                <a
                  href="https://www.coursera.org/specializations/human-resource-management"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Human Resource Management: HR for People Managers — University of Minnesota
                </a>

                <a
                  href="https://www.coursera.org/professional-certificates/hrci-human-resources-professional"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  HRCI Human Resources Professional Certificate
                </a>

                <a
                  href="https://www.coursera.org/learn/managing-human-resources"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Preparing to Manage Human Resources — University of Minnesota
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Learning Cloud — Business &amp; Management</p>

                <p className="rg-p">
                  Learning Cloud is an Australian online education provider with Business &amp; Management
                  courses that can be useful for candidates targeting administration, office support
                  and broader business operations roles.
                </p>

                <a
                  href="https://learningcloud.com.au/business-management-courses"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Browse Business &amp; Management Courses
                </a>
              </div>

              <div className="rg-callout">
                <p className="rg-p">
                  <strong className="rg-accent">How to choose:</strong> If you are targeting HR Assistant,
                  HR Coordinator or Recruitment roles, start with Human Resources. If you are targeting
                  Office Administrator, Administration Assistant or Office Coordinator roles, start with
                  Business Administration. Then add a Coursera HR course if you want stronger people-management
                  and recruitment knowledge.
                </p>
              </div>
            </FadeUp>
          </section>

          {/* ── 04 VOLUNTEERING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">04 — Strategy</p>
              <h2 className="rg-title">Volunteering</h2>

              <p className="rg-p">
                Yes, Volunteering! Australian volunteering can help you build local experience,
                show community involvement and give recruiters something current to ask you about.
              </p>

              <p className="rg-p">
                For HR &amp; Admin candidates, look for opportunities involving administration,
                volunteer coordination, recruitment support, reception, scheduling, records,
                events, customer service or general office support.
              </p>

              <p className="rg-video-label" style={{ marginTop: 64 }}>
                Start with SEEK Volunteer
              </p>

              <VideoEmbed
                src="https://player.vimeo.com/video/1209435820?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Best Website to find Volunteering Roles in Australia if you don't have local job experience"
              />

              <div className="rg-link-list">
                <a
                  href="https://www.seekvolunteer.com.au/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">01</span>
                    SEEK Volunteer
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                Search terms such as administration, office support, HR, recruitment,
                volunteer coordinator, reception and customer service to find opportunities
                that are closer to your target roles.
              </p>
            </FadeUp>
          </section>

          {/* ── CTA ── */}
          <section className="rg-section rg-cta">
            <FadeUp>
              <Sparkles size={56} className="rg-cta-icon" />
              <p className="rg-num" style={{ marginBottom: 28 }}>Before You Go</p>
              <h2>Apply for 50 Jobs in just 10h!<br></br>Want to know how?</h2>
              <p className="rg-p rg-cta-desc">After helping 200+ Aussie Migrants to land job interviews we have created this strategy!</p>

              <form className="rg-form" onSubmit={handleLeadSubmit}>
                <div className="rg-form-row">
                  <input className="rg-input" type="text" name="name" placeholder="Name" aria-label="Name" value={leadForm.name} onChange={handleLeadChange} required />
                  <input className="rg-input" type="email" name="email" placeholder="Email" aria-label="Email" value={leadForm.email} onChange={handleLeadChange} required />
                </div>
                <button className="rg-cta-btn" type="submit" disabled={leadStatus === "submitting"}>
                  {leadStatus === "submitting" ? "Sending..." : "Get It For Free"}
                  <ChevronRight size={20} />
                </button>
                {leadStatus === "success" ? <p className="rg-p" style={{ marginTop: 8, color: "var(--gold)" }}>Thanks. We&apos;ll send the guide shortly.</p> : null}
                {leadStatus === "error" ? <p className="rg-p" style={{ marginTop: 8, color: "#ffb7b7" }}>Something went wrong. Please try again.</p> : null}
              </form>
            </FadeUp>
          </section>
        </main>
  );
}
