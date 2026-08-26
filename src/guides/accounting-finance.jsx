import { Sparkles, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

// Accounting & Finance resource guide.
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
              <h1><span className="rg-gold">Accounting & Finance</span> Job Seekers 🇦🇺<span style={{display: 'none'}}>[cite: 1]</span></h1>
              <p className="rg-hero-sub">Not Much Aussie Experience? Try This!</p>
              <div className="rg-hero-divider" />
              <div className="rg-visa-badge">If you have 485, 189, 190, 500, 491, 191, 482, 186 Visa<span style={{display: 'none'}}>[cite: 1]</span></div>
            </FadeUp>
          </section>

          {/* ── INTRO ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-p" style={{ fontSize: 28, fontWeight: 500, marginBottom: 40 }}>Hey, It’s Methsara here from DreamShift :)<span style={{display: 'none'}}>[cite: 2]</span></p>
              <p className="rg-p">Since you are looking for Accounting & Finance Jobs, we gathered as many resources as possible to help your job search! Here’s Something you need to know:<span style={{display: 'none'}}>[cite: 2, 3]</span></p>
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
                    <blockquote>“Suggest me passion project ideas I can do to build my portfolio targeting Accounting, Finance, Banking or Financial Analyst jobs in [city/state], Australia. The projects should show I understand Australian financial practices, local regulations, reporting requirements and industry tools.”<span style={{display: 'none'}}>[cite: 10]</span></blockquote>
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
                Go to accounting, banking, finance and financial-services events in your target city.
                These are good places to meet accountants, finance professionals, advisers, banking
                professionals, hiring managers and people already working in the Australian market.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  Here are 3 useful places to keep checking for Accounting &amp; Finance networking opportunities in Australia.
                </p>
              </div>

              <div className="rg-link-list">
                <a
                  href="https://www.ausbanking.org.au/events/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">01</span>
                    Australian Banking Association
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a
                  href="https://www.accountingtimes.com.au/events"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    Accounting Times
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a
                  href="https://faaa.au/events/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">03</span>
                    Financial Advice Association Australia
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                Tip: Don’t only look for job fairs. Industry breakfasts, technical sessions,
                professional-development events, banking forums and finance conferences can be
                better places to build genuine professional connections.
              </p>
            </FadeUp>
          </section>

          {/* ── 03 COURSES ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">03 — Strategy</p>
              <h2 className="rg-title">Online Courses &amp; Certifications</h2>

              <p className="rg-p">
                For Accounting &amp; Finance roles, pick courses that strengthen the exact area you are targeting:
                accounting, bookkeeping, financial reporting, finance, banking, financial analysis,
                payroll, mortgage broking or financial markets.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  A good approach is to combine an <strong className="rg-accent">Australian course source</strong>
                  with a recognised global platform such as Coursera.
                </p>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Training.com.au — Australian Finance &amp; Accounting Courses</p>

                <p className="rg-p">
                  Training.com.au lets you compare Australian courses across accounting, bookkeeping,
                  finance and related financial-services areas.
                </p>

                <a
                  href="https://www.training.com.au/finance-courses/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Browse Finance Courses
                </a>

                <a
                  href="https://www.training.com.au/accounting-courses/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Browse Accounting Courses
                </a>

                <a
                  href="https://www.training.com.au/course/certificate-iv-in-accounting/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Certificate IV in Accounting &amp; Bookkeeping Options
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">TAFE Courses — Australian Providers</p>

                <p className="rg-p">
                  TAFE Courses is useful for comparing Australian accounting and finance qualifications
                  from different education providers, including certificate, diploma and higher-level options.
                </p>

                <a
                  href="https://www.tafecourses.com.au/courses/accounting/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Accounting Courses
                </a>

                <a
                  href="https://www.tafecourses.com.au/courses/finance/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Finance Courses
                </a>

                <a
                  href="https://www.tafecourses.com.au/courses/finance/certificate-iv/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Certificate IV Finance Options
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Coursera — Finance &amp; Accounting</p>

                <p className="rg-p">
                  Coursera is useful when you want a university-backed course in financial accounting,
                  financial analysis, finance or financial markets.
                </p>

                <a
                  href="https://www.coursera.org/specializations/finance-accounting"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Introduction to Finance and Accounting — University of Pennsylvania
                </a>

                <a
                  href="https://www.coursera.org/learn/accounting-analytics"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Accounting Analytics — University of Pennsylvania
                </a>

                <a
                  href="https://www.coursera.org/learn/financial-markets-global"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Financial Markets — Yale University
                </a>

                <a
                  href="https://www.coursera.org/browse/business/finance"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Browse More Finance Courses on Coursera
                </a>
              </div>

              <div className="rg-callout">
                <p className="rg-p">
                  <strong className="rg-accent">How to choose:</strong> If you are targeting Accounts,
                  Assistant Accountant or Bookkeeping roles, start with Australian accounting qualifications.
                  If you want Financial Analyst or corporate-finance roles, add finance and accounting analytics.
                  If you are targeting banking, investments or broader finance roles, Financial Markets is a useful option.
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
                show community involvement and give recruiters something current to ask you about.
              </p>

              <p className="rg-p">
                For Accounting &amp; Finance candidates, also look for opportunities where you can help
                with budgeting, bookkeeping, administration, fundraising, treasurer duties, reporting,
                financial literacy or committee work.
              </p>

              <p className="rg-video-label" style={{ marginTop: 64 }}>
                Start with SEEK Volunteer
              </p>

              <VideoEmbed
                src="https://player.vimeo.com/video/1209435820?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Best Website to find Volunteering Roles in Australia if you don't have local job experience"
              />

              <div className="rg-link-list">
                <p
                  className="rg-video-label"
                  style={{ textAlign: "left", marginTop: 20 }}
                >
                  Finance, Accounting &amp; Community Volunteering Options
                </p>

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
                  href="https://cfas.org.au/members/volunteering/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    CFA Society Australia — Volunteering
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                On SEEK Volunteer, search terms such as accounting, finance, bookkeeper, treasurer,
                payroll, budgeting and administration to find opportunities closer to your target roles.
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
