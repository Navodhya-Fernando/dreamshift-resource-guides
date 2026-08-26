import { Sparkles, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

export default function GuideContent({
  FadeUp,
  VideoEmbed,
  leadForm,
  leadStatus,
  handleLeadChange,
  handleLeadSubmit,
}) {
  const VimeoEmbed = ({ videoId, title }) => {
    const src = `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

    return <VideoEmbed src={src} title={title} />;
  };

  const YouTubeShortEmbed = ({ videoId, title }) => {
    const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

    return <VideoEmbed src={src} title={title} />;
  };

  return (
<main className="rg-main">
          <section className="rg-hero rg-section">
            <FadeUp>
              <h1><span className="rg-gold">Construction &amp; Civil</span> Job Seekers 🇦🇺</h1>
              <p className="rg-hero-sub">Not Much Aussie Experience? Try This!</p>
              <div className="rg-visa-badge">If you have 485, 189, 190, 500, 491, 191, 482, 186 Visa</div>
            </FadeUp>
          </section>

          <section className="rg-section">
            <FadeUp>
              <p className="rg-p" style={{ fontSize: 28, fontWeight: 500, marginBottom: 40 }}>Hey, It&apos;s Methsara here from DreamShift :)</p>
              <p className="rg-p">Since you are looking for Construction &amp; Civil Engineering Jobs, we gathered as many resources as possible to help your job search! Here&apos;s Something you need to know:</p>
              <p className="rg-p">Let&apos;s think you are applying for 100 Jobs on LinkedIn &amp; Seek: Unfortunately, around <span className="rg-accent-red">65%</span> of the jobs you apply will get rejected.</p>

              <div className="rg-callout">
                <p className="rg-p">That is the reality of Australian Job Market for Migrants! But don&apos;t worry, you still have around <strong className="rg-accent">35 jobs</strong> you can apply for and land interviews! For these 35 Jobs, you will be competing with other Migrants like you.</p>
              </div>

              <p className="rg-p" style={{ fontWeight: 500 }}>If you can do the following things, you can increase your chances of landing Interviews!</p>
            </FadeUp>
          </section>

          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">01 — Strategy</p>
              <h2 className="rg-title">Passion Projects</h2>

              <p className="rg-video-label">Watch this first</p>
              <VimeoEmbed videoId="1190465807" title="Post 41 - Passion Projects" />

              <p className="rg-p" style={{ color: "var(--gold)", fontStyle: "italic", fontSize: 16 }}>*Tip: Try to do a passion project based on your target city or state, because recruiters can relate to it more easily.</p>

              <div className="rg-callout">
                <p className="rg-p">A passion project looks different depending on your role. Here are some examples:</p>
                <p className="rg-p" style={{ marginBottom: 0 }}>Civil / Design / Structural Engineer - Create a small design portfolio using AutoCAD, Revit or Civil 3D based on an Australian location.<br />Quantity Surveyor / Estimator - Do a mock cost estimate or tender for a real local project you find online with Australian rates.<br />Project Manager - Create a mock project schedule and risk register for a real infrastructure project in your target city.<br />Contracts Administrator / Drafter - Prepare a set of contract documents or drawings for a fictional small project using Australian standards.</p>
              </div>

              <p className="rg-p" style={{ marginTop: 48, fontWeight: 500 }}>Here&apos;s a simple guide on how to get started:</p>

              <div className="rg-steps">
                <div className="rg-step">
                  <span className="rg-step-num">Step 01</span>
                  <div className="rg-step-body">Go to ChatGPT (or any AI tools you use), upload your CV, and clearly mention your job preferences, like the job titles you&apos;re targeting, the location, and the industry.</div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 02</span>
                  <div className="rg-step-body">
                    Once you&apos;ve shared those details, use this prompt:
                    <blockquote>“Suggest me online passion project ideas I can do to build my portfolio as a [your role] targeting jobs in [your city/state], Australia. The projects should show I understand Australian standards, local conditions and industry practices.”</blockquote>
                  </div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 03</span>
                  <div className="rg-step-body">Go through the ideas, brainstorm, pick the best one, tweak it based on your preferences, and start working on it.</div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 04</span>
                  <div className="rg-step-body">As soon as you start, add it as an ongoing project. You don&apos;t have to wait until it&apos;s fully completed. Ongoing projects actually work better than listing them as finished ones.</div>
                </div>
              </div>
            </FadeUp>
          </section>

          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">02 — Strategy</p>
              <h2 className="rg-title">Online Courses &amp; Certifications</h2>
              <p className="rg-p" style={{ fontWeight: 500 }}>You have 3 Options</p>

              <div className="rg-options">
                <div className="rg-option">
                  <span className="rg-option-num">1</span>
                  <p className="rg-option-text"><a href="https://www.tafensw.edu.au" target="_blank" rel="noreferrer">TAFE NSW</a> - Practical, industry-focused courses from a recognised Australian provider.</p>
                </div>
                <div className="rg-option">
                  <span className="rg-option-num">2</span>
                  <p className="rg-option-text"><a href="https://www.tafecourses.com.au" target="_blank" rel="noreferrer">TAFE Courses</a> - Compare TAFE courses and find options available across Australia.</p>
                </div>
                <div className="rg-option active">
                  <span className="rg-option-num">3</span>
                  <div>
                    <p className="rg-p" style={{ marginBottom: 12, opacity: 0.8 }}>Best Option - Coursera</p>
                    <p className="rg-p"><strong>Courses from universities</strong><br /><span className="rg-accent" style={{ display: 'inline-block', marginTop: 8 }}>For 25 USD monthly subscription you can do 10,000+ courses</span></p>
                  </div>
                </div>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">If you are into Civil / Design Engineer Roles:</p>
                <a href="https://www.coursera.org/search?query=Construction%20Project%20Management%20Columbia%20University" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Construction Project Management</a>
                <a href="https://www.coursera.org/search?query=Construction%20Scheduling%20Columbia%20University" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Construction Scheduling</a>
                <a href="https://www.coursera.org/search?query=BIM%20Fundamentals%20for%20Engineers" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> BIM Fundamentals for Engineers</a>
                <a href="https://www.autodesk.com/education/home" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Autodesk Civil 3D Fundamentals</a>
                <a href="https://www.autodesk.com/education/home" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Revit Fundamentals</a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">If you are into Project Management Roles:</p>
                <a href="https://www.coursera.org/search?query=Construction%20Project%20Management%20Columbia%20University" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Construction Project Management</a>
                <a href="https://www.coursera.org/search?query=Construction%20Scheduling%20Columbia%20University" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Construction Scheduling</a>
                <a href="https://www.coursera.org/search?query=Construction%20Finance%20Columbia%20University" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Construction Finance</a>
                <a href="https://www.coursera.org/search?query=Project%20Management%20Principles%20and%20Practices" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Project Management Principles and Practices</a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">If you are into Quantity Surveying / Estimating:</p>
                <a href="https://www.coursera.org/search?query=Construction%20Cost%20Estimating%20and%20Cost%20Control" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Construction Cost Estimating and Cost Control</a>
                <a href="https://www.coursera.org/search?query=Construction%20Finance%20Columbia%20University" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Construction Finance</a>
                <a href="https://www.coursera.org/search?query=Construction%20Management%20Fundamentals" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Construction Management Fundamentals</a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">If you are into BIM / Drafting:</p>
                <a href="https://www.autodesk.com/education/home" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> BIM Fundamentals (Autodesk - free)</a>
                <a href="https://www.autodesk.com/education/home" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Revit Architecture Fundamentals (free student access)</a>
                <a href="https://www.autodesk.com/education/home" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Navisworks Fundamentals (free student access)</a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">For in-person construction training:</p>
                <a href="https://www.buildersacademy.edu.au" target="_blank" rel="noreferrer" className="rg-course-item"><ArrowRight size={20} className="rg-course-icon" /> Builders Academy Australia (not online)</a>
              </div>

              <a href="https://www.coursera.org/search?query=Columbia%20University%20Construction" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginTop: 24, fontWeight: 700 }}>
                View all Columbia University construction courses <ExternalLink size={16} />
              </a>
              <br />
              <a href="https://www.autodesk.com/education/home" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginTop: 16, fontWeight: 700 }}>
                Get free Autodesk student access <ExternalLink size={16} />
              </a>
              <br />
              <a href="https://www.procore.com/en-au/certification" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginTop: 16, fontWeight: 700 }}>
                Get Procore certified <ExternalLink size={16} />
              </a>
              <br />
              <a href="https://www.engineersaustralia.org.au/migrants" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginTop: 16, fontWeight: 700 }}>
                Engineers Australia Skills Assessment <ExternalLink size={16} />
              </a>
            </FadeUp>
          </section>

          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">03 — Strategy</p>
              <h2 className="rg-title">Volunteering</h2>
              <p className="rg-p">Yes, Volunteering! Aussie recruiters say they love migrants who have done volunteering because it shows that you are actively contributing to Australian communities.</p>
              <p className="rg-p">Here&apos;s something good to know - it doesn&apos;t have to be construction volunteering specifically. Any community contribution counts. Recruiters care that you are showing up, getting involved, and connecting with Australian communities. That&apos;s what matters.</p>
              <p className="rg-p">We recently had multiple clients like you who got volunteer roles and landed jobs faster because of it. Also the best part is that recruiters will think that you are a nice person 🙂</p>

              <p className="rg-video-label" style={{ marginTop: 64 }}>Watch this first</p>
              <VimeoEmbed videoId="1209435820" title="Best Website to find Volunteering Roles in Australia if you don't have local job experience" />

              <div className="rg-link-list">
                <p className="rg-video-label" style={{ textAlign: "left", marginTop: 20 }}>There are 3 main volunteer options:</p>
                <a href="https://volunteer.habitat.org.au/" target="_blank" rel="noreferrer" className="rg-link-item"><div className="rg-link-item-left"><span className="rg-link-item-num">01</span> Habitat for Humanity Australia</div><ExternalLink size={20} opacity={0.3} /></a>
                <a href="https://www.seekvolunteer.com.au/" target="_blank" rel="noreferrer" className="rg-link-item"><div className="rg-link-item-left"><span className="rg-link-item-num">02</span> Seek Volunteer</div><ExternalLink size={20} opacity={0.3} /></a>
                <a href="https://govolunteer.com.au/" target="_blank" rel="noreferrer" className="rg-link-item"><div className="rg-link-item-left"><span className="rg-link-item-num">03</span> GoVolunteer</div><ExternalLink size={20} opacity={0.3} /></a>
              </div>

              <p className="rg-p">Both of the sites have volunteering opportunities from one time ones to long term projects. But you can also find opportunities relevant to construction here :)</p>
            </FadeUp>
          </section>

          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">04 — Strategy</p>
              <h2 className="rg-title">Networking Events</h2>
              <p className="rg-p">A Huge Mistake, migrants make is staying in their own circles after coming to Australia. <strong className="rg-accent">Don&apos;t be that guy!</strong></p>
              <p className="rg-p">Go to as many Construction &amp; Civil networking events as possible, talk to more Aussies in the industry, because referrals can help you land jobs much faster (Referrals can almost guarantee you interviews if your CV is good)</p>

              <div className="rg-callout">
                <p className="rg-p">Here are the main ways to find Construction &amp; Civil Networking Opportunities in Australia</p>
              </div>

              <FadeUp>
                  <a href="https://vartas.com.au/building-construction-events/" target="_blank" rel="noreferrer" className="rg-video-label" style={{ textDecoration: 'none', color: 'inherit' }}>Vartas</a>
                  <div className="rg-video-wrap">
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7316298394069618688?compact=1" height="399" width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
                  </div>
              </FadeUp>

              <div className="rg-link-list">
                <p className="rg-video-label" style={{ textAlign: "left", marginTop: 20 }}>Other places to keep an eye on</p>
                <a href="https://ccfwa.com.au/events" target="_blank" rel="noreferrer" className="rg-link-item"><div className="rg-link-item-left"><span className="rg-link-item-num">01</span> Civil Contractors Federation - Western Australia</div><ExternalLink size={20} opacity={0.3} /></a>
                <a href="https://www.constructors.com.au/events/" target="_blank" rel="noreferrer" className="rg-link-item"><div className="rg-link-item-left"><span className="rg-link-item-num">02</span> Australan Constructors Association</div><ExternalLink size={20} opacity={0.3} /></a>
                <a href="https://www.tradeearthmovers.com.au/earthmoving-events-calendar/" target="_blank" rel="noreferrer" className="rg-link-item"><div className="rg-link-item-left"><span className="rg-link-item-num">03</span> Trade Earthmovers</div><ExternalLink size={20} opacity={0.3} /></a>
              </div>

              <p className="rg-p">Look for events, local chapters, breakfast sessions, trade expos, CPD nights, and industry meetups in your target city.</p>
            </FadeUp>
          </section>

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