import { Sparkles, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

// Science & Tech resource guide.
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
              <h1><span className="rg-gold">Science & Tech</span> Job Seekers 🇦🇺<span style={{display: 'none'}}>[cite: 1]</span></h1>
              <p className="rg-hero-sub">Not Much Aussie Experience? Try This!</p>
              <div className="rg-hero-divider" />
              <div className="rg-visa-badge">If you have 485, 189, 190, 500, 491, 191, 482, 186 Visa<span style={{display: 'none'}}>[cite: 1]</span></div>
            </FadeUp>
          </section>

          {/* ── INTRO ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-p" style={{ fontSize: 28, fontWeight: 500, marginBottom: 40 }}>Hey, It’s Methsara here from DreamShift :)<span style={{display: 'none'}}>[cite: 2]</span></p>
              <p className="rg-p">Since you are looking for Science & Tech Jobs, we gathered as many resources as possible to help your job search! Here’s Something you need to know:<span style={{display: 'none'}}>[cite: 2, 3]</span></p>
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
                    <blockquote>“Suggest me passion project ideas I can do to build my portfolio targeting Science, Research, Laboratory, R&D or Technical jobs in [city/state], Australia. The projects should show I understand Australian industry practices, local conditions, research methods and the technical requirements of my field.”<span style={{display: 'none'}}>[cite: 10]</span></blockquote>
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
                Go to science, research, laboratory, engineering, technology and innovation events
                in your target city. These are useful places to meet researchers, scientists,
                technical specialists, industry professionals and hiring managers already working
                in Australia.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  Here are 3 useful places to keep checking for Science &amp; Tech networking opportunities.
                </p>
              </div>

              <div className="rg-link-list">
                <a
                  href="https://www.meetup.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">01</span>
                    Meetup
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a
                  href="https://www.eventbrite.com.au/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    Eventbrite Australia
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a
                  href="https://www.allconferencealert.com/australia/electrical"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">03</span>
                    All Conference Alert
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                Tip: Search for terms related to your exact field — laboratory science,
                biotechnology, environmental science, chemistry, research, engineering,
                innovation or technical conferences — instead of only searching for “job fairs”.
              </p>
            </FadeUp>
          </section>

          {/* ── 03 COURSES ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">03 — Strategy</p>
              <h2 className="rg-title">Online Courses &amp; Certifications</h2>

              <p className="rg-p">
                For Science &amp; Tech roles, avoid collecting random certificates.
                Pick courses that strengthen your scientific knowledge, research methodology,
                experimentation, technical communication or the specialist area you want to work in.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  A useful combination is an <strong className="rg-accent">Australian course provider</strong>
                  plus a recognised global learning platform such as Coursera.
                </p>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Learning Cloud — Science Courses</p>

                <p className="rg-p">
                  Learning Cloud is an Australian online education provider with science-focused
                  study options. Browse the catalogue and choose a course that matches your
                  target discipline rather than taking a generic course just for the certificate.
                </p>

                <a
                  href="https://learningcloud.com.au/science-courses"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Browse Learning Cloud Science Courses
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Coursera — Research Methods</p>

                <p className="rg-p">
                  Research-method skills are useful across many science and technical roles,
                  particularly if you are targeting research assistant, laboratory, university,
                  R&amp;D or evidence-based technical positions.
                </p>

                <a
                  href="https://www.coursera.org/learn/research-methods"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Understanding Research Methods — University of London
                </a>

                <a
                  href="https://www.coursera.org/browse/physical-science-and-engineering/research-methods"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Browse Research Methods Courses
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Coursera — Life &amp; Basic Sciences</p>

                <p className="rg-p">
                  If your background is in biology, biotechnology, medical science,
                  genetics, environmental science or another life-science area,
                  browse Coursera&apos;s science catalogue for discipline-specific learning.
                </p>

                <a
                  href="https://www.coursera.org/browse/health/basic-science"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Browse Life &amp; Basic Science Courses
                </a>
              </div>

              <div className="rg-callout">
                <p className="rg-p">
                  <strong className="rg-accent">How to choose:</strong> If you are targeting research
                  or R&amp;D roles, start with research methods. If you are targeting laboratory
                  or specialist science positions, choose a course directly related to your discipline.
                  The goal is to make your CV look more relevant to the exact role — not simply more crowded.
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
                Yes, Volunteering! Australian volunteering can help you build local connections,
                demonstrate community involvement and give recruiters something current to ask you about.
              </p>

              <p className="rg-p">
                For Science &amp; Tech candidates, look for opportunities connected to engineering,
                STEM, sustainability, environment, community projects, research support,
                education or technical volunteering where possible.
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

                <a
                  href="https://ewb.org.au/volunteer/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    Engineers Without Borders Australia
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                On SEEK Volunteer, try search terms such as science, STEM, environment,
                sustainability, research, laboratory, engineering and education to find
                opportunities closer to your background.
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
