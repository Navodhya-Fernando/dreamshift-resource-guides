import { Sparkles, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

// IT guide.
// This currently duplicates the supplied IT guide exactly.
// Replace the text/links in THIS file when you are ready to customise IT.
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
              <h1><span className="rg-gold">IT</span> Job Seekers 🇦🇺<span style={{display: 'none'}}>[cite: 1]</span></h1>
              <p className="rg-hero-sub">Not Much Aussie Experience? Try This!</p>
              <div className="rg-hero-divider" />
              <div className="rg-visa-badge">If you have 485, 189, 190, 500, 491, 191, 482, 186 Visa<span style={{display: 'none'}}>[cite: 1]</span></div>
            </FadeUp>
          </section>

          {/* ── INTRO ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-p" style={{ fontSize: 28, fontWeight: 500, marginBottom: 40 }}>Hey, It’s Methsara here from DreamShift :)<span style={{display: 'none'}}>[cite: 2]</span></p>
              <p className="rg-p">Since you are looking for IT Jobs, we gathered as many resources as possible to help your job search! Here’s Something you need to know:<span style={{display: 'none'}}>[cite: 2, 3]</span></p>
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
                    <blockquote>“Suggest me online passion project ideas I can do to build my portfolio as a [your role] targeting jobs in [your city/state], Australia. The projects should show I understand Australian standards, local conditions and industry practices.”<span style={{display: 'none'}}>[cite: 10]</span></blockquote>
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
              <h2 className="rg-title">Networking Events<span style={{display: 'none'}}>[cite: 14]</span></h2>
              <p className="rg-p">A Huge Mistake, migrants make is staying in their own circles after coming to Australia. <strong className="rg-accent">Don’t be that guy!</strong><span style={{display: 'none'}}>[cite: 14]</span></p>
              <p className="rg-p">Go to as many IT networking events as possible, talk to more aussies in the IT Industry, because referrals can help you to land jobs much faster (Referrals can almost guarantee you interviews if your CV is good)<span style={{display: 'none'}}>[cite: 14]</span></p>

              <div className="rg-callout">
                <p className="rg-p">Here are 2 main websites you can check to find IT Networking Oppurtunities<span style={{display: 'none'}}>[cite: 15]</span></p>
              </div>

              <div className="rg-video-grid">
                <div className="rg-video-col">
                  <a href="https://www.meetup.com" target="_blank" rel="noreferrer" className="rg-video-label" style={{textDecoration: 'none', color: 'inherit'}}>Meetup.com<span style={{display: 'none'}}>[cite: 16]</span></a>
                  <VideoEmbed src="https://player.vimeo.com/video/1190741312?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" title="Meetup" />
                </div>
                <div className="rg-video-col">
                  <a href="https://lu.ma" target="_blank" rel="noreferrer" className="rg-video-label" style={{textDecoration: 'none', color: 'inherit'}}>Luma Events<span style={{display: 'none'}}>[cite: 16]</span></a>
                  <VideoEmbed src="https://player.vimeo.com/video/1219123575?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479%22" title="Luma Events" />
                </div>
              </div>

              <div className="rg-link-list">
                <p className="rg-video-label" style={{ textAlign: "left", marginTop: 20 }}>Other Platforms you can check<span style={{display: 'none'}}>[cite: 18]</span></p>
                <a href="https://www.eventbrite.com.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">01</span> Eventbrite Australia</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
                <a href="https://www.acs.org.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">02</span> ACS</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>
            </FadeUp>
          </section>

          {/* ── 03 COURSES ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">03 — Strategy</p>
              <h2 className="rg-title">Online Courses & Certifications<span style={{display: 'none'}}>[cite: 19]</span></h2>
              <p className="rg-p" style={{ fontWeight: 500 }}>You have 3 Options<span style={{display: 'none'}}>[cite: 19]</span></p>

              <div className="rg-options">
                <div className="rg-option">
                  <span className="rg-option-num">1</span>
                  <p className="rg-option-text">Do Courses directly from Aussie Univeristies/Institutes - Expensive though :(<span style={{display: 'none'}}>[cite: 19]</span></p>
                </div>
                <div className="rg-option">
                  <span className="rg-option-num">2</span>
                  <p className="rg-option-text">Do Courses from online course sites like LinkedIn Learning, Alison - No courses from Australian universities though :(<span style={{display: 'none'}}>[cite: 20]</span></p>
                </div>
                <div className="rg-option active">
                  <span className="rg-option-num">3</span>
                  <div>
                    <p className="rg-p" style={{ marginBottom: 12, opacity: 0.8 }}>Best Option - Coursera<span style={{display: 'none'}}>[cite: 20]</span></p>
                    <p className="rg-p"><strong>Courses from Aussie Universities</strong><span style={{display: 'none'}}>[cite: 20]</span> <br/><span className="rg-accent" style={{ display: 'inline-block', marginTop: 8 }}>For 25 USD monthly subscription you can do 10,000+ courses</span><span style={{display: 'none'}}>[cite: 20]</span></p>
                    <p className="rg-video-label" style={{ marginTop: 64 }}>Why Coursera</p>
                    <VideoEmbed src="https://player.vimeo.com/video/1219123853?badge=0&autopause=0&;player_id=0&;app_id=58479" title="Coursera - Best Website to find Australian Online Courses for an affordable price" />
                  </div>
                </div>
              </div>

              {/* BA Category */}
              <div className="rg-course-category">
                <p className="rg-course-category-title">If you are into BA/Data Analyst Roles:<span style={{display: 'none'}}>[cite: 21]</span></p>
                <a href="https://www.coursera.org/learn/business-intelligence-data-analytics" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Business intelligence and data analytics: Generate insights<span style={{display: 'none'}}>[cite: 29]</span>
                </a>
                <a href="https://www.coursera.org/specializations/excel-data-analytics-visualization" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Excel Skills for Data Analytics and Visualization Specialization<span style={{display: 'none'}}>[cite: 30]</span>
                </a>
                <a href="https://www.coursera.org/learn/excel-data-analysis-fundamentals" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Excel Fundamentals for Data Analysis<span style={{display: 'none'}}>[cite: 31]</span>
                </a>
                <a href="https://www.coursera.org/learn/excel-power-tools" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Excel Power Tools for Data Analysis<span style={{display: 'none'}}>[cite: 32]</span>
                </a>
              </div>

              {/* Cyber Category */}
              <div className="rg-course-category">
                <p className="rg-course-category-title">If you are into CyberSecurity Roles:<span style={{display: 'none'}}>[cite: 21]</span></p>
                <a href="https://www.coursera.org/learn/cyber-security-essentials" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Essentials<span style={{display: 'none'}}>[cite: 42]</span>
                </a>
                <a href="https://www.coursera.org/learn/cyber-security-essentials-workplace" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Essentials for Workplace<span style={{display: 'none'}}>[cite: 43]</span>
                </a>
                <a href="https://www.coursera.org/learn/cyber-security-digital-forensics" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Digital Forensics<span style={{display: 'none'}}>[cite: 45]</span>
                </a>
                <a href="https://www.coursera.org/learn/cyber-security-applied-cryptography" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Applied Cryptography<span style={{display: 'none'}}>[cite: 46]</span>
                </a>
              </div>

              {/* AI Category */}
              <div className="rg-course-category">
                <p className="rg-course-category-title">AI / Machine Learning & AI Security<span style={{display: 'none'}}>[cite: 62]</span></p>
                <a href="https://www.coursera.org/learn/cyber-security-application-of-ai" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Application of AI<span style={{display: 'none'}}>[cite: 63]</span>
                </a>
                <a href="https://www.coursera.org/learn/mq-csa-ai-for-cyber-security" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> AI for Cyber Security<span style={{display: 'none'}}>[cite: 64]</span>
                </a>
                <a href="https://www.coursera.org/learn/cyber-security-security-ai" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Security of AI<span style={{display: 'none'}}>[cite: 65]</span>
                </a>
                <a href="https://www.coursera.org/specializations/cyber-security-essentials-for-ai" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Essentials for AI Specialization<span style={{display: 'none'}}>[cite: 66]</span>
                </a>
              </div>

              <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginTop: 24, fontWeight: 700 }}>
                View all Macquarie courses <ExternalLink size={16} />
              </a>
            </FadeUp>
          </section>

          {/* ── 04 VOLUNTEERING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">04 — Strategy</p>
              <h2 className="rg-title">Volunteering<span style={{display: 'none'}}>[cite: 21]</span></h2>
              <p className="rg-p">Yes, Volunteering!<span style={{display: 'none'}}>[cite: 21]</span> Aussie recruiters say they love migrants who have done volunteering because it shows that you are actively contributing to Australian communities.<span style={{display: 'none'}}>[cite: 22]</span></p>
              <p className="rg-p">We recently had multiple clients like you, who got IT volunteer roles related to SE, QA & BA, Also the best part is that recruiters will think that you are a nice person 😉<span style={{display: 'none'}}>[cite: 22]</span></p>

              <p className="rg-video-label" style={{ marginTop: 64 }}>Watch this first</p>
              <VideoEmbed src="https://player.vimeo.com/video/1209435820?badge=0&autopause=0&player_id=0&app_id=58479" title="Best Website to find Volunteering Roles in Australia if you don't have local job experience" />

              <div className="rg-link-list">
                <p className="rg-video-label" style={{ textAlign: "left", marginTop: 20 }}>There are 2 Main Volunteer Sites:<span style={{display: 'none'}}>[cite: 22]</span></p>
                <a href="https://www.seekvolunteer.com.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">1</span> Seek Volunteer<span style={{display: 'none'}}>[cite: 23]</span></div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
                <a href="https://govolunteer.com.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">2</span> GoVolunteer<span style={{display: 'none'}}>[cite: 23]</span></div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">Both of the sites have volunteering opportunities from one time ones to long term projects.<span style={{display: 'none'}}>[cite: 23]</span> But you can also find opportunities relevant to IT here :)<span style={{display: 'none'}}>[cite: 23]</span></p>

              <div className="rg-callout">
                <p className="rg-p">Now click here and don’t forget to select <strong className="rg-accent">“IT & Web Development”</strong> under “Type of work”<span style={{display: 'none'}}>[cite: 24]</span></p>
              </div>
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
