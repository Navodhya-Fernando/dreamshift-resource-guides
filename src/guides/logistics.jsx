import { Sparkles, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

// Logistics resource guide.
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
              <h1><span className="rg-gold">Logistics &amp; Supply Chain</span> Job Seekers 🇦🇺<span style={{display: 'none'}}>[cite: 1]</span></h1>
              <p className="rg-hero-sub">Not Much Aussie Experience? Try This!</p>
              <div className="rg-hero-divider" />
              <div className="rg-visa-badge">If you have 485, 189, 190, 500, 491, 191, 482, 186 Visa<span style={{display: 'none'}}>[cite: 1]</span></div>
            </FadeUp>
          </section>

          {/* ── INTRO ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-p" style={{ fontSize: 28, fontWeight: 500, marginBottom: 40 }}>Hey, It’s Methsara here from DreamShift :)<span style={{display: 'none'}}>[cite: 2]</span></p>
              <p className="rg-p">Since you are looking for Logistics Jobs, we gathered as many resources as possible to help your job search! Here’s Something you need to know:<span style={{display: 'none'}}>[cite: 2, 3]</span></p>
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
                    <blockquote>“Suggest me passion project ideas I can do to build my portfolio targeting Logistics, Supply Chain, Procurement or Operations jobs in [city/state], Australia. The projects should show I understand Australian industry practices, local conditions and relevant systems.”<span style={{display: 'none'}}>[cite: 10]</span></blockquote>
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
                Go to supply chain, logistics, freight and trade events in your target city.
                These are good places to meet people working in procurement, warehousing,
                transport, distribution, importing, exporting and operations.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  Here are 3 useful places to keep checking for Supply Chain &amp; Logistics events in Australia.
                </p>
              </div>

              <div className="rg-link-list">
                <a
                  href="https://info.sclaa.com.au/events"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">01</span>
                    Australasian Supply Chain &amp; Logistics Association
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a
                  href="https://www.ftalliance.com.au/upcoming-events"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    Freight &amp; Trade Alliance
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a
                  href="https://austlogistics.com.au/upcoming-events/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">03</span>
                    Australian Logistics Council
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                Tip: Look beyond job fairs. Industry breakfasts, freight conferences,
                supply chain webinars, site tours and trade events can give you much better
                access to people who already work in the sector.
              </p>
            </FadeUp>
          </section>

          {/* ── 03 COURSES ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">03 — Strategy</p>
              <h2 className="rg-title">Online Courses &amp; Certifications</h2>

              <p className="rg-p">
                For Logistics, Supply Chain and Procurement roles, focus on courses that build
                practical knowledge in procurement, contract management, logistics, inventory,
                warehousing, sourcing and supply chain operations.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  A good approach is to combine an <strong className="rg-accent">Australian provider</strong>
                  with a recognised global learning platform such as Coursera.
                </p>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Australian Online Courses</p>

                <p className="rg-p">
                  If you are targeting Procurement, Contracts or Supply Chain roles,
                  this is a locally relevant option to consider.
                </p>

                <a
                  href="https://australianonlinecourses.com.au/courses/certificate-of-procurement-and-contract-management/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Certificate of Procurement and Contract Management
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Coursera — Supply Chain &amp; Logistics</p>

                <p className="rg-p">
                  Coursera has several strong supply-chain options covering logistics,
                  operations, planning, sourcing, inventory and strategy.
                </p>

                <a
                  href="https://www.coursera.org/specializations/supply-chain-management"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Supply Chain Management Specialization — Rutgers University
                </a>

                <a
                  href="https://www.coursera.org/learn/supply-chain-logistics"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Supply Chain Logistics — Rutgers University
                </a>

                <a
                  href="https://www.coursera.org/learn/operations"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Supply Chain Operations — Rutgers University
                </a>

                <a
                  href="https://www.coursera.org/specializations/supply-chain-analytics"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-course-item"
                >
                  <ArrowRight size={20} className="rg-course-icon" />
                  Supply Chain Analytics Specialization — Rutgers University
                </a>
              </div>

              <div className="rg-callout">
                <p className="rg-p">
                  <strong className="rg-accent">How to choose:</strong> If you want Procurement or Contracts,
                  start with Procurement &amp; Contract Management. If you want Logistics, Warehouse or Operations
                  roles, start with Supply Chain Logistics or Supply Chain Operations. If you are targeting
                  analyst-style supply chain roles, add Supply Chain Analytics.
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
                meet people, and give recruiters something current to ask you about.
              </p>

              <p className="rg-p">
                For Logistics candidates, look for opportunities involving stock handling,
                warehouse support, deliveries, donation sorting, transport coordination,
                event logistics or general operations.
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
                  Logistics &amp; Community Volunteering Options
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
                  href="https://www.lifelinesouthcoast.org.au/volunteer/logisticsteamvolunteer/"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    Lifeline South Coast — Logistics Team Volunteer
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a
                  href="https://makeadifference.volunteering.nsw.gov.au/volunteering"
                  target="_blank"
                  rel="noreferrer"
                  className="rg-link-item"
                >
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">03</span>
                    NSW Government — Make a Difference Volunteering
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                Search using terms such as logistics, warehouse, transport, stock,
                distribution, operations, stores and delivery to find opportunities that
                are closer to your target roles.
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
